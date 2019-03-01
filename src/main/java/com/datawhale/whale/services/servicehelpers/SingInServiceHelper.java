package com.datawhale.whale.services.servicehelpers;

import com.datawhale.whale.database.*;
import com.datawhale.whale.authutils.SingInParams;

import java.util.ArrayList;
import java.util.List;

public class SingInServiceHelper {
    public static String getSelectUserQuery(SingInParams singInParams) {
        SQLBuilder sqlBuilder = getSQLBuilder(singInParams);
        return sqlBuilder.getQuery();
    }

    private static SQLBuilder getSQLBuilder(SingInParams singInParams) {
        SQLBuilderFactory sqlBuilderFactory = new SQLBuilderFactory();
        SQLBuilder sqlBuilder = sqlBuilderFactory.getSQLBuilder(SQLBuilderType.SELECT);
        sqlBuilder.setTableName("user");
        sqlBuilder.setFieldNamesAndValues(getConditions(singInParams));
        return sqlBuilder;
    }

    private static List<Condition> getConditions(SingInParams singInParams) {
        Condition<String> condition = getCondition(singInParams);
        List<Condition> list = new ArrayList<>();
        list.add(condition);
        return list;
    }

    private static Condition<String> getCondition(SingInParams singInParams) {
        Condition<String> condition = new Condition<>();
        condition.setFieldName("login");
        condition.setValue(singInParams.getLogin());
        condition.setOperator(ConditionOperationType.EQUAL);
        condition.setConditionPart(ConditionPart.AND);
        return condition;
    }
}
