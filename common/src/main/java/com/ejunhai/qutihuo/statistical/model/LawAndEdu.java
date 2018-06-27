package com.ejunhai.qutihuo.statistical.model;

/**
 * 普法工作和法制机构人员表
 *
 * @author Liu Miao
 * @date 2018-06-16 21:18:30
 */
public class LawAndEdu implements Comparable{

    /**
     * ID
     */
    private String id;

    /**
     * 普法培训活动--干部培训--次
     */
    private Integer pfpxhd_gbpx_c;

    /**
     * 普法培训活动--干部培训--人
     */
    private Integer pfpxhd_gbpx_r;

    /**
     * 普法培训活动--企业普法--次
     */
    private Integer pfpxhd_qypf_c;

    /**
     * 普法培训活动--企业普法--人
     */
    private Integer pfpxhd_qypf_r;

    /**
     * 普法培训活动--社区普法--次
     */
    private Integer pfpxhd_sqpf_c;

    /**
     * 普法培训活动--社区普法--人
     */
    private Integer pfpxhd_sqpf_r;

    /**
     * 编印材料--教材
     */
    private Integer bycl_jc;

    /**
     * 编印材料--汇编
     */
    private Integer bycl_hb;

    /**
     * 编印材料--宣传材料
     */
    private Integer bycl_xccl;

    /**
     * 编印材料--其他
     */
    private Integer bycl_qt;

    /**
     * 局党组学法情况--法律培训
     */
    private Integer jdzxfqk_flpx;

    /**
     * 局党组学法情况--专题授课、党组学习
     */
    private Integer jdzxfqk_sk;

    /**
     * 法制机构
     */
    private Integer fzjg;

    /**
     * 专职从事法制工作的人员--人员总数
     */
    private Integer zzry_cnt;

    /**
     * 专职从事法制工作的人员--本科以上学历
     */
    private Integer zzry_bk;

    /**
     * 专职从事法制工作的人员--取得律师资格
     */
    private Integer zzry_ls;

    /**
     * 年份
     */
    private Integer year;

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

    public Integer getPfpxhd_gbpx_c() {
        return pfpxhd_gbpx_c;
    }

    public void setPfpxhd_gbpx_c(Integer pfpxhd_gbpx_c) {
        this.pfpxhd_gbpx_c = pfpxhd_gbpx_c;
    }

    public Integer getPfpxhd_gbpx_r() {
        return pfpxhd_gbpx_r;
    }

    public void setPfpxhd_gbpx_r(Integer pfpxhd_gbpx_r) {
        this.pfpxhd_gbpx_r = pfpxhd_gbpx_r;
    }

    public Integer getPfpxhd_qypf_c() {
        return pfpxhd_qypf_c;
    }

    public void setPfpxhd_qypf_c(Integer pfpxhd_qypf_c) {
        this.pfpxhd_qypf_c = pfpxhd_qypf_c;
    }

    public Integer getPfpxhd_qypf_r() {
        return pfpxhd_qypf_r;
    }

    public void setPfpxhd_qypf_r(Integer pfpxhd_qypf_r) {
        this.pfpxhd_qypf_r = pfpxhd_qypf_r;
    }

    public Integer getPfpxhd_sqpf_c() {
        return pfpxhd_sqpf_c;
    }

    public void setPfpxhd_sqpf_c(Integer pfpxhd_sqpf_c) {
        this.pfpxhd_sqpf_c = pfpxhd_sqpf_c;
    }

    public Integer getPfpxhd_sqpf_r() {
        return pfpxhd_sqpf_r;
    }

    public void setPfpxhd_sqpf_r(Integer pfpxhd_sqpf_r) {
        this.pfpxhd_sqpf_r = pfpxhd_sqpf_r;
    }

    public Integer getBycl_jc() {
        return bycl_jc;
    }

    public void setBycl_jc(Integer bycl_jc) {
        this.bycl_jc = bycl_jc;
    }

    public Integer getBycl_hb() {
        return bycl_hb;
    }

    public void setBycl_hb(Integer bycl_hb) {
        this.bycl_hb = bycl_hb;
    }

    public Integer getBycl_xccl() {
        return bycl_xccl;
    }

    public void setBycl_xccl(Integer bycl_xccl) {
        this.bycl_xccl = bycl_xccl;
    }

    public Integer getBycl_qt() {
        return bycl_qt;
    }

    public void setBycl_qt(Integer bycl_qt) {
        this.bycl_qt = bycl_qt;
    }

    public Integer getJdzxfqk_flpx() {
        return jdzxfqk_flpx;
    }

    public void setJdzxfqk_flpx(Integer jdzxfqk_flpx) {
        this.jdzxfqk_flpx = jdzxfqk_flpx;
    }

    public Integer getJdzxfqk_sk() {
        return jdzxfqk_sk;
    }

    public void setJdzxfqk_sk(Integer jdzxfqk_sk) {
        this.jdzxfqk_sk = jdzxfqk_sk;
    }

    public Integer getFzjg() {
        return fzjg;
    }

    public void setFzjg(Integer fzjg) {
        this.fzjg = fzjg;
    }

    public Integer getZzry_cnt() {
        return zzry_cnt;
    }

    public void setZzry_cnt(Integer zzry_cnt) {
        this.zzry_cnt = zzry_cnt;
    }

    public Integer getZzry_bk() {
        return zzry_bk;
    }

    public void setZzry_bk(Integer zzry_bk) {
        this.zzry_bk = zzry_bk;
    }

    public Integer getZzry_ls() {
        return zzry_ls;
    }

    public void setZzry_ls(Integer zzry_ls) {
        this.zzry_ls = zzry_ls;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    @Override
    public int compareTo(Object obj){
        if (!(obj instanceof LawAndEdu))
            throw new RuntimeException("no LawAndEdu");
        LawAndEdu lawAndEdu = (LawAndEdu)obj;
        int result = this.getProvince().compareTo(lawAndEdu.getProvince());
        return result;
    }
}
