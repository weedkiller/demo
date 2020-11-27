﻿function LoadTags() { if ($("#OIAutoAcceptancneTagsList").length > 0) { var e = $("#OIAutoAcceptancneTagsList").val().split(","); null == e && "" == e || ($("#TagsValue option").each(function () { for (var t = 0; t < e.length; t++)$(this).val() == e[t] && $(this).attr("selected", "selected") }), $("#Tags").val(e)) } $(".chzn-select").length > 0 && $(".chzn-select").chosen().change(function (e) { "TagsValue" == e.target.id && $("#Tags").val($(this).val()) }) } function onchangeMultiSelect(e, t) { var a = e.context.parentElement.id, l = "#" + e.context.parentElement.id; "#" == e.context.value ? ($(l).val("#"), $(l).multiselect("refresh"), t ? $(l).val("#") : $(l).val(""), $(l).multiselect("refresh")) : $(l).parent().parent().find("li").each(function () { if ("#" == $(this).find("input").attr("value") || "##" == $(this).find("input").attr("value")) { $(this).find("input").prop("checked", !1); var e = jQuery.grep($(l).val(), function (e) { return "#" != e }); $(l).val(e), $(l).multiselect("refresh") } }); var n = $(l).val(), o = a.replace("Value", ""); null == n ? $("#" + o).val("") : $("#" + o).val(n.toString()) } function BuildMultiSelect() { $("#MG_CompanyValue").multiselect({ nonSelectedText: selectCompanyGrade, numberDisplayed: 2, onChange: function (e, t) { onchangeMultiSelect(e, t) } }), $("#MDP_CompanyValue").multiselect({ nonSelectedText: selectCompanyCode, numberDisplayed: 2, onChange: function (e, t) { onchangeMultiSelect(e, t) } }), $("#MG_StreetNoValue").multiselect({ nonSelectedText: selectStreetGrade, numberDisplayed: 2, onChange: function (e, t) { onchangeMultiSelect(e, t) } }), $("#MG_StreetNameValue").multiselect({ nonSelectedText: selectStreetNameGrade, numberDisplayed: 2, onChange: function (e, t) { onchangeMultiSelect(e, t) } }), $("#MG_CityValue").multiselect({ nonSelectedText: selectCityGrade, numberDisplayed: 2, onChange: function (e, t) { onchangeMultiSelect(e, t) } }), $("#MG_StateValue").multiselect({ nonSelectedText: selectStateGrade, onChange: function (e, t) { onchangeMultiSelect(e, t) } }), $("#MG_PostalCodeValue").multiselect({ nonSelectedText: selectPostalCodeGrade, numberDisplayed: 2, onChange: function (e, t) { onchangeMultiSelect(e, t) } }), $("#MG_PhoneValue").multiselect({ nonSelectedText: selectPhoneGrade, onChange: function (e, t) { onchangeMultiSelect(e, t) } }), $("#MG_WebdomainValue").multiselect({ nonSelectedText: selectWebDomainGrade, numberDisplayed: 2, onChange: function (e, t) { onchangeMultiSelect(e, t) } }), $("#MDP_WebdomainValue").multiselect({ nonSelectedText: selectWebDomainCode, numberDisplayed: 2, onChange: function (e, t) { onchangeMultiSelect(e, t) } }), $("#MG_CountryValue").multiselect({ nonSelectedText: selectCountryGrade, numberDisplayed: 2, onChange: function (e, t) { onchangeMultiSelect(e, t) } }), $("#MG_EINValue").multiselect({ nonSelectedText: selectEINGrade, numberDisplayed: 2, onChange: function (e, t) { onchangeMultiSelect(e, t) } }) } function SuccessInsertUpdate(e) { ShowMessageNotification("success", e.message, !1, !1, LoadOIAutoAcceptance("/OISetting/IndexOIAutoAcceptance/")), e.result && $("#AddOIAutoAcceptanceModal").modal("hide") } function VAlidateInputes() { var e = 0; $(".customValidation").each(function () { if ("" == $(this).val() || null == $(this).val()) { var t = "#" + $(this).attr("id") + "Value"; $(t).next("div").find("button").addClass("custom-has-error"), e += 1 } else { t = "#" + $(this).attr("id") + "Value"; $(t).next("div").find("button").removeClass("custom-has-error") } }); var t = $("#ConfidenceCodeMin").val(), a = $("#ConfidenceCodeMax").val(); return parseInt(t) > parseInt(a) ? (parent.ShowMessageNotification("success", confidenceCodeMinMaxValue, !1), !1) : !(e > 0) } function CallbackCountryGroup(e) { $.magnificPopup.close(), $("#CountryGroupId").append(new Option(e.split("@#$")[0], e.split("@#$")[1])) } function ResetValues() { $("#MG_CompanyValue").val("#"), $("#MDP_CompanyValue").val("##"), $("#MG_StreetNoValue").val("#"), $("#MG_StreetNameValue").val("#"), $("#MG_CityValue").val("#"), $("#MG_StateValue").val("#"), $("#MG_PostalCodeValue").val("#"), $("#MG_PhoneValue").val("#"), $("#MG_WebdomainValue").val("#"), $("#MDP_WebdomainValue").val("##"), $("#MG_CountryValue").val("#"), $("#MG_EINValue").val("#"), $("#MG_Company").val("#"), $("#MDP_Company").val("##"), $("#MG_StreetNo").val("#"), $("#MG_StreetName").val("#"), $("#MG_City").val("#"), $("#MG_State").val("#"), $("#MG_PostalCode").val("#"), $("#MG_Phone").val("#"), $("#MG_Webdomain").val("#"), $("#MDP_Webdomain").val("##"), $("#MG_Country").val("#"), $("#MG_EIN").val("#"), $("#MG_Company").val("#"), $("#MDP_Company").val("##"), $("#MG_StreetNo").val("#"), $("#MG_StreetName").val("#"), $("#MG_City").val("#"), $("#MG_State").val("#"), $("#MG_PostalCode").val("#"), $("#MG_Phone").val("#"), $("#MG_Webdomain").val("#"), $("#MDP_Webdomain").val("##"), $("#MG_Country").val("#"), $("#MG_EIN").val("#"), $("#PreferLinkedRecord").prop("checked", !1), $("#AcceptActiveOnly").prop("checked", !1), $("#ExcludeFromAutoAccept").prop("checked", !1), $("#Score_Company").val("0"), $("#Score_StreetName").val("0"), $("#ConfidenceCodeMin").val("80"), $("#ConfidenceCodeMax").val("100"), $("#CountryGroupId").val($("#CountryGroupId option:first").val()), $("#Tags").val(""), $("#ExcludedLable").removeClass("Excluded") } function RefreshMultiselect() { $("#MG_CompanyValue").multiselect("refresh"), $("#MDP_CompanyValue").multiselect("refresh"), $("#MG_StreetNoValue").multiselect("refresh"), $("#MG_StreetNameValue").multiselect("refresh"), $("#MG_CityValue").multiselect("refresh"), $("#MG_StateValue").multiselect("refresh"), $("#MG_PostalCodeValue").multiselect("refresh"), $("#MG_PhoneValue").multiselect("refresh"), $("#MG_WebdomainValue").multiselect("refresh"), $("#MDP_WebdomainValue").multiselect("refresh"), $("#MG_CountryValue").multiselect("refresh"), $("#MG_EINValue").multiselect("refresh") } $(document).ajaxStart(function () { $("#divProgress").show() }).ajaxStop(function () { $("#divProgress").hide() }), $(document).on("change", "#ConfidenceCodeMin", function () { var e = $(this).val(); $("#ConfidenceCodeMax").empty(); for (var t = parseInt(e); t <= 100; t++)$("#ConfidenceCodeMax").append(new Option(t, t)) }), $("body").on("click", "#ExcludeFromAutoAccept", function () { $(this).prop("checked") ? $("#ExcludedLable").addClass("Excluded") : $("#ExcludedLable").removeClass("Excluded") });