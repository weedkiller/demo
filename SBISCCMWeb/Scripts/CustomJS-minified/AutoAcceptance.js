﻿function backToparent() { window.parent.$.magnificPopup.close(), window.location = "/AutoAcceptance/Index" } function CloseImportPanel() { $.magnificPopup.close(), $.magnificPopup.open({ preloader: !1, closeBtnInside: !0, type: "iframe", items: { src: "/AutoAcceptance/CleanseMatchDataMatch/" }, callbacks: { close: function () { $.ajax({ type: "GET", url: "/AutoAcceptance/Index/", dataType: "HTML", contentType: "application/html", cache: !1, data: {}, success: function (e) { $("#divPartialAutoAcceptance").html(e) }, error: function (e, t, a) { } }) } }, closeOnBgClick: !1, mainClass: "popupAutoAcceptanceData" }) } function OnSuccess() { $("#divProgress").hide() } function ReloadForm() { window.parent.$.magnificPopup.close(); var e = $(".pagevalueChangeAutoAcceptanceCriteria")[0].value, t = $("#SortBy").val(), a = $("#SortOrder").val(), c = $("#ConfidenceCode").val(), o = $("#MatchGrade").val(), n = $("#Tags").val(), i = $("#CountyGroupId").val(), l = "/AutoAcceptance/Index?pagevalue=" + e + "&sortby=" + t + "&sortorder=" + a + "&ConfidenceCode=" + c + "&CountyGroupId=" + i + "&MatchGrade=" + encodeURIComponent(o) + "&Tags=" + n; $.ajax({ type: "GET", url: l, dataType: "HTML", contentType: "application/html", async: !1, cache: !1, success: function (e) { $("#divPartialAutoAcceptance").html(e) }, error: function (e, t, a) { } }) } function ClosePopupReload() { window.parent.$.magnificPopup.close(); var e = "/AutoAcceptance/Index"; window.location.href = e } $(document).ajaxStart(function () { $("#divProgress").show() }).ajaxStop(function () { $("#divProgress").hide() }), $.ajaxSetup({ cache: !1 }), $("body").on("click", "#btnAddAAC", function () { var e = $("#pagevalue").val(), t = $("#SortBy").val(), a = $("#SortOrder").val(), c = $("#CountyGroupId").val(), o = $("#Tags").val(), n = "/AutoAcceptance/Index?pagevalue=" + e + "&sortby=" + t + "&sortorder=" + a + "&ConfidenceCode=" + $("#ConfidenceCode").val() + "&MatchGrade=" + encodeURIComponent($(".chosen-single span").text()) + "&CountyGroupId=" + c + "&Tags=" + o; return $.magnificPopup.open({ preloader: !1, closeBtnInside: !0, type: "iframe", items: { src: "/AutoAcceptance/popupWindowAAC/" }, callbacks: { open: function () { $.magnificPopup.instance.close = function () { $.ajax({ type: "GET", url: n, dataType: "HTML", cache: !1, contentType: "application/html", data: { pagevalue: $("#pagevalue").val() }, success: function (e) { $("#divPartialAutoAcceptance").html(e); var t = $("#matchGradeValue").val(); if ("" != t && void 0 != t) { var a = document.getElementById("MatchGrade"), c = document.createElement("option"); c.text = t, a.add(c), $(".chzn-select").trigger("chosen:updated") } } }), $.magnificPopup.proto.close.call(this) } } }, closeOnBgClick: !1, mainClass: "popInitiateReturn popMatchSetting" }), !1 }), $("body").on("click", ".edit", function () { var e = [], t = $("#pagevalue").val(), a = $("#SortBy").val(), c = $("#SortOrder").val(), o = this.id, n = $("#CountyGroupId").val(), i = $("#Tags").val(), l = "/AutoAcceptance/Index?pagevalue=" + t + "&sortby=" + a + "&sortorder=" + c + "&ConfidenceCode=" + $("#ConfidenceCode").val() + "&MatchGrade=" + encodeURIComponent($(".chosen-single span").html()) + "&CountyGroupId=" + n + "&Tags=" + i; return "" != o && $.magnificPopup.open({ preloader: !1, closeBtnInside: !0, type: "iframe", callbacks: { open: function () { $.magnificPopup.instance.close = function () { $.ajax({ type: "GET", url: l, dataType: "HTML", contentType: "application/html", data: { pagevalue: $("#pagevalue").val() }, cache: !1, success: function (t) { $("#divPartialAutoAcceptance").html(t); var a = $("#matchGradeValue").val(); $("#MatchGrade option").each(function () { e.push($(this).val()) }); for (var c = !1, o = 0; o < e.length; o++) a == e[o] && (c = !0); if (0 == c && "" != a && void 0 != a) { var n = document.getElementById("MatchGrade"), i = document.createElement("option"); i.text = a, n.add(i), $(".chzn-select").trigger("chosen:updated") } } }), $.magnificPopup.proto.close.call(this) } } }, items: { src: "/AutoAcceptance/popupWindowAAC?CriteriaGroupId=" + o }, closeOnBgClick: !1, mainClass: "popInitiateReturn popMatchSetting" }), !1 }), $("body").on("click", ".delete", function () { var e = $("#pagevalue").val(), t = $("#SortBy").val(), a = $("#SortOrder").val(), c = $(this), o = ($(this).attr("data-MatchGrade"), $("#CountyGroupId").val()), n = $("#Tags").val(); "/AutoAcceptance/Index?pagevalue=" + e + "&sortby=" + t + "&sortorder=" + a + "&ConfidenceCode=" + $("#ConfidenceCode").val() + "&MatchGrade=" + encodeURIComponent($(".chosen-single span").html()) + "&CountyGroupId=" + o + "&Tags=" + n; return bootbox.confirm({ title: "<i class='fa fa-check-square-o' aria-hidden='true'></i> Confirm", message: "Are you sure you want to delete record ?", callback: function (e) { if (e) { var t = c.attr("data-CriteriaGroupId"); return $.magnificPopup.open({ preloader: !1, closeBtnInside: !0, type: "iframe", items: { src: "/AutoAcceptance/DeleteComment?CriteriaGroupId=" + t + "&ToCall=DeleteAcceptance" }, callbacks: { close: function () { } }, closeOnBgClick: !1, mainClass: "popupDeleteComment" }), !0 } } }), !1 }), $("body").on("click", "#btnRunRule", function () { var e = $('input[name="__RequestVerificationToken"]').val(); return bootbox.confirm({ title: "<i class='fa fa-check-square-o' aria-hidden='true'></i> Confirm", message: "This will auto-accept matches currently in the Match Data Queue based on these match criteria.", callback: function (t) { t && $.ajax({ type: "POST", url: "/AutoAcceptance/RunAutoAcceptanceRule/", data: "", headers: { __RequestVerificationToken: e }, dataType: "json", contentType: "application/json", success: function (e) { bootbox.alert({ title: "<i class='fa fa-info-circle' aria-hidden='true'></i> Message", message: "Matches accepted based on match criteria" }) }, error: function (e, t, a) { } }) } }), !1 }), $("body").on("click", "#btnExportToExcel", function () { $("#frmExportToExcel").submit() }), $("body").on("click", "#btnfrmFilter", function () { var e = $(".pagevalueChangeAutoAcceptanceCriteria")[0].value, t = $("#SortBy").val(), a = $("#SortOrder").val(), c = $("#CountyGroupId").val(), o = $("#Tags").val(), n = $(".chosen-single span").html(), i = "/AutoAcceptance/Index?pagevalue=" + e + "&sortby=" + t + "&sortorder=" + a + "&ConfidenceCode=" + $("#ConfidenceCode").val() + "&MatchGrade=" + encodeURIComponent(n) + "&CountyGroupId=" + c + "&Tags=" + o; $.ajax({ beforeSend: function () { $("#divProgress").show() }, type: "GET", url: i, dataType: "HTML", contentType: "application/html", cache: !1, success: function (e) { $("#divPartialAutoAcceptance").html(e) }, error: function (e, t, a) { } }) }), $("body").on("click", "#btnclearFilter", function () { $("#frmfilter").submit() }), $("body").on("click", "#btnImportData", function () { $(this).attr("id"); $.magnificPopup.open({ preloader: !1, closeBtnInside: !0, type: "iframe", items: { src: "/AutoAcceptance/ImportData" }, callbacks: { close: function () { } }, closeOnBgClick: !1, mainClass: "popupCleansMatchImportData" }) }), $("body").on("change", ".pagevalueChangeAutoAcceptanceCriteria", function () { var e = $(this)[0].value, t = $("#SortBy").val(), a = $("#SortOrder").val(), c = $("#ConfidenceCode").val(), o = $("#MatchGrade").val(), n = $("#CountyGroupId").val(), i = $("#Tags").val(), l = "/AutoAcceptance/Index?pagevalue=" + e + "&sortby=" + t + "&sortorder=" + a + "&ConfidenceCode=" + c + "&MatchGrade=" + encodeURIComponent(o) + "&CountyGroupId=" + n + "&Tags=" + i; $.ajax({ type: "GET", url: l, dataType: "HTML", contentType: "application/html", async: !1, success: function (e) { $("#divPartialAutoAcceptance").html(e) }, error: function (e, t, a) { } }) }); var MultiAutoAccept = ""; $("body").on("change", "#MultipleSelect", function () { MultiAutoAccept = "", 1 == $(this).prop("checked") ? ($(".SelectedDelete").prop("checked"), $(".SelectedDelete").each(function () { MultiAutoAccept = MultiAutoAccept + $(this).attr("data-val") + ",", $(this).prop("checked", !0) })) : $(".SelectedDelete").each(function () { $(this).prop("checked", !1) }), $("#MultiDeleteAutoAccept").val(MultiAutoAccept) }), $("body").on("change", ".SelectedDelete", function () { var e = $(this).attr("data-val"); if (1 == $(this).prop("checked")) MultiAutoAccept = MultiAutoAccept + e + ","; else { $("#MultipleSelect").prop("checked", !1); for (var t = MultiAutoAccept.split(","), a = "", c = 0; c < t.length; c++) "" != t[c] && e != t[c] && (a = a + t[c] + ","); MultiAutoAccept = a } var o = 0, n = 0; $(".SelectedDelete").each(function () { o += 1, 1 == $(this).prop("checked") && (n += 1) }), o == n && $("#MultipleSelect").prop("checked", !0), $("#MultiDeleteAutoAccept").val(MultiAutoAccept) }), $("body").on("click", "#btnMultipleDeleteAutoAccept", function () { var e = $(".pagevalueChangeAutoAcceptanceCriteria")[0].value, t = $("#SortBy").val(), a = $("#SortOrder").val(), c = $("#CountyGroupId").val(), o = $("#Tags").val(), n = ("/AutoAcceptance/Index?pagevalue=" + e + "&sortby=" + t + "&sortorder=" + a + "&ConfidenceCode=" + $("#ConfidenceCode").val() + "&MatchGrade=" + encodeURIComponent($(".chosen-single span").html()) + "&CountyGroupId=" + c + "&Tags=" + o, $("#MultiDeleteAutoAccept").val()); return n = n.slice(0, -1), "" == n ? (bootbox.alert({ title: "<i class='fa fa-info-circle' aria-hidden='true'></i> Message", message: "Please select at least one record to delete." }), !1) : void bootbox.confirm({ title: "<i class='fa fa-check-square-o' aria-hidden='true'></i> Confirm", message: "Are you sure you want to delete records ?", callback: function (e) { e && $.magnificPopup.open({ preloader: !1, closeBtnInside: !0, type: "iframe", items: { src: "/AutoAcceptance/DeleteComment?CriteriaGroupId=" + n + "&ToCall=DeleteAcceptance" }, callbacks: { close: function () { } }, closeOnBgClick: !1, mainClass: "popupDeleteComment" }) } }) }), $("body").on("show.bs.collapse", ".collapse", function () { $(".partialrow").each(function () { $(this).removeClass("current") }), $(".panel-collapse.in").collapse("hide"), $(".trAutoAcceptanceItemView").each(function () { $(this).hide() }), $(this).parents("tr").show(), $(this).parents("tr").prev().addClass("current") }), $("body").on("hide.bs.collapse", ".collapse", function () { $(this).parents("tr").hide() }), $("body").on("click", ".collapsed", function () { var e = $(this); $(".removecollapsed").each(function () { $(this).removeClass("removecollapsed"), $(this).addClass("collapsed") }), $(e).addClass("removecollapsed"), $(e).removeClass("collapsed"); var t = $(this).attr("data-CriteriaGroupId"); $.ajax({ type: "GET", url: "/AutoAcceptance/GetAutoAcceptanceCriteriaDetailByGroupId?CriteriaGroupId=" + t, dataType: "HTML", contentType: "application/html", cache: !1, success: function (t) { $(".trAutoAcceptanceItemView").each(function () { $(this).remove() }), $(e).closest("TR").after(t) }, error: function (e, t, a) { } }) }), $("body").on("click", ".removecollapsed", function () { $(this).addClass("collapsed"), $(this).removeClass("removecollapsed"), $(".trAutoAcceptanceItemView").each(function () { $(this).remove() }) });