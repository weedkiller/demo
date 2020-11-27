﻿var ImportIntervalCall, ImportSecinterval, CleanseIntervalCall, CleanseSecinterval, EnrichIntervalCall, EnrichSecinterval; function precisionRound(t, e) { var a = Math.pow(10, e); return Math.round(t * a) / a } function LoadOnReady() { $('[data-toggle="tooltip"]').tooltip(), BackgroundProcessStatisticsReport(), LCMCandidateStatisticsReport(), DataStewardshipStatisticsReport() } function ReFreshAPIUsageStatistics() { $.ajax({ type: "GET", contentType: "application/json; charset=utf-8", url: "/Home/APIUsagestatisticsRefresh", data: "", dataType: "json", contentType: "application/json;", beforeSend: function () { }, success: function (t) { var e = t.ApiCount, a = t.YTD, n = t.AllCount, s = t.ActualApiCount, o = t.ActualYTD, r = t.ActualAllCount; $("#spnApiCount>a").text(e), $("#spnYTD>a").text(a), $("#spnAllCount>a").text(n), $("#titleApiCount").attr("title", s), $("#titleYTD").attr("title", o), $("#titleAllCount").attr("title", r) } }) } function LoadDataQueueStatistics() { $.ajax({ type: "GET", url: "/Home/DataQueueStatistics", dataType: "HTML", async: !0, cache: !1, contentType: "application/html", success: function (t) { $("#divPartialDataQueueStatistics").html(t), LoadImportProcessChart(), LoadMatchImportQueue() } }) } function loadImportProcessDataQueueStatistics() { $.ajax({ type: "GET", url: "/Home/ImportProcessDataQueueStatistics", dataType: "HTML", success: function (t) { $("#ImportProcessDataQueueStatisticsModalMain .modal-body").html(t), DraggableModalPopup("#ImportProcessDataQueueStatisticsModal") } }) } function LoadShowBackgroundProcessList() { $.ajax({ type: "GET", url: "/Home/BackgroundProcessList", dataType: "HTML", success: function (t) { $("#BackgroundProcessListModalMain").html(t), DraggableModalPopup("#BackgroundProcessListModal"); InitFilters([["TimePeriod", "TimePeriod", "/Home/GetDurationHoursDD", "true", "text"], ["StatusType", "StatusType", "/Home/GetStatusType", "false"], ["ProcessType", "ProcessType", "/Home/GetETLTypeDD", "false"]], "/Home/FilterBackGroundProcess", "#BackGroundProcessFilterMain", "#divPartialBackgroundProcess", "") } }) } function LoadImportProcessChart() { var t = $("#hdnImportProcessChartValue").val(), e = []; if (null != t && "" != t) for (var a = JSON.parse($("#hdnImportProcessChartValue").val()), n = 0; n < a.length; n++)e.push([a[n].EpochDate, a[n].ImportedRecordCount]); Highcharts.setOptions({ lang: { thousandsSep: "," } }), Highcharts.chart("divRptImportProcess", { chart: { type: "spline" }, title: { text: "Import Data" }, xAxis: { type: "datetime", dateTimeLabelFormats: { month: "%b %Y" }, title: { text: "Date" } }, yAxis: { title: { text: "Record Count" }, min: 0 }, tooltip: { crosshairs: !1, shared: !0, valueSuffix: " Records" }, plotOptions: { series: { marker: { enabled: !0 } } }, colors: ["#6CF", "#39F", "#06C", "#036", "#000"], series: [{ name: "Import Data", data: e }], responsive: { rules: [{ condition: { maxWidth: 500 }, chartOptions: { plotOptions: { series: { marker: { radius: 2.5 } } } } }] } }), $(".highcharts-legend").hide() } function hideSeries() { $(".highcharts-legend").hide(), $(".highcharts-legend-item").hide(), $(".highcharts-button").hide(), $(".highcharts-grid").hide() } function LoadMatchImportQueue() { var t = $("#InputRecordCount_Failed").val(), e = $("#InputRecordCount_AwaitingProcessing").val(), a = $("#InputRecordCount_Processing").val(); $("#InputRecordCount_Total").val() > 0 && Highcharts.chart("RptImportQueueCleanMatch", { chart: { type: "pie" }, title: { text: null }, plotOptions: { pie: { innerSize: 100, depth: 45 } }, series: [{ name: "Data", data: [["Failed", t], ["Awaiting", e], ["Processing", a]], size: "100%", innerSize: "80%", showInLegend: !1, dataLabels: { enabled: !1 }, states: { hover: { halo: !1 } } }] }) } function BackgroundProcessStatisticsReport() { $.ajax({ type: "GET", url: "/Home/BackgroundProcessStatistics", dataType: "json", success: function (t) { ResetAllIntervals(), $("#LoadBackgroundProcessStatisticsReport").html(t.view), startAllIntervals() } }) } function LCMCandidateStatisticsReport(t) { var e = "/Home/GetLowConfidenceMatchStatistics"; function a(t, e) { var a = Math.pow(10, e); return Math.round(t * a) / a } "" != t && null != t && (e = "/Home/GetLowConfidenceMatchStatistics?Parameters=" + ConvertEncrypte(encodeURI(t)).split("+").join("***")), $.ajax({ type: "GET", contentType: "application/json; charset=utf-8", url: e, dataType: "json", contentType: "application/json;", beforeSend: function () { }, success: function (t) { for (var e = jQuery.parseJSON(t.Data1), n = jQuery.parseJSON(t.Data2), s = 0; s < e.Table1.length; s++)for (var o = 0; o < e.Table1[s].length; o++)e.Table1[s][o] = null == e.Table1[s][o] ? 0 : e.Table1[s][o]; for (s = 0; s < n.Table11.length; s++)for (o = 0; o < n.Table11[s].length; o++)n.Table11[s][o] = null == n.Table11[s][o] ? 0 : n.Table11[s][o]; $("#TCTotal").text(e.Table1[0][0]); var r = parseFloat($("#total").text()) + parseFloat($(this).data("amount")) / 100; $("#total").text(r.toFixed(2)), $("#TCActive").text(e.Table1[0][4] + " (" + a(100 * e.Table1[0][8], 2) + "%)"), $("#TCHQSL").text(e.Table1[0][6] + " (" + a(100 * e.Table1[0][10], 2) + "%)"), $("#ACTotal").text(e.Table1[0][1] + " (AVG : " + a(e.Table1[0][2], 2) + ")"), $("#ACActive").text(e.Table1[0][3] + " (" + a(100 * e.Table1[0][7], 2) + "%)"), $("#ACHQSL").text(e.Table1[0][5] + " (" + a(100 * e.Table1[0][9], 2) + "%)"), $("#divLCMCandidateStatisticsReport").highcharts({ chart: { type: "column" }, colors: ["#4475c5", "#ef7e32", "#a6a6a6", "#ffc000"], title: { text: "" }, xAxis: { categories: [n.Table11[0][0], n.Table11[1][0]], crosshair: !1 }, yAxis: { min: 0, showLastLabel: !1, gridLineColor: "transparent", title: { text: "" }, allowDecimals: !1 }, plotOptions: { column: { pointPadding: .1, borderWidth: 0 } }, series: [{ name: "9 & 10", data: [n.Table11[0][1], n.Table11[1][1]] }, { name: "7 & 8", data: [n.Table11[0][2], n.Table11[1][2]] }, { name: "5 & 6", data: [n.Table11[0][3], n.Table11[1][3]] }, { name: "Below 5", data: [n.Table11[0][4], n.Table11[1][4]] }] }) } }) } function DataStewardshipStatisticsReport(t) { var e = "/Home/GetMatchUserCount"; "" != t && null != t && (e = "/Home/GetMatchUserCount?Parameters=" + ConvertEncrypte(encodeURI(t)).split("+").join("***")), $.ajax({ type: "GET", contentType: "application/json; charset=utf-8", url: e, data: "", dataType: "json", beforeSend: function () { }, success: function (t) { var e = jQuery.parseJSON(t.dataStatus), a = 0, n = 0, s = 0; e.Table11.length > 0 && (a = null == e.Table11[0][0] ? 0 : e.Table11[0][0], n = null == e.Table11[0][1] ? 0 : e.Table11[0][1], s = null == e.Table11[0][2] ? 0 : e.Table11[0][2]), $("#spnTotalMatch").text(a), $("#spnNameAddressLkupCnt").text(n), $("#spnAlterLkupCnt").text(s); var o = t.objMatch.lstMatchUser, r = t.objMatch.lstMatchConfidenceCode, i = [], c = [], l = 0; $("#chtMatchUser").highcharts({ chart: { plotBackgroundColor: null, plotBorderWidth: null, plotShadow: !1, type: "pie", width: 240 }, title: { text: matchesByUsers, color: Highcharts.theme && Highcharts.theme.contrastTextColor || "black", style: { fontFamily: '"Open Sans",Arial, Helvetica, sans-serif', fontSize: "14px" } }, tooltip: { formatter: function () { return "<b>" + this.key + "</b> <br/>" + matches + " : " + this.percentage.toFixed(2) + "% (" + records + " : " + this.y + ")" } }, plotOptions: { pie: { allowPointSelect: !0, cursor: "pointer", dataLabels: { enabled: !1, format: "", style: { color: Highcharts.theme && Highcharts.theme.contrastTextColor || "black" } } } }, series: [{ name: matches, colorByPoint: !0, data: o }] }); for (var u = 0; u < r.length; u++)i.push(r[u].x), c.push(parseInt(r[u].y)), l < parseInt(r[u].y) && (l = parseInt(r[u].y)); l += 2, $("#chtMatchConfidenceCode").highcharts({ chart: { type: "column" }, title: { text: matchesByConfidenceCode, x: -20, style: { fontFamily: '"Open Sans",Arial, Helvetica, sans-serif', fontSize: "14px" } }, xAxis: { categories: i }, yAxis: { min: 0, max: l }, plotOptions: { column: { pointPadding: 0, borderWidth: 1, borderColor: "#000000" } }, legend: { layout: "vertical", align: "right", verticalAlign: "middle", borderWidth: 0 }, series: [{ name: matches, data: c, colorByPoint: !0, title: "" }] }), hideSeries() } }) } function ReFreshActiveStatisticsFilter(t, e) { "lob" == $.UserRole && (e = $.UserLOBTag); var a = "Tags:" + t.split("::").join("&#58&#58") + "@#$LOBTags:" + e.replace("::", "&#58&#58"); $.ajax({ type: "GET", contentType: "application/json; charset=utf-8", url: "/Home/ActiveStatisticsFilter", data: { Parameters: ConvertEncrypte(encodeURI(a)).split("+").join("***") }, dataType: "json", contentType: "application/json;", beforeSend: function () { }, success: function (t) { $(".spnActiveStatus").text(t.ActiveQueueStatus), $("#TitleActualMatchCnt").attr("data-original-title", t.InputRecordCount_Total), $("#SpnActualMatchCnt a strong").text(t.ActualInputRecordCount_Total), $("#TitleActualMatchCntImport").attr("data-original-title", t.FilesAwaitingImportCount), $("#SpnActualMatchCntImport a strong").text(t.ActualFilesAwaitingImportCount), $("#TitleLCMCnt").attr("data-original-title", t.ActualLCMCount), $("#SpnLCMCnt a strong").text(t.LCMCount), $("#TitleBIDCnt").attr("data-original-title", t.BadInputRecordCount), $("#SpnBIDCnt a strong").text(t.ActualBadInputRecordCount), $("#TitleExportCntMatch").attr("data-original-title", t.ActualMatchExportRecordCount), $("#SpnExportCntMatch a strong").text(t.MatchExportRecordCount), $("#ProcessingQueueCnt").text(t.ProcessingQueueCnt), t.ProcessingQueueCnt > 0 || t.ProcessingQueueCnt.includes("K") || t.ProcessingQueueCnt.includes("M") || t.ProcessingQueueCnt.includes("B") ? ($("#ProcessingQueueCnt").remove(), $(".matchOutput").append("<div class='displayValue' id='ProcessingQueueCnt' title='Processing Queue'>" + t.ProcessingQueueCnt + "</div>")) : $("#ProcessingQueueCnt").hide(), $("#TitleExportCntEnrichment").attr("data-original-title", t.ActualEnrichmentExportRecordCount), $("#SpnExportCntEnrichment a strong").text(t.EnrichmentExportRecordCount), $("#EnrichmentQueueCount").text(t.EnrichmentQueueCount), t.EnrichmentQueueCount > 0 || t.EnrichmentQueueCount.includes("K") || t.EnrichmentQueueCount.includes("M") || t.EnrichmentQueueCount.includes("B") ? ($("#EnrichmentQueueCount").remove(), $(".enrichmentOutput").append("<div class='displayValue' id='EnrichmentQueueCount' title='Processing Queue'>" + t.EnrichmentQueueCount + "</div>")) : $("#EnrichmentQueueCount").hide() } }) } function addZero(t) { return t < 10 && (t = "0" + t), t } function setImportInterVal() { var t = $("#ImportNextExeTimeSpan").val(); ImportSecinterval = setInterval(function () { var e = t.split(":"), a = parseInt(e[0], 10), n = parseInt(e[1], 10), s = parseInt(e[2], 10); n > 0 || s > 0 ? (n > 0 || s > 0) && ((n = --s < 0 ? --n : n) < 0 && clearInterval(ImportSecinterval), s = (s = s < 0 ? 59 : s) < 10 ? "0" + s : s, $(".spnImportNextTime").text("Next execution in " + addZero(a) + ":" + addZero(n) + ":" + s), t = a + ":" + n + ":" + s) : (clearInterval(ImportSecinterval), $(".spnImportNextTime").text("Running"), "Running" != $(".spnCleanseNextTime").text() && "Running" != $(".spnEnrichNextTime").text() && MakeCallForImport()) }, 1e3) } function MakeCallForImport() { ResetCallIntervals(), ImportIntervalCall = setInterval(function () { $.ajax({ type: "GET", url: "/Home/BackgroundProcessStatistics", dataType: "json", contentType: "application/json; charset=utf-8", beforeSend: function () { }, success: function (t) { "00:00:00" != t.ImportNextTime && (ResetAllIntervals(), $("#LoadBackgroundProcessStatisticsReport").html(t.view), startAllIntervals()) } }), $("#divProgress").hide() }, 1e3 * parseInt($("#RealTimeCallInterval").val())) } function setCleanseInterVal() { var t = $("#CleanseNextExeTimeSpan").val(); CleanseSecinterval = setInterval(function () { var e = t.split(":"), a = parseInt(e[0], 10), n = parseInt(e[1], 10), s = parseInt(e[2], 10); n > 0 || s > 0 ? (n > 0 || s > 0) && ((n = --s < 0 ? --n : n) < 0 && clearInterval(CleanseSecinterval), s = (s = s < 0 ? 59 : s) < 10 ? "0" + s : s, $(".spnCleanseNextTime").text("Next execution in " + addZero(a) + ":" + addZero(n) + ":" + s), t = a + ":" + n + ":" + s) : (clearInterval(CleanseSecinterval), $(".spnCleanseNextTime").text("Running"), "Running" != $(".spnImportNextTime").text() && "Running" != $(".spnEnrichNextTime").text() && MakeCallForCleanse()) }, 1e3) } function MakeCallForCleanse() { ResetCallIntervals(), CleanseIntervalCall = setInterval(function () { $.ajax({ type: "GET", url: "/Home/BackgroundProcessStatistics", dataType: "json", contentType: "application/json; charset=utf-8", beforeSend: function () { }, success: function (t) { "00:00:00" != t.CleanseNextTime && (ResetAllIntervals(), $("#LoadBackgroundProcessStatisticsReport").html(t.view), startAllIntervals()) } }), $("#divProgress").hide() }, 1e3 * parseInt($("#RealTimeCallInterval").val())) } function setEnrichInterVal() { var t = $("#EnrichNextExeTimeSpan").val(); EnrichSecinterval = setInterval(function () { var e = t.split(":"), a = parseInt(e[0], 10), n = parseInt(e[1], 10), s = parseInt(e[2], 10); n > 0 || s > 0 ? (n > 0 || s > 0) && ((n = --s < 0 ? --n : n) < 0 && clearInterval(EnrichSecinterval), s = (s = s < 0 ? 59 : s) < 10 ? "0" + s : s, $(".spnEnrichNextTime").text("Next execution in " + addZero(a) + ":" + addZero(n) + ":" + s), t = a + ":" + n + ":" + s) : (clearInterval(EnrichSecinterval), $(".spnEnrichNextTime").text("Running"), "Running" != $(".spnImportNextTime").text() && "Running" != $(".spnCleanseNextTime").text() && MakeCallForCleanse()) }, 1e3) } function MakeCallForEnrich() { ResetCallIntervals(), EnrichIntervalCall = setInterval(function () { $.ajax({ type: "GET", url: "/Home/BackgroundProcessStatistics", dataType: "json", contentType: "application/json; charset=utf-8", beforeSend: function () { }, success: function (t) { "00:00:00" != t.EnrichNextTime && (ResetAllIntervals(), $("#LoadBackgroundProcessStatisticsReport").html(t.view), startAllIntervals()) } }), $("#divProgress").hide() }, 1e3 * parseInt($("#RealTimeCallInterval").val())) } function ResetAllIntervals() { clearInterval(ImportSecinterval), clearInterval(ImportIntervalCall), clearInterval(CleanseSecinterval), clearInterval(CleanseIntervalCall), clearInterval(EnrichSecinterval), clearInterval(EnrichIntervalCall) } function ResetCallIntervals() { clearInterval(ImportIntervalCall), clearInterval(CleanseIntervalCall), clearInterval(EnrichIntervalCall) } function startAllIntervals() { setImportInterVal(), setCleanseInterVal(), setEnrichInterVal() } $.ajaxSetup({ cache: !1 }), $(document).ready(function () { LoadOnReady() }), $(document).on("click", "#ShowAPIUsageReport", function () { $.ajax({ type: "GET", url: "/Home/APIUsageStatisticsReport", dataType: "HTML", success: function (t) { $("#APIUsageReportModalMain").html(t), DraggableModalPopup("#APIUsageReportModal") } }) }), $(document).on("click", "#btnAPIUsagestatisticsRefresh", function () { ReFreshAPIUsageStatistics() }), $(document).on("click", "#lnkBtnUnprocessedInput", function () { loadImportProcessDataQueueStatistics() }), $(document).on("click", "#rptShowBackgroundProcessList", function () { LoadShowBackgroundProcessList() }), $(document).on("change", "#EnableCLEANSE_MATCHProcess", function () { var t = $(this).prop("checked"), e = ""; e = 1 == t ? settingPausemsg : settingUnPausemsg; var a = ConvertEncrypte(encodeURI("SettingName:PAUSE_CLEANSE_MATCH_ETL@#$SettingValue:" + t)).split("+").join("***"); bootbox.confirm({ title: "<i class='fa fa-check-square-o' aria-hidden='true'></i> " + confirmBox, message: e, callback: function (e) { e ? ($("#divProgress").show(), $.ajax({ type: "POST", url: "/Home/PauseDataMethod?Parameters=" + a, contentType: !1, processData: !1, success: function (t) { $("#divProgress").hide(), ShowMessageNotification("success", t, !1), BackgroundProcessStatisticsReport() }, error: function (t, e, a) { $("#divProgress").hide() } })) : $("#EnableCLEANSE_MATCHProcess").prop("checked", !t) } }) }), $(document).on("change", "#EnableENRICHMENTProcess", function () { var t = $(this).prop("checked"), e = ""; e = 1 == t ? settingPausemsg : settingUnPausemsg; var a = ConvertEncrypte(encodeURI("SettingName:PAUSE_ENRICHMENT_ETL@#$SettingValue:" + t)).split("+").join("***"); bootbox.confirm({ title: "<i class='fa fa-check-square-o' aria-hidden='true'></i> " + confirmBox, message: e, callback: function (e) { e ? ($("#divProgress").show(), $.ajax({ type: "POST", url: "/Home/PauseDataMethod?Parameters=" + a, contentType: !1, processData: !1, success: function (t) { $("#divProgress").hide(), ShowMessageNotification("success", t, !1), BackgroundProcessStatisticsReport() }, error: function (t, e, a) { $("#divProgress").hide() } })) : $("#EnableENRICHMENTProcess").prop("checked", !t) } }) }), $(document).on("change", "#EnablePauseFileImportProcessETL", function () { var t = $(this).prop("checked"), e = ""; e = 1 == t ? settingPausemsg : settingUnPausemsg; var a = "SettingName:PAUSE_FILE_IMPORT_PROCESS_ETL@#$SettingValue:" + t; bootbox.confirm({ title: "<i class='fa fa-check-square-o' aria-hidden='true'></i> " + confirmBox, message: e, callback: function (e) { if (e) { $("#divProgress").show(); var n = ConvertEncrypte(encodeURI(a)).split("+").join("***"); $.ajax({ type: "POST", url: "/Home/PauseDataMethod?Parameters=" + n, contentType: !1, processData: !1, success: function (t) { $("#divProgress").hide(), ShowMessageNotification("success", t, !1), BackgroundProcessStatisticsReport() }, error: function (t, e, a) { $("#divProgress").hide() } }) } else $("#EnablePauseFileImportProcessETL").prop("checked", !t) } }) }), $(document).on("click", "#btnLCMStatisticsRefresh", function () { LCMCandidateStatisticsReport() }), $(document).on("click", "#btnDataStewardStatisticsRefresh", function () { DataStewardshipStatisticsReport() }), $(document).on("click", "#btnBackgroundtatisticsRefresh", function () { BackgroundProcessStatisticsReport() }), $(document).on("click", "#btnActiveDataRefresh", function () { if ("Filter Applied" == $("#ActiveStatisticsFilter").text().trim()) { var t = "", e = ""; "true" == $("#LicenseEnableTags").val().toLowerCase() && (t = $("#ActiveStatisticsFilterTags").val(), e = $("#LOBTag").val()), ReFreshActiveStatisticsFilter(t = "0" == t ? "" : t, e) } else ReFreshActiveStatisticsFilter("", ""); $(".chzn-select").trigger("chosen:updated") }), $(document).on("change", "#FilterByTag", function () { var t = $(this).prop("checked"); 1 == t ? ($(".spnUsingImportProcess").removeClass("thColor"), $(".spnUsingTags").addClass("thColor")) : ($(".spnUsingImportProcess").removeClass("thColor"), $(".spnUsingImportProcess").addClass("thColor")); var e = "byTag:" + t; $.ajax({ type: "GET", url: "/Home/ImportProcessDataQueueStatistics?Parameters=" + ConvertEncrypte(encodeURI(e)).split("+").join("***"), dataType: "HTML", success: function (t) { $("#ImportProcessDataQueueStatisticsModalMain .modal-body").html(t) } }) });