package com.datawhale.whale.database;

public class SQLBuilderFactory {
    public SQLBuilder getSQLBuilder(SQLBuilderType sqlBuilderType) {
        switch (sqlBuilderType) {
            default:
            case SELECT:
                return new SQLBuilderSelect();
            case INSERT:
                return new SQLBuilderInsert();
        }
    }
}
