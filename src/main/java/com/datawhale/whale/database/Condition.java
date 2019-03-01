package com.datawhale.whale.database;

public class Condition<T> {
    private String fieldName;
    private T value;

    private ConditionOperationType operator;
    private ConditionPart conditionPart;

    public void setFieldName(String fieldName) {
        this.fieldName = fieldName;
    }

    public String getFieldName() {
        return fieldName;
    }

    public void setValue(T value) {
        this.value = value;
    }

    public String getValue() {
        return getPreparedValue();
    }

    private String getPreparedValue() {
        if (value instanceof String) {
            return "'" + String.valueOf(value) + "'";
        } else {
            return String.valueOf(value);
        }
    }

    public void setOperator(ConditionOperationType operator) {
        this.operator = operator;
    }

    public String getOperator() {
        switch (operator) {
            default:
            case EQUAL:
                return "=";
            case NOT_EQUAL:
                return "NOT";
            case LIKE:
                return "LIKE";
        }
    }

    public void setConditionPart(ConditionPart conditionPart) {
        this.conditionPart = conditionPart;
    }

    public String getConditionPart() {
        switch (conditionPart) {
            case AND:
                return "AND";
                default:
            case OR:
                return "OR";
        }
    }
}
