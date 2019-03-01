package com.datawhale.whale;

import com.datawhale.whale.services.SingInService;
import org.json.JSONException;
import org.json.JSONObject;
import org.junit.Test;


import java.util.HashMap;
import java.util.Map;

public class SingInServiceTest {

    private SingInService singInService;

    @Test
    public void login() {
        Map<String, String> params = getParams();
        singInService = new SingInService();
        assert singInSuccess(params);
    }

    private boolean singInSuccess(Map params) {
        try {
            return performSingInSuccessAction(params);
        } catch (JSONException jsonException) {
            return false;
        }
    }

    private boolean performSingInSuccessAction(Map params) throws JSONException {
        String result = singInService.singIn(params);
        JSONObject jsonObject = new JSONObject(result);
        return jsonObject.getBoolean("success");
    }

    private Map<String, String> getParams() {
        Map<String, String> params = new HashMap<>();
        params.put("login", "test");
        params.put("password", "123");
        return params;
    }
}
