﻿function LoadResearchInvestigation() { location.href = "/ResearchInvestigation/Index" } function FilterResearchInvestigation(e, t, a, n, i) { var s = "SrcRecordId:" + e + "@#$Status:" + t + "@#$RequestStartDateTime:" + a + "@#$RequestendDateTime:" + n + "@#$KeyWord:" + i; $.ajax({ type: "GET", url: "/ResearchInvestigation/FilterIResearchInvestigation?Parameters=" + ConvertEncrypte(encodeURI(s)).split("+").join("***"), dataType: "HTML", contentType: "application/html", cache: !1, success: function (e) { $("#divPartialInvestigation").html(e), InitiResearchInvestigationDataTable() }, error: function (e, t, a) { } }) } function OnSuccessResearchInvestigationTargeted(e) { e.result ? ($("#iResearchInvestigationRecordsTargetedModal").modal("hide"), parent.ShowMessageNotification("success", e.message, !1)) : $(".targetederrMsg").text(e.message) } function OnSuccessResearchInvestigation(e) { if (e.result) { var t = $("#InvestigateModalMain #InputId").val(); $("#InvestigateModal").modal("hide"), parent.ShowMessageNotification("success", e.message, !1), $("#divStewardshipPortal tr#" + t).length > 0 ? 1 == $("#divStewardshipPortal tbody tr.trMatchedItemView").length ? ($("#divStewardshipPortal tr#" + t).next().remove(), $("#divStewardshipPortal tr#" + t).html('<td colspan="12">' + noRecordsAvailable + "</td>")) : ($("#divStewardshipPortal tr#" + t).next().remove(), $("#divStewardshipPortal tr#" + t).remove()) : $("#dgBanInputData tr#" + t).length > 0 && ($("#SearchPopupModal").modal("hide"), 1 == $("#dgBanInputData tbody tr").length ? $("#dgBanInputData tr#" + t).html('<td colspan="13">' + noRecordsAvailable + "</td>") : $("#dgBanInputData tr#" + t).remove()) } else $(".minierrMsg").text(e.message) } function isValidEmailAddress(e) { return /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i.test(e) } function InitiResearchInvestigationDataTable() { InitDataTable(".iResearchInvsetigationTB", [10, 20, 30], !1, [5, "desc"]) } $(document).ajaxStart(function () { $("#divProgress").show() }).ajaxStop(function () { $("#divProgress").hide() }), $(document).on("click", "#btnCancel", function () { $("#InvestigateModal").modal("hide"), $("#iResearchInvestigationRecordsTargetedModal").modal("hide") }), $(document).on("click", ".clsGetStatus", function () { var e = $(this).attr("data-ResearchRequestId"); $.ajax({ type: "POST", url: "/ResearchInvestigation/GetInvestigationStatus?Parameters=" + ConvertEncrypte(encodeURI(e)).split("+").join("***"), dataType: "JSON", contentType: "application/json", cache: !1, success: function (e) { e.result ? LoadResearchInvestigation() : ShowMessageNotification("success", e.message, !1) }, error: function (e, t, a) { } }) }), $(document).on("change", "#SubTypes", function () { null != $(this).val() && $(this).val().indexOf("33560") > -1 ? (parent.addHeight600Class(!0), $(".artDuplicateDuns").show(), $(".artDuplicateDuns .DUPDUNS").each(function () { $(this).attr("disabled", !1) })) : (parent.addHeight600Class(!1), $(".artDuplicateDuns").hide(), $(".artDuplicateDuns .DUPDUNS").each(function () { $(this).attr("disabled", !0) })) }), $(document).on("click", "#btnFilterResearchInvestigation", function () { var e = $("#SrcRecordId").val(), t = $("#Status").val(), a = $("#RequestStartDateTime").val(), n = $("#Keyword").val(), i = "", s = ""; if (null != a && "" != a) { var o = a.split("-"); i = o[0], s = o[1] } FilterResearchInvestigation(e, t, i, s, n) }), $(document).on("click", "#InvestigateModal #btnMiniinvestigationSave", function () { var e = 0, t = $("#InvestigateModal #BusinessName").val(), a = $("#InvestigateModal #StreetAddress").val(), n = $("#InvestigateModal #AddressLocality").val(), i = $("#InvestigateModal #PostalCode").val(), s = $("#InvestigateModal #CountryISOAlpha2Code").val(), o = $("#InvestigateModal #ResearchComments").val(), r = $("#InvestigateModal #CustomerRequestorEmail").val(); return t ? $("#InvestigateModal #spnBusinessName").hide() : ($("#InvestigateModal #spnBusinessName").show(), e++), a ? $("#InvestigateModal #spnStreet").hide() : ($("#InvestigateModal #spnStreet").show(), e++), n ? $("#InvestigateModal #spnCity").hide() : ($("#InvestigateModal #spnCity").show(), e++), i ? $("#InvestigateModal #spnPostal").hide() : ($("#InvestigateModal #spnPostal").show(), e++), s ? $("#InvestigateModal #spnCountry").hide() : ($("#InvestigateModal #spnCountry").show(), e++), s ? $("#InvestigateModal #spnCountry").hide() : ($("#InvestigateModal #spnCountry").show(), e++), o ? $("#InvestigateModal #spnReComments").hide() : ($("#InvestigateModal #spnReComments").show(), e++), r || isValidEmailAddress(r) ? $("#InvestigateModal #spnReEmail").hide() : ($("#InvestigateModal #spnReEmail").show(), e++), !(e > 0) }), $(document).on("click", "#iResearchInvestigationRecordsTargetedModal #btnSubmitInvestigation", function () { var e = $.map($("#SubTypes option:selected"), function (e, t) { return $(e).text() }), t = $("#iResearchInvestigationRecordsTargetedModal #Duns").val(), a = $("#iResearchInvestigationRecordsTargetedModal #ResearchComments1").val(), n = $("#iResearchInvestigationRecordsTargetedModal #ResearchComments2").val(); e = $("#iResearchInvestigationRecordsTargetedModal #SubTypes").val(); var i = []; null != e && e.indexOf("33560") > -1 && $(".artDuplicateDuns .DUPDUNS").each(function () { var e = $(this).val(); e && null != e && i.push(e) }), i.length > 0 && $("#iResearchInvestigationRecordsTargetedModal #DuplicateDuns").val(i.toString()); var s = 0; if ("" == t ? ($("#iResearchInvestigationRecordsTargetedModal #spnDuns").show(), s++) : $("#iResearchInvestigationRecordsTargetedModal #spnDuns").hide(), null == e ? ($("#iResearchInvestigationRecordsTargetedModal #spnResearchSubTypes").show(), s++) : ($("#iResearchInvestigationRecordsTargetedModal #ResearchSubTypes").val(e), $("#iResearchInvestigationRecordsTargetedModal #spnResearchSubTypes").hide()), null != e && (e.indexOf("33769") > -1 || e.indexOf("33770") > -1) ? ("" == a ? ($("#iResearchInvestigationRecordsTargetedModal #spnResearchComments1").show(), s++) : $("#iResearchInvestigationRecordsTargetedModal #spnResearchComments1").hide(), "" == n ? ($("#iResearchInvestigationRecordsTargetedModal #spnResearchComments2").show(), s++) : $("#iResearchInvestigationRecordsTargetedModal #spnResearchComments2").hide()) : ($("#iResearchInvestigationRecordsTargetedModal #spnResearchComments1").hide(), $("#iResearchInvestigationRecordsTargetedModal #spnResearchComments2").hide()), s > 0) return !1 }), $(document).on("keypress", ".OnlyDigit", function (e) { var t = 0 == e.keyCode ? e.charCode : e.keyCode; return t >= 48 && t <= 57 || 8 == t }), $(document).on("click", ".tblMiniReqMultiple .Edit", function () { var e = $(this).closest("tr"); $("td", e).each(function () { $(this).find("input").length > 0 && ($(this).find("input").show(), $(this).find("span").hide()) }), e.find(".Update").show(), e.find(".Cancel").show(), $(this).hide() }), $(document).on("click", ".tblMiniReqMultiple .Cancel", function () { var e = $(this).closest("tr"); $("td", e).each(function () { if ($(this).find("input").length > 0) { var e = $(this).find("span"), t = $(this).find("input"); t.val(e.html()), e.show(), t.hide() } }), e.find(".Edit").show(), e.find(".Update").hide(), $(this).hide() }), $(document).on("click", ".tblMiniReqMultiple .Update", function () { var e = $(this).closest("tr"); $("td", e).each(function () { if ($(this).find("input").length > 0) { var t = $(this).find("span"), a = $(this).find("input"); t.html(a.val()), t.show(), a.hide(), a.hasClass("AddressRegion") || ("" != a.val() && null != a.val() ? $(this).removeClass("cellError") : $(this).hasClass("cellError") || $(this).addClass("cellError")); var n = JSON.parse(e.attr("data-val")); n[a.attr("class")] = a.val(), e.attr("data-val", JSON.stringify(n)) } }), e.find(".Edit").show(), e.find(".Cancel").hide(), $(this).hide() }), $(document).on("click", "#btnSubmitMultiMiniRequest", function () { var e = 0, t = $("#rComments").val(), a = $("#reqEmail").val(); if ("" == t || null == t || null == t ? (e++ , $(".errResearchComments").show()) : $(".errResearchComments").hide(), "" == a || null == a || null == a ? (e++ , $(".errCustEmail").text(requiredRequestorEmail), $(".errCustEmail").show()) : isValidEmailAddress(a) ? $(".errCustEmail").hide() : (e++ , $(".errCustEmail").text(enterValidEmail), $(".errCustEmail").show()), e > 0) return !1; var n = []; $(".tblMiniReqMultiple tbody tr").each(function () { var e = JSON.parse($(this).attr("data-val")); e.ResearchComments = t, e.CustomerRequestorEmail = a, n.push(e) }), $.ajax({ type: "POST", contentType: "application/json; charset=utf-8", url: "/ResearchInvestigation/SubmitMultipleMiniRequests", data: JSON.stringify(n), dataType: "json", cache: !1, success: function (e) { $("#MultiMiniModal").modal("hide"), ShowMessageNotification("error", e.message, !1) }, error: function (e, t, a) { } }) }), $(document).on("click", "#btnGetAllReSearchStatus", function () { $.ajax({ type: "POST", url: "/ResearchInvestigation/GetInvestigationStatusForAll", dataType: "JSON", contentType: "application/json", cache: !1, success: function (e) { e.result ? LoadResearchInvestigation() : ShowMessageNotification("success", e.message, !1) }, error: function (e, t, a) { } }) }), $(document).on("click", "#btnInvestigationFileUpload", function () { $.ajax({ type: "GET", url: "/ResearchInvestigation/FileUploadIndex", cache: !1, success: function (e) { $("#InvestigationFileUploadModalMain").html(e), DraggableModalPopup("#InvestigationFileUploadModal") }, error: function (e, t, a) { } }) }), $(document).on("click", "#btnInvestiogationFilesubmit", function () { var e = new FormData; null != $("#InvestigationFile")[0].files[0] ? ($(".fileErrorMsg").text(""), e.append("file", $("#InvestigationFile")[0].files[0]), e.append("Type", $("#Type").val()), $.ajax({ type: "POST", url: "/ResearchInvestigation/FileUploadIndex", data: e, contentType: !1, processData: !1, success: function (e) { return e == unableImportBlankFile ? ($(".generalMsg").text(e), !1) : e == onlyExcelAllowed ? ($(".generalMsg").text(e), !1) : e.indexOf(error) > -1 ? ($(".generalMsg").text(e), !1) : e.indexOf(alreadyBelongsToFile) > -1 ? ($(".generalMsg").text(e), !1) : ($("#InvestigationFileUploadModal").modal("hide"), $("#InvestigationColumnMappingModalMain").html(e), void DraggableModalPopup("#InvestigationColumnMappingModal")) }, error: function (e, t, a) { } })) : $(".fileErrorMsg").text(selectFile) }), $(document).on("change", "#InvestigationFile", function () { if ("" != $("#file").val()) { var e = "xls,xlsx".split(","); -1 == $.inArray($(this).val().split(".").pop().toLowerCase(), e) ? ($(".fileErrorMsg").text(onlyFormatsAllowed + " " + e.join(", ")), $("#InvestigationFile").val("")) : $(".fileErrorMsg").text("") } }), $(document).on("change", "input[type=radio][name=rdType]", function () { $("#Type").val($("input[name='rdType']:checked").val()), "Targeted" == $("input[name='rdType']:checked").val() ? $(".lnksubtypeinfo").show() : $(".lnksubtypeinfo").hide() }), $(document).on("click", ".investigation_Details", function () { var e = JSON.parse($(this).attr("data-val")); $.ajax({ type: "POST", contentType: "application/json; charset=utf-8", url: "/ResearchInvestigation/InvestigationDetails", data: JSON.stringify(e), cache: !1, dataType: "HTML", success: function (e) { $("#InvestigationDetailsModalMain").html(e), DraggableModalPopup("#InvestigationDetailsModal") }, error: function (e, t, a) { } }) });