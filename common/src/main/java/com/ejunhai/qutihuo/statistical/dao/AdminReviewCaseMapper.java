package com.ejunhai.qutihuo.statistical.dao;

import com.ejunhai.qutihuo.statistical.model.AdminReviewCase;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface AdminReviewCaseMapper {

    /**
     * 获取所有包含的省份
     *
     * @return 省份数组
     */
    List<String> getDistinctProvince();

    /**
     * 获取所有包含的年份
     *
     * @return 年份数组
     */
    List<Integer> getDistinctYear();

    /**
     * 根据省份和年份获取
     *
     * @param province
     * @param year
     * @return
     */
    List<AdminReviewCase> findByParams(@Param("province") String province, @Param("year") Integer year);
}
