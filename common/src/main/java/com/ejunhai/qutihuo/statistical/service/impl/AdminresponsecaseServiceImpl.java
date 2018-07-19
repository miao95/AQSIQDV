package com.ejunhai.qutihuo.statistical.service.impl;

import com.ejunhai.qutihuo.statistical.dao.AdminresponsecaseMapper;
import com.ejunhai.qutihuo.statistical.model.Adminresponsecase;
import com.ejunhai.qutihuo.statistical.model.AdminresponsecaseExample;
import com.ejunhai.qutihuo.statistical.service.AdminresponsecaseService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service("adminresponsecaseService")
public class AdminresponsecaseServiceImpl implements AdminresponsecaseService {

    @Resource
    private AdminresponsecaseMapper adminresponsecaseMapper;

    @Override
    public List<Adminresponsecase> findByParams(String province, Integer year) {
        AdminresponsecaseExample example = new AdminresponsecaseExample();
        AdminresponsecaseExample.Criteria criteria1 = example.createCriteria();
        if (province != null && !province.equals("")) {
            criteria1.andProvinceEqualTo(province);
        }
        criteria1.andYearEqualTo(year);
        return adminresponsecaseMapper.selectByExample(example);
    }

    @Override
    public List<Integer> getDistinctYear() {
        return adminresponsecaseMapper.getDistinctYear();
    }

    @Override
    public List<String> getDistinctProvince() {
        return adminresponsecaseMapper.getDistinctProvince();
    }

    @Override
    public Map loadData(String province, Integer year) {
        Map map = new HashMap();

        map.put("year", year);
        map.put("province", this.toSimpleName(province));

        List<Adminresponsecase> pojoList = this.findByParams(province, year);
        List<Adminresponsecase> totalPojoList = this.findByParams("全国总计", year);

        Adminresponsecase totalPojo = new Adminresponsecase();
        if (totalPojoList != null && totalPojoList.size() > 0) {
            totalPojo = totalPojoList.get(0);
        }
        if (pojoList != null && pojoList.size() > 0) {
            Adminresponsecase pojo = pojoList.get(0);

            //查询概况

            map.put("glsf", new int[]{pojo.getSqjz(), pojo.getWsj(), pojo.getBqfsFyhys(), pojo.getBqfsWjfyzjys()});
            map.put("glqg", new int[]{totalPojo.getSqjz(), totalPojo.getWsj(), totalPojo.getBqfsFyhys(), totalPojo.getBqfsWjfyzjys()});


            // 应诉机关
            map.put("ysjg", new int[]{pojo.getYsjgYjtxzxwjg(), pojo.getYsjgFyjg(), pojo.getYsjgXzzf(),});
            map.put("ysjgjb", new int[]{pojo.getYsjgjbXjbm(), pojo.getYsjgjbXjzf(), pojo.getYsjgjbDjbm(), pojo.getYsjgjbDjzf(), pojo.getYsjgjbSjbm(), pojo.getYsjgjbSjzf(), pojo.getYsjgjbQt()});
            //判决
            int pjTotal = pojo.getPjWc() + pojo.getPjCxQb() + pojo.getPjCxBf()  + pojo.getPjBg() + pojo.getPjLxfdzz() + pojo.getPjQrhf() + pojo.getPjQrwf() + pojo.getPjBh() + pojo.getPjPc() + pojo.getPjBypc();

            map.put("pjxxqk",new int[]{pojo.getPjWc(), pojo.getPjCxQb(), pojo.getPjCxBf(), pojo.getPjCxCx(), pojo.getPjBg(), pojo.getPjLxfdzz(), pojo.getPjQrhf(), pojo.getPjQrwf(), pojo.getPjBh(), pojo.getPjPc(), pojo.getPjBypc()});
            map.put("pjTotal",pjTotal);
            //裁定
            int cdTotal = pojo.getCdBh() + pojo.getCdCsZd() + pojo.getCdCsGb() + pojo.getCdYs() + pojo.getCdZj() + pojo.getCdQt();

            map.put("cdxxqk",new int[]{pojo.getCdBh() , pojo.getCdCsZd() , pojo.getCdCsGb() , pojo.getCdYs() , pojo.getCdZj() , pojo.getCdQt()});
            map.put("cdTotal",cdTotal);

            map.put("pctj", pojo.getYsjaPctj());

        }
        return map;
    }

    /**
     * 复杂名称省份字符串转化为简称
     *
     * @param provinceFullName
     * @return
     */
    public String toSimpleName(String provinceFullName) {

        if (provinceFullName != null && !provinceFullName.isEmpty()) {
            String result = provinceFullName;
            if (result.endsWith("省")) {
                result = result.substring(0, result.lastIndexOf("省"));
            } else if (result.endsWith("市")) {
                result = result.substring(0, result.lastIndexOf("市"));
            } else {
                if (result.equals("内蒙古自治区")) {
                    result = "内蒙古";
                } else {
                    result = result.substring(0, 2);
                }

            }
            return result;

        }
        return null;
    }

}