package com.devkkang.kfootglance.controllers;

import com.devkkang.kfootglance.entities.UserEntity;
import com.devkkang.kfootglance.entities.UserRegisterContactCodeEntity;
import com.devkkang.kfootglance.enums.UserRegisterResult;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.mail.MessagingException;

@Controller
@RequestMapping(value = "/user")
public class UserController {

//    private final UserService userService;
//    @Autowired
//    public UserController(UserService userService) {
//        this.userService = userService;
//    }

//    login, recover, reset, register modelAndView
    @RequestMapping(value = "/login",
            method = RequestMethod.GET,
            produces = MediaType.TEXT_HTML_VALUE)
    public ModelAndView getIndex() {
        ModelAndView modelAndView = new ModelAndView("user/login");
        return modelAndView;
    }
    @RequestMapping(value = "/recover",
            method = RequestMethod.GET,
            produces = MediaType.TEXT_HTML_VALUE)
    public ModelAndView getRecover() {
        ModelAndView modelAndView = new ModelAndView("user/recover");
        return modelAndView;
    }
    @RequestMapping(value = "/reset",
            method = RequestMethod.GET,
            produces = MediaType.TEXT_HTML_VALUE)
    public ModelAndView getReset() {
        ModelAndView modelAndView = new ModelAndView("user/reset");
        return modelAndView;
    }
    @RequestMapping(value = "/register",
            method = RequestMethod.GET,
            produces = MediaType.TEXT_HTML_VALUE)
    public ModelAndView getRegister() {
        ModelAndView modelAndView = new ModelAndView("user/register");
        return modelAndView;
    }
//    요까이

@RequestMapping(value = "register",
        method = RequestMethod.POST,
        produces = MediaType.APPLICATION_JSON_VALUE)
@ResponseBody
public String postRegister(UserEntity user,
                           UserRegisterContactCodeEntity userRegisterContactCode) throws MessagingException {
//    UserRegisterResult result = this.userService.register(user, userRegisterContactCode);
    JSONObject responseObject = new JSONObject() {{
//        put("result", result.name().toLowerCase());
    }};
    return responseObject.toString();
}


}
