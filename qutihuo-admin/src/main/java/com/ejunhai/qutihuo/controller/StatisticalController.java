package com.ejunhai.qutihuo.controller;

import com.ejunhai.qutihuo.common.base.BaseController;
import com.ejunhai.qutihuo.statistical.dto.StandardReviseDto;
import com.ejunhai.qutihuo.statistical.service.ProvinceStandardService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
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
		Map<String,Object> jsonMap = new HashMap<>();
		StandardReviseDto standardReviseDto = provinceStandardService.acquireStandardRevise();
		modelMap.put("jsonData",standardReviseDto);
		return "statistical/standardRevise";
	}

}
