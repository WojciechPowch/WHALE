package com.datawhale.whale.database;

import java.util.List;

public class SQLBuilderInsert implements SQLBuilder {
    private List<Condition> conditions;
    private String tableName;

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
        String columnNames = getColumnNames();
        String values = getValues();
        return String.format("INSERT INTO public.%s (%s) VALUES (%s);", tableName, columnNames, values);
    }

    private String getColumnNames() {
        return buildInsertQueryPart((conditions, index) -> conditions.get(index).getFieldName());
    }

    private String getValues() {
        return buildInsertQueryPart((conditions, index) -> conditions.get(index).getValue());
    }

    private String buildInsertQueryPart(ConditionSelector conditionSelector) {
        String result = "";
        for (int i = 0; i < conditions.size(); i++) {
            result += conditionSelector.select(conditions, i);

            if (i < conditions.size() - 1) {
                result += ",";
            }
        }
        return result;
    }
}
