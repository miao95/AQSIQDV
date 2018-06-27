package com.ejunhai.qutihuo.statistical.service.impl;

import com.ejunhai.qutihuo.statistical.dao.AdminReviewCaseMapper;
import com.ejunhai.qutihuo.statistical.dao.LawAndEduMapper;
import com.ejunhai.qutihuo.statistical.model.AdminReviewCase;
import com.ejunhai.qutihuo.statistical.model.LawAndEdu;
import com.ejunhai.qutihuo.statistical.service.AdminReviewCaseService;
import com.ejunhai.qutihuo.statistical.service.LawAndEduService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("lawAndEduService")
public class LawAndEduServiceImpl implements LawAndEduService {

    @Resource
    private LawAndEduMapper lawAndEduMapper;

    @Override
    public List<LawAndEdu> findByParams(String province, Integer year) {
        return lawAndEduMapper.findByParams(province, year);
    }

    @Override
    public List<Integer> getDistinctYear() {
        return lawAndEduMapper.getDistinctYear();
    }

    @Override
    public List<String> getDistinctProvince() {
        return lawAndEduMapper.getDistinctProvince();
    }
}
