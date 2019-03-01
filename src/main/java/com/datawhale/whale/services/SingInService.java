package com.datawhale.whale.services;

import com.datawhale.whale.crypto.Crypto;
import com.datawhale.whale.database.DB;
import com.datawhale.whale.authutils.SingInParams;
import com.datawhale.whale.services.servicehelpers.SingInServiceHelper;
import org.springframework.stereotype.Service;

import org.json.JSONObject;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Map;

@Service
public class SingInService {

    private SingInParams singInParams;

    public String singIn(Map<String, String> params) {
        singInParams = new SingInParams(params);
        return performSingInAction();
    }

    private String performSingInAction() {
        ResultSet resultSet = getSingInResultSet();
        return verifyResult(resultSet);
    }

    private ResultSet getSingInResultSet() {
        String selectUserQuery = SingInServiceHelper.getSelectUserQuery(singInParams);
        DB dataBase = new DB();
        return dataBase.executeQuery(selectUserQuery);
    }

    private String verifyResult(ResultSet resultSet) {
        if (resultSet == null) {
            return getSuccessReport(false);
        } else {
            return checkUserPassword(resultSet);
        }
    }

    private String checkUserPassword(ResultSet resultSet) {
        if (getPasswordVerdict(resultSet)) {
            return getSuccessReport(true);
        }
        return getSuccessReport(false);
    }

    private boolean getPasswordVerdict(ResultSet resultSet) {
        try {
            return performGetPasswordVerdictAction(resultSet);
        } catch (SQLException sqlException) {
            return false;
        }
    }

    private boolean performGetPasswordVerdictAction(ResultSet resultSet) throws SQLException {
        String warmPassword = "";
        while (resultSet.next()) {
            warmPassword = resultSet.getString("password");
        }
        Crypto crypto = new Crypto();
        String password = crypto.decrypt(warmPassword);

        return comparePassword(password);
    }

    private boolean comparePassword(String password) {
        if (password == null) {
            return false;
        }
        return password.equals(singInParams.getPassword());
    }

    private String getSuccessReport(boolean value) {
        String successValue = String.valueOf(value);
        return new JSONObject().put("success", successValue).toString();
    }
}
