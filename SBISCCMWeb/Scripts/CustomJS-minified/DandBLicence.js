﻿function isInArray(e, t) { return t.indexOf(e) > -1 } function setLicenseCredentials() { var e = $("#APIFamily").val(); $(".rButtonAPIAPIFamily[value='" + e + "']").attr("checked", !0), "direct20" == $("#SettingName").val().toLowerCase() ? ($(".rButtonAPICredentials[value='DnBDirectLicense']").attr("checked", !0), $(".divPartialDnBDirectLicense").css("display", "block"), $(".divPartialMixModeAPICredentials").hide(), $(".divPartialDirectPlusAPICredentials").hide()) : "directplus" == $("#SettingName").val().toLowerCase() ? ($(".rButtonAPICredentials[value='DirectPlusAPICredentials']").attr("checked", !0), $(".divPartialDirectPlusAPICredentials").css("display", "block"), $(".divPartialDnBDirectLicense").hide(), $(".divPartialMixModeAPICredentials").hide()) : "mixmode" == $("#SettingName").val().toLowerCase() && ($(".rButtonAPICredentials[value='MixMode']").attr("checked", !0), $(".divPartialMixModeAPICredentials").css("display", "block"), $(".divPartialDnBDirectLicense").hide(), $(".divPartialDirectPlusAPICredentials").hide()) } function UpdateOverrideAPICredentials(e) { ShowMessageNotification("success", e, !1), "Data updated successfully" == e && $.ajax({ type: "GET", url: "/DandB/IndexOverrideAPICredentials", dataType: "HTML", contentType: "application/html", cache: !1, success: function (e) { $(".divPartialOverrideAPICredentials").html(e) } }) } function sumbiOverrideAPICredential() { var e = 0, t = $("#OverrideAPIkey").val().trim(), a = $("#APISecretOverride").val().trim(), i = $("#BatchSizeOverride").val().trim(), n = $("#WaitTimesBetweenBatchOverride").val().trim(); if ("" == t ? (e++ , $("#spnAPIKeyOverride").show()) : $("#spnAPIKeyOverride").hide(), "" == a ? (e++ , $("#spnAPISecretOverride").show()) : $("#spnAPISecretOverride").hide(), "" == i ? (e++ , $("#SpnBatchSizeOverride").show()) : $("#SpnBatchSizeOverride").hide(), "" == n ? (e++ , $("#SpnWaitTimesBetweenBatchOverride").show()) : $("#SpnWaitTimesBetweenBatchOverride").hide(), e > 0) return !1 } function oAutoAcceptanceDirectives1Changes() { $("input#oAutoAcceptanceDirectivesEntity_Active1").is(":checked") ? ($("#TagsValue6").attr("disabled", !1), $("input#oAutoAcceptanceDirectivesEntity_Active1").parent().parent().find(".OpenTags").show()) : ($("#TagsValue6").attr("disabled", !0), $("#TagsValue6").val(""), $("#Tags6").val(""), $("#TagList6").val(""), $("input#oAutoAcceptanceDirectivesEntity_Active1").parent().parent().find(".OpenTags").hide()), $("#TagsValue6").trigger("chosen:updated") } function oAutoAcceptanceDirectives2Changes() { $("input#oAutoAcceptanceDirectivesEntity_Active2").is(":checked") ? ($("#TagsValue7").attr("disabled", !1), $("input#oAutoAcceptanceDirectivesEntity_Active2").parent().parent().find(".OpenTags").show()) : ($("#TagsValue7").attr("disabled", !0), $("#TagsValue7").val(""), $("#Tags7").val(""), $("#TagList7").val(""), $("input#oAutoAcceptanceDirectivesEntity_Active2").parent().parent().find(".OpenTags").hide()), $("#TagsValue7").trigger("chosen:updated") } function oAutoAcceptanceDirectives3Changes() { $("input#oAutoAcceptanceDirectivesEntity_Active3").is(":checked") ? ($("#TagsValue8").attr("disabled", !1), $("input#oAutoAcceptanceDirectivesEntity_Active3").parent().parent().find(".OpenTags").show()) : ($("#TagsValue8").attr("disabled", !0), $("#TagsValue8").val(""), $("#Tags8").val(""), $("#TagList8").val(""), $("input#oAutoAcceptanceDirectivesEntity_Active3").parent().parent().find(".OpenTags").hide()), $("#TagsValue8").trigger("chosen:updated") } function oCleanseMatchExclusions1Changes() { $("input#oCleanseMatchExclusionsEntity_Active1").is(":checked") ? ($("#TagsValue1").attr("disabled", !1), $("input#oCleanseMatchExclusionsEntity_Active1").parent().parent().find(".OpenTags").show()) : ($("#TagsValue1").attr("disabled", !0), $("#TagsValue1").val(""), $("#Tags1").val(""), $("#TagList1").val(""), $("input#oCleanseMatchExclusionsEntity_Active1").parent().parent().find(".OpenTags").hide()), $("#TagsValue1").trigger("chosen:updated") } function oCleanseMatchExclusions2Changes() { $("input#oCleanseMatchExclusionsEntity_Active2").is(":checked") ? ($("#TagsValue2").attr("disabled", !1), $("input#oCleanseMatchExclusionsEntity_Active2").parent().parent().find(".OpenTags").show()) : ($("#TagsValue2").attr("disabled", !0), $("#TagsValue2").val(""), $("#Tags2").val(""), $("#TagList2").val(""), $("input#oCleanseMatchExclusionsEntity_Active2").parent().parent().find(".OpenTags").hide()), $("#TagsValue2").trigger("chosen:updated") } function oCleanseMatchExclusions3Changes() { $("input#oCleanseMatchExclusionsEntity_Active3").is(":checked") ? ($("#TagsValue3").attr("disabled", !1), $("input#oCleanseMatchExclusionsEntity_Active3").parent().parent().find(".OpenTags").show()) : ($("#TagsValue3").attr("disabled", !0), $("#TagsValue3").val(""), $("#Tags3").val(""), $("#TagList3").val(""), $("input#oCleanseMatchExclusionsEntity_Active3").parent().parent().find(".OpenTags").hide()), $("#TagsValue3").trigger("chosen:updated") } function oCleanseMatchExclusions4Changes() { $("input#oCleanseMatchExclusionsEntity_Active4").is(":checked") ? ($("#TagsValue4").attr("disabled", !1), $("input#oCleanseMatchExclusionsEntity_Active4").parent().parent().find(".OpenTags").show()) : ($("#TagsValue4").attr("disabled", !0), $("#TagsValue4").val(""), $("#Tags4").val(""), $("#TagList4").val(""), $("input#oCleanseMatchExclusionsEntity_Active4").parent().parent().find(".OpenTags").hide()), $("#TagsValue4").trigger("chosen:updated") } function oCleanseMatchExclusions5Changes() { $("input#oCleanseMatchExclusionsEntity_Active5").is(":checked") ? ($("#TagsValue5").attr("disabled", !1), $("input#oCleanseMatchExclusionsEntity_Active5").parent().parent().find(".OpenTags").show()) : ($("#TagsValue5").attr("disabled", !0), $("#TagsValue5").val(""), $("#Tags5").val(""), $("#TagList5").val(""), $("input#oCleanseMatchExclusionsEntity_Active5").parent().parent().find(".OpenTags").hide()), $("#TagsValue5").trigger("chosen:updated") } function deleteThirdPartyAPICredentials(e) { var t = $('input[name="__RequestVerificationToken"]').val(); bootbox.confirm({ title: "<i class='fa fa-check-square-o' aria-hidden='true'></i> " + confirmBox, message: deleteThirdPartyAPICred, callback: function (a) { if (a) return $.ajax({ type: "POST", url: "/DandB/DeleteThirdPartyAPICredentials?Parameters=" + ConvertEncrypte(encodeURI(e)).split("+").join("***"), headers: { __RequestVerificationToken: t }, dataType: "JSON", contentType: "application/json", cache: !1, success: function (e) { "data deleted successfully" == e.toLowerCase() ? (ShowMessageNotification("success", e, !1), location.reload()) : ShowMessageNotification("success", e, !1) }, error: function (e, t, a) { } }), !0 } }) } function AddUpdateThirdPartyAPICredentials(e) { $.ajax({ type: "GET", url: "/DandB/AddUpdateThirdPartyDandBCredential?Parameters=" + ConvertEncrypte(encodeURI(e)).split("+").join("***"), dataType: "HTML", async: !1, success: function (e) { $("#ThirdPartAPICredModalMain").html(e), DraggableModalPopup("#ThirdPartAPICredModal") } }) } function callbackthirdPartyAPICredentials(e) { window.parent.$.magnificPopup.close(), ShowMessageNotification("success", e, !1), location.reload() } function setDefaultInteractiveKey(e) { ShowMessageNotification("success", e, !1) } function setDefaultKeyForEnrichment(e) { ShowMessageNotification("success", e, !1) } function ValidationForDefaultKeyForEnrichment() { var e = $("#CredID").val(), t = e.split("@#$"); $("#CredentialId").val(t[0]); var a = $("#DnBAPIId").val(), i = 0; return "" == e ? ($("#spnCredName").show(), i++) : $("#spnCredName").hide(), "" == a ? ($("#spnAPIType").show(), i++) : $("#spnAPIType").hide(), !(i > 0) } $.UserRole = $("#UserRole").val(), $.UserLOBTag = $("#UserLOBTag").val(), $(document).ready(function () { }), $("body").on("change", ".rButtonAPICredentials", function () { var e = $(this).val(); "DnBDirectLicense" == e ? ($(".divPartialDnBDirectLicense").css("display", "block"), $(".divPartialMixModeAPICredentials").hide(), $(".divPartialDirectPlusAPICredentials").hide()) : "DirectPlusAPICredentials" == e ? ($(".divPartialDirectPlusAPICredentials").css("display", "block"), $(".divPartialDnBDirectLicense").hide(), $(".divPartialMixModeAPICredentials").hide()) : "MixMode" == e && ($(".divPartialMixModeAPICredentials").css("display", "block"), $(".divPartialDnBDirectLicense").hide(), $(".divPartialDirectPlusAPICredentials").hide()) }), $("body").on("click", "#form_directplusapi #btnSubmitdirectplusapi", function () { var e = $("#txtUserName").val(), t = $("#txtPassword").val(), a = 0; if (0 == $.trim(e).length ? ($("#spnUserName").show(), a++) : $("#spnUserName").hide(), 0 == $.trim(t).length ? ($("#spnPassword").show(), a++) : $("#spnPassword").hide(), a > 0) return !1; var i = $("#form_directplusapi").serialize(), n = "/DandB/IndexDirectPlusAPICredentials/"; return $.post(n, i).done(function (e) { ShowMessageNotification("success", e, !1), $.ajax({ type: "GET", url: n, dataType: "HTML", contentType: "application/html", success: function (e) { $(".divPartialDirectPlusAPICredentials").html(e) }, error: function (e, t, a) { } }) }), !0 }), $("body").on("click", "#form_directlicense #btnSubmitdirectlicense", function () { var e = $("#txtUserName1").val(), t = $("#txtPassword1").val(), a = 0; if (0 == $.trim(e).length ? ($("#spnUserName1").show(), a++) : $("#spnUserName1").hide(), 0 == $.trim(t).length ? ($("#spnPassword1").show(), a++) : $("#spnPassword1").hide(), a > 0) return !1; var i = $("#form_directlicense").serialize(), n = "/DandB/IndexDnBDirectLicense/"; return $.post(n, i).done(function (e) { ShowMessageNotification("success", e, !1), $.ajax({ type: "GET", url: n, dataType: "HTML", contentType: "application/html", success: function (e) { $(".divPartialDnBDirectLicense").html(e) }, error: function (e, t, a) { } }) }), !0 }), $("body").on("click", "#form_MixMode #btnSubmitMixMode", function () { var e = $("#txtMixModeUserName1").val(), t = $("#txtMixModePassword1").val(), a = $("#txtMixModeUserName").val(), i = $("#txtMixModePassword").val(), n = 0; if (0 == $.trim(e).length ? ($("#spnMixModeUserName1").show(), n++) : $("#spnMixModeUserName1").hide(), 0 == $.trim(t).length ? ($("#spnMixModePassword1").show(), n++) : $("#spnMixModePassword1").hide(), 0 == $.trim(a).length ? ($("#spnMixModeUserName").show(), n++) : $("#spnMixModeUserName").hide(), 0 == $.trim(i).length ? ($("#spnMixModePassword").show(), n++) : $("#spnMixModePassword").hide(), n > 0) return !1; var s = $("#form_MixMode").serialize(), c = "/DandB/IndexMixModeAPICredentials/"; return $.post(c, s).done(function (e) { var t = e.APIFamily; ShowMessageNotification("success", e.Message, !1), $.ajax({ type: "GET", url: c, dataType: "HTML", contentType: "application/html", success: function (e) { $(".divPartialMixModeAPICredentials").html(e), $(".rButtonAPIAPIFamily[value='" + t + "']").attr("checked", !0) }, error: function (e, t, a) { } }) }), !0 }), $("body").on("click", "#btnSubmitDirectives", function () { var e = "undefined" == $("#oAutoAcceptanceDirectivesEntity_Active1").val() ? "false" : $("#oAutoAcceptanceDirectivesEntity_Active1").is(":checked"), t = $("#Tags6").val(), a = "undefined" == $("#oAutoAcceptanceDirectivesEntity_Active2").val() ? "false" : $("#oAutoAcceptanceDirectivesEntity_Active2").is(":checked"), i = $("#Tags7").val(), n = "undefined" == $("#oAutoAcceptanceDirectivesEntity_Active3").val() ? "false" : $("#oAutoAcceptanceDirectivesEntity_Active3").is(":checked"), s = $("#Tags8").val(); $.post("/DandB/AutoAcceptanceDirectives", "AcceptActiveRecordsOnly=" + e + "&Tags1=" + t + "&PreferHeadquartersRecord=" + a + "&Tags2=" + i + "&AcceptHeadquartersRecordOnly=" + n + "&Tags3=" + s, function (e) { ShowMessageNotification("success", dataUpdated, !1) }) }), $("body").on("click", "#form_BackgroundProcessSettings #btnSubmitBackgroundProcessSetting", function () { var e = $("#form_BackgroundProcessSettings #BATCH_SIZE_18").val().trim(), t = $("#form_BackgroundProcessSettings #WAIT_TIME_BETWEEN_BATCHES_SECS_19").val().trim(), a = 0; if ("" == e ? ($("#SpnCleanseMatchBatchSize").show(), a++) : $("#SpnCleanseMatchBatchSize").hide(), "" == t ? ($("#SpnWaitTimeBetwnBatche").show(), a++) : $("#SpnWaitTimeBetwnBatche").hide(), a > 0) return !1; var i = $("#form_BackgroundProcessSettings").serialize(); $.post("/DandB/BackgroundProcessSettings/", i).done(function (e) { ShowMessageNotification("success", e, !1) }) }), $("body").on("change", ".clsMatchGrade", function () { var e = "#", t = "#", a = "#", i = "#", n = "#", s = "#", c = "#"; $("#boolBusinessName").is(":checked") && (e = "A"), $("#boolStreet").is(":checked") && (t = "A"), $("#boolStreetName").is(":checked") && (a = "A"), $("#boolCity").is(":checked") && (i = "A"), $("#boolState").is(":checked") && (n = "A"), $("#boolPoBox").is(":checked") && (c = "A"), $("#boolTelephone").is(":checked") && (s = "A"); var o = e + t + a + i + n + c + s + "####"; "A" == e && "A" == t && "A" == a && "A" == i && "A" == n && "A" == c && "A" == s ? $("#boolSelectAll").prop("checked", !0) : $("#boolSelectAll").prop("checked", !1), $("#spnMatchGrade").html(o) }), $("body").on("click", "#UpdateSubmit", function () { var e = $("input#EnableMonitoring").is(":checked"), t = $("input#EnableInvestigation").is(":checked"), a = ConvertEncrypte(encodeURI("EnableMonitoring:" + e + "@#$EnableInvestigation:" + t)).split("+").join("***"); $.ajax({ type: "POST", url: "/DandB/UpdateEnableDisableLicance?Parameters=" + a, dataType: "JSON", cache: !1, contentType: "application/json;", success: function (e) { ShowMessageNotification("success", e, !1) } }) }), $("body").on("change", "#APILayerOverride", function () { var e = $("#hiddenAPILayer").val(), t = $("#hiddenOverrideAPIkey").val(), a = $("#hiddenAPISecretOverride").val(); this.value == e ? ($("#OverrideAPIkey").val(t), $("#APISecretOverride").val(a)) : ($("#OverrideAPIkey").val(""), $("#APISecretOverride").val("")) }), $("body").on("change", "#oAutoAcceptanceDirectivesEntity_Active3", function () { "global" == $.UserRole.toLowerCase() && oAutoAcceptanceDirectives3Changes() }), $("body").on("change", "#oAutoAcceptanceDirectivesEntity_Active2", function () { "global" == $.UserRole.toLowerCase() && oAutoAcceptanceDirectives2Changes() }), $("body").on("change", "#oAutoAcceptanceDirectivesEntity_Active1", function () { "global" == $.UserRole.toLowerCase() && oAutoAcceptanceDirectives1Changes() }), $("body").on("change", "#oCleanseMatchExclusionsEntity_Active1", function () { "global" == $.UserRole.toLowerCase() && oCleanseMatchExclusions1Changes() }), $("body").on("change", "#oCleanseMatchExclusionsEntity_Active2", function () { "global" == $.UserRole.toLowerCase() && oCleanseMatchExclusions2Changes() }), $("body").on("change", "#oCleanseMatchExclusionsEntity_Active3", function () { "global" == $.UserRole.toLowerCase() && oCleanseMatchExclusions3Changes() }), $("body").on("change", "#oCleanseMatchExclusionsEntity_Active4", function () { "global" == $.UserRole.toLowerCase() && oCleanseMatchExclusions4Changes() }), $("body").on("change", "#oCleanseMatchExclusionsEntity_Active5", function () { "global" == $.UserRole.toLowerCase() && oCleanseMatchExclusions5Changes() }), $(document).on("click", "#AddThirdPartyAPICredentials", function () { AddUpdateThirdPartyAPICredentials(0) }), $(document).on("click", ".deleteThirdPartyAPICredentials", function () { var e = $(this).attr("data-CredentialId"); null != e && null != e && "" != e && deleteThirdPartyAPICredentials(e) }), $(document).on("click", ".editThirdPartyAPICredentials", function () { var e = $(this).attr("data-CredentialId"); null != e && null != e && "" != e && AddUpdateThirdPartyAPICredentials(e) }), $("body").on("change", "#CredID", function () { $("#spnCredName").hide(), $("#spnAPIType").hide(); var e = $("#CredID").val(), t = e.split("@#$"), a = e.split("@#$"); t = t[0], null == (a = a[1]) && (a = ""), $.ajax({ type: "POST", url: "/DandB/GetThirdPartyAPIType?newAPIValue=" + a, dataType: "JSON", cache: !1, contentType: "application/json;", success: function (e) { var t = 0; if ($("#DnBAPIId option").remove(), 0 == e.length) return !1; if (1 == e.length) { if (e[t].Value.length > 0) for (cnt = 0; cnt < e[t].Value.length && ($("#DnBAPIId").append(new Option(e[t].Text, e[t].Value)), 1 != ++t); cnt++); } else if (e[t].Value.length > 0) for (cnt = 0; cnt < e[t].Value.length && ($("#DnBAPIId").append(new Option(e[t].Text, e[t].Value)), 2 != ++t); cnt++); } }) });