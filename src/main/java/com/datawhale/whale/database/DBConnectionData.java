package com.datawhale.whale.database;

import org.w3c.dom.Document;
import org.w3c.dom.NodeList;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import java.io.File;
import java.util.HashMap;
import java.util.Map;

public class DBConnectionData {
    private String url;
    private String user;
    private String password;

    private final String urlTagName = "url";
    private final String userTagName = "user";
    private final String passwordTagName = "password";
    private String xmlFilePath = "D:\\datawhale-spring-boot\\whale\\src\\main\\resources\\static\\DBConnectionData.xml";
    private Map<String, NodeList> nodeListMap = new HashMap<>();
    private Document document;

    public DBConnectionData() {
        initialize();
    }

    public String getUrl() {
        return url;
    }

    public String getUser() {
        return user;
    }

    public String getPassword() {
        return password;
    }

    private void initialize() {
        readDataFromFile();
        initializeNodeList();
        initUrlValue();
        initUserValue();
        initPasswordValue();
    }

    private void readDataFromFile() {
        parseDocument();
    }

    private void parseDocument() {
        try {
            performParseDocumentAction();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }

    private void performParseDocumentAction() throws Exception {
        File xmlFile = new File(xmlFilePath);
        DocumentBuilderFactory documentBuilderFactory = DocumentBuilderFactory.newInstance();
        DocumentBuilder documentBuilder = documentBuilderFactory.newDocumentBuilder();
        document = documentBuilder.parse(xmlFile);
    }

    private void initializeNodeList() {
        nodeListMap.put(urlTagName, document.getElementsByTagName(urlTagName));
        nodeListMap.put(userTagName, document.getElementsByTagName(userTagName));
        nodeListMap.put(passwordTagName, document.getElementsByTagName(passwordTagName));
    }

    private void initUrlValue() {
        this.url = getNodeValue(nodeListMap.get(urlTagName));
    }

    private void initUserValue() {
        this.user = getNodeValue(nodeListMap.get(userTagName));
    }

    private void initPasswordValue() {
        this.password = getNodeValue(nodeListMap.get(passwordTagName));
    }

    private String getNodeValue(NodeList nodeList) {
        return nodeList.item(0)
                .getFirstChild()
                .getNodeValue();
    }
}
