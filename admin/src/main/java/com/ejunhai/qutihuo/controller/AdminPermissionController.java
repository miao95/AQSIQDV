package com.ejunhai.qutihuo.controller;

import com.ejunhai.qutihuo.common.base.BaseController;
import com.ejunhai.qutihuo.statistical.model.Adminpermission;
import com.ejunhai.qutihuo.statistical.service.AdminPermissionService;
import com.ejunhai.qutihuo.statistical.service.LawAndEduService;
import net.sf.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("safety")
public class AdminPermissionController extends BaseController {
    @Resource
    private AdminPermissionService adminPermissionService;
    @Resource
    private LawAndEduService lawAndEduService;

    @RequestMapping("/adminpermission")
    public String adminPermissionPage(HttpServletRequest request, HttpServletResponse response, ModelMap modelMap) throws IOException {
        return "safety/adminpermission";
    }

    @RequestMapping("/adminpermission/getDistinctYear")
    @ResponseBody
    public List<Integer> getDistinctYearForadminpermission(HttpServletRequest request, HttpServletResponse response, ModelMap modelMap) throws IOException {
        return adminPermissionService.getDistinctYear();
    }

    @RequestMapping("/adminpermission/getDistinctProvince")
    @ResponseBody
    public List<String> getDistinctProvinceFoadminpermission(HttpServletRequest request, HttpServletResponse response, ModelMap modelMap) throws IOException {
        return adminPermissionService.getDistinctProvince();
    }

    @RequestMapping("/adminpermission/loadData")
    @ResponseBody
    public Map loadData(
            @RequestParam(value = "province", required = false) String province,
            @RequestParam(value = "year", required = false) int year) {

        //查询最新的一年
        List<Integer> allYears = adminPermissionService.getDistinctYear();
        if (allYears == null && allYears.size() == 0) {
            return null;
        }
        if (year == 0) {
            year = allYears.get(0);
        }
        if (province == null || province.equals("")) {
            province = "全国总计";
        }
        Map map = new HashMap();
        map.put("year", year);
        map.put("province", province);
        List<Adminpermission> pojoList = adminPermissionService.findByParams(province, year);
        List<Adminpermission> blsfPojoList = adminPermissionService.findByParams(null, year);

        if (pojoList != null && pojoList.size() > 0) {
            Adminpermission pojo = pojoList.get(0);

            map.put("gltcsq", new int[]{pojo.getApplyCntOrg(), pojo.getApplyCntPerson()});
            map.put("glslsq", new int[]{pojo.getApplyAcc(), pojo.getApplyReg()});
            map.put("glscxk", new int[]{pojo.getPermissionAuditAcc(), pojo.getPermissionAuditRej()});
            map.put("ajcl", new int[]{pojo.getModify(), pojo.getDelay(), pojo.getPermissionBack(), pojo.getPermissionRevocation(),
                    pojo.getPermissionDeactive(), pojo.getPermissionCancel()});
        }
        //查询许可收费
        if (blsfPojoList != null && blsfPojoList.size() != 0) {
            HashMap<String, Object> blsf = new HashMap<String, Object>();
            for (int j = 0; j < blsfPojoList.size(); j++) {
                Adminpermission pojoFzjg = blsfPojoList.get(j);
                String proviceName = provinceForShort(pojoFzjg.getProvince());
                if (proviceName.equals("全国总计")) {
                    continue;
                } else if (!proviceName.equals("全国总计") && !proviceName.equals("地方单位合计")) {
                    blsf.put(proviceName, pojoFzjg.getPermissionIncome());

                }
            }
            JSONObject jsonObject = JSONObject.fromObject(blsf);

            map.put("blsf", jsonObject);
        }
        return map;
    }

    /**
     * @param province
     * @return
     */
    public String provinceForShort(String province) {
        if (province.equals("北京市"))
            return "北京";
        else if (province.equals("天津市"))
            return "天津";
        else if (province.equals("重庆市"))
            return "重庆";
        else if (province.equals("上海市"))
            return "上海";
        else if (province.equals("河北省"))
            return "河北";
        else if (province.equals("山西省"))
            return "山西";
        else if (province.equals("辽宁省"))
            return "辽宁";
        else if (province.equals("吉林省"))
            return "吉林";
        else if (province.equals("黑龙江省"))
            return "黑龙江";
        else if (province.equals("江苏省"))
            return "江苏";
        else if (province.equals("浙江省"))
            return "浙江";
        else if (province.equals("安徽省"))
            return "安徽";
        else if (province.equals("福建省"))
            return "福建";
        else if (province.equals("江西省"))
            return "江西";
        else if (province.equals("山东省"))
            return "山东";
        else if (province.equals("河南省"))
            return "河南";
        else if (province.equals("湖北省"))
            return "湖北";
        else if (province.equals("湖南省"))
            return "湖南";
        else if (province.equals("广东省"))
            return "广东";
        else if (province.equals("海南省"))
            return "海南";
        else if (province.equals("四川省"))
            return "四川";
        else if (province.equals("贵州省"))
            return "贵州";
        else if (province.equals("云南省"))
            return "云南";
        else if (province.equals("陕西省"))
            return "陕西";
        else if (province.equals("甘肃省"))
            return "甘肃";
        else if (province.equals("青海省"))
            return "青海";
        else if (province.equals("台湾省"))
            return "台湾";
        else if (province.equals("内蒙古自治区"))
            return "内蒙古";
        else if (province.equals("广西壮族自治区"))
            return "广西";
        else if (province.equals("宁夏回族自治区"))
            return "宁夏";
        else if (province.equals("新疆维吾尔自治区"))
            return "新疆";
        else if (province.equals("西藏自治区"))
            return "西藏";
        else if (province.equals("香港特别行政区"))
            return "香港";
        else if (province.equals("澳门特别行政区"))
            return "澳门";
        else return province;
    }


}
