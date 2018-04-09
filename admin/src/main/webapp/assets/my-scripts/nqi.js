$(function () {
    //js初始化方法
});

//查询当地情况面板
function queryMain(){
    $('#myModal').on('show.bs.modal', centerModals("myModal"));
    $("#myModal").modal();

    //页面大小变化是仍然保证模态框水平垂直居中
    $(window).on('resize', centerModals("myModal"));
}

//模态框居中
function centerModals(domId) {
    var domId = '#' + domId;
    $(domId).each(function(i) {
        var $clone = $(this).clone().css('display','block').appendTo('body');
        var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
        top = top > 0 ? top : 0;
        $clone.remove();
        $(this).find('.modal-content').css("margin-top", top);
    });
}

