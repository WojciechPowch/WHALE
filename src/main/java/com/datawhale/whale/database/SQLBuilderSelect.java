package com.datawhale.whale.database;

import java.util.List;

public class SQLBuilderSelect implements SQLBuilder {
    private String tableName;
    private List<Condition> conditions;

    @Override
    public void setFieldNamesAndValues(List<Condition> conditions) {
        this.conditions = conditions;
    }

    @Override
    public void setTableName(String tableName) {
        this.tableName = tableName;
    }

    @Override
    public String getQuery() {
        String mainPart = getMainPart();
        return mainPart + getConditionPart();
    }

    private String getMainPart() {
        return String.format("SELECT * from public.%s ", tableName);
    }

    private String getConditionPart() {
        String conditionPart = "WHERE ";
        for (int i = 0; i < conditions.size(); i++) {
            if (i == 0) {
                conditionPart += prepareFirstPart(conditions.get(i));
            } else {
                prepareRegularPart(conditions.get(i));
            }
        }
        return conditionPart;
    }

    private String prepareFirstPart(Condition condition) {
        return String.format("%s %s %s ", condition.getFieldName(),
                                            condition.getOperator(),
                                            condition.getValue());
    }

    private String prepareRegularPart(Condition condition) {
        return condition.getConditionPart() + " " + prepareFirstPart(condition);
    }
}
