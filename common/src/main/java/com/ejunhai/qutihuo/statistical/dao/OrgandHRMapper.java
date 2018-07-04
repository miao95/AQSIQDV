package com.ejunhai.qutihuo.statistical.dao;

import org.apache.ibatis.annotations.Param;
import com.ejunhai.qutihuo.statistical.model.OrgandHR;

import java.util.LinkedHashMap;
import java.util.List;
public interface OrgandHRMapper {
    /**
     * 根据省份和年份获取机构和人员信息
     *
     * @param province
     * @param year
     * @return
     */
    List<OrgandHR> getByYearProvince(@Param("province") String province, @Param("year") Integer year);

    List<String> getYearAll();

    List<String> getProvinceAll();
}
