package com.ejunhai.qutihuo.basis.model;

import java.io.Serializable;
import java.sql.Timestamp;

/**
 * 省份标准计量表
 * 
 * @author parcel
 * @date 2015-04-12 21:36:37
 */
public class ProvinceStandard implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 551457775828792143L;

	/**
     * 
     */
	private Integer id;

	/**
	 * 年份
	 */
	private Integer year;

	/**
	 * 按制、修订分-制定
	 */
	private Integer bndZxdZd;

	/**
	 * 按制、修订分-修订
	 */
	private Integer bndZxdXd;

	/**
	 * 按性质分-强制性
	 */
	private Integer bndXzQz;

	/**
	 * 按性质分-推荐性
	 */
	private Integer bndXzTj;

	/**
	 * 省份
	 */
	private String province;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getYear() {
		return year;
	}

	public void setYear(Integer year) {
		this.year = year;
	}

	public Integer getBndZxdZd() {
		return bndZxdZd;
	}

	public void setBndZxdZd(Integer bndZxdZd) {
		this.bndZxdZd = bndZxdZd;
	}

	public Integer getBndZxdXd() {
		return bndZxdXd;
	}

	public void setBndZxdXd(Integer bndZxdXd) {
		this.bndZxdXd = bndZxdXd;
	}

	public Integer getBndXzQz() {
		return bndXzQz;
	}

	public void setBndXzQz(Integer bndXzQz) {
		this.bndXzQz = bndXzQz;
	}

	public Integer getBndXzTj() {
		return bndXzTj;
	}

	public void setBndXzTj(Integer bndXzTj) {
		this.bndXzTj = bndXzTj;
	}

	public String getProvince() {
		return province;
	}

	public void setProvince(String province) {
		this.province = province;
	}
}
