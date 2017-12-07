package com.ejunhai.qutihuo.controller;

import com.ejunhai.qutihuo.common.base.BaseController;
import com.ejunhai.qutihuo.statistical.model.ProvinceStandard;
import com.ejunhai.qutihuo.statistical.service.ProvinceStandardService;
import com.ejunhai.qutihuo.system.dto.SystemUserDto;
import net.sf.json.JSON;
import net.sf.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.*;

@Controller
@RequestMapping("statistical")
public class StatisticalController extends BaseController {

	@Resource
	private ProvinceStandardService provinceStandardService;

	@RequestMapping("/standardRevise")
	public String standardRevise(HttpServletRequest request, ModelMap modelMap) {
		List<Integer> yearList = provinceStandardService.getDistinctYear();
		for(Integer year:yearList){
			List<ProvinceStandard> provinceStandardsInYear =provinceStandardService.read(year);
			JSONObject json = JSONObject.fromObject(provinceStandardsInYear);
			modelMap.put(String.valueOf(year),json);
		}
		List<ProvinceStandard> provinceStandardList = provinceStandardService.read();
		System.out.println(provinceStandardList.get(0).getId());
		return "statistical/standardRevise";
	}

}
