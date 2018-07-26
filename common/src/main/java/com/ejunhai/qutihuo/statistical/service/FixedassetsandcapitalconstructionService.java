package com.ejunhai.qutihuo.statistical.service;

import com.ejunhai.qutihuo.statistical.model.Fixedassetsandcapitalconstruction;

import java.util.List;
import java.util.Map;

public interface FixedassetsandcapitalconstructionService {

    /**
     * 根据省份和年查找记录
     *
     * @param province
     * @param year
     * @return
     */
    public List<Fixedassetsandcapitalconstruction> findByParams(String province, Integer year);

    /**
     * 获取所有包含的年份
     *
     * @return 年份数组
     */
    public List<Integer> getDistinctYear();

    /**
     * 获取所有包含的省份
     *
     * @return 省份数组
     */
    public List<String> getDistinctProvince();

    /**
     * 获取所数据
     * @param province
     * @param year
     * @return 省份数组
     */
    public Map loadData(String province, Integer year);
}
