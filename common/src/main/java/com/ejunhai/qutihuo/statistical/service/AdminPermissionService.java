package com.ejunhai.qutihuo.statistical.service;

import com.ejunhai.qutihuo.statistical.model.Adminpermission;

import java.util.List;

public interface AdminPermissionService {

    /**
     * 根据省份和年查找记录
     *
     * @param province
     * @param year
     * @return
     */
    public List<Adminpermission> findByParams(String province, Integer year);

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
