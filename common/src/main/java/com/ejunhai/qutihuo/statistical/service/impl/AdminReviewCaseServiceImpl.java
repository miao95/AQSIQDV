package com.ejunhai.qutihuo.statistical.service.impl;

import com.ejunhai.qutihuo.statistical.dao.AdminReviewCaseMapper;
import com.ejunhai.qutihuo.statistical.dao.MeasurementMapper;
import com.ejunhai.qutihuo.statistical.dto.MeasurementDto;
import com.ejunhai.qutihuo.statistical.dto.MeasurementDto2;
import com.ejunhai.qutihuo.statistical.model.AdminReviewCase;
import com.ejunhai.qutihuo.statistical.model.Measurement;
import com.ejunhai.qutihuo.statistical.service.AdminReviewCaseService;
import com.ejunhai.qutihuo.statistical.service.MeasurementService;
import com.ejunhai.qutihuo.statistical.utils.ServerUtils;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.*;

@Service("adminReveiwCaseService")
public class AdminReviewCaseServiceImpl implements AdminReviewCaseService {

    @Resource
    private AdminReviewCaseMapper adminReviewCaseMapper;

    @Override
    public List<AdminReviewCase> findByParams(String province, Integer year) {
        return adminReviewCaseMapper.findByParams(province, year);
    }
}
