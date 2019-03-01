package com.datawhale.whale.database;

import java.sql.*;

public class DB {
    private Connection connection;

    public DB() {
        this.connection = getConnection();
    }

    public ResultSet executeQuery(String query) {
        try {
            return performExecuteQueryAction(query);
        } catch (SQLException sqlException) {
            return null;
        }
    }

    private ResultSet performExecuteQueryAction(String query) throws SQLException {
        if (connection == null) {
            return null;
        }
        Statement statement = connection.createStatement();
        return statement.executeQuery(query);
    }

    private Connection getConnection() {
        try {
            return performGetConnectionAction();
        } catch (SQLException sqlException) {
            return null;
        }
    }

    private Connection performGetConnectionAction() throws SQLException {
        DBConnectionData dbConnectionData = new DBConnectionData();
        return DriverManager.getConnection(dbConnectionData.getUrl(),
                dbConnectionData.getUser(),
                dbConnectionData.getPassword());
    }
}
