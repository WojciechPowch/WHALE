package com.datawhale.whale.database;

import java.util.List;

public interface SQLBuilder {
    void setFieldNamesAndValues(List<Condition> conditions);
    void setTableName(String tableName);
    String getQuery();
}
