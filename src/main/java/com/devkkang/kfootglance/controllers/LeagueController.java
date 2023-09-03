package com.devkkang.kfootglance.controllers;


import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping(value = "/league")
public class LeagueController {

    //epl, Laliga, Bundesliga, Serie, Ligue1

    @RequestMapping(value = "/EPL",
    method = RequestMethod.GET,
    produces = MediaType.TEXT_HTML_VALUE)
    public ModelAndView getEpl() {
        ModelAndView modelAndView = new ModelAndView("league/EPL");
        return modelAndView;
    }

    @RequestMapping(value = "/laliga",
            method = RequestMethod.GET,
            produces = MediaType.TEXT_HTML_VALUE)
    public ModelAndView getLaliga() {
        ModelAndView modelAndView = new ModelAndView("league/laliga");
        return modelAndView;
    }

    @RequestMapping(value = "/bundesliga",
            method = RequestMethod.GET,
            produces = MediaType.TEXT_HTML_VALUE)
    public ModelAndView getBundesliga() {
        ModelAndView modelAndView = new ModelAndView("league/bundesliga");
        return modelAndView;
    }

    @RequestMapping(value = "/serie",
            method = RequestMethod.GET,
            produces = MediaType.TEXT_HTML_VALUE)
    public ModelAndView getSerie() {
        ModelAndView modelAndView = new ModelAndView("league/serie");
        return modelAndView;
    }

    @RequestMapping(value = "/ligue1",
            method = RequestMethod.GET,
            produces = MediaType.TEXT_HTML_VALUE)
    public ModelAndView getLigue1() {
        ModelAndView modelAndView = new ModelAndView("league/ligue1");
        return modelAndView;
    }

}
