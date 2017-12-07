package com.ejunhai.qutihuo.statistical.dao;

import com.ejunhai.qutihuo.statistical.model.ProvinceStandard;
import java.util.List;

/**
 * 地方标准信息表
 *
 * @author Leo
 *
 * @date 2017-12-06 21:18:30
 *
 */

public interface ProvinceStandardMapper {
    List<ProvinceStandard> read();
}
