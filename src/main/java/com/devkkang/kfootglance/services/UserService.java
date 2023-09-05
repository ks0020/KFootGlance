package com.devkkang.kfootglance.services;

import com.devkkang.kfootglance.entities.UserEntity;
import com.devkkang.kfootglance.entities.UserRegisterContactCodeEntity;
import com.devkkang.kfootglance.enums.UserCheckIdResult;
import com.devkkang.kfootglance.enums.UserRegisterResult;
import com.devkkang.kfootglance.mappers.UserMapper;
import com.devkkang.kfootglance.utils.CryptoUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.thymeleaf.spring5.SpringTemplateEngine;

import javax.mail.MessagingException;

@Service
public class UserService {
    private final UserMapper userMapper;
    private final JavaMailSender javaMailSender;
    private final SpringTemplateEngine springTemplateEngine;

    @Autowired
    public UserService(UserMapper userMapper, JavaMailSender javaMailSender, SpringTemplateEngine springTemplateEngine) {
        this.userMapper = userMapper;
        this.javaMailSender = javaMailSender;
        this.springTemplateEngine = springTemplateEngine;
    }

    public UserRegisterResult register(UserEntity user,
                                       UserRegisterContactCodeEntity registerContactCode) throws MessagingException {

        // id 중복 확인
        if (this.userMapper.selectUserById(user.getUserId()) != null) {
            return UserRegisterResult.FAILURE_DUPLICATE_ID; // 중복된 id
        }

        // 이메일 중복 확인
        if (this.userMapper.selectUserByEmail(user.getEmail()) != null) {
            return UserRegisterResult.FAILURE_DUPLICATE_EMAIL; // 중복된 이메일
        }

        // 연락처 중복 확인
        if (this.userMapper.selectUserByContact(user.getContact()) != null) {
            return UserRegisterResult.FAILURE_DUPLICATE_CONTACT; // 중복된 연락처
        }

        // 닉네임 중복 확인
        if (this.userMapper.selectUserByNickname(user.getNickname()) != null) {
            return UserRegisterResult.FAILURE_DUPLICATE_NICKNAME; // 중복된 닉네임
        }

        // 등록된 연락처 코드 확인
        registerContactCode = this.userMapper.selectRegisterContactCodeByContactCodeSalt(registerContactCode);
        if (registerContactCode == null || !registerContactCode.isExpired()) {
            return UserRegisterResult.FAILURE; // 연락처 코드 확인 실패
        }

        // 비밀번호 해싱
        user.setPassword((CryptoUtil.hashSha512(user.getPassword())));
        user.setStatus(1);
        // 사용자의 상태를 1로 설정하며, 사용자의 관리자 권한을 개인으로 설정하는 부분
        // 사용자 등록 시 비밀번호를 보안적으로 처리하고, 이메일 인증이 완료되기 전까지 사용자의 상태를 대기 상태로 설정하는 역할

        // 사용자 등록
        return this.userMapper.insertUser(user) > 0
                ? UserRegisterResult.SUCCESS
                : UserRegisterResult.FAILURE;
    }

    // 회원가입시 아이디 중복확인
    public UserCheckIdResult userCheckId(String userId){
        return this.userMapper.selectUserById(userId) == null
                ? UserCheckIdResult.OKAY // 중복되지 않은 아이디인 경우 성공
                : UserCheckIdResult.DUPLICATE; // 이미 사용 중인 아이디인 경우 중복
    }
}
