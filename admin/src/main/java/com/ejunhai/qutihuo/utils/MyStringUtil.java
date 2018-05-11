package com.ejunhai.qutihuo.utils;

import org.apache.commons.lang.StringUtils;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class MyStringUtil {

    /**
     * 复杂名称省份字符串转化为简称
     * @param provinceArr
     * @return
     */
    public static String[] toSimpleName(String[] provinceArr){
        if(provinceArr != null && provinceArr.length > 0){
            String[] resultArr = new String[provinceArr.length];

            for (int i = 0; i < provinceArr.length; i++) {
                String name = provinceArr[i];
                if(name.endsWith("省")){
                    resultArr[i] = name.substring(0, name.lastIndexOf("省"));
                }
                else if(name.endsWith("市")){
                    resultArr[i] = name.substring(0, name.lastIndexOf("市"));
                }
                else{
                    if(name.equals("内蒙古自治区")){
                        resultArr[i] = "内蒙古";
                    }
                    else {
                        resultArr[i] = name.substring(0, 2);
                    }

                }

            }

            return resultArr;
        }

        return null;

    }

    /**
     * 删除数组中指定的元素
     * @param arr
     * @param element
     * @return
     */
    public static String[] removeArrayElement(String[] arr, String element){
        List<String> list = Arrays.asList(arr);//将数组转换为list集合
        if(list.contains(element)){
            List<String> arrayList=new ArrayList<String>(list);//转换为ArrayLsit调用相关的remove方法
            arrayList.remove(element);

            String[] resultArr = arrayList.toArray(new String[arrayList.size()]);
            return resultArr;
        }

        return arr;

    }
}
