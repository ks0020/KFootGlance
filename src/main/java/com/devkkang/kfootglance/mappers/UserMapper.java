package com.devkkang.kfootglance.mappers;

import com.devkkang.kfootglance.entities.UserEntity;
import com.devkkang.kfootglance.entities.UserRegisterContactCodeEntity;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
    public interface UserMapper {
        //     유저 삽입
        int insertUser(UserEntity user);

        // 아이디 조회
        UserEntity selectUserById(@Param(value = "userId") String userId);

        // 이메일 조회
        UserEntity selectUserByEmail(@Param(value = "email") String email);

        // 연락처 조회
        UserEntity selectUserByContact(@Param(value = "contact") String contact);

        // 닉네임 조회
        UserEntity selectUserByNickname(@Param(value = "nickname") String nickname);

        // 연락처, 코드, 솔트로 회원가입용 연락처 코드 조회
        UserRegisterContactCodeEntity selectRegisterContactCodeByContactCodeSalt(UserRegisterContactCodeEntity registerContactCode);
}
