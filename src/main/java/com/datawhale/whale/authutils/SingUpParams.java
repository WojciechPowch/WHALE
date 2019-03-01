package com.datawhale.whale.authutils;

import com.datawhale.whale.crypto.Crypto;

import java.util.HashMap;
import java.util.Map;

public class SingUpParams {
    private String email;
    private String login;
    private String password;
    private String nip;

    public SingUpParams(Map<String, String> params) {
        this.email = params.get("email");
        this.password = params.get("password");
        this.login = params.get("login");
        this.nip = params.get("nip");
    }

    public String getNip() {
        return nip;
    }

    public String getEmail() {
        return email;
    }

    public String getLogin() {
        return login;
    }

    public String getPassword() {
        Crypto crypto = new Crypto();
        return crypto.encrypt(password);
    }

    public Map<String, String> toMap() {
        Map<String, String> map = new HashMap<>();
        map.put("email", getEmail());
        map.put("login", getLogin());
        map.put("password", getPassword());
        map.put("nip", getNip());
        return map;
    }
}
