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
     * 上期结转
     */
    private Integer sqjz;

    /**
     * 本期新收
     */
    private Integer bqxs;

    /**
     * 受理
     */
    private Integer sl;

    /**
     * 申请人总数
     */
    private Integer sqr_count;

    /**
     * 被申请人---乡镇政府
     */
    private Integer bsqr_xzzf;

    /**
     * 被申请人---县级政府的部门
     */
    private Integer bsqr_xjzfdbm;

    /**
     * 被申请人---县级政府
     */
    private Integer bsqr_xjzf;

    /**
     * 被申请人---地(市)级的部门
     */
    private Integer bsqr_djzfdbm;

    /**
     * 被申请人---地(市)级政府
     */
    private Integer bsqr_djzf;

    /**
     * 被申请人---省级政府的部门
     */
    private Integer bsqr_sjzfdbm;

    /**
     * 被申请人---省部级行政机关
     */
    private Integer bsqr_sjzf;

    /**
     * 被申请人---其他
     */
    private Integer bsqr_qt;

    /**
     * 复议机关--县级政府的部门
     */
    private Integer fyjg_xjzfdbm;

    /**
     * 复议机关--县级政府
     */
    private Integer fyjg_xjzf;

    /**
     * 复议机关--地(市)级的部门
     */
    private Integer fyjg_djzfdbm;

    /**
     * 复议机关--地(市)级政府
     */
    private Integer fyjg_djzf;

    /**
     * 复议机关--省级政府的部门
     */
    private Integer fyjg_sjzfdbm;

    /**
     * 复议机关--省部级行政机关
     */
    private Integer fyjg_sjzf;

    /**
     * 申请复议事项--行政处罚--拘留
     */
    private Integer sqfysx_jl;

    /**
     * 申请复议事项--行政处罚--没收
     */
    private Integer sqfysx_ms;

    /**
     * 申请复议事项--行政处罚--罚款
     */
    private Integer sqfysx_fk;

    /**
     * 申请复议事项--行政处罚--其他
     */
    private Integer sqfysx_xzcf_qt;

    /**
     * 申请复议事项--行政强制措施--对人身的强制措施
     */
    private Integer sqfysx_rs;

    /**
     * 申请复议事项--行政强制措施--对财产的强制措施
     */
    private Integer sqfysx_cc;

    /**
     * 申请复议事项--行政征收
     */
    private Integer sqfysx_xzzs;

    /**
     * 申请复议事项--行政许可
     */
    private Integer sqfysx_xzxk;

    /**
     * 申请复议事项--行政确权
     */
    private Integer sqfysx_xzqq;

    /**
     * 申请复议事项--行政确认
     */
    private Integer sqfysx_xzqr;

    /**
     * 申请复议事项--信息公开
     */
    private Integer sqfysx_xxgk;

    /**
     * 申请复议事项--行政不作为
     */
    private Integer sqfysx_xzbzw;

    /**
     * 申请复议事项--其他
     */
    private Integer sqfysx_qt;

    /**
     * 已审结--总计
     */
    private Integer ysj_count;

    /**
     * 已审结--驳回
     */
    private Integer ysj_bh;

    /**
     * 已审结--维持
     */
    private Integer ysj_wc;

    /**
     * 已审结--确认违法
     */
    private Integer ysj_qrwf;

    /**
     * 已审结--撤销
     */
    private Integer ysj_cx;

    /**
     * 已审结--变更
     */
    private Integer ysj_bg;

    /**
     * 已审结--责令履行
     */
    private Integer ysj_zllx;

    /**
     * 已审结--调解
     */
    private Integer ysj_tj;

    /**
     * 已审结--终止--和解协议
     */
    private Integer ysj_zz_hjxy;

    /**
     * 已审结--终止--自愿撤回申请
     */
    private Integer ysj_zz_zychsq;

    /**
     * 已审结--终止--被申请人改变后撤回申请
     */
    private Integer ysj_zz_gbhchsq;

    /**
     * 已审结--终止--其他
     */
    private Integer ysj_zz_qt;

    /**
     * 已审结--其他
     */
    private Integer ysj_qt;

    /**
     * 未审结
     */
    private Integer wsj;

    /**
     * 行政赔偿--件数
     */
    private Integer xzpc_count;

    /**
     * 行政赔偿--赔偿金额（元）
     */
    private Integer xzpc_money;

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

    public Integer getSqjz() {
        return sqjz;
    }

    public void setSqjz(Integer sqjz) {
        this.sqjz = sqjz;
    }

    public Integer getBqxs() {
        return bqxs;
    }

    public void setBqxs(Integer bqxs) {
        this.bqxs = bqxs;
    }

    public Integer getSl() {
        return sl;
    }

    public void setSl(Integer sl) {
        this.sl = sl;
    }

    public Integer getSqr_count() {
        return sqr_count;
    }

    public void setSqr_count(Integer sqr_count) {
        this.sqr_count = sqr_count;
    }

    public Integer getBsqr_xzzf() {
        return bsqr_xzzf;
    }

    public void setBsqr_xzzf(Integer bsqr_xzzf) {
        this.bsqr_xzzf = bsqr_xzzf;
    }

    public Integer getBsqr_xjzfdbm() {
        return bsqr_xjzfdbm;
    }

    public void setBsqr_xjzfdbm(Integer bsqr_xjzfdbm) {
        this.bsqr_xjzfdbm = bsqr_xjzfdbm;
    }

    public Integer getBsqr_xjzf() {
        return bsqr_xjzf;
    }

    public void setBsqr_xjzf(Integer bsqr_xjzf) {
        this.bsqr_xjzf = bsqr_xjzf;
    }

    public Integer getBsqr_djzfdbm() {
        return bsqr_djzfdbm;
    }

    public void setBsqr_djzfdbm(Integer bsqr_djzfdbm) {
        this.bsqr_djzfdbm = bsqr_djzfdbm;
    }

    public Integer getBsqr_djzf() {
        return bsqr_djzf;
    }

    public void setBsqr_djzf(Integer bsqr_djzf) {
        this.bsqr_djzf = bsqr_djzf;
    }

    public Integer getBsqr_sjzfdbm() {
        return bsqr_sjzfdbm;
    }

    public void setBsqr_sjzfdbm(Integer bsqr_sjzfdbm) {
        this.bsqr_sjzfdbm = bsqr_sjzfdbm;
    }

    public Integer getBsqr_sjzf() {
        return bsqr_sjzf;
    }

    public void setBsqr_sjzf(Integer bsqr_sjzf) {
        this.bsqr_sjzf = bsqr_sjzf;
    }

    public Integer getBsqr_qt() {
        return bsqr_qt;
    }

    public void setBsqr_qt(Integer bsqr_qt) {
        this.bsqr_qt = bsqr_qt;
    }

    public Integer getFyjg_xjzfdbm() {
        return fyjg_xjzfdbm;
    }

    public void setFyjg_xjzfdbm(Integer fyjg_xjzfdbm) {
        this.fyjg_xjzfdbm = fyjg_xjzfdbm;
    }

    public Integer getFyjg_xjzf() {
        return fyjg_xjzf;
    }

    public void setFyjg_xjzf(Integer fyjg_xjzf) {
        this.fyjg_xjzf = fyjg_xjzf;
    }

    public Integer getFyjg_djzfdbm() {
        return fyjg_djzfdbm;
    }

    public void setFyjg_djzfdbm(Integer fyjg_djzfdbm) {
        this.fyjg_djzfdbm = fyjg_djzfdbm;
    }

    public Integer getFyjg_djzf() {
        return fyjg_djzf;
    }

    public void setFyjg_djzf(Integer fyjg_djzf) {
        this.fyjg_djzf = fyjg_djzf;
    }

    public Integer getFyjg_sjzfdbm() {
        return fyjg_sjzfdbm;
    }

    public void setFyjg_sjzfdbm(Integer fyjg_sjzfdbm) {
        this.fyjg_sjzfdbm = fyjg_sjzfdbm;
    }

    public Integer getFyjg_sjzf() {
        return fyjg_sjzf;
    }

    public void setFyjg_sjzf(Integer fyjg_sjzf) {
        this.fyjg_sjzf = fyjg_sjzf;
    }

    public Integer getSqfysx_jl() {
        return sqfysx_jl;
    }

    public void setSqfysx_jl(Integer sqfysx_jl) {
        this.sqfysx_jl = sqfysx_jl;
    }

    public Integer getSqfysx_ms() {
        return sqfysx_ms;
    }

    public void setSqfysx_ms(Integer sqfysx_ms) {
        this.sqfysx_ms = sqfysx_ms;
    }

    public Integer getSqfysx_fk() {
        return sqfysx_fk;
    }

    public void setSqfysx_fk(Integer sqfysx_fk) {
        this.sqfysx_fk = sqfysx_fk;
    }

    public Integer getSqfysx_xzcf_qt() {
        return sqfysx_xzcf_qt;
    }

    public void setSqfysx_xzcf_qt(Integer sqfysx_xzcf_qt) {
        this.sqfysx_xzcf_qt = sqfysx_xzcf_qt;
    }

    public Integer getSqfysx_rs() {
        return sqfysx_rs;
    }

    public void setSqfysx_rs(Integer sqfysx_rs) {
        this.sqfysx_rs = sqfysx_rs;
    }

    public Integer getSqfysx_cc() {
        return sqfysx_cc;
    }

    public void setSqfysx_cc(Integer sqfysx_cc) {
        this.sqfysx_cc = sqfysx_cc;
    }

    public Integer getSqfysx_xzzs() {
        return sqfysx_xzzs;
    }

    public void setSqfysx_xzzs(Integer sqfysx_xzzs) {
        this.sqfysx_xzzs = sqfysx_xzzs;
    }

    public Integer getSqfysx_xzxk() {
        return sqfysx_xzxk;
    }

    public void setSqfysx_xzxk(Integer sqfysx_xzxk) {
        this.sqfysx_xzxk = sqfysx_xzxk;
    }

    public Integer getSqfysx_xzqq() {
        return sqfysx_xzqq;
    }

    public void setSqfysx_xzqq(Integer sqfysx_xzqq) {
        this.sqfysx_xzqq = sqfysx_xzqq;
    }

    public Integer getSqfysx_xzqr() {
        return sqfysx_xzqr;
    }

    public void setSqfysx_xzqr(Integer sqfysx_xzqr) {
        this.sqfysx_xzqr = sqfysx_xzqr;
    }

    public Integer getSqfysx_xxgk() {
        return sqfysx_xxgk;
    }

    public void setSqfysx_xxgk(Integer sqfysx_xxgk) {
        this.sqfysx_xxgk = sqfysx_xxgk;
    }

    public Integer getSqfysx_xzbzw() {
        return sqfysx_xzbzw;
    }

    public void setSqfysx_xzbzw(Integer sqfysx_xzbzw) {
        this.sqfysx_xzbzw = sqfysx_xzbzw;
    }

    public Integer getSqfysx_qt() {
        return sqfysx_qt;
    }

    public void setSqfysx_qt(Integer sqfysx_qt) {
        this.sqfysx_qt = sqfysx_qt;
    }

    public Integer getYsj_count() {
        return ysj_count;
    }

    public void setYsj_count(Integer ysj_count) {
        this.ysj_count = ysj_count;
    }

    public Integer getYsj_bh() {
        return ysj_bh;
    }

    public void setYsj_bh(Integer ysj_bh) {
        this.ysj_bh = ysj_bh;
    }

    public Integer getYsj_wc() {
        return ysj_wc;
    }

    public void setYsj_wc(Integer ysj_wc) {
        this.ysj_wc = ysj_wc;
    }

    public Integer getYsj_qrwf() {
        return ysj_qrwf;
    }

    public void setYsj_qrwf(Integer ysj_qrwf) {
        this.ysj_qrwf = ysj_qrwf;
    }

    public Integer getYsj_cx() {
        return ysj_cx;
    }

    public void setYsj_cx(Integer ysj_cx) {
        this.ysj_cx = ysj_cx;
    }

    public Integer getYsj_bg() {
        return ysj_bg;
    }

    public void setYsj_bg(Integer ysj_bg) {
        this.ysj_bg = ysj_bg;
    }

    public Integer getYsj_zllx() {
        return ysj_zllx;
    }

    public void setYsj_zllx(Integer ysj_zllx) {
        this.ysj_zllx = ysj_zllx;
    }

    public Integer getYsj_tj() {
        return ysj_tj;
    }

    public void setYsj_tj(Integer ysj_tj) {
        this.ysj_tj = ysj_tj;
    }

    public Integer getYsj_zz_hjxy() {
        return ysj_zz_hjxy;
    }

    public void setYsj_zz_hjxy(Integer ysj_zz_hjxy) {
        this.ysj_zz_hjxy = ysj_zz_hjxy;
    }

    public Integer getYsj_zz_zychsq() {
        return ysj_zz_zychsq;
    }

    public void setYsj_zz_zychsq(Integer ysj_zz_zychsq) {
        this.ysj_zz_zychsq = ysj_zz_zychsq;
    }

    public Integer getYsj_zz_gbhchsq() {
        return ysj_zz_gbhchsq;
    }

    public void setYsj_zz_gbhchsq(Integer ysj_zz_gbhchsq) {
        this.ysj_zz_gbhchsq = ysj_zz_gbhchsq;
    }

    public Integer getYsj_zz_qt() {
        return ysj_zz_qt;
    }

    public void setYsj_zz_qt(Integer ysj_zz_qt) {
        this.ysj_zz_qt = ysj_zz_qt;
    }

    public Integer getYsj_qt() {
        return ysj_qt;
    }

    public void setYsj_qt(Integer ysj_qt) {
        this.ysj_qt = ysj_qt;
    }

    public Integer getWsj() {
        return wsj;
    }

    public void setWsj(Integer wsj) {
        this.wsj = wsj;
    }

    public Integer getXzpc_count() {
        return xzpc_count;
    }

    public void setXzpc_count(Integer xzpc_count) {
        this.xzpc_count = xzpc_count;
    }

    public Integer getXzpc_money() {
        return xzpc_money;
    }

    public void setXzpc_money(Integer xzpc_money) {
        this.xzpc_money = xzpc_money;
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
            throw new RuntimeException("no AdminReviewCase");
        LawAndEdu adminReviewCase = (LawAndEdu)obj;
        int result = this.getProvince().compareTo(adminReviewCase.getProvince());
        return result;
    }
}
