﻿var dialog; function ShowCloseBtn() { setTimeout(function () { $(".bootbox-close-button").show(), $(".bootbox-close-button").addClass("closeBootbox"), $(".bootbox-close-button").removeClass("bootbox-close-button") }, 3e3) } function ValidationProcess() { var t = 0, e = $("#MultiSelectOptions").val(), o = $("#rdText").prop("checked"); if (null != e && null != e && e.length > 0 ? $("#spnProcess").hide() : ($("#spnProcess").show(), t++), $("input:radio[name='Format']:checked").length > 0 ? $("#spnFormat").css("display", "none") : ($("#spnFormat").css("display", "block"), t++), t > 0) return !1; if (o) { var n = $("#Delimiter").val().trim(); if ("" == n) return OpenDelimiter(), !1 } var a = $("#txtSrcRecID").val().trim(), i = $("#SrcRecIdExactMatch").prop("checked"), r = $("#LOBTag").val(), s = $("#Tags").val(), l = $("#Input").val(), c = $("#MultiSelectOptions option:selected").map(function () { return this.text }).get().join(", "), p = $("input[name=Format]:checked").val(), d = $("#MarkAsExported").prop("checked"), u = noFilterSelected, m = "<table class='ExportConfirmBox'>"; "" != a && (m += "<tr><td><strong><span>" + srcRecordId + "</span></strong></td><td>&nbsp:&nbsp</td><td> <span style='word-wrap: anywhere;'>" + a + "</span> <strong><span>" + isExactMatch + "</span></strong> : " + i + "</td><tr>"), null != r && "" != r && (m += "<tr><td><strong><span>" + lobTag + "</span></strong></td><td>&nbsp:&nbsp</td><td> " + r + "</td><tr>"), null != r && "" != s && (m += "<tr><td><strong><span>" + tag + "</span></strong></td><td>&nbsp:&nbsp</td><td> " + s + "</td><tr>"), "" != l && (m += "<tr><td><strong><span>" + importPorcess + "</span></strong></td><td>&nbsp:&nbsp</td><td> " + l + "</td><tr>"), m += "<tr><td><strong><span>" + selectedOutput + "</span ></strong ></td > <td>&nbsp:&nbsp</td> <td> " + c + "</td> <tr>", m += "<tr><td><strong><span>" + p + "</span></strong></td><td>&nbsp:&nbsp</td><td> " + p + "</td><tr>", o && (m += "<tr><td><strong><span>" + delimiterValue + "</span></strong></td><td>&nbsp:&nbsp</td><td> " + n + "</td><tr>"), m += "<tr><td><strong><span>" + markAsExported + "</span></strong></td><td>&nbsp:&nbsp</td><td>" + d + "</td><tr>", "" != a || "" != r && null != r || "" != s && null != s || "" != l || (m += "<tr><td></tr></td><tr><td colspan='5'><span class='error'>" + u + "</span></td></tr>"), m += "</table>", bootbox.confirm({ title: "<i class='fa fa-check-square-o' aria-hidden='true'></i> " + confirmBox, message: m, buttons: { confirm: { label: "Yes", className: "btn btn-primary btnYes" }, cancel: { label: "No", className: "btn btn-default" } }, callback: function (t) { if (t) { $(".btnYes").prop("disabled", !0); var e = ConvertEncrypte(encodeURI(a)).split("+").join("***"); $.ajax({ type: "GET", url: "/ExportView/ExportFileName?Parameters=" + e, dataType: "HTML", async: !1, success: function (t) { $("#ExportFileNameModalMain").html(t), DraggableModalPopup("#ExportFileNameModal") }, error: function (t, e, o) { } }) } } }) } function OnSuccess() { $("#divProgress").hide(), $('[data-toggle="popover"]').popover(); var t = $("#UserType").val(); null == $.UserRole || "lob" != $.UserRole.toLowerCase() && "steward" != t.toLowerCase() || (jQuery("#DisplayFileType option:contains('All Files')").remove(), jQuery("#MonitoringDisplayFileType option:contains('All Files')").remove()) } function OpenDelimiter() { var t = $("#Delimiter").val(); $.ajax({ type: "GET", url: "/ExportView/Delimiter?Parameters=" + ConvertEncrypte(encodeURI(t)).split("+").join("***"), dataType: "HTML", async: !1, success: function (t) { $("#CustomExportDelimiterModalMain").html(t), DraggableModalPopup("#CustomExportDelimiterModal") } }) } function SetDownloadValue() { var t = $("#lnkDownload").attr("data-id"); $.ajax({ type: "POST", url: "/ExportView/SetDownloadValue/", data: JSON.stringify({ Id: t }), dataType: "json", contentType: "application/json", cache: !1, async: !1, success: function (t) { return "Success" == t }, error: function (t, e, o) { } }) } function ExportListAutoRefresh() { RefreshExportList("/ExportView/Index?FileType=" + $("#FileType").val()) } function ExportSubmitProcess(t) { $("#MultiSelectOptions option").each(function () { var t = "#" + $(this).val(); $(t).val(this.selected) }), $("#FilePath").val(t), $("#ExportDatafrm").submit() } function callbackReExportData() { $("#ReExportFileModal").modal("hide"), location.reload() } function callbackCloseDelimiter(t) { $("#CustomExportDelimiterModal").modal("hide"), $("#Delimiter").val(t) } function CancelExportREquest(t, e, o, n) { var a = $('input[name="__RequestVerificationToken"]').val(), i = "/ExportView/CancelExportProcess?Id=" + t; bootbox.confirm({ title: "<i class='fa fa-check-square-o' aria-hidden='true'></i> " + confirmBox, message: cancelExportDataRequest, callback: function (t) { t && $.ajax({ type: "POST", url: i, headers: { __RequestVerificationToken: a }, dataType: "json", contentType: "application/json", async: !1, cache: !1, success: function (t) { t == success && (o ? RefreshExportList(e) : RefreshExportMonitoringList(e)) }, error: function (t, e, o) { } }) } }) } function RefreshExportList(t) { loadCompanyDataList(), InitPortalExportCompayData() } function RefreshExportMonitoringList(t) { loadMonitoringList(), InitPortalExportMonitoringData() } function UpdateExportCompany(t) { t.result && RefreshExportList("/ExportView/Index?FileType=" + $("#FileType").val()); ShowMessageNotification("success", t.message, !1) } function UpdateMonitoringExportCompany(t) { t.result && RefreshExportMonitoringList("/ExportView/MonitoringExportindex?MonitoringFileType=" + $("#MonitoringFileType").val()); ShowMessageNotification("success", t.message, !1) } function loadCompanyDataList() { $.pjax({ url: "/Export/CompanyData", container: "#ExportDataTab", timeout: 5e4 }).done(function () { $("table#ExportJobs tbody tr:first").addClass("current"), $("#MultiSelectOptions").multiselect({ includeSelectAllOption: !0, numberDisplayed: 6, allSelectedText: "", nonSelectedText: selectOutputQueue }), InitPortalExportCompayData(), OnSuccess() }) } function loadMonitoringList() { $.pjax({ url: "/Export/MonitoringData", container: "#MonitoringExportDataTab", timeout: 5e4 }).done(function () { $("table#ExportMonitoringJobs tbody tr:first").addClass("current"), InitPortalExportMonitoringData(), OnSuccess() }) } function InitPortalExportCompayData() { InitDataTable("#ExportJobs", [10, 20, 30], !1, [1, "desc"]) } function InitPortalExportMonitoringData() { InitDataTable("#ExportMonitoringJobs", [10, 20, 30], !1, [1, "desc"]) } $.UserRole = $("#UserRole").val(), $.UserLOBTag = $("#UserLOBTag").val(), $(document).ready(function () { $('[data-toggle="popover"]').popover(), $("#MultiSelectOptions").multiselect({ includeSelectAllOption: !0, numberDisplayed: 6, allSelectedText: "", nonSelectedText: selectOutputQueue }); var t = $("#UserType").val(), e = $("#StwerdTags").val(), o = 60 * $("#ExportTimeInterval").val() * 1e3; if ($("#divProgress").hide(), setInterval(function () { }, o), null != $.UserRole && "lob" == $.UserRole.toLowerCase() && ($("#LOBTag").val($.UserLOBTag), $("#LOBTag").attr("disabled", !0)), "steward" == t.toLowerCase() && "" != e) { var n = e.split(","); $("#ExportDatafrm #Tag option").each(function () { for (var t = !0, e = 0; e < n.length; e++)$(this).val() == n[e] && (t = !1); t && $("#ExportDatafrm #Tag option[value='" + $(this).val() + "']").remove() }) } null == $.UserRole || "lob" != $.UserRole.toLowerCase() && "steward" != t.toLowerCase() || (jQuery("#DisplayFileType option:contains('All Files')").remove(), jQuery("#MonitoringDisplayFileType option:contains('All Files')").remove()), $("select.chzn-select").chosen({ no_results_text: "Oops, nothing found!", width: "100%", search_contains: !0 }), InitPortalExportCompayData() }), $("body").on("click", ".MonitoringclsFileType", function () { if (0 != $("#MonitoringOutputcount").val()) { var t = !1, e = $("#MonitoringApiName").val(), o = $(this).attr("data-filetype"); $('input[name="__RequestVerificationToken"]').val(); setTimeout(function () { $(".bootbox-close-button").show(), $(".bootbox-close-button").addClass("closeBootbox"), $(".bootbox-close-button").removeClass("bootbox-close-button") }, 100), dialog = bootbox.confirm({ title: "<i class='fa fa-check-square-o' aria-hidden='true'></i> " + confirmBox, message: markDataAsExported, callback: function (n) { t = n, n && ($(".MonitoringOutputcnt").attr("data-original-title", "0"), $("#MonitoringOutputcnt").html(0), $("#MonitoringOutputcount").val("0")); var a = ConvertEncrypte(encodeURI("MonitoringDataExport:" + t + "@#$ApiName:" + e + "@#$FileType:" + o)).split("+").join("***"); $("#frmMonitoring").children().remove(), $("<input>").attr({ type: "hidden", name: "Parameters", value: a }).appendTo("#frmMonitoring"), $("#frmMonitoring").submit() } }) } else ShowMessageNotification("success", "Data not found.", !1) }), $("body").on("change", ".closeBootbox", function () { dialog.modal("hide") }), $("body").on("change", "#chkMatchOutput", function () { $(this).prop("checked") ? $(this).attr("value", "true") : $(this).attr("value", "false") }), $("body").on("change", "#chkEnrichment", function () { $(this).prop("checked") ? $(this).attr("value", "true") : $(this).attr("value", "false") }), $("body").on("change", "#chkActiveDataQueue", function () { $(this).prop("checked") ? $(this).attr("value", "true") : $(this).attr("value", "false") }), $("body").on("change", "#rdMarkAsExported", function () { $(this).prop("checked") ? $(this).attr("value", "true") : $(this).attr("value", "false") }), $("body").on("click", "#btnExportData", function () { ValidationProcess() }), $("body").on("change", ".DisplayFileType", function () { var t = $(this)[0].value, e = ConvertEncrypte(encodeURI("FileType:" + t)).split("+").join("***"); $.ajax({ type: "GET", url: "/ExportView/LoadExportStatus?Parameters=" + e, dataType: "HTML", contentType: "application/html", async: !1, cache: !1, success: function (t) { $("#divExportJobListing").html(t), $('[data-toggle="popover"]').popover() }, error: function (t, e, o) { } }) }), $("body").on("click", ".deleteFile", function () { var t = "/ExportView/Index?FileType=" + $("#FileType").val(), e = "/ExportView/Delete?Id=" + $(this).attr("id"); bootbox.confirm({ title: "<i class='fa fa-check-square-o' aria-hidden='true'></i> " + confirmBox, message: deleteRecord, callback: function (o) { o && $.ajax({ type: "POST", url: e, dataType: "json", contentType: "application/json", async: !1, cache: !1, success: function (e) { RefreshExportList(t) }, error: function (t, e, o) { } }) } }) }), $("body").on("click", ".OpenDelimiter", function () { OpenDelimiter() }), $("body").on("click", "#btnReExportData", function () { $.ajax({ type: "GET", url: "/ExportView/ReExportFile", dataType: "HTML", async: !1, success: function (t) { $("#ReExportFileModalMain").html(t), DraggableModalPopup("#ReExportFileModal") } }) }), $("body").on("click", "#btnMonitoringNotificationsExportData", function () { var t = $("#MarkAsMonitoringExported").prop("checked"), e = $("#MonitoringIsHeader").prop("checked"), o = $("input[name=FileMonitoringFormat]:checked").val(), n = $("#MonitoringApiName").val(), a = $("#Delimiter").val(), i = $("#MonitoringHasTextQualifierToAll").prop("checked"), r = $('input[name="__RequestVerificationToken"]').val(); if ("delimiter" == o.toLowerCase() && "" == a) return OpenDelimiter(), !1; var s = "<table class='ExportConfirmBox'>"; s += "<tr><td><strong><span>" + apiLayer + "</span></strong></td><td>&nbsp:&nbsp</td><td> " + n + "</td><tr>", s += "<tr><td><strong><span>" + outputFormat + "</span></strong></td><td>&nbsp:&nbsp</td><td> " + o + "</td><tr>", "delimiter" == o.toLowerCase() && (s += "<tr><td><strong><span>" + delimiterValue + "</span></strong></td><td>&nbsp:&nbsp</td><td> " + a + "</td><tr>"), s += "<tr><td><strong><span>" + markAsExported + "</span></strong></td><td>&nbsp:&nbsp</td><td> " + t + "</td><tr>", s += "</table>", bootbox.confirm({ title: "<i class='fa fa-check-square-o' aria-hidden='true'></i> " + confirmBox, message: s, callback: function (s) { s && (Parameters = "MarkAsExported:" + t + "@#$FileFormat:" + o + "@#$APIName:" + n + "@#$Delimiter:" + a + "@#$IsHeader:" + e + "@#$MonitoringHasTextQualifierToAll:" + i, $.ajax({ type: "POST", url: "/ExportView/ExportToMonitoring/", headers: { __RequestVerificationToken: r }, data: JSON.stringify({ Parameters: ConvertEncrypte(encodeURI(Parameters)).split("+").join("***") }), dataType: "json", contentType: "application/json", cache: !1, async: !1, success: function (t) { ShowMessageNotification("success", t, !1), t.indexOf("data request has been submitted successfully") > 0 && (loadMonitoringList(), InitPortalExportMonitoringData()) }, error: function (t, e, o) { } })) } }) }), $("body").on("change", "#MonitoringDisplayFileType", function () { var t = $(this)[0].value, e = ConvertEncrypte(encodeURI("FileType:" + t)).split("+").join("***"); $.ajax({ type: "GET", url: "/ExportView/LoadMonitoringExportStatus?Parameters=" + e, dataType: "HTML", contentType: "application/html", async: !1, cache: !1, success: function (t) { $("#divMonitoringExportJobListing").html(t), InitPortalExportMonitoringData(), pageSetUp() }, error: function (t, e, o) { } }) }), $("body").on("click", "input:radio[name=FileFormat]", function () { "delimiter" != $(this).val().trim().toLowerCase() && $("#Delimiter").val("") }), $("body").on("click", "input:radio[name=FileMonitoringFormat]", function () { "delimiter" != $(this).val().trim().toLowerCase() && $("#Delimiter").val("") }), $("body").on("click", ".CancelFile", function () { var t = $("#FileType").val(), e = "/ExportView/Index?FileType=" + t; CancelExportREquest($(this).attr("id"), e, !0, t) }), $("body").on("click", ".CancelMoniroringFile", function () { var t = $("#MonitoringFileType").val(), e = "/ExportView/MonitoringExportindex?MonitoringFileType=" + t; CancelExportREquest($(this).attr("id"), e, !1, t) }), $("body").on("click", "#IdExportDataTab", function () { $(this).parent("li").hasClass("active") || loadCompanyDataList() }), $("body").on("click", "#IdMonitoringExportDataTab", function () { $(this).parent("li").hasClass("active") || loadMonitoringList() });