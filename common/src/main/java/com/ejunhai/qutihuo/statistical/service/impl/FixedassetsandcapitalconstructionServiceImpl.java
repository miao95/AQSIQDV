package com.ejunhai.qutihuo.statistical.service.impl;

import com.ejunhai.qutihuo.statistical.dao.FixedassetsandcapitalconstructionMapper;
import com.ejunhai.qutihuo.statistical.model.Fixedassetsandcapitalconstruction;
import com.ejunhai.qutihuo.statistical.model.FixedassetsandcapitalconstructionExample;
import com.ejunhai.qutihuo.statistical.service.FixedassetsandcapitalconstructionService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service("FixedassetsandcapitalconstructionService")
public class FixedassetsandcapitalconstructionServiceImpl implements FixedassetsandcapitalconstructionService {

    @Resource
    private FixedassetsandcapitalconstructionMapper fixedassetsandcapitalconstructionMapper;

    @Override
    public List<Fixedassetsandcapitalconstruction> findByParams(String province, Integer year) {
        FixedassetsandcapitalconstructionExample example = new FixedassetsandcapitalconstructionExample();
        FixedassetsandcapitalconstructionExample.Criteria criteria1 = example.createCriteria();
        if (province != null && !province.equals("")) {
            criteria1.andProvinceEqualTo(province);
        }
        criteria1.andYearEqualTo(year);
        return fixedassetsandcapitalconstructionMapper.selectByExample(example);
    }

    @Override
    public List<Integer> getDistinctYear() {
        return fixedassetsandcapitalconstructionMapper.getDistinctYear();
    }

    @Override
    public List<String> getDistinctProvince() {
        return fixedassetsandcapitalconstructionMapper.getDistinctProvince();
    }

    @Override
    public Map loadData(String province, Integer year) {
        Map map = new HashMap();

        map.put("year", year);
        map.put("province", this.toSimpleName(province));

        List<Fixedassetsandcapitalconstruction> pojoList = this.findByParams(province, year);
        List<Fixedassetsandcapitalconstruction> pojoSxjList = this.findByParams(province + "省小计", year);
        List<Fixedassetsandcapitalconstruction> pojoDxjList = this.findByParams(province + "地小计", year);
        List<Fixedassetsandcapitalconstruction> pojoXxjList = this.findByParams(province + "县小计", year);
        //  List<Fixedassetsandcapitalconstruction> provinceLevellPojoList = this.findByParams("全国总计", year);


        if (pojoList != null && pojoList.size() > 0) {
            Fixedassetsandcapitalconstruction pojo = pojoList.get(0);

            map.put("total", new int[]{pojo.getFixedassetscnt(), pojo.getZccnt() - pojo.getFixedassetscnt()});
            map.put("gdzcze", new int[]{pojo.getFaFwjzw(), pojo.getFaJtyssb(), pojo.getFaZyyqsbCnt(), pojo.getFaOther()});
            map.put("gdzcze_bnxz", new int[]{pojo.getFaFwjzw() - pojo.getFaFwjzwBnxz(), pojo.getFaFwjzwBnxz(), pojo.getFaJtyssb() - pojo.getFaJtyssbBnxz(), pojo.getFaJtyssbBnxz(), pojo.getFaZyyqsbCnt() - pojo.getFaZyyqsbBnxzCnt(), pojo.getFaZyyqsbBnxzCnt(), pojo.getFaZyyqsbJlyqzysb() - pojo.getFaZyyqsbBnxzJlyqzysb(), pojo.getFaZyyqsbBnxzJlyqzysb(), pojo.getFaZyyqsbTzsbjyyqzysb() - pojo.getFaZyyqsbBnxzTzsbjyyqzysb(), pojo.getFaZyyqsbBnxzTzsbjyyqzysb()});
            map.put("xyjzw", new int[]{pojo.getbBgyfmj(), pojo.getbSysmjCnt(), pojo.getbOther()});
            map.put("xyjzw_sys", new int[]{pojo.getbSysmjCnt() - pojo.getbJysysmj() - pojo.getbTzsbsysmj(), pojo.getbJysysmj(), pojo.getbTzsbsysmj()});
            map.put("xyjzw_total", pojo.getbCnt());
            map.put("jbjs", new int[]{pojo.getCcBnzjxm(), pojo.getCcBntzje(), pojo.getCcBnzjjzmj()});
        }
        if (pojoSxjList != null && pojoSxjList.size() > 0) {
            Fixedassetsandcapitalconstruction pojoSxj = pojoSxjList.get(0);
            Fixedassetsandcapitalconstruction pojoDxj = pojoDxjList.get(0);
            Fixedassetsandcapitalconstruction pojoXxj = pojoXxjList.get(0);
            map.put("total_xj", new int[]{pojoSxj.getFixedassetscnt(), pojoDxj.getFixedassetscnt(), pojoXxj.getFixedassetscnt(), pojoSxj.getZccnt() - pojoSxj.getFixedassetscnt(), pojoDxj.getZccnt() - pojoDxj.getFixedassetscnt(), pojoXxj.getZccnt() - pojoXxj.getFixedassetscnt()});

            map.put("gdzcze_xj", new int[]{pojoSxj.getFaFwjzw(), pojoDxj.getFaFwjzw(), pojoXxj.getFaFwjzw(), pojoSxj.getFaJtyssb(), pojoDxj.getFaJtyssb(), pojoXxj.getFaJtyssb(), pojoSxj.getFaZyyqsbCnt(), pojoDxj.getFaZyyqsbCnt(), pojoXxj.getFaZyyqsbCnt(), pojoSxj.getFaOther(), pojoDxj.getFaOther(), pojoXxj.getFaOther()});

            map.put("gdzcze_bnxz_xj", new int[]{
                    pojoSxj.getFaFwjzw() - pojoSxj.getFaFwjzwBnxz(), pojoDxj.getFaFwjzw() - pojoDxj.getFaFwjzwBnxz(), pojoXxj.getFaFwjzw() - pojoXxj.getFaFwjzwBnxz(), pojoSxj.getFaFwjzwBnxz(), pojoDxj.getFaFwjzwBnxz(),
                    pojoXxj.getFaFwjzwBnxz(), pojoSxj.getFaJtyssb() - pojoSxj.getFaJtyssbBnxz(), pojoDxj.getFaJtyssb() - pojoDxj.getFaJtyssbBnxz(), pojoXxj.getFaJtyssb() - pojoXxj.getFaJtyssbBnxz(), pojoSxj.getFaJtyssbBnxz(), pojoDxj.getFaJtyssbBnxz(), pojoXxj.getFaJtyssbBnxz(), pojoSxj.getFaZyyqsbCnt() - pojoSxj.getFaZyyqsbBnxzCnt(), pojoDxj.getFaZyyqsbCnt() - pojoDxj.getFaZyyqsbBnxzCnt(), pojoXxj.getFaZyyqsbCnt() - pojoXxj.getFaZyyqsbBnxzCnt(), pojoSxj.getFaZyyqsbBnxzCnt(), pojoDxj.getFaZyyqsbBnxzCnt(), pojoXxj.getFaZyyqsbBnxzCnt(), pojoSxj.getFaZyyqsbJlyqzysb() - pojoSxj.getFaZyyqsbBnxzJlyqzysb(), pojoDxj.getFaZyyqsbJlyqzysb() - pojoDxj.getFaZyyqsbBnxzJlyqzysb(), pojoXxj.getFaZyyqsbJlyqzysb() - pojoXxj.getFaZyyqsbBnxzJlyqzysb(), pojoSxj.getFaZyyqsbBnxzJlyqzysb(), pojoDxj.getFaZyyqsbBnxzJlyqzysb(), pojoXxj.getFaZyyqsbBnxzJlyqzysb(), pojoSxj.getFaZyyqsbTzsbjyyqzysb() - pojoSxj.getFaZyyqsbBnxzTzsbjyyqzysb(), pojoDxj.getFaZyyqsbTzsbjyyqzysb() - pojoDxj.getFaZyyqsbBnxzTzsbjyyqzysb(), pojoXxj.getFaZyyqsbTzsbjyyqzysb() - pojoXxj.getFaZyyqsbBnxzTzsbjyyqzysb(), pojoSxj.getFaZyyqsbBnxzTzsbjyyqzysb(), pojoDxj.getFaZyyqsbBnxzTzsbjyyqzysb(), pojoXxj.getFaZyyqsbBnxzTzsbjyyqzysb()});

            map.put("xyjzw_xj", new int[]{pojoSxj.getbBgyfmj(), pojoDxj.getbBgyfmj(), pojoXxj.getbBgyfmj(), pojoSxj.getbSysmjCnt(), pojoDxj.getbSysmjCnt(), pojoXxj.getbSysmjCnt(), pojoSxj.getbOther(), pojoDxj.getbOther(), pojoXxj.getbOther()});
            map.put("xyjzw_sys_xj", new int[]{pojoSxj.getbSysmjCnt() - pojoSxj.getbJysysmj() - pojoSxj.getbTzsbsysmj(), pojoDxj.getbSysmjCnt() - pojoDxj.getbJysysmj() - pojoDxj.getbTzsbsysmj(), pojoXxj.getbSysmjCnt() - pojoXxj.getbJysysmj() - pojoXxj.getbTzsbsysmj(), pojoSxj.getbJysysmj(), pojoDxj.getbJysysmj(), pojoXxj.getbJysysmj(), pojoSxj.getbTzsbsysmj(), pojoDxj.getbTzsbsysmj(), pojoXxj.getbTzsbsysmj()});
            map.put("xyjzw_total_xj", new int[]{pojoSxj.getbCnt(), pojoDxj.getbCnt(), pojoXxj.getbCnt()});
        } else {
            map.put("total_xj", null);
            map.put("gdzcze_xj", null);
            map.put("gdzcze_bnxz_xj", null);
            map.put("xyjzw_xj", null);
            map.put("xyjzw_sys_xj", null);
            map.put("xyjzw_total_xj", null);
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
                } else if (result.equals("中国标准化研究院") || result.equals("中国特检院") || result.equals("中国纤维检验局") || result.equals("中国计量院") || result.equals("中国质检出版社") || result.equals("中国质检报刊社")) {
                    result = result;
                } else {
                    result = result.substring(0, 2);
                }

            }
            return result;

        }
        return null;
    }

}
