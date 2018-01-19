package com.ejunhai.qutihuo.statistical.utils;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

public class ServerUtils {
    public static <T> List<T> set2List(Set<T> set){
        List<T> resultList = new ArrayList<T>();
        Iterator<T> iterator = set.iterator();
        while(iterator.hasNext()){
            T ele = iterator.next();
            resultList.add(ele);
        }
        return resultList;
    }
}
