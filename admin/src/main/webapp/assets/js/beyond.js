$(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
    $this = $(this),
    $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');
    if (!e.data.multiple) {
      $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
    };
  }

  var accordion = new Accordion($('#accordion'), false);

  //二级子菜单下拉
  var Submenu = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.sublink');
        // Evento
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }

    Submenu.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this),
        $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');
        if (!e.data.multiple) {
            $el.find('.sub-submenu').not($next).slideUp().parent().removeClass('open');
        };
    }

    var submenu = new Submenu($('#accordion'), false);
});


function getThemeColorFromCss(n) {
    var t = $("<span><\/span>").hide().appendTo("body"),
    i;
    return t.addClass(n),
    i = t.css("color"),
    t.remove(),
    i
}

function InitiateSideMenu() {

    $(".sidebar-toggler").on("click",
    function() {
        return $("#sidebar").toggleClass("hide"),
        $(".sidebar-toggler").toggleClass("active"),
        !1
    });

    var n = $("#sidebar").hasClass("menu-compact");
    $("#sidebar-collapse").on("click",
    function() {
        $("#sidebar").is(":visible") || $("#sidebar").toggleClass("hide");
        $("#sidebar").toggleClass("menu-compact");
        $(".sidebar-collapse").toggleClass("active");
        n = $("#sidebar").hasClass("menu-compact");
        n && $(".open > .submenu").removeClass("open")
    });
    $(".sidebar-menu").on("click",
    function(t) {

        var i = $(t.target).closest("a"),
        u,
        r,
        f;
        if (i && i.length != 0) {
            if (!i.hasClass("menu-dropdown")) return n && i.get(0).parentNode.parentNode == this && (u = i.find(".menu-text").get(0), t.target != u && !$.contains(u, t.target)) ? !1 : void 0;
            if (r = i.next().get(0), !$(r).is(":visible")) {
                if (f = $(r.parentNode).closest("ul"), n && f.hasClass("sidebar-menu")) return;
                f.find("> .open > .submenu").each(function() {
                    this == r || $(this.parentNode).hasClass("active") || $(this).slideUp(200).parent().removeClass("open")
                })
            }

            return n && $(r.parentNode.parentNode).hasClass("sidebar-menu") ? !1 : ($(r).slideToggle(200).parent().toggleClass("open"), !1)
        }
    })
}

function InitiateWidgets() {
    $('.widget-buttons *[data-toggle="maximize"]').on("click",
    function(n) {
        n.preventDefault();
        var t = $(this).parents(".widget").eq(0),
        i = $(this).find("i").eq(0),
        r = "fa-compress",
        u = "fa-expand";
        t.hasClass("maximized") ? (i && i.addClass(u).removeClass(r), t.removeClass("maximized"), t.find(".widget-body").css("height", "auto")) : (i && i.addClass(r).removeClass(u), t.addClass("maximized"), maximize(t))
    });
    $('.widget-buttons *[data-toggle="collapse"]').on("click",
    function(n) {
        n.preventDefault();
        var t = $(this).parents(".widget").eq(0),
        r = t.find(".widget-body"),
        i = $(this).find("i"),
        u = "fa-plus",
        f = "fa-minus",
        e = 300;
        t.hasClass("collapsed") ? (i && i.addClass(f).removeClass(u), t.removeClass("collapsed"), r.slideUp(0,
        function() {
            r.slideDown(e)
        })) : (i && i.addClass(u).removeClass(f), r.slideUp(200,
        function() {
            t.addClass("collapsed")
        }))
    });
    $('.widget-buttons *[data-toggle="dispose"]').on("click",
    function(n) {
        n.preventDefault();
        var i = $(this),
        t = i.parents(".widget").eq(0);
        t.hide(300,
        function() {
            t.remove()
        })
    })
}

function maximize(n) {
    if (n) {
        var t = $(window).height(),
        i = n.find(".widget-header").height();
        n.find(".widget-body").height(t - i)
    }
}

function scrollTo(n, t) {
    var i = n && n.size() > 0 ? n.offset().top: 0;
    jQuery("html,body").animate({
        scrollTop: i + (t ? t: 0)
    },
    "slow")
}

function Notify(n, t, i, r, u, f) {
    toastr.options.positionClass = "toast-" + t;
    toastr.options.extendedTimeOut = 0;
    toastr.options.timeOut = i;
    toastr.options.closeButton = f;
    toastr.options.iconClass = u + " toast-" + r;
    toastr.custom(n)
}

function InitiateSettings() {
    readCookie("navbar-fixed-top") != null && readCookie("navbar-fixed-top") == "true" && ($("#checkbox_fixednavbar").prop("checked", !0), $(".navbar").addClass("navbar-fixed-top"));
    readCookie("sidebar-fixed") != null && readCookie("sidebar-fixed") == "true" && ($("#checkbox_fixedsidebar").prop("checked", !0), $(".page-sidebar").addClass("sidebar-fixed"));
    readCookie("breadcrumbs-fixed") != null && readCookie("breadcrumbs-fixed") == "true" && ($("#checkbox_fixedbreadcrumbs").prop("checked", !0), $(".page-breadcrumbs").addClass("breadcrumbs-fixed"));
    readCookie("page-header-fixed") != null && readCookie("page-header-fixed") == "true" && ($("#checkbox_fixedheader").prop("checked", !0), $(".page-header").addClass("page-header-fixed"));
    $("#checkbox_fixednavbar").change(function() {
        $(".navbar").toggleClass("navbar-fixed-top");
        $("#checkbox_fixedsidebar").is(":checked") && ($("#checkbox_fixedsidebar").prop("checked", !1), $(".page-sidebar").toggleClass("sidebar-fixed"));
        $("#checkbox_fixedbreadcrumbs").is(":checked") && !$(this).is(":checked") && ($("#checkbox_fixedbreadcrumbs").prop("checked", !1), $(".page-breadcrumbs").toggleClass("breadcrumbs-fixed"));
        $("#checkbox_fixedheader").is(":checked") && !$(this).is(":checked") && ($("#checkbox_fixedheader").prop("checked", !1), $(".page-header").toggleClass("page-header-fixed"));
        setCookiesForFixedSettings()
    });
    $("#checkbox_fixedsidebar").change(function() {
        $(".page-sidebar").toggleClass("sidebar-fixed");
        $("#checkbox_fixednavbar").is(":checked") || ($("#checkbox_fixednavbar").prop("checked", !0), $(".navbar").toggleClass("navbar-fixed-top"));
        $("#checkbox_fixedbreadcrumbs").is(":checked") && !$(this).is(":checked") && ($("#checkbox_fixedbreadcrumbs").prop("checked", !1), $(".page-breadcrumbs").toggleClass("breadcrumbs-fixed"));
        $("#checkbox_fixedheader").is(":checked") && !$(this).is(":checked") && ($("#checkbox_fixedheader").prop("checked", !1), $(".page-header").toggleClass("page-header-fixed"));
        setCookiesForFixedSettings()
    });
    $("#checkbox_fixedbreadcrumbs").change(function() {
        $(".page-breadcrumbs").toggleClass("breadcrumbs-fixed");
        $("#checkbox_fixedsidebar").is(":checked") || ($("#checkbox_fixedsidebar").prop("checked", !0), $(".page-sidebar").toggleClass("sidebar-fixed"));
        $("#checkbox_fixednavbar").is(":checked") || ($("#checkbox_fixednavbar").prop("checked", !0), $(".navbar").toggleClass("navbar-fixed-top"));
        $("#checkbox_fixedheader").is(":checked") && !$(this).is(":checked") && ($("#checkbox_fixedheader").prop("checked", !1), $(".page-header").toggleClass("page-header-fixed"));
        setCookiesForFixedSettings()
    });
    $("#checkbox_fixedheader").change(function() {
        $(".page-header").toggleClass("page-header-fixed");
        $("#checkbox_fixedbreadcrumbs").is(":checked") || ($("#checkbox_fixedbreadcrumbs").prop("checked", !0), $(".page-breadcrumbs").toggleClass("breadcrumbs-fixed"));
        $("#checkbox_fixedsidebar").is(":checked") || ($("#checkbox_fixedsidebar").prop("checked", !0), $(".page-sidebar").toggleClass("sidebar-fixed"));
        $("#checkbox_fixednavbar").is(":checked") || ($("#checkbox_fixednavbar").prop("checked", !0), $(".navbar").toggleClass("navbar-fixed-top"));
        setCookiesForFixedSettings()
    })
}

function setCookiesForFixedSettings() {
    createCookie("navbar-fixed-top", $("#checkbox_fixednavbar").is(":checked"), 100);
    createCookie("sidebar-fixed", $("#checkbox_fixedsidebar").is(":checked"), 100);
    createCookie("breadcrumbs-fixed", $("#checkbox_fixedbreadcrumbs").is(":checked"), 100);
    createCookie("page-header-fixed", $("#checkbox_fixedheader").is(":checked"), 100)
}

function getcolor(n) {
    switch (n) {
    case "themeprimary":
        return themeprimary;
    case "themesecondary":
        return themesecondary;
    case "themethirdcolor":
        return themethirdcolor;
    case "themefourthcolor":
        return themefourthcolor;
    case "themefifthcolor":
        return themefifthcolor;
    default:
        return n
    }
}

function switchClasses(n, t) {
    var u = document.getElementsByClassName(n),
    r;
    for (i = u.length - 1; i >= 0; i--) hasClass(u[i], "dropdown-menu") || (addClass(u[i], n + "-temp"), removeClass(u[i], n));
    for (r = document.getElementsByClassName(t), i = r.length - 1; i >= 0; i--) hasClass(r[i], "dropdown-menu") || (addClass(r[i], n), removeClass(r[i], t));
    for (tempClasses = document.getElementsByClassName(n + "-temp"), i = tempClasses.length - 1; i >= 0; i--) hasClass(tempClasses[i], "dropdown-menu") || (addClass(tempClasses[i], t), removeClass(tempClasses[i], n + "-temp"))
}

function addClass(n, t) {
    var i = n.className;
    i && (i += " ");
    n.className = i + t
}

function removeClass(n, t) {
    var i = " " + n.className + " ";
    n.className = i.replace(" " + t, "").replace(/^\s+/g, "").replace(/\s+$/g, "")
}

function hasClass(n, t) {
    var i = " " + n.className + " ",
    r = " " + t + " ";
    return i.indexOf(r) != -1
}

InitiateSideMenu();
InitiateSettings();
InitiateWidgets();
/*
//# sourceMappingURL=beyond.min.js.map
*/
