package com.ejunhai.qutihuo.statistical.service.impl;

import com.ejunhai.qutihuo.statistical.dao.MetricInstrumentMapper;
import com.ejunhai.qutihuo.statistical.dao.ProvinceStandardMapper;
import com.ejunhai.qutihuo.statistical.dto.StandardReviseDto;
import com.ejunhai.qutihuo.statistical.model.MetricInstrument;
import com.ejunhai.qutihuo.statistical.model.ProvinceStandard;
import com.ejunhai.qutihuo.statistical.service.MetricInstrumentService;
import com.ejunhai.qutihuo.statistical.service.ProvinceStandardService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.*;

/**
 * MetricInstrument Service 实现类
 * 
 * @author parcel
 * 
 * @date 2014-12-10 21:22:36
 * 
 */
@Service("metricInstrumentService")
public class MetricInstrumentServiceImpl implements MetricInstrumentService {

	@Resource
	private MetricInstrumentMapper metricInstrumentMapper;

	@Override
	public List<MetricInstrument> findByParams(String province, Integer year) {
		return metricInstrumentMapper.findByParams(province, year);
	}

	@Override
	public List<Integer> getDistinctYear() {
		return metricInstrumentMapper.getDistinctYear();
	}

    @Override
    public List<String> getDistinctProvince() {
        return metricInstrumentMapper.getDistinctProvince();
    }

}
