﻿function SearchData() { $("#Request_locationRadius_lat").css("border", "1px solid #ccc"), $("#Request_locationRadius_lon").css("border", "1px solid #ccc"), $("#Request_locationRadius_radius").css("border", "1px solid #ccc"), $("#Request_locationRadius_unit").css("border", "1px solid #ccc"), $("#spSelectMaxMinEmp").hide(), $("#spRequiredStandAloneParam").hide(), $("#spSearchTermMinLength").hide(), $("#spAddressMinLength").hide(); var e = { searchTerm: $("#Request_searchTerm").val(), countryISOAlpha2Code: $("#Country").val(), duns: $("#Request_duns").val(), isOutOfBusiness: $("#IsOutOfBusiness").val(), isMarketable: $("#IsMarketable").val(), isMailUndeliverable: $("#IsMailUndeliverable").val(), usSicV4: "" != $("#txtusSicV4").val().trim() ? $("#txtusSicV4").val().split(",") : null, yearlyRevenue: { minimumValue: $("#MinimumValueFinanceInfo").val(), maximumValue: $("#MaximumValueFinanceInfo").val() }, isTelephoneDisconnected: $("#IsTelephoneDisconnected").val(), telephoneNumber: $("#TelephoneNumber").val(), domain: $("#Domain").val(), registrationNumbers: "" != $("#txtRegNo").val().trim() ? $("#txtRegNo").val().split(",") : null, businessEntityType: null, addressLocality: $("#Request_addressLocality").val(), addressRegion: $("#Request_addressRegion").val(), streetAddressLine1: $("#Request_streetAddressLine1").val(), postalCode: $("#Request_postalCode").val(), locationRadius: { lat: $("#Request_locationRadius_lat").val(), lon: $("#Request_locationRadius_lon").val(), radius: $("#Request_locationRadius_radius").val(), unit: $("#Request_locationRadius_unit").val() }, primaryName: $("#Request_primaryName").val(), tradeStyleName: $("#TradeStyleName").val(), tickerSymbol: $("#TickerSymbol").val(), familytreeRolesPlayed: null, globalUltimateFamilyTreeMembersCount: { minimumValue: $("#MinimumValueLinkage").val(), maximumValue: $("#MaximumValueLinkage").val() }, numberOfEmployees: { informationScope: $("#Request_numberOfEmployees_informationScope").val(), minimumValue: $("#Request_numberOfEmployees_minimumValue").val(), maximumValue: $("#Request_numberOfEmployees_maximumValue").val() } }, a = !0; if (checkValidation(), "" != $("#Request_searchTerm").val() || "" != $("#Request_duns").val() || "" != $("#TradeStyleName").val() || "" != $("#TickerSymbol").val() || "" != $("#TelephoneNumber").val() || "" != $("#Domain").val() || "" != $("#Request_streetAddressLine1").val() || "" != $("#Request_primaryName").val() || "" != $("#txtusSicV4").val() || "" != $("#txtRegNo").val() || "" != $("#Request_locationRadius_lat").val() || "" != $("#Request_locationRadius_lon").val() || "" != $("#Request_locationRadius_radius").val() || "" != $("#Request_locationRadius_unit").val()) { if ("" != $("#TradeStyleName").val() ? $("#TradeStyleName").val().length < 2 && ($("#spTradeStyleLength").show(), a = !1) : $("#spTradeStyleLength").hide(), "" != $("#TelephoneNumber").val() ? $("#TelephoneNumber").val().length < 5 && ($("#spTelephoneNumber").show(), a = !1) : $("#spTelephoneNumber").hide(), "" != $("#Request_searchTerm").val() ? $("#Request_searchTerm").val().length < 2 && ($("#spSearchTermMinLength").show(), a = !1) : $("#spSearchTermMinLength").hide(), "" != $("#Request_streetAddressLine1").val() && $("#Request_streetAddressLine1").val().length < 3 && ($("#spAddressMinLength").show(), a = !1), "" != $("#Domain").val() && $("#Domain").val().length < 4 && ($("#spDomain").show(), a = !1), "" != $("#TradeStyleName").val() && $("#TradeStyleName").val().length < 2 && ($("#spTradeStyleLength").show(), a = !1), "" != $("#MinimumValueFinanceInfo").val() && ($("#MinimumValueFinanceInfo").val() < 1 || $("#MinimumValueFinanceInfo").val() > 1e14) ? ($("#spMinimumValueFinanceInfoLength").show(), a = !1) : $("#spMinimumValueFinanceInfoLength").hide(), "" != $("#MaximumValueFinanceInfo").val() && ($("#MaximumValueFinanceInfo").val() < 1 || $("#MaximumValueFinanceInfo").val() > 1e14) ? ($("#spMaximumValueFinanceInfoLength").show(), a = !1) : $("#spMaximumValueFinanceInfoLength").hide(), "" != $("#Request_numberOfEmployees_minimumValue").val() && ($("#Request_numberOfEmployees_minimumValue").val() < 1 || $("#Request_numberOfEmployees_minimumValue").val() > 999999) ? ($("#spMinEmployeeLength").show(), a = !1) : $("#spMinEmployeeLength").hide(), "" != $("#Request_numberOfEmployees_maximumValue").val() && ($("#Request_numberOfEmployees_maximumValue").val() < 1 || $("#Request_numberOfEmployees_maximumValue").val() > 999999) ? ($("#spMaxEmployeeLength").show(), a = !1) : $("#spMaxEmployeeLength").hide(), "" != $("#MinimumValueLinkage").val() && ($("#MinimumValueLinkage").val() < 1 || $("#MinimumValueLinkage").val() > 999999) ? ($("#spMinValueLinkage").show(), a = !1) : $("#spMinValueLinkage").hide(), "" != $("#MaximumValueLinkage").val() && ($("#MaximumValueLinkage").val() < 1 || $("#MaximumValueLinkage").val() > 999999) ? ($("#spMaxValueLinkage").show(), a = !1) : $("#spMaxValueLinkage").hide(), "" == e.locationRadius.lat && "" == e.locationRadius.lon && "" == e.locationRadius.radius && "" == e.locationRadius.unit || ("" == e.locationRadius.lat && ($("#Request_locationRadius_lat").css("border", "1px solid red"), a = !1), "" == e.locationRadius.lon && ($("#Request_locationRadius_lon").css("border", "1px solid red"), a = !1), "" == e.locationRadius.radius && ($("#Request_locationRadius_radius").css("border", "1px solid red"), a = !1), "" == e.locationRadius.unit && ($("#Request_locationRadius_unit").css("border", "1px solid red"), a = !1)), null != e.numberOfEmployees && (null != e.numberOfEmployees.informationScope && "" != e.numberOfEmployees.informationScope && "" == e.numberOfEmployees.minimumValue && "" == e.numberOfEmployees.maximumValue && ($("#spSelectMaxMinEmp").html("Please enter Min or Max Employee."), $("#spSelectMaxMinEmp").show(), a = !1), "" == e.numberOfEmployees.minimumValue && "" == e.numberOfEmployees.maximumValue || "" != e.numberOfEmployees.informationScope || ($("#spSelectMaxMinEmp").html("Please select Information Scope."), $("#spSelectMaxMinEmp").show(), a = !1)), a) { var i = { Request: e, NoOfRecored: $("#NoOfRecored").val() }; $("#Request_locationRadius_lat").css("border", "1px solid #ccc"), $("#Request_locationRadius_lon").css("border", "1px solid #ccc"), $("#Request_locationRadius_radius").css("border", "1px solid #ccc"), $("#Request_locationRadius_unit").css("border", "1px solid #ccc"), $("#spSelectMaxMinEmp").hide(), $("#spRequiredStandAloneParam").hide(), $("#divGrid").html(""), $("#spSearchTermMinLength").hide(), $("#spAddressMinLength").hide(), $("#spTradeStyleLength").hide(), $("#spMaximumValueFinanceInfoLength").hide(), $("#spMinimumValueFinanceInfoLength").hide(), $("#spMinEmployeeLength").hide(), $("#spMaxEmployeeLength").hide(), $("#spMinValueLinkage").hide(), $("#spMaxValueLinkage").hide(), $("#spDomain").hide(), $("#spTelephoneNumber").hide(), AjaxPostWithJsonObjectCall("/BuildList/Search/", JSON.stringify(i), function (e) { e.Success ? ($("#divGrid").html(""), $("#divGrid").html(e.ResponseString), "fa fa-plus" == $(".searchResult ul.nav-pills li a i").attr("class") && $(".searchResult ul.nav-pills li a").click(), BindTab()) : (ShowMessageNotification("success", e.ResponseString, !1), $("#divGrid").html('<table class=""><td colspan="10" class="noContain">' + noDataAreAvailable + "</td></table>"), "fa fa-plus" == $(".searchResult ul.nav-pills li a i").attr("class") && $(".searchResult ul.nav-pills li a").click()) }) } } else { var t = standaloneParameter1 + " <strong> " + standaloneParameter2 + " </strong> " + standaloneParameter3; ShowMessageNotification("success", t, !1) } } function Export() { if ($(".divBuildSearch").length > 0) { window.location.href = "/BuildList/ExportExcel" } else ShowMessageNotification("success", noDataFound, !1) } function ClosePopp(e) { window.parent.$(".loaderMain").show(), window.parent.$(".loaderMain").css("z-index", "9999999"), $("#GetSearchHistoryModal").modal("hide"), AjaxPostWithJsonObjectCall("/BuildList/ViewHistory", JSON.stringify({ Id: e }), function (e) { if (window.parent.$(".loaderMain").hide(), e.Success) { var a = jQuery.parseJSON(e.Object[0].RequestJson); JSON.stringify(JSON.parse(e.Object[0].ResponseJson), null, "\t"); null != a && (window.parent.$("#Request_searchTerm").val(a.Request.searchTerm), window.parent.$("#Country").val(a.Request.countryISOAlpha2Code), window.parent.$("#Request_duns").val(a.Request.duns), window.parent.$("#Request_addressLocality").val(a.Request.addressLocality), window.parent.$("#Request_addressRegion").val(a.Request.addressRegion), window.parent.$("#Request_streetAddressLine1").val(a.Request.streetAddressLine1), window.parent.$("#Request_postalCode").val(a.Request.postalCode), window.parent.$("#TradeStyleName").val(a.Request.tradeStyleName), window.parent.$("#TickerSymbol").val(a.Request.tickerSymbol), null != a.Request.isOutOfBusiness && a.Request.isOutOfBusiness ? window.parent.$("#IsOutOfBusiness").val("true") : null == a.Request.isOutOfBusiness || a.Request.isOutOfBusiness ? window.parent.$("#IsOutOfBusiness").val("null") : window.parent.$("#IsOutOfBusiness").val("false"), null != a.Request.isMarketable && a.Request.isMarketable ? window.parent.$("#IsMarketable").val("true") : null == a.Request.isMarketable || a.Request.isMarketable ? window.parent.$("#IsMarketable").val("null") : window.parent.$("#IsMarketable").val("false"), null != a.Request.isMailUndeliverable && a.Request.isMailUndeliverable ? window.parent.$("#IsMailUndeliverable").val("true") : null == a.Request.isMailUndeliverable || a.Request.isMailUndeliverable ? window.parent.$("#IsMailUndeliverable").val("null") : window.parent.$("#IsMailUndeliverable").val("false"), null != a.Request.isTelephoneDisconnected && a.Request.isTelephoneDisconnected ? window.parent.$("#IsTelephoneDisconnected").val("true") : null == a.Request.isTelephoneDisconnected || a.Request.isTelephoneDisconnected ? window.parent.$("#IsTelephoneDisconnected").val("null") : window.parent.$("#IsTelephoneDisconnected").val("false"), null != a.Request.yearlyRevenue && (window.parent.$("#MinimumValueFinanceInfo").val(a.Request.yearlyRevenue.minimumValue), window.parent.$("#MaximumValueFinanceInfo").val(a.Request.yearlyRevenue.maximumValue)), window.parent.$("#TelephoneNumber").val(a.Request.telephoneNumber), window.parent.$("#Domain").val(a.Request.domain), null != a.Request.globalUltimateFamilyTreeMembersCount && (window.parent.$("#MinimumValueLinkage").val(a.Request.globalUltimateFamilyTreeMembersCount.minimumValue), window.parent.$("#MaximumValueLinkage").val(a.Request.globalUltimateFamilyTreeMembersCount.maximumValue)), null != a.Request.locationRadius && (window.parent.$("#Request_locationRadius_lat").val(a.Request.locationRadius.lat), window.parent.$("#Request_locationRadius_lon").val(a.Request.locationRadius.lon), window.parent.$("#Request_locationRadius_radius").val(a.Request.locationRadius.radius), window.parent.$("#Request_locationRadius_unit").val(a.Request.locationRadius.unit)), window.parent.$("#Request_primaryName").val(a.Request.primaryName), null != a.Request.numberOfEmployees && (window.parent.$("#Request_numberOfEmployees_informationScope").val(a.Request.numberOfEmployees.informationScope), window.parent.$("#Request_numberOfEmployees_minimumValue").val(a.Request.numberOfEmployees.minimumValue), window.parent.$("#Request_numberOfEmployees_maximumValue").val(a.Request.numberOfEmployees.maximumValue)), window.parent.$("#NoOfRecored").val(a.NoOfRecored), window.parent.$("#divGrid").html(""), "" != e.ResponseString || null != e.ResponseString ? (window.parent.$("#divGrid").html(e.ResponseString), BindTab()) : (window.parent.$("#divGrid").html('<table class=""><td colspan="10" class="noContain"> ' + noDataAreAvailable + " </td></table>"), "fa fa-plus" == window.parent.$(".searchResult ul.nav-pills li a i").attr("class") && window.parent.$(".searchResult ul.nav-pills li a").click()), null != a.Request.registrationNumbers && "" != a.Request.registrationNumbers ? $("#txtRegNo").val(a.Request.registrationNumbers.toString()) : $("#txtRegNo").val(""), null != a.Request.usSicV4 && "" != a.Request.usSicV4 ? $("#txtusSicV4").val(a.Request.usSicV4.toString()) : $("#txtusSicV4").val(""), window.parent.$.magnificPopup.close()) } }) } function OnSuccess() { BindTab() } function BindTab() { $(".tabs").each(function (e, a) { $(a).tabs() }) } function AddusSicV4() { var e = $("#AddusSicv4Modal").contents(); if ("" != e.find("#txtPopupusSicV4").val() && $.trim(e.find("#txtPopupusSicV4").val()).length > 0) { var a = e.find("#tblusSicV4"); "" != e.find("#hdnusSicV4RowIndex").val() ? $(a).find("tbody").find("tr").eq(parseInt(e.find("#hdnusSicV4RowIndex").val())).html("<td>" + e.find("#txtPopupusSicV4").val() + '</td><td><a class="Edit" onclick="window.parent.EditusSicV4(this)" >Edit</a></td><td><a class="Delete" onclick="window.parent.DeleteusSicV4(this)" >Delete</a></td>') : $(a).find("tbody").append("<tr><td>" + e.find("#txtPopupusSicV4").val() + '</td><td><a class="Edit" onclick="window.parent.EditusSicV4(this)" >Edit</a></td><td><a class="Delete" onclick="window.parent.DeleteusSicV4(this)" >Delete</a></td></tr>') } e.find("#hdnusSicV4RowIndex").val(""), e.find("#txtPopupusSicV4").focus(), e.find("#txtPopupusSicV4").val("") } function EditusSicV4(e) { var a = $("#AddusSicv4Modal").contents(); a.find("#txtPopupusSicV4").val($(e).parent().parent().find("td").eq(0).text()), a.find("#hdnusSicV4RowIndex").val(parseInt($(e).parent().parent().parent().children().index($(e).parent().parent()))), a.find("#txtPopupusSicV4").focus() } function DeleteusSicV4(e) { var a = $("#AddusSicv4Modal").contents(); a.find("#hdnusSicV4RowIndex").val(""), a.find("#txtPopupusSicV4").val(""), $(e).parent().parent().remove() } function CloseusSicV4Popup() { var e = "", a = $("#AddusSicv4Modal").contents().find("#tblusSicV4"); $(a).find("tbody tr").each(function (a, i) { "" != e.trim() ? e += "," + $(i).find("td").eq(0).text().trim() : e = $(i).find("td").eq(0).text().trim() }), $("#txtusSicV4").val(e) } function AddRegNo() { var e = $("#AddRegistrationNumberModal").contents(); if ("" != e.find("#txtPopupRegNo").val() && $.trim(e.find("#txtPopupRegNo").val()).length > 0) { var a = e.find("#tblRegNo"); "" != e.find("#hdnRegNoRowIndex").val() ? $(a).find("tbody").find("tr").eq(parseInt(e.find("#hdnRegNoRowIndex").val())).html("<td>" + e.find("#txtPopupRegNo").val() + '</td><td><a class="Edit" onclick="window.parent.EditRegNo(this)" >Edit</a></td><td><a class="Delete" onclick="window.parent.DeleteRegNo(this)" >Delete</a></td>') : $(a).find("tbody").append("<tr><td>" + e.find("#txtPopupRegNo").val() + '</td><td><a class="Edit" onclick="window.parent.EditRegNo(this)" >Edit</a></td><td><a class="Delete" onclick="window.parent.DeleteRegNo(this)" >Delete</a></td></tr>') } e.find("#txtPopupRegNo").val(""), e.find("#txtPopupRegNo").focus(), e.find("#hdnRegNoRowIndex").val("") } function EditRegNo(e) { var a = $("#AddRegistrationNumberModal").contents(); a.find("#txtPopupRegNo").val($(e).parent().parent().find("td").eq(0).text()), a.find("#hdnRegNoRowIndex").val(parseInt($(e).parent().parent().parent().children().index($(e).parent().parent()))), a.find("#txtPopupRegNo").focus() } function DeleteRegNo(e) { var a = $("#AddRegistrationNumberModal").contents(); a.find("#hdnRegNoRowIndex").val(""), a.find("#txtPopupRegNo").val(""), $(e).parent().parent().remove() } function CloseRegNoPopup() { var e = "", a = $("#AddRegistrationNumberModal").contents().find("#tblRegNo"); $(a).find("tbody tr").each(function (a, i) { "" != e.trim() ? e += "," + $(i).find("td").eq(0).text().trim() : e = $(i).find("td").eq(0).text().trim() }), $("#txtRegNo").val(e) } function ClearRegNo() { $("#txtRegNo").val("") } function ValidateLocation() { "" != $("#Request_locationRadius_lat").val().trim() || "" != $("#Request_locationRadius_lon").val().trim() || "" != $("#Request_locationRadius_radius").val().trim() || "" != $("#Request_locationRadius_unit").val().trim() ? ("" == $("#Request_locationRadius_lat").val().trim() ? $("#Request_locationRadius_lat").css("border", "1px solid red") : $("#Request_locationRadius_lat").css("border", "1px solid #ccc"), "" == $("#Request_locationRadius_lon").val().trim() ? $("#Request_locationRadius_lon").css("border", "1px solid red") : $("#Request_locationRadius_lon").css("border", "1px solid #ccc"), "" == $("#Request_locationRadius_radius").val().trim() ? $("#Request_locationRadius_radius").css("border", "1px solid red") : $("#Request_locationRadius_radius").css("border", "1px solid #ccc"), "" == $("#Request_locationRadius_unit").val().trim() ? $("#Request_locationRadius_unit").css("border", "1px solid red") : $("#Request_locationRadius_unit").css("border", "1px solid #ccc")) : ($("#Request_locationRadius_lat").css("border", "1px solid #ccc"), $("#Request_locationRadius_lon").css("border", "1px solid #ccc"), $("#Request_locationRadius_radius").css("border", "1px solid #ccc"), $("#Request_locationRadius_unit").css("border", "1px solid #ccc")) } function codeAddress() { if ("" != $("#Request_streetAddressLine1").val() || "" != $("#Request_addressLocality").val() || "" != $("#Request_addressRegion").val() || "" != $("#Country").val() || "" != $("#Request_postalCode").val()) if ($("#Request_streetAddressLine1").val().length >= 3) { $("#spAddressMinLength").hide(); var e = ""; "" != $("#Request_streetAddressLine1").val() && (e += $("#Request_streetAddressLine1").val().trim() + " "), "" != $("#Request_addressLocality").val() && (e += $("#Request_addressLocality").val().trim() + " "), "" != $("#Request_addressRegion").val() && (e += $("#Request_addressRegion").val().trim() + " "), "" != $("#Request_postalCode").val() && (e += $("#Request_postalCode").val().trim() + " "), "" != $("#Country").val() && (e += $("#Country").val().trim()), geocoder = new google.maps.Geocoder; var a = e; geocoder.geocode({ address: a }, function (e, a) { a == google.maps.GeocoderStatus.OK ? ($("#Request_locationRadius_lat").val(e[0].geometry.location.lat()), $("#Request_locationRadius_lon").val(e[0].geometry.location.lng())) : ($("#Request_streetAddressLine1").val(""), $("#Request_addressLocality").val(""), $("#Request_addressRegion").val(""), $("#Request_postalCode").val("")) }) } else $("#spAddressMinLength").show(); else $("#Request_streetAddressLine1").val(""), $("#Request_addressLocality").val(""), $("#Request_addressRegion").val(""), $("#Request_postalCode").val("") } function checkValidation() { "" != $("#MinimumValueFinanceInfo").val() ? ($("#MinimumValueFinanceInfo").val() > 1 || $("#MinimumValueFinanceInfo").val() < 1e14) && $("#spMinimumValueFinanceInfoLength").hide() : $("#spMinimumValueFinanceInfoLength").hide(), "" != $("#MaximumValueFinanceInfo").val() ? $("#MaximumValueFinanceInfo").val() > 1 || $("#MaximumValueFinanceInfo").val() : $("#spMaximumValueFinanceInfoLength").hide(), "" != $("#Request_numberOfEmployees_minimumValue").val() ? $("#Request_numberOfEmployees_minimumValue").val() > 1 || $("#Request_numberOfEmployees_minimumValue").val() : $("#spMinEmployeeLength").hide(), "" != $("#Request_numberOfEmployees_maximumValue").val() ? $("#Request_numberOfEmployees_maximumValue").val() > 1 || $("#Request_numberOfEmployees_maximumValue").val() : $("#spMaxEmployeeLength").hide(), "" != $("#MinimumValueLinkage").val() ? $("#MinimumValueLinkage").val() > 1 || $("#MinimumValueLinkage").val() : $("#spMinValueLinkage").hide(), "" != $("#MaximumValueLinkage").val() ? $("#MaximumValueLinkage").val() > 1 || $("#MaximumValueLinkage").val() : $("#spMaxValueLinkage").hide() } $(function () { $('[data-toggle="tooltip"]').tooltip(), $("body").keypress(function (e) { 13 == e.which && SearchData() }), "fa fa-minus" == $(".EnhanceFilter ul.nav-pills li a i").attr("class") && $(".EnhanceFilter ul.nav-pills li a").click(), "fa fa-plus" == $(".searchResult ul.nav-pills li a i").attr("class") && ($(".searchResult ul.nav-pills li a").click(), $("#divGrid").html(""), $("#divGrid").html('<table class=""><td colspan="10" class="noContain">' + noDataAreAvailable + "</td></table>")), $("body").on("show.bs.collapse", ".collapse", function () { $(".partialrow").each(function () { $(this).removeClass("current") }), $(".panel-collapse.in").collapse("hide"), $(".trMatchedItemView").each(function () { $(this).hide() }), $(this).parents("tr").show(), $(this).parents("tr").prev().addClass("current") }), $("body").on("hide.bs.collapse", ".collapse", function () { $(this).parents("tr").hide() }) }), $("body").on("click", ".btnSearchHistory", function () { return $.ajax({ type: "GET", url: "/BuildList/GetSearchHistory", dataType: "HTML", async: !1, success: function (e) { $("#GetSearchHistoryModalMain").html(e), DraggableModalPopup("#GetSearchHistoryModal"), InitDataTable(".MatchedItems", [5, 10, 15], !1, ["0", "asc"]) } }), !1 }), $("body").on("change", ".pagevalueChangeHistory", function () { var e = $(this)[0].value; window.parent.$("#divProgress").show(); var a = "/BuildList/HistoryIndex/?pagevalue=" + e; window.parent.$("#divHistory").load(a, function () { window.parent.$("#divProgress").hide() }) }), $("body").on("change", ".pagevalueChange", function () { var e = $(this)[0].value; $("#divProgress").show(); var a = "/BuildList/Index/?pagevalue=" + e; $("#divBuildList").load(a, function () { BindTab(), $("#divProgress").hide() }) }), $("body").on("click", "#btnAddusSicv4", function () { return $.ajax({ type: "GET", url: "/BuildList/AddusSicv4", dataType: "HTML", async: !1, success: function (e) { $("#AddusSicv4ModalMain").html(e), DraggableModalPopup("#AddusSicv4Modal") } }), !1 }), $("body").on("click", "#btnAddRegNo", function () { return $.ajax({ type: "GET", url: "/BuildList/AddRegistration", dataType: "HTML", async: !1, success: function (e) { $("#AddRegistrationNumberModalMain").html(e), DraggableModalPopup("#AddRegistrationNumberModal") } }), !1 }), $("body").on("blur", "#Request_duns", function () { var e = $(this).val(); "" != e && ($.isNumeric(e) || ($(this).val(""), ShowMessageNotification("success", allowOnlyNumbers, !1))) }), $("#Request_duns").keyup(function (e) { var a = 0 == e.keyCode ? e.charCode : e.keyCode; return a >= 48 && a <= 57 || 8 == a }), $("#Request_duns").on("change", function (e, a) { var i = 0 == e.keyCode ? e.charCode : e.keyCode; return i >= 48 && i <= 57 || 8 == i }), $("#Request_duns").keypress(function (e) { var a = 0 == e.keyCode ? e.charCode : e.keyCode; return a >= 48 && a <= 57 || 8 == a }), $(".OnlyDigit").keypress(function (e) { var a = 0 == e.keyCode ? e.charCode : e.keyCode; return a >= 48 && a <= 57 || 8 == a }), $("body").on("blur", ".OnlyDigit", function () { var e = $(this).val(); "" != e && ($.isNumeric(e) || ($(this).val(""), ShowMessageNotification("success", allowOnlyNumbers, !1))) });