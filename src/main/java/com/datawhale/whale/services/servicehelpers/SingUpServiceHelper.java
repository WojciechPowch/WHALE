package com.datawhale.whale.services.servicehelpers;

import com.datawhale.whale.authutils.SingUpParams;
import com.datawhale.whale.database.Condition;
import com.datawhale.whale.database.SQLBuilder;
import com.datawhale.whale.database.SQLBuilderFactory;
import com.datawhale.whale.database.SQLBuilderType;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class SingUpServiceHelper {
    public static String getInsertQuery(SingUpParams singUpParams) {
        SQLBuilder sqlBuilder = getSQLBuilder(singUpParams);
        return sqlBuilder.getQuery();
    }

    private static SQLBuilder getSQLBuilder(SingUpParams singUpParams) {
        SQLBuilderFactory sqlBuilderFactory = new SQLBuilderFactory();
        SQLBuilder sqlBuilder = sqlBuilderFactory.getSQLBuilder(SQLBuilderType.INSERT);
        sqlBuilder.setTableName("user");
        sqlBuilder.setFieldNamesAndValues(getConditions(singUpParams));
        return sqlBuilder;
    }

    private static List<Condition> getConditions(SingUpParams singUpParams) {
        List<Condition> result = new ArrayList<>();
        for (Map.Entry<String, String> entry : singUpParams.toMap().entrySet()) {
            Condition<String> condition = new Condition<String>();
            condition.setFieldName(entry.getKey());
            condition.setValue(entry.getValue());
            result.add(condition);
        }
        return result;
    }
}
