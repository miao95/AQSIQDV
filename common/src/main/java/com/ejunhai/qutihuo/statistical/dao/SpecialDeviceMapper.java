package com.ejunhai.qutihuo.statistical.dao;

import com.ejunhai.qutihuo.statistical.model.Measurement;
import com.ejunhai.qutihuo.statistical.model.SpecialDevice;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface SpecialDeviceMapper {



    /**
     * 根据省份和年份获取
     *
     * @param province
     * @param year
     * @return
     */
    List<SpecialDevice> findByParams(@Param("province") String province, @Param("year") Integer year);
}
