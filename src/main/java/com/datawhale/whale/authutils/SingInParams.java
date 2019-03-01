package com.datawhale.whale.authutils;

import java.util.Map;

public class SingInParams {
    private String login;
    private String password;

    public SingInParams(Map<String, String> params) {
        this.login = params.get("login");
        this.password = params.get("password");
    }

    public String getLogin() {
        return login;
    }

    public String getPassword() {
        return password;
    }
}
