package com.devkkang.kfootglance.controllers;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping(value = "/user")
public class UserController {

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

}
