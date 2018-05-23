package com.ejunhai.qutihuo.statistical.model;

import java.math.BigDecimal;

/**
 * 特种设备信息表
 *
 * @author Leo
 * @date 2017-12-06 21:18:30
 */

public class SpecialDevice implements Comparable{

    /**
     * ID
     */
    private String id;

    /**
     * 年份
     */
    private Integer year;

    /**
     * 总定检率
     */
    private BigDecimal zhdjl;

    /**
     * 锅炉--总检验数
     */
    private Integer gl_yjs;

    /**
     * 锅炉--合格数
     */
    private Integer gl_sjs;

    /**
     * 锅炉--定检率
     */
    private BigDecimal gl_djl;

    /**
     * 压力容器--总检验数
     */
    private Integer ylrq_yjs;

    /**
     * 压力容器--合格数
     */
    private Integer ylrq_sjs;

    /**
     * 压力容器--定检率
     */
    private BigDecimal ylrq_djl;

    /**
     * 压力管道--总检验数
     */
    private Integer ylgd_yjs;

    /**
     * 压力管道--合格数
     */
    private Integer ylgd_sjs;

    /**
     * 压力管道--定检率
     */
    private BigDecimal ylgd_djl;

    /**
     * 气瓶--总检验数
     */
    private Integer qp_yjs;

    /**
     * 气瓶--合格数
     */
    private Integer qp_sjs;

    /**
     * 气瓶--定检率
     */
    private BigDecimal qp_djl;

    /**
     * 电梯--总检验数
     */
    private Integer dt_yjs;

    /**
     * 电梯--合格数
     */
    private Integer dt_sjs;

    /**
     * 电梯--定检率
     */
    private BigDecimal dt_djl;

    /**
     * 起重机械--总检验数
     */
    private Integer qzjx_yjs;

    /**
     * 起重机械--合格数
     */
    private Integer qzjx_sjs;

    /**
     * 起重机械--定检率
     */
    private BigDecimal qzjx_djl;

    /**
     * 客运索道--总检验数
     */
    private Integer kysd_yjs;

    /**
     * 客运索道--合格数
     */
    private Integer kysd_sjs;

    /**
     * 客运索道--定检率
     */
    private BigDecimal kysd_djl;

    /**
     * 大型游乐设施--总检验数
     */
    private Integer dxylss_yjs;

    /**
     * 大型游乐设施--合格数
     */
    private Integer dxylss_sjs;

    /**
     * 大型游乐设施--定检率
     */
    private BigDecimal dxylss_djl;

    /**
     * 场内机动车辆--总检验数
     */
    private Integer cnjdcl_yjs;

    /**
     * 场内机动车辆--合格数
     */
    private Integer cnjdcl_sjs;

    /**
     * 场内机动车辆--定检率
     */
    private BigDecimal cnjdcl_djl;

    /**
     * 省份
     */
    private String province;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public BigDecimal getZhdjl() {
        return zhdjl;
    }

    public void setZhdjl(BigDecimal zhdjl) {
        this.zhdjl = zhdjl;
    }

    public Integer getGl_yjs() {
        return gl_yjs;
    }

    public void setGl_yjs(Integer gl_yjs) {
        this.gl_yjs = gl_yjs;
    }

    public Integer getGl_sjs() {
        return gl_sjs;
    }

    public void setGl_sjs(Integer gl_sjs) {
        this.gl_sjs = gl_sjs;
    }

    public BigDecimal getGl_djl() {
        return gl_djl;
    }

    public void setGl_djl(BigDecimal gl_djl) {
        this.gl_djl = gl_djl;
    }

    public Integer getYlrq_yjs() {
        return ylrq_yjs;
    }

    public void setYlrq_yjs(Integer ylrq_yjs) {
        this.ylrq_yjs = ylrq_yjs;
    }

    public Integer getYlrq_sjs() {
        return ylrq_sjs;
    }

    public void setYlrq_sjs(Integer ylrq_sjs) {
        this.ylrq_sjs = ylrq_sjs;
    }

    public BigDecimal getYlrq_djl() {
        return ylrq_djl;
    }

    public void setYlrq_djl(BigDecimal ylrq_djl) {
        this.ylrq_djl = ylrq_djl;
    }

    public Integer getYlgd_yjs() {
        return ylgd_yjs;
    }

    public void setYlgd_yjs(Integer ylgd_yjs) {
        this.ylgd_yjs = ylgd_yjs;
    }

    public Integer getYlgd_sjs() {
        return ylgd_sjs;
    }

    public void setYlgd_sjs(Integer ylgd_sjs) {
        this.ylgd_sjs = ylgd_sjs;
    }

    public BigDecimal getYlgd_djl() {
        return ylgd_djl;
    }

    public void setYlgd_djl(BigDecimal ylgd_djl) {
        this.ylgd_djl = ylgd_djl;
    }

    public Integer getQp_yjs() {
        return qp_yjs;
    }

    public void setQp_yjs(Integer qp_yjs) {
        this.qp_yjs = qp_yjs;
    }

    public Integer getQp_sjs() {
        return qp_sjs;
    }

    public void setQp_sjs(Integer qp_sjs) {
        this.qp_sjs = qp_sjs;
    }

    public BigDecimal getQp_djl() {
        return qp_djl;
    }

    public void setQp_djl(BigDecimal qp_djl) {
        this.qp_djl = qp_djl;
    }

    public Integer getDt_yjs() {
        return dt_yjs;
    }

    public void setDt_yjs(Integer dt_yjs) {
        this.dt_yjs = dt_yjs;
    }

    public Integer getDt_sjs() {
        return dt_sjs;
    }

    public void setDt_sjs(Integer dt_sjs) {
        this.dt_sjs = dt_sjs;
    }

    public BigDecimal getDt_djl() {
        return dt_djl;
    }

    public void setDt_djl(BigDecimal dt_djl) {
        this.dt_djl = dt_djl;
    }

    public Integer getQzjx_yjs() {
        return qzjx_yjs;
    }

    public void setQzjx_yjs(Integer qzjx_yjs) {
        this.qzjx_yjs = qzjx_yjs;
    }

    public Integer getQzjx_sjs() {
        return qzjx_sjs;
    }

    public void setQzjx_sjs(Integer qzjx_sjs) {
        this.qzjx_sjs = qzjx_sjs;
    }

    public BigDecimal getQzjx_djl() {
        return qzjx_djl;
    }

    public void setQzjx_djl(BigDecimal qzjx_djl) {
        this.qzjx_djl = qzjx_djl;
    }

    public Integer getKysd_yjs() {
        return kysd_yjs;
    }

    public void setKysd_yjs(Integer kysd_yjs) {
        this.kysd_yjs = kysd_yjs;
    }

    public Integer getKysd_sjs() {
        return kysd_sjs;
    }

    public void setKysd_sjs(Integer kysd_sjs) {
        this.kysd_sjs = kysd_sjs;
    }

    public BigDecimal getKysd_djl() {
        return kysd_djl;
    }

    public void setKysd_djl(BigDecimal kysd_djl) {
        this.kysd_djl = kysd_djl;
    }

    public Integer getDxylss_yjs() {
        return dxylss_yjs;
    }

    public void setDxylss_yjs(Integer dxylss_yjs) {
        this.dxylss_yjs = dxylss_yjs;
    }

    public Integer getDxylss_sjs() {
        return dxylss_sjs;
    }

    public void setDxylss_sjs(Integer dxylss_sjs) {
        this.dxylss_sjs = dxylss_sjs;
    }

    public BigDecimal getDxylss_djl() {
        return dxylss_djl;
    }

    public void setDxylss_djl(BigDecimal dxylss_djl) {
        this.dxylss_djl = dxylss_djl;
    }

    public Integer getCnjdcl_yjs() {
        return cnjdcl_yjs;
    }

    public void setCnjdcl_yjs(Integer cnjdcl_yjs) {
        this.cnjdcl_yjs = cnjdcl_yjs;
    }

    public Integer getCnjdcl_sjs() {
        return cnjdcl_sjs;
    }

    public void setCnjdcl_sjs(Integer cnjdcl_sjs) {
        this.cnjdcl_sjs = cnjdcl_sjs;
    }

    public BigDecimal getCnjdcl_djl() {
        return cnjdcl_djl;
    }

    public void setCnjdcl_djl(BigDecimal cnjdcl_djl) {
        this.cnjdcl_djl = cnjdcl_djl;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    @Override
    public int compareTo(Object obj){
        if (!(obj instanceof SpecialDevice))
            throw new RuntimeException("no SpecialDevice");
        SpecialDevice ps = (SpecialDevice)obj;
        int result = this.getProvince().compareTo(ps.getProvince());
        return result==0?this.getYear().compareTo(ps.getYear()):result;
    }
}
