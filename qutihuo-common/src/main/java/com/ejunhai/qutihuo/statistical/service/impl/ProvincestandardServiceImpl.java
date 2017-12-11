package com.ejunhai.qutihuo.statistical.service.impl;

import com.ejunhai.qutihuo.statistical.dao.ProvinceStandardMapper;
import com.ejunhai.qutihuo.statistical.dto.StandardReviseDto;
import com.ejunhai.qutihuo.statistical.model.ProvinceStandard;
import com.ejunhai.qutihuo.statistical.service.ProvinceStandardService;
import org.springframework.stereotype.Service;
import javax.annotation.Resource;
import java.util.*;

/**
 * SystemUser Service 实现类
 * 
 * @author parcel
 * 
 * @date 2014-12-10 21:22:36
 * 
 */
@Service("provinceStandardService")
public class ProvincestandardServiceImpl implements ProvinceStandardService {

	@Resource
	private ProvinceStandardMapper provinceStandardMapper;

	@Override
	public StandardReviseDto acquireStandardRevise(){
		StandardReviseDto standardReviseDto = new StandardReviseDto();
		standardReviseDto.setyAxisData(yAxisData());			//step one

		List<Integer> years = provinceStandardMapper.getDistinctYear();		//step two
		standardReviseDto.setTimeLineData(timeLineData(years));

		List<ProvinceStandard> nationalStatistics = provinceStandardMapper.readNationalStatistics();		//step three
		Map<Integer,ProvinceStandard> yearNationalStatistics = mapping4year(nationalStatistics);
		Map<Integer,List<List<StandardReviseDto.SumarryObj>>> seriesData = seriesData(yearNationalStatistics,years);
		standardReviseDto.setSeriesOneData(seriesData.get(1));
		standardReviseDto.setSeriesTwoData(seriesData.get(2));

		List<ProvinceStandard> provinceStatistics = provinceStandardMapper.readProvinceStatistics();		//step four
		Map<Integer,Set<ProvinceStandard>> yearProvinceStatistics = mapping4province(provinceStatistics);
		Integer[] dataAll_1 = {253,220,215,211,208,205,203,199,185,179,169,140,139,137,131,124,122,121,118,94,94,93,90,90,78,71,67,63,52,50,10};
		Integer[] dataAll_2 = {253,220,215,444,208,205,203,199,185,421,169,140,139,137,131,124,122,121,118,222,94,93,90,90,78,71,67,63,52,50,44};

		return standardReviseDto;
	}
	private Set<String> yAxisData(){
		TreeSet<String> yAxisData = new TreeSet<String>();
		yAxisData.add("安徽省");
		yAxisData.add("四川省");
		yAxisData.add("江苏省");
		yAxisData.add("山西省");
		yAxisData.add("广西壮族自治区");
		yAxisData.add("山东省");
		yAxisData.add("辽宁省");
		yAxisData.add("黑龙江省");
		yAxisData.add("吉林省");
		yAxisData.add("河南省");
		yAxisData.add("广东省");
		yAxisData.add("新疆维吾尔自治区");
		yAxisData.add("甘肃省");
		yAxisData.add("宁夏回族自治区");
		yAxisData.add("内蒙古自治区");
		yAxisData.add("河北省");
		yAxisData.add("天津市");
		yAxisData.add("北京市");
		yAxisData.add("湖南省");
		yAxisData.add("湖北省");
		yAxisData.add("贵州省");
		yAxisData.add("云南省");
		yAxisData.add("福建省");
		yAxisData.add("重庆市");
		yAxisData.add("海南省");
		yAxisData.add("上海市");
		yAxisData.add("陕西省");
		yAxisData.add("青海省");
		yAxisData.add("江西省");
		yAxisData.add("浙江省");
		yAxisData.add("西藏自治区");
		return yAxisData;
	}

	List<String> timeLineData(List<Integer> years){
		List<String> result = new ArrayList<String>();
		for(Integer year:years){
			result.add(String.valueOf(year)+"-01-01");
		}
		return result;
	}

	Map<Integer,List<List<StandardReviseDto.SumarryObj>>> seriesData(Map<Integer,ProvinceStandard> yearNationalStatistics, List<Integer> years){
		Map<Integer,List<List<StandardReviseDto.SumarryObj>>> result = new HashMap<Integer, List<List<StandardReviseDto.SumarryObj>>>();
		StandardReviseDto standardReviseDto = new StandardReviseDto();
		List<List<StandardReviseDto.SumarryObj>> one = new LinkedList<List<StandardReviseDto.SumarryObj>>();
		List<List<StandardReviseDto.SumarryObj>> two = new LinkedList<List<StandardReviseDto.SumarryObj>>();
		for(Integer year:years){
			List<StandardReviseDto.SumarryObj> yearDataOne = new LinkedList<StandardReviseDto.SumarryObj>();
			StandardReviseDto.SumarryObj zdObj = standardReviseDto.new SumarryObj();
			ProvinceStandard yearStatistics = yearNationalStatistics.get(year);
			zdObj.setName("制订");
			zdObj.setValue(yearStatistics.getBnd_zxd_zd());
			yearDataOne.add(zdObj);
			StandardReviseDto.SumarryObj xdObj = standardReviseDto.new SumarryObj();
			xdObj.setName("修订");
			xdObj.setValue(yearStatistics.getBnd_zxd_xd());
			yearDataOne.add(xdObj);

			List<StandardReviseDto.SumarryObj> yearDataTwo = new LinkedList<StandardReviseDto.SumarryObj>();
			StandardReviseDto.SumarryObj tjObj = standardReviseDto.new SumarryObj();
			tjObj.setName("推荐");
			tjObj.setValue(yearStatistics.getBnd_xz_tj());
			yearDataTwo.add(tjObj);
			StandardReviseDto.SumarryObj qzObj = standardReviseDto.new SumarryObj();
			qzObj.setName("强制");
			qzObj.setValue(yearStatistics.getBnd_xz_qz());
			yearDataTwo.add(qzObj);

			one.add(yearDataOne);
			two.add(yearDataTwo);
		}
		result.put(1,one);
		result.put(2,two);
		return result;
	}

	//type==0:按年份映射，type==1:按年和省映射
	Map<Integer,ProvinceStandard> mapping4year(List<ProvinceStandard> standardList) {
		Map<Integer, ProvinceStandard> result = new HashMap<Integer, ProvinceStandard>();
		for (ProvinceStandard standard : standardList) {
			result.put(standard.getYear(), standard);
		}
		return result;

	}

	Map<Integer,Set<ProvinceStandard>> mapping4province(List<ProvinceStandard> standardList){
		Map<Integer,Set<ProvinceStandard>> result = new HashMap<Integer,Set<ProvinceStandard>>();
		List<ProvinceStandard> list = new ArrayList<ProvinceStandard>();
		for (ProvinceStandard standard:standardList) {
			Set<ProvinceStandard> V = result.get(standard.getYear());
			if(null!=V){
				V = new TreeSet<ProvinceStandard>();
				V.add(standard);
				result.put(standard.getYear(),V);

			}else{
				result.get(standard.getYear()).add(standard);
			}
		}
		return result;
	}
}
