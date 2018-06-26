package com.ejunhai.qutihuo.statistical.service;

import com.ejunhai.qutihuo.statistical.model.AdminReviewCase;

import java.util.List;

public interface AdminReviewCaseService {

    /**
     * 根据省份和年查找记录
     *
     * @param province
     * @return
     */
    public List<AdminReviewCase> findByParams(String province, Integer year);

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
}
