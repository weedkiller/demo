﻿function InitDandBDataBlocksDataTable() { InitDataTable(".dataBlockGroupsTB", [10, 20, 30], !1, [0, "desc"]) } function setVersionLevel() { var t = $("#DataBlocksIds").val(); if (null != t && "" != t) { var e = t.split(","); $(".selectVersion").each(function () { var t = $(this).attr("data-datablockid"); jQuery.inArray(t, e) > -1 && $(this).addClass("active") }) } } function LoadDataBlockGroups() { $.pjax({ url: "/DNB/DataBlocks", container: "#divPartialDataBlockGroup", timeout: 5e4 }).done(function (t) { var e = JSON.parse(t); $("#divPartialDataBlockGroup").html(e.indexDataBlockGroup), $(".dataBlockGroupsTB tbody tr:first").addClass("current"), $("#divPartialUpsertDataBlockGroup").html(e.upsertDataBlockGroup), InitDandBDataBlocksDataTable(), setVersionLevel() }) } function selectFirstTRDataBlocks() { $("table.dataBlockGroupsTB tr").each(function () { $(this).removeClass("current") }), $("table.dataBlockGroupsTB tbody tr:first").addClass("current"); var t = $("table.dataBlockGroupsTB tbody tr:first").attr("data-DataBlockGroupId"); null == t && (t = 0), $("table.dataBlockGroupsTB tbody tr:first").html().indexOf("No record(s) Found") > 0 && $("table.dataBlockGroupsTB tbody tr:first").removeClass("current"); var e = "/DNBDataEnrichment/UpsertDataBlockGroup?Parameters=" + ConvertEncrypte(encodeURI(t)).split("+").join("***"); $.ajax({ type: "GET", url: e, dataType: "HTML", contentType: "application/html", cache: !1, success: function (t) { $("#divPartialUpsertDataBlockGroup").html(t), setVersionLevel() }, error: function (t, e, n) { } }) } function UpdateUpsertDataBlockGroup() { LoadDataBlockGroups() } function EnableDataBlockGroup() { $("#DataBlockGroupName").prop("disabled", !1), $("#CustomerReference").prop("disabled", !1), $("#TradeUp").prop("disabled", !1), $(".selectVersion").prop("disabled", !1), $("#btnDataBlockGroup").show(), $(".LevelBlockbox").removeClass("disabledLevelBox") } function SetBlankValueDataBlockGroup() { $("#DataBlockGroupName").val(""), $("#CustomerReference").val(""), $("#TradeUp").val(""), $(".selectVersion").removeClass("active"), $("#DataBlocks").val(""), $("#DataBlocksIds").val(""), $("#DataBlockGroupId").val("0"), $("#spnAPIUrl").text("") } function ValidateDataBlockGroup() { var t = $("#DataBlockGroupName").val(), e = [], n = [], r = 0; return null != t && "" != t.trim() ? $("#spnDataBlockGroupName").hide() : ($("#spnDataBlockGroupName").show(), r++), $(".selectVersion.active").each(function () { e.push($(this).attr("data-DataBlockId")), n.push($(this).attr("data-ProductCode")) }), e.length > 0 && n.length > 0 ? ($("#DataBlocksIds").val(e.toString()), $("#DataBlocks").val(n.toString()), $("#spnDataBlocks").hide()) : ($("#spnDataBlocks").show(), r++), !(r > 0) } function SetAPIUrl() { var t = [], e = $("#CustomerReference").val(), n = $("#TradeUp").val(); $(".selectVersion.active").each(function () { t.push($(this).attr("data-ProductCode")) }); var r = "https://plus.dnb.com/v1/data/duns/{dunsNumber}?blockIDs=" + t.toString(); null != e && "" != e && (r += "&CustomerReference=" + e), null != n && "" != n && (r += "&TradeUp=" + n), $("#spnAPIUrl").text(r) } function loadUpsertDataBlockGroup(t) { $.ajax({ type: "GET", url: "/DNBDataEnrichment/UpsertDataBlockGroup?Parameters=" + ConvertEncrypte(encodeURI(t)).split("+").join("***"), dataType: "html", contentType: "application/html", cache: !1, success: function (t) { $("#divPartialUpsertDataBlockGroup").html(t), setVersionLevel() } }) } function LoadDataEnrichment() { $.pjax({ url: "/DNB/DataEnrichment", container: "#divPartialDataEnrichmentSettings", timeout: 5e4 }).done(function () { $("table.APIEnrichmentTB tbody tr:first").addClass("current"); var t = $("table.APIEnrichmentTB tbody tr:first").attr("data-apigroupid"); null != t && null != t && "" != t || (t = null), $.ajax({ type: "GET", url: "/DNBDataEnrichment/InsertUpdateDataEnrichment?Parameters=" + t, dataType: "HTML", contentType: "application/html", cache: !1, success: function (t) { $("#divPartialAddUdateDataEnrichmentSettings").html(t), InitDandBDataEnrichmentDataTable(), "lob" == $.UserRole.toLowerCase() && ($("#frm_DnBEnrichment .chzn-select").attr("data-placeholder", "Add Tags (Required)"), $("#frm_DnBEnrichment .chzn-select").trigger("chosen:updated")), 0 == $("table.APIEnrichmentTB tbody tr").length && $("#editAPIEnrichment").attr("disabled", !0), LoadTagsDnBApiGroupTag() } }) }) } function InitDandBDataEnrichmentDataTable() { InitDataTable(".APIEnrichmentTB", [10, 20, 30], !1, [0, "desc"]) } function fillAPIType() { var t = $("#APIType").val(), e = ConvertEncrypte(encodeURI("APIType:" + t + "@#$CredId:0")).split("+").join("***"), n = $('input[name="__RequestVerificationToken"]').val(); $.ajax({ type: "POST", url: "/DNBDataEnrichment/GetDnBAPIList?Parameters=" + e, dataType: "JSON", headers: { __RequestVerificationToken: n }, contentType: "application/json", success: function (t) { if ($("#APIIds option").remove(), $("#frm_DnBEnrichment #CredentialId option").remove(), $("#RemoveAPIIds option").remove(), t.data.length > 0) for (var e = 0; e < t.data.length; e++)$("#APIIds").append(new Option(t.data[e].APIName, t.data[e].DnBAPIId)); if (t.data2.length > 0) for (e = 0; e < t.data2.length; e++)$("#frm_DnBEnrichment #CredentialId").append(new Option(t.data2[e].CredentialName, t.data2[e].CredentialId)) }, error: function (t, e, n) { } }) } function UpdateDnbGroupAPI(t) { ShowMessageNotification("success", t.message), t.result && ($("#APIGroupName").prop("disabled", !0), $(".DnBApiGroupTag").prop("disabled", !0), $(".DnBApiGroupTag").trigger("chosen:updated"), $("#APIIds").prop("disabled", !0), $("#RemoveAPIIds").prop("disabled", !0), $("#btnDnBApiGrpRight").prop("disabled", !0), $("#btnDnBApiGrpAllRight").prop("disabled", !0), $("#btnDnBApiGrpLeft").prop("disabled", !0), $("#btnDnBApiGrpAllLeft").prop("disabled", !0), $("#btnDnBApiGrp").hide(), $("#frm_DnBEnrichment .OpenTags").hide(), LoadDataEnrichment()), LoadTagsDnBApiGroupTag() } function LoadTagsDnBApiGroupTag() { if ($("#frm_DnBEnrichment #TagList").length > 0) { var t = $("#frm_DnBEnrichment #TagList").val().split(","); null == t && "" == t || ($(".DnBApiGroupTag option").each(function () { for (var e = 0; e < t.length; e++)$(this).val() == t[e] && $(this).attr("selected", "selected") }), $("#frm_DnBEnrichment #Tags").val(t)) } $(".DnBApiGroupTag").length > 0 && $(".DnBApiGroupTag").chosen().change(function (t) { t.target == this && $("#frm_DnBEnrichment #Tags").val($(this).val()) }), $(".DnBApiGroupTag").trigger("chosen:updated") } function enableAPIEnrichmentFields() { $("#frm_DnBEnrichment #CredentialId").prop("disabled", !1), $("#APIGroupName").prop("disabled", !1), $("#CountryGroupId").prop("disabled", !1), $(".DnBApiGroupTag").prop("disabled", !1), $(".DnBApiGroupTag").trigger("chosen:updated"), $("#APIType").prop("disabled", !1), $("#frm_DnBEnrichment #CredentialId").prop("disabled", !1), $("#APIIds").prop("disabled", !1), $("#btnDnBApiGrpRight").prop("disabled", !1), $("#btnDnBApiGrpAllRight").prop("disabled", !1), $("#btnDnBApiGrpLeft").prop("disabled", !1), $("#btnDnBApiGrpAllLeft").prop("disabled", !1), $("#RemoveAPIIds").prop("disabled", !1), $("#btnDnBApiGrp").show(), $("#frm_DnBEnrichment .OpenTags").show() } function GetThirdPartyAPICredentialsByProvider(t) { $.ajax({ type: "GET", url: "/DNBDataEnrichment/GetThirdPartyAPICredentials?Parameters=" + ConvertEncrypte(encodeURI(t)).split("+").join("***"), dataType: "json", contentType: "application/json", cache: !1, async: !1, success: function (t) { $(".enrichCredentialName #EnrichCredential").find("option").remove().end().append('<option value="">--Select--</option>').val(""); for (var e = 0; e < t.length; e++)$(".enrichCredentialName #EnrichCredential").append($("<option></option>").attr("value", t[e].CredentialId).text(t[e].CredentialName)) } }) } function GetThirdPartyEnrichments() { $.pjax({ url: "/DNB/ThirdPartyEnrichment", container: "#divPartialDataThirdPartyEnrichment", timeout: 5e4 }).done(function () { InitDandBThirdPartyEnrichmentDataTable(), $("table.ThirdPartyEnrichmentTB tbody tr:first").addClass("current"), GetThirdPartyEnrichmentsByEnrichId($("table.ThirdPartyEnrichmentTB tbody tr:first").attr("data-EnrichId")) }) } function GetThirdPartyEnrichmentsByEnrichId(t) { null != t && null != t && "" != t || (t = null), $.ajax({ type: "GET", cache: !1, url: "/DNBDataEnrichment/UpsertThirdPartyEnrichments?Parameters=" + t, dataType: "HTML", contentType: "application/html", success: function (t) { $("#divPartialDataThirdPartyEnrichmentAddUpdate").html(t) } }) } function enableThirdPartyEnrichmentFields() { $("#frm_ThirdPartyEnrichment #ThirdPartyEnrichProvider").prop("disabled", !1), $("#frm_ThirdPartyEnrichment #EnrichCredential").prop("disabled", !1), $("#frm_ThirdPartyEnrichment #EnrichmentDescription").prop("disabled", !1), $("#frm_ThirdPartyEnrichment #CountryGroupId").prop("disabled", !1), $("#frm_ThirdPartyEnrichment .ThirdPartyEnrichmentTag").prop("disabled", !1), $("#frm_ThirdPartyEnrichment .ThirdPartyEnrichmentTag").trigger("chosen:updated"), $("#frm_ThirdPartyEnrichment #EnablePeriodicRefresh").prop("disabled", !1), $("#frm_ThirdPartyEnrichment #PeriodicRefreshIntervalDays").prop("disabled", !1), $("#frm_ThirdPartyEnrichment #btnThirdPartyEnrichment").show(), $("#frm_DnBEnrichment .OpenTags").show() } function InitDandBThirdPartyEnrichmentDataTable() { InitDataTable(".ThirdPartyEnrichmentTB", [10, 20, 30], !1, [0, "desc"]) } function LoadTagsThirdPartyEnrichmentTags() { if ($("#frm_ThirdPartyEnrichment #TagList").length > 0) { var t = $("#frm_ThirdPartyEnrichment #TagList").val().split(","); null == t && "" == t || ($(".ThirdPartyEnrichmentTag option").each(function () { for (var e = 0; e < t.length; e++)$(this).val() == t[e] && $(this).attr("selected", "selected") }), $("#frm_ThirdPartyEnrichment #Tags").val(t)) } $(".ThirdPartyEnrichmentTag").length > 0 && $(".ThirdPartyEnrichmentTag").chosen().change(function (t) { t.target == this && $("#frm_ThirdPartyEnrichment #Tags").val($(this).val()) }), $(".ThirdPartyEnrichmentTag").trigger("chosen:updated") } function LoadThirdPartyEnrichmentFieldsValue() { $("#frm_ThirdPartyEnrichment #ThirdPartyEnrichmentFieldsValue").multiselect({ includeSelectAllOption: !0, nonSelectedText: "Select Fields", numberDisplayed: 3, maxHeight: 200, enableCaseInsensitiveFiltering: !0, onChange: function (t, e, n) { var r = $("#frm_ThirdPartyEnrichment #ThirdPartyEnrichmentFieldsValue").val(); r.length > 0 && $("#frm_ThirdPartyEnrichment #EnrichmentFields").val(r.toString()) } }); var t = $("#frm_ThirdPartyEnrichment #ThirdPartyEnrichmentFieldsList").val().split(","); t.length > 0 && ($("#frm_ThirdPartyEnrichment #ThirdPartyEnrichmentFieldsValue").val(t), $("#frm_ThirdPartyEnrichment #ThirdPartyEnrichmentFieldsValue").multiselect("refresh")) } function SuccessAddUpdateThirdPartyEnrichment(t) { ShowMessageNotification("success", t.message), t.result && GetThirdPartyEnrichments() } $("body").on("click", ".deleteDataBlockGroup", function () { var t = $(this).attr("id"), e = $('input[name="__RequestVerificationToken"]').val(); bootbox.confirm({ title: "<i class='fa fa-check-square-o' aria-hidden='true'></i> " + confirmBox, message: deleteDataBlockRecord, callback: function (n) { if (n) return $.ajax({ type: "POST", url: "/DNBDataEnrichment/DeleteDataBlockGroups?Parameters=" + ConvertEncrypte(encodeURI(t)).split("+").join("***"), headers: { __RequestVerificationToken: e }, dataType: "JSON", contentType: "application/json", cache: !1, success: function (t) { ShowMessageNotification("success", t.message), t.result && LoadDataBlockGroups() }, error: function (t, e, n) { } }), !0 } }) }), $(document).on("click", "#addDataBlockGroup", function () { EnableDataBlockGroup(), SetBlankValueDataBlockGroup() }), $(document).on("click", "#editDataBlockGroup", function () { EnableDataBlockGroup() }), $(document).on("click", ".selectVersion", function () { var t = $(this); t.hasClass("active") ? t.removeClass("active") : (t.siblings().removeClass("active"), t.addClass("active")), SetAPIUrl() }), $(document).on("change", "#CustomerReference", function () { SetAPIUrl() }), $(document).on("change", "#TradeUp", function () { SetAPIUrl() }), $("body").on("click", "table.dataBlockGroupsTB tbody tr", function () { $(this).hasClass("current") || ($("table.dataBlockGroupsTB tr").each(function () { $(this).removeClass("current") }), $(this).closest("tr").addClass("current"), loadUpsertDataBlockGroup($(this).attr("data-DataBlockGroupId"))) }), $("body").on("click", ".deleteEnrichment", function () { var t = $(this).attr("id"), e = $('input[name="__RequestVerificationToken"]').val(); bootbox.confirm({ title: "<i class='fa fa-check-square-o' aria-hidden='true'></i> " + confirmBox, message: multipleDeleteAutoAccept, callback: function (n) { n && $.ajax({ type: "POST", url: "/DNBDataEnrichment/DeleteAPIGroup?Parameters=" + t, dataType: "JSON", headers: { __RequestVerificationToken: e }, contentType: "application/json", success: function (t) { ShowMessageNotification("success", t.message), t.result && LoadDataEnrichment() }, error: function (t, e, n) { } }) } }) }), $("body").on("click", "#editAPIEnrichment", function () { enableAPIEnrichmentFields(), $("#btnDnBApiGrp").val(update) }), $("body").on("click", "#AddAPIEnrichment", function () { $("#spnCredName").hide(), $("table.APIEnrichmentTB tbody tr").each(function () { $(this).removeClass("current") }), enableAPIEnrichmentFields(), $("#APIGroupName").val(""), $("#CountryGroupId").val(""), $("#frm_DnBEnrichment #CredentialId").val("0"), $(".DnBApiGroupTag").val("0"), $(".DnBApiGroupTag").trigger("chosen:updated"), $("#APIGroupId").val("0"), $("#CountryGroupId").val("-1"); var t = $("#RemoveAPIIds option"); $("#APIIds").append($(t).clone()), $(t).remove(), $("#frm_DnBEnrichment #Tags").val(""), $("#btnDnBApiGrp").val(add), $("#frm_DnBEnrichment #Tags").val(""), $("#tmpName").val(""), $("#APIType").val("DirectPlus"), $("#frm_DnBEnrichment #CredentialId").val($("#frm_DnBEnrichment #CredentialId option:first").val()), fillAPIType() }), $(document).on("change", "#frm_DnBEnrichment #CredentialId", function () { var t = $("#frm_DnBEnrichment #APIType").val(), e = $(this).val(), n = ConvertEncrypte(encodeURI("APIType:" + t + "@#$CredId:" + e)).split("+").join("***"), r = $('input[name="__RequestVerificationToken"]').val(); $.ajax({ type: "POST", url: "/DNBDataEnrichment/GetDnBAPIList?Parameters=" + n, dataType: "JSON", headers: { __RequestVerificationToken: r }, contentType: "application/json", success: function (t) { if ($("#frm_DnBEnrichment #APIIds option").remove(), $("#frm_DnBEnrichment #RemoveAPIIds option").remove(), t.data.length > 0) for (var e = 0; e < t.data.length; e++)$("#frm_DnBEnrichment #APIIds").append(new Option(t.data[e].APIName, t.data[e].DnBAPIId)) }, error: function (t, e, n) { } }) }), $(document).on("change", "#APIType", function () { fillAPIType() }), $("body").on("click", "#btnDnBApiGrpRight", function (t) { var e = $("#APIIds option:selected"); 0 == e.length && (ShowMessageNotification("success", nothingToMove), t.preventDefault()), $("#RemoveAPIIds").append($(e).clone()), $(e).remove(), t.preventDefault() }), $("body").on("click", "#btnDnBApiGrpAllRight", function (t) { var e = $("#APIIds option"); 0 == e.length && (ShowMessageNotification("success", nothingToMove), t.preventDefault()), $("#RemoveAPIIds").append($(e).clone()), $(e).remove(), t.preventDefault() }), $("body").on("click", "#btnDnBApiGrpLeft", function (t) { var e = $("#RemoveAPIIds option:selected"); 0 == e.length && (ShowMessageNotification("success", nothingToMove), t.preventDefault()), $("#APIIds").append($(e).clone()), $(e).remove(), t.preventDefault() }), $("body").on("click", "#btnDnBApiGrpAllLeft", function (t) { var e = $("#RemoveAPIIds option"); 0 == e.length && (ShowMessageNotification("success", nothingToMove), t.preventDefault()), $("#APIIds").append($(e).clone()), $(e).remove(), t.preventDefault() }), $("body").on("click", ".btnDnBApiGrp", function () { var t = $("select#RemoveAPIIds option").length, e = $("#APIGroupName").val().trim(), n = $("#frm_DnBEnrichment #CredentialId").val(), r = 0, a = $("#frm_DnBEnrichment #Tags").val(); if ("" == e ? ($("#spnGroupName").show(), r++) : $("#spnGroupName").hide(), 0 == n ? ($("#frm_DnBEnrichment #spnCredName").show(), r++) : $("#frm_DnBEnrichment #spnCredName").hide(), 0 == t ? ($("#spnOptionValue").show(), r++) : $("#spnOptionValue").hide(), "lob" == $.UserRole.toLowerCase() && ("" == a || 0 == a ? (r++ , $("#frm_DnBEnrichment #spnTags").show()) : $("#frm_DnBEnrichment #spnTags").hide()), r > 0) return !1; var i = ""; $("#RemoveAPIIds option").each(function () { i = i + $(this).val() + "," }), $("#DnbAPIIds").val(i) }), $("body").on("click", "table.APIEnrichmentTB tbody tr", function () { if (!$(this).hasClass("current")) { $("table.APIEnrichmentTB tbody tr").each(function () { $(this).removeClass("current") }), $(this).closest("tr").addClass("current"); var t = $(this).attr("data-APIGroupId"); $.ajax({ type: "GET", cache: !1, url: "/DNBDataEnrichment/InsertUpdateDataEnrichment?Parameters=" + t, dataType: "HTML", contentType: "application/html", async: !1, success: function (t) { $("#divPartialAddUdateDataEnrichmentSettings").html(t), LoadTagsDnBApiGroupTag() } }) } }), $("body").on("click", "#IdRTabThirdPartyEnrichment", function () { $(this).parent("li").hasClass("active") || GetThirdPartyEnrichments() }), $(document).on("change", "#ThirdPartyEnrichProvider", function () { var t = $(this).val(); t ? GetThirdPartyAPICredentialsByProvider(t) : $(".enrichCredentialName #EnrichCredential").find("option").remove().end().append('<option value="">--Select--</option>').val("") }), $(document).on("click", "#AddThirdPartyEnrichment", function () { $("#articleAddupdateThirdPartyEnrichment #editThirdPartyEnrichment").prop("disabled", !0), $("table.ThirdPartyEnrichmentTB tbody tr").each(function () { $(this).removeClass("current") }), $("#frm_ThirdPartyEnrichment #ThirdPartyEnrichProvider").val(""), $("#frm_ThirdPartyEnrichment #EnrichCredential").val(""), $("#frm_ThirdPartyEnrichment #EnrichmentId").val("0"), $("#frm_ThirdPartyEnrichment #EnrichmentDescription").val(""), $("#frm_ThirdPartyEnrichment #CountryGroupId").val("-1"), $(".ThirdPartyEnrichmentTag").val("0"), $(".ThirdPartyEnrichmentTag").trigger("chosen:updated"), $("#frm_ThirdPartyEnrichment #Tags").val(""), $("#frm_ThirdPartyEnrichment #EnrichmentFields").val(""), $("#ThirdPartyEnrichmentFieldsValue option:selected").removeAttr("selected"), $("#ThirdPartyEnrichmentFieldsValue").multiselect("enable"), $("#ThirdPartyEnrichmentFieldsValue").multiselect("clearSelection"), $("#frm_ThirdPartyEnrichment #PeriodicRefreshIntervalDays").val(""), $("#frm_ThirdPartyEnrichment #EnablePeriodicRefresh").removeAttr("checked"), enableThirdPartyEnrichmentFields(), $("#frm_ThirdPartyEnrichment #btnThirdPartyEnrichment").val(add) }), $(document).on("click", "#editThirdPartyEnrichment", function () { enableThirdPartyEnrichmentFields(), $("#ThirdPartyEnrichmentFieldsValue").multiselect("enable"), $("#frm_ThirdPartyEnrichment #btnThirdPartyEnrichment").val(update) }), $(document).on("click", "table.ThirdPartyEnrichmentTB tbody tr", function () { $(this).hasClass("current") || ($("#articleAddupdateThirdPartyEnrichment #editThirdPartyEnrichment").prop("disabled", !1), $("table.ThirdPartyEnrichmentTB tbody tr").each(function () { $(this).removeClass("current") }), $(this).closest("tr").addClass("current"), GetThirdPartyEnrichmentsByEnrichId($(this).attr("data-EnrichId"))) }), $(document).on("click", "#frm_ThirdPartyEnrichment #btnThirdPartyEnrichment", function () { var t = 0, e = $("#frm_ThirdPartyEnrichment #ThirdPartyEnrichProvider").val(), n = $("#frm_ThirdPartyEnrichment #EnrichCredential").val(), r = $("#frm_ThirdPartyEnrichment #EnrichmentDescription").val(), a = $("#frm_ThirdPartyEnrichment #ThirdPartyEnrichmentFieldsValue").val(); if (e ? $("#spnErrroThirdPartyEnrichProvider").hide() : (t++ , $("#spnErrroThirdPartyEnrichProvider").show()), n ? $("#spnErrroThirdPartyEnrichCred").hide() : (t++ , $("#spnErrroThirdPartyEnrichCred").show()), r ? $("#spnErrEnrichmentDescription").hide() : (t++ , $("#spnErrEnrichmentDescription").show()), a ? $("#spnErrThirdPartyEnrichmentFieldsValue").hide() : (t++ , $("#spnErrThirdPartyEnrichmentFieldsValue").show()), t > 0) return !1 }), $(document).on("click", ".ThirdPartyEnrichmentTB .deleteThirdPartyEnrichment", function () { var t = $(this).attr("id"); null != t && null != t && "" != t || (t = null), bootbox.confirm({ title: "<i class='fa fa-check-square-o' aria-hidden='true'></i> " + confirmBox, message: deleteDataBlockRecord, callback: function (e) { if (e) return $.ajax({ type: "POST", url: "/DNBDataEnrichment/DeleteThirdPartyEnrichments?Parameters=" + t, dataType: "JSON", contentType: "application/json", async: !1, cache: !1, success: function (t) { ShowMessageNotification("success", t.message, !1), t.result && GetThirdPartyEnrichments() }, error: function (t, e, n) { } }), !0 } }) });