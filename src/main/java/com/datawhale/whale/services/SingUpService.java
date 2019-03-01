package com.datawhale.whale.services;

import com.datawhale.whale.authutils.SingUpParams;
import com.datawhale.whale.database.DB;
import com.datawhale.whale.services.servicehelpers.SingUpServiceHelper;
import org.json.JSONObject;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class SingUpService {
    private SingUpParams singUpParams;

    public String singUp(Map<String, String> params) {
        this.singUpParams = new SingUpParams(params);
        return performSingUpAction();
    }

    public String performSingUpAction() {
        String insertQuery = SingUpServiceHelper.getInsertQuery(singUpParams);
        DB dataBase = new DB();
        dataBase.executeQuery(insertQuery);
        return getSuccessReport(true);
    }

    private String getSuccessReport(boolean value) {
        String successValue = String.valueOf(value);
        return new JSONObject().put("success", successValue).toString();
    }

}
