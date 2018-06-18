package com.ejunhai.qutihuo.controller;

import com.ejunhai.qutihuo.common.base.BaseController;
import com.ejunhai.qutihuo.statistical.model.AdminReviewCase;
import com.ejunhai.qutihuo.statistical.service.AdminReviewCaseService;
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
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("safety")
public class SafetyController extends BaseController {
    @Resource
    private AdminReviewCaseService adminReviewCaseService;

    @RequestMapping("/safeguard")
    public String safetyPage(HttpServletRequest request, HttpServletResponse response, ModelMap modelMap) throws IOException {
        return "safety/safeguard";
    }

    @RequestMapping("/adminreview")
    public String adminReviewPage(HttpServletRequest request, HttpServletResponse response, Model model) throws IOException {
        List<AdminReviewCase> pojoList = adminReviewCaseService.findByParams("全国总计", 2016);
        if(pojoList != null && pojoList.size() > 0){

            AdminReviewCase pojo = pojoList.get(0);
            model.addAttribute("sqjz", pojo.getSqjz());
            model.addAttribute("bqxs", pojo.getBqxs());
            model.addAttribute("sl", pojo.getSl());
            model.addAttribute("sqr_count", pojo.getSqr_count());
        }

        return "safety/adminreview";
    }

    @RequestMapping("/loadData")
    @ResponseBody
    public Map loadData(
            @RequestParam(value = "province", required = false) String province,
            @RequestParam(value = "year", required = false) int year){
        Map map = new HashMap();
        List<AdminReviewCase> pojoList = adminReviewCaseService.findByParams(province, year);
        List<AdminReviewCase> pojoQgList = adminReviewCaseService.findByParams("全国总计", year);
        if(pojoQgList != null && pojoQgList.size() > 0){
            AdminReviewCase qgPojo = pojoQgList.get(0);
            map.put("gl_qg", new int[]{qgPojo.getSqjz(), qgPojo.getBqxs(), qgPojo.getSl(), qgPojo.getSqr_count()}); //全国概览情况

            if(pojoList != null && pojoList.size() > 0){
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


}
