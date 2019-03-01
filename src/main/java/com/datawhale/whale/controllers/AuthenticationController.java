package com.datawhale.whale.controllers;

import com.datawhale.whale.services.SingUpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.datawhale.whale.services.SingInService;

import java.util.Map;

@RestController
public class AuthenticationController {

    @Autowired(required = true)
    private SingInService singInService;

    @Autowired(required = true)
    private SingUpService singUpService;

    @RequestMapping(value = "/singin", method = RequestMethod.POST)
    public String singIn(@RequestParam Map<String,String> params) {
         return singInService.singIn(params);
    }

    @RequestMapping(value = "/singup", method = RequestMethod.POST)
    public String singUp(@RequestParam Map<String,String> params) {
        return singUpService.singUp(params);
    }
}

