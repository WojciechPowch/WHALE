package com.datawhale.whale.database;

import java.util.List;

public interface ConditionSelector {
    String select(List<Condition> conditions, int index);
}
