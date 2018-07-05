package com.ejunhai.qutihuo.controller;

import com.ejunhai.qutihuo.common.base.BaseController;
import com.ejunhai.qutihuo.statistical.model.AdminReviewCase;
import com.ejunhai.qutihuo.statistical.model.LawAndEdu;
import com.ejunhai.qutihuo.statistical.service.AdminReviewCaseService;
import com.ejunhai.qutihuo.statistical.service.LawAndEduService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("safety")
public class SafetyController extends BaseController {
    @Resource
    private AdminReviewCaseService adminReviewCaseService;
    @Resource
    private LawAndEduService lawAndEduService;

    @RequestMapping("/safeguard")
    public String safetyPage(HttpServletRequest request, HttpServletResponse response, ModelMap modelMap) throws IOException {
        return "safety/safeguard";
    }

    @RequestMapping("/adminreview")
    public String adminReviewPage(HttpServletRequest request, HttpServletResponse response, Model model) throws IOException {
        List<AdminReviewCase> pojoList = adminReviewCaseService.findByParams("全国总计", 2016);
        if (pojoList != null && pojoList.size() > 0) {

            AdminReviewCase pojo = pojoList.get(0);
            model.addAttribute("sqjz", pojo.getSqjz());
            model.addAttribute("bqxs", pojo.getBqxs());
            model.addAttribute("sl", pojo.getSl());
            model.addAttribute("sqr_count", pojo.getSqr_count());
        }

        return "safety/adminreview";
    }

    @RequestMapping("/lawandedu")
    public String lawAndEduPage(HttpServletRequest request, HttpServletResponse response, Model model) throws IOException {

        return "safety/lawandedu";
    }

    @RequestMapping("/adminReview/getDistinctYear")
    @ResponseBody
    public List<Integer> getDistinctYearForAdminReview(HttpServletRequest request, HttpServletResponse response, ModelMap modelMap) throws IOException {
        return adminReviewCaseService.getDistinctYear();
    }

    @RequestMapping("/adminReview/getDistinctProvince")
    @ResponseBody
    public List<String> getDistinctProvinceForAdminReview(HttpServletRequest request, HttpServletResponse response, ModelMap modelMap) throws IOException {
        return adminReviewCaseService.getDistinctProvince();
    }

    @RequestMapping("/lawAndEdu/getDistinctYear")
    @ResponseBody
    public List<Integer> getDistinctYearForLawAndEdu(HttpServletRequest request, HttpServletResponse response, ModelMap modelMap) throws IOException {
        return lawAndEduService.getDistinctYear();
    }

    @RequestMapping("/lawAndEdu/getDistinctProvince")
    @ResponseBody
    public List<String> getDistinctProvinceForLawAndEdu(HttpServletRequest request, HttpServletResponse response, ModelMap modelMap) throws IOException {
        return lawAndEduService.getDistinctProvince();
    }

    @RequestMapping("/loadData")
    @ResponseBody
    public Map loadData(
            @RequestParam(value = "province", required = false) String province,
            @RequestParam(value = "year", required = false) int year) {
        Map map = new HashMap();
        List<AdminReviewCase> pojoList = adminReviewCaseService.findByParams(province, year);
        List<AdminReviewCase> pojoQgList = adminReviewCaseService.findByParams("全国总计", year);
        if (pojoQgList != null && pojoQgList.size() > 0) {
            AdminReviewCase qgPojo = pojoQgList.get(0);
            map.put("gl_qg", new int[]{qgPojo.getSqjz(), qgPojo.getBqxs(), qgPojo.getSl(), qgPojo.getSqr_count()}); //全国概览情况

            if (pojoList != null && pojoList.size() > 0) {
                AdminReviewCase pojo = pojoList.get(0);

                map.put("gl", new int[]{pojo.getSqjz(), pojo.getBqxs(), pojo.getSl(), pojo.getSqr_count()});
                map.put("bsqr", new int[]{pojo.getBsqr_xzzf(), pojo.getBsqr_xjzfdbm(), pojo.getBsqr_xjzf(), pojo.getBsqr_djzfdbm(),
                        pojo.getBsqr_djzf(), pojo.getBsqr_sjzfdbm(), pojo.getBsqr_sjzf(), pojo.getBsqr_qt()});
                map.put("fyjg", new int[]{pojo.getFyjg_xjzfdbm(), pojo.getFyjg_xjzf(), pojo.getFyjg_djzfdbm(), pojo.getFyjg_djzf(),
                        pojo.getFyjg_sjzfdbm(), pojo.getFyjg_sjzf()});
                map.put("sqfysx", new int[]{pojo.getSqfysx_jl(), pojo.getSqfysx_ms(), pojo.getSqfysx_fk(), pojo.getSqfysx_xzcf_qt(),
                        pojo.getSqfysx_rs(), pojo.getSqfysx_cc(), pojo.getSqfysx_xzzs(), pojo.getSqfysx_xzxk(),
                        pojo.getSqfysx_xzqq(), pojo.getSqfysx_xzqr(), pojo.getSqfysx_xxgk(), pojo.getSqfysx_xzbzw(), pojo.getSqfysx_qt()});
                map.put("ysj", new int[]{pojo.getYsj_count(), pojo.getYsj_bh(), pojo.getYsj_wc(), pojo.getYsj_qrwf(), pojo.getYsj_cx(), pojo.getYsj_bg(),
                        pojo.getYsj_zllx(), pojo.getYsj_tj(), pojo.getYsj_zz_hjxy(), pojo.getYsj_zz_zychsq(), pojo.getYsj_zz_gbhchsq(),
                        pojo.getYsj_zz_qt(), pojo.getYsj_qt()});
                map.put("wsj", new int[]{pojo.getWsj(), qgPojo.getWsj()});
                map.put("xzpc", new int[]{pojo.getXzpc_count(), pojo.getXzpc_money()});

            }

        }

        return map;
    }

    @RequestMapping("/lawAndEdu/loadDataByProvinceAndYear")
    @ResponseBody
    public Map loadDataByProvinceForLawAndEdu(
            @RequestParam(value = "province", required = false, defaultValue = "全国总计") String province,
            @RequestParam(value = "year", required = false) Integer year) {
        Map mapResult = new HashMap();

        List<Integer> yearList = new ArrayList<>();
        List<Integer> allYears = lawAndEduService.getDistinctYear();
        if (allYears == null && allYears.size() == 0) {
            return null;
        }
        if (year == null) {
            yearList = allYears;
        } else if (year == 0) {
            yearList.add(allYears.get(0));
        } else {
            yearList.add(year);
        }
        List<Integer> emptyYear = new ArrayList<>();
        if (yearList != null && yearList.size() > 0) {
            for (int i = 0; i < yearList.size(); i++) {
                List<LawAndEdu> pojoList = lawAndEduService.findByParams(province, yearList.get(i));
                if (pojoList != null && pojoList.size() > 0) {
                    Map map = new HashMap();
                    LawAndEdu pojo = pojoList.get(0);

                    map.put("pfpxhd", new int[]{pojo.getPfpxhd_gbpx_c(), pojo.getPfpxhd_gbpx_r(), pojo.getPfpxhd_qypf_c(),
                            pojo.getPfpxhd_qypf_r(), pojo.getPfpxhd_sqpf_c(), pojo.getPfpxhd_sqpf_r()});
                    map.put("bycl", new int[]{pojo.getBycl_jc(), pojo.getBycl_hb(), pojo.getBycl_xccl(), pojo.getBycl_qt()});
                    map.put("jdzxfqk", new int[]{pojo.getJdzxfqk_flpx(), pojo.getJdzxfqk_sk()});
                    //查询机构数量
                    List<LawAndEdu> pojoListForFzjg = lawAndEduService.findByParams(null, yearList.get(i));
                    if (pojoListForFzjg != null && pojoListForFzjg.size() != 0) {
                        List<HashMap<String, Object>> fzjgList = new ArrayList<>();
                        for (int j = 0; j < pojoListForFzjg.size(); j++) {
                            HashMap<String, Object> mapFzjg = new HashMap();
                            LawAndEdu pojoFzjg = pojoListForFzjg.get(j);
                            String proviceName = lawAndEduService.provinceForShort(pojoFzjg.getProvince());
                            if (proviceName.equals("全国总计")) {
                                map.put("fzjgzs", pojoFzjg.getFzjg());
                            } else if (!proviceName.equals("全国总计") && !proviceName.equals("地方单位合计")) {
                                mapFzjg.put("name", proviceName);
                                mapFzjg.put("value", pojoFzjg.getFzjg());
                                fzjgList.add(mapFzjg);
                            }

                        }
                        map.put("fzjg", fzjgList);
                    }

                    map.put("zzry", new int[]{pojo.getZzry_cnt(), pojo.getZzry_bk(), pojo.getZzry_ls()});

                    mapResult.put(yearList.get(i), map);
                } else {
                    emptyYear.add(yearList.get(i));
                }
            }
            if (emptyYear != null && emptyYear.size() > 0) {
                yearList.removeAll(emptyYear);
            }

            mapResult.put("year", yearList);
            mapResult.put("latestYear", allYears.get(0));
        }

        return mapResult;
    }

}
