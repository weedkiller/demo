﻿function CloseImportPanel(e, a) { var t = "fileType:" + e + "@#$ImportMode:" + a; $.magnificPopup.close(), $.magnificPopup.open({ preloader: !1, closeBtnInside: !0, type: "iframe", items: { src: "/OIData/OrbDataMatch?Parameters=" + ConvertEncrypte(encodeURI(t)).split("+").join("***") }, callbacks: { close: function () { } }, closeOnBgClick: !1, mainClass: "popupOrbColmnMapping" }) } function CloseImportPanelMatchRefresh(e) { var a = e; $.magnificPopup.close(), $.magnificPopup.open({ preloader: !1, closeBtnInside: !0, type: "iframe", items: { src: "/OIData/OrbImportPanelDataMatch?Parameters=" + ConvertEncrypte(encodeURI(a)).split("+").join("***") }, callbacks: { close: function () { } }, closeOnBgClick: !1, mainClass: "popupOrbColmnMappingMatchRefresh" }) } function SetExampleValue(e, a) { 0 != parseInt(e) ? $.ajax({ type: "POST", url: "/OIData/UpdateExamples", data: JSON.stringify({ CurrentColumn: e }), dataType: "json", contentType: "application/json", success: function (e) { $("#" + a).parent().next().text(e) }, error: function (e, a, t) { } }) : $("#" + a).parent().next().text("") } function ValidSelectedDropDown() { var e = 0; if (parseInt($("#DataColumn-0").val()) > 0 || e++ , "lob" == $.UserRole.toLowerCase()) { var a = $("#Tags").val(), t = $("#IsTag").val(); "true" == $("#LicenseEnableTags").val().toLowerCase() && ("false" == t.toLowerCase() ? "" != a && "0" != a || e++ : parseInt($("#DataColumn-10").val()) > 0 || e++) } e > 0 ? ($("#btnDataMappingInsertData").attr("disabled", "disabled"), $("#btnInsertLargeData").attr("disabled", "disabled")) : ($("#btnDataMappingInsertData").attr("disabled", !1), $("#btnInsertLargeData").attr("disabled", !1)) } function SetTagValue(e) { $.magnificPopup.close(); var a = document.getElementById("DataColumn"), t = document.createElement("option"); t.text = e, t.value = e, a.add(t), $(".chzn-select").trigger("chosen:updated") } function ShowMessageNotification(e, a, t, o, s) { t && $.magnificPopup.close(), parent.ShowMessageNotification(e, a, !1, !1), o && s() } function openSalesForceMatchData(e, a) { $.magnificPopup.proto.close("data"); var t = "fileType:" + e + "@#$importMode:" + a; $.magnificPopup.open({ preloader: !1, closeBtnInside: !0, type: "iframe", items: { src: "/OIData/OrbDataMatch?Parameters=" + ConvertEncrypte(encodeURI(t)).split("+").join("***") }, callbacks: { close: function () { backparentSalesforce() } }, closeOnBgClick: !1, mainClass: "popupOrbColmnMapping" }) } function backparentSalesforce() { window.parent.$.magnificPopup.close(), window.location = location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : "") + "/OI/Data" } function LoadLowvolume() { $.ajax({ type: "GET", url: "/OIData/OILowVolumeIndex", dataType: "HTML", contentType: "application/html", cache: !1, success: function (e) { $("#partialDivLowVolume").html(e), setTimeout(function () { $("#partialDivLowVolume").jarvisWidgets("destroy"), $("#partialDivLowVolume").jarvisWidgets({ toggleClass: "fa fa-minus | fa fa-plus" }) }, 1e3) } }) } function LoadHighvolume() { $.ajax({ type: "GET", url: "/OIData/OIHighVolumeIndex", dataType: "HTML", contentType: "application/html", cache: !1, success: function (e) { $("#partialDivHighVolume").html(e), setTimeout(function () { $("#partialDivHighVolume").jarvisWidgets("destroy"), $("#partialDivHighVolume").jarvisWidgets({ toggleClass: "fa fa-minus | fa fa-plus" }) }, 1e3) } }) } function OnSuccessImportJob() { $("#divProgress").hide(), pageSetUp() } function LoadHighImportRequest() { var e = "/OIData/OIHighVolumeIndex?pagevalue=" + $(".pagevalueChange").val() + "&sortby=" + $("#SortBy").val() + "&sortorder=" + $("#SortOrder").val() + "&FileType=" + $("#FileType").val() + "&IsInnerPage=" + !0; $.ajax({ type: "GET", url: e, dataType: "HTML", contentType: "application/html", async: !1, cache: !1, success: function (e) { $("#divImportJobListing").html(e), pageSetUp() }, error: function (e, a, t) { } }) } function CloseILargemportPanel(e, a) { var t = ""; "Data Import" == a && (t = "popupData"), "Match Refresh" == a && (t = "popupOrbColmnMappingMatchRefresh"); var o = "fileType:" + e + "@#$ImportMode:" + a; $.magnificPopup.close(), $.magnificPopup.open({ preloader: !1, closeBtnInside: !0, type: "iframe", items: { src: "/OIData/LargeDataMatch?Parameters=" + ConvertEncrypte(encodeURI(o)).split("+").join("***") }, callbacks: { close: function () { } }, closeOnBgClick: !1, mainClass: t }) } $(document).ajaxStart(function () { $("#divProgress").show() }).ajaxStop(function () { $("#divProgress").hide() }), $.UserRole = $("#UserRole").val(), $.UserLOBTag = $("#UserLOBTag").val(), $(document).on("click", "#clsOrbSingleEntryForm", function () { var e = $("input[name='rBtnOrbImportDataOption']:checked").val(), a = "", t = ""; "Match Refresh" == e ? (a = "/OIData/OISingleEntryMatchRefresh", t = "popupOrbSingleEntryFormMatchRefresh") : "Data Import" == e && (a = "/OIData/OISingleEntryForm", t = "popupOrbSingleEntryForm"), $.magnificPopup.open({ preloader: !0, closeBtnInside: !0, type: "iframe", items: { src: a }, callbacks: { close: function () { } }, closeOnBgClick: !1, mainClass: t }) }), $("body").on("click", ".clsFileType", function () { var e = $("input[name='rBtnOrbImportDataOption']:checked").val(), a = "", t = $(this).data("filetype"); "Match Refresh" == e ? a = "/OIData/OrbImportPanelMatchRefresh?Parameters=" + t : "Data Import" == e && (a = "/OIData/OrbImportPanel?Parameters=" + ConvertEncrypte(encodeURI("fileType:" + t + "@#$importMode:" + e)).split("+").join("***")), $.magnificPopup.open({ preloader: !1, closeBtnInside: !0, type: "iframe", height: "200px", items: { src: a }, callbacks: { close: function () { } }, closeOnBgClick: !1, mainClass: "popupImport" }) }), $("#file").change(function () { var e = ["xls", "xlsx", "csv", "txt"]; -1 == $.inArray($(this).val().split(".").pop().toLowerCase(), e) && (bootbox.alert({ title: "<i class='fa fa-info-circle' aria-hidden='true'></i> Message", message: "Please select file first." }), bootbox.alert({ title: "<i class='fa fa-info-circle' aria-hidden='true'></i> Message", message: "Only formats allowed are : " + e.join(", ") }), $("#file").val("")) }), $("body").on("click", "#btnSubmitImportPanel", function () { var e = new FormData; if (null != $("#file")[0].files[0]) { var a = "", t = $("#fileType").val(), o = $("#ImportMode").val(); if ($("#isText").val().toLowerCase() && ($(".errorMessage").text(""), "" == (a = $("#txtDelimiter").val()))) return void $(".errorMessage").text(" Please enter delimiter"); e.append("file", $("#file")[0].files[0]), e.append("header", $("#WithHeader").prop("checked")), e.append("isTSV", $("#isTSV").val().toLowerCase()), e.append("delimiter", a); var s = $('input[name="__RequestVerificationToken"]').val(); $.ajax({ type: "POST", url: "/OIData/OrbImportPanel", data: e, headers: { __RequestVerificationToken: s }, dataType: "json", contentType: !1, processData: !1, success: function (e) { if ("success" == e) parent.CloseImportPanel(t, o); else { if ("Only formats allowed are :xls,xlsx,csv,tsv,txt" == e) { var a = $("#allowedFormats").val().split(","); return parent.ShowMessageNotification("success", "Only formats allowed are : " + a, !1, !1), $("#file").val(""), !1 } if ("Unable to import blank file" == e) return parent.ShowMessageNotification("success", e, !1), !1; if ("File has no rows." == e) return parent.ShowMessageNotification("success", e, !1), !1; parent.ShowMessageNotification("success", e, !1, !1) } }, error: function (e, a, t) { } }) } else parent.ShowMessageNotification("success", "Please select file first.", !1, !1); return !1 }), $("body").on("click", "#btnSubmitImportPanelMatchRefresh", function () { var e = new FormData; if (null != $("#file")[0].files[0]) { var a = "", t = $("#fileType").val(); if ($("#isText").val().toLowerCase() && ($(".errorMessage").text(""), "" == (a = $("#txtDelimiter").val()))) return void $(".errorMessage").text(" Please enter delimiter"); e.append("file", $("#file")[0].files[0]), e.append("header", $("#WithHeader").prop("checked")), e.append("isTSV", $("#isTSV").val().toLowerCase()), e.append("delimiter", a); var o = $('input[name="__RequestVerificationToken"]').val(); $.ajax({ type: "POST", url: "/OIData/OrbImportPanelMatchRefresh", data: e, headers: { __RequestVerificationToken: o }, dataType: "json", contentType: !1, processData: !1, success: function (e) { if ("success" == e) parent.CloseImportPanelMatchRefresh(t); else { if ("Only formats allowed are :xls,xlsx,csv,tsv,txt" == e) { var a = $("#allowedFormats").val().split(","); return parent.ShowMessageNotification("success", "Only formats allowed are : " + a, !1, !1), $("#file").val(""), !1 } if ("File has no rows." == e) return parent.ShowMessageNotification("success", e, !1), !1; parent.ShowMessageNotification("success", e, !1, !1) } }, error: function (e, a, t) { } }) } else parent.ShowMessageNotification("success", "Please select file first.", !1, !1); return !1 }), $("body").on("click", "#btnDataMappingInsertData", function () { var e = [], a = [], t = [], o = 0, s = $("#Tags").val(), r = $("#fileType").val(); if ("/OIData/OrbDataMatch", null != s && "0" != s || (s = ""), $(".SelectBox").each(function () { e.push($(this).val()), 1, $(this).hasClass("chzn-select") ? a.push("Tags") : a.push($(this).find(":selected").text()), $(this).parent().removeClass("has-error") }), e.length > 0) for (var n = 0; n < e.length; n++) { 0 != n && 1 != n && 7 != n || 0 == $("#DataColumn-" + n).val() && $("#DataColumn-" + n).parent().addClass("has-error"); for (var i = 0; i <= e.length; i++)if (n != i && e[n] == e[i]) { 1; var l = $("#DataColumn-" + n).val(), c = $("#DataColumn-" + i).val(); (parseInt(l) > 0 || parseInt(c) > 0) && (o += 1, parseInt(l) > 0 && $("#DataColumn-" + n).parent().addClass("has-error"), parseInt(c) > 0 && $("#DataColumn-" + i).parent().addClass("has-error")) } } if ($(".spnExcelColumn").each(function () { var e = $(this).attr("data-val"); "State (State is required for US)" == e && (e = "State"), t.push(e) }), 0 == $("#DataColumn-0").val() || 0 == $("#DataColumn-1").val() || 0 == $("#DataColumn-7").val()) return !1; if (o > 0) return !1; if (!$(".norecored").is(":visible")) { var p = $('input[name="__RequestVerificationToken"]').val(); return $.ajax({ type: "POST", url: "/OIData/OrbDataMatch", data: JSON.stringify({ OrgColumnName: a, ExcelColumnName: t, Tags: s, fileType: r }), headers: { __RequestVerificationToken: p }, dataType: "json", contentType: "application/json", success: function (e) { parent.ShowMessageNotification("success", e, !0) }, error: function (e, a, t) { } }), !0 } return parent.ShowMessageNotification("success", "Please Upload Data first.", !1), !1 }), $(document).ready(function () { if ($(".chzn-select").length > 0 && $(".chzn-select").chosen().change(function (e) { e.target == this && $("#Tags").val($(this).val()) }), $($(".mainNav ul")[0]).append($(".liCircleUserText")), $(".SelectBox").each(function () { var e = $(this).parent().parent().find(".spnExcelColumn").attr("data-val"), a = 0, t = $(this).attr("id"); $("#" + t + " option").each(function () { var t = $(this).text(); e == t ? a = $(this).val() : "srcrecordid" == t.toLowerCase() || "src recordid" == t.toLowerCase() || "accountid" == t.toLowerCase() || "company id" == t.toLowerCase() || "companyid" == t.toLowerCase() ? "srcrecordid" == e.toLowerCase() && (a = $(this).val()) : "company" == t.toLowerCase() || "companyname" == t.toLowerCase() || "organization" == t.toLowerCase() || "address1_name" == t.toLowerCase() ? "companyname" == e.toLowerCase() && (a = $(this).val()) : "address" == t.toLowerCase() || "address1" == t.toLowerCase() || "street line address" == t.toLowerCase() || "street line address1" == t.toLowerCase() || "address1_line1" == t.toLowerCase() ? "street line address1" == e.toLowerCase() && (a = $(this).val()) : "address2" == t.toLowerCase() || "street line address2" == t.toLowerCase() || "address1_line2" == t.toLowerCase() ? "street line address2" == e.toLowerCase() && (a = $(this).val()) : "address1_city" == t.toLowerCase() || "city" == t.toLowerCase() ? "city" == e.toLowerCase() && (a = $(this).val()) : "state" == t.toLowerCase() || "address1_stateorprovince" == t.toLowerCase() ? "state (state is required for us)" == e.toLowerCase() && (a = $(this).val()) : "zipcode" == t.toLowerCase() || "postalcode" == t.toLowerCase() || "zip" == t.toLowerCase() || "address1_postalcode" == t.toLowerCase() ? "postalcode" == e.toLowerCase() && (a = $(this).val()) : "country" == t.toLowerCase() || "countrycode" == t.toLowerCase() || "countryisoalpha2code" == t.toLowerCase() || "address1_country" == t.toLowerCase() ? "countryisoalpha2code" != e.toLowerCase() && "country" != e.toLowerCase() || (a = $(this).val()) : "phoneno" == t.toLowerCase() || "phonenbr" == t.toLowerCase() || "phone" == t.toLowerCase() || "address1_telephone1" == t.toLowerCase() ? "phonenbr" == e.toLowerCase() && (a = $(this).val()) : "tags" == t.toLowerCase() || "tag" == t.toLowerCase() ? "tags" == e.toLowerCase() && (a = $(this).val()) : "altaddress" == t.toLowerCase() || "altaddress1" == t.toLowerCase() || "street line alt. address" == t.toLowerCase() || "street line alt. address1" == t.toLowerCase() || "address_line1" == t.toLowerCase() || "address1_line1" == t.toLowerCase() ? "street line alt. address1" == e.toLowerCase() && (a = $(this).val()) : "altaddress2" == t.toLowerCase() || "street line alt. address2" == t.toLowerCase() ? "street line alt. address2" == e.toLowerCase() && (a = $(this).val()) : "orbnum" != t.toLowerCase() && "orb num" != t.toLowerCase() && "orb number" != t.toLowerCase() && "orbnumber" != t.toLowerCase() && "orb_num" != t.toLowerCase() && "orb_number" != t.toLowerCase() || "orbnum" == e.toLowerCase() && (a = $(this).val()) }), $(this).val(a), SetExampleValue($(this).val(), t), "lob" == $.UserRole.toLowerCase() && ($(".chzn-select").attr("data-placeholder", "Add Tags (Required)"), $(".chzn-select").trigger("chosen:updated")) }), $("#btnOIDataMappingInsertData").attr("disabled", "disabled"), $(".SelectBox").length > 0 && ValidSelectedDropDown(), "" != location.hash) { var e = location.hash; isReload = "true", $.magnificPopup.open({ preloader: !1, closeBtnInside: !0, type: "iframe", height: "200px", items: { src: location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : "") + "/OI/Data?" + e.replace(/^.*#/, "") }, callbacks: { close: function (e) { "true" == isReload && (window.location = location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : "") + "/OI/Data") } }, closeOnBgClick: !1, mainClass: "popupSalesForce" }) } }), $("body").on("click", ".OpenTags", function () { $.magnificPopup.open({ preloader: !0, closeBtnInside: !0, type: "iframe", items: { src: "/Tags/AddTags/?isAllowLOBTag=" + !0 }, callbacks: { close: function () { } }, closeOnBgClick: !1, mainClass: "popupAddTags" }) }), $("body").on("click", "#btnOIDataMappingInsertData", function () { var e = [], a = [], t = [], o = 0, s = $("#fileType").val(); if ("/OIData/OrbImportPanelDataMatch", $(".SelectBox").each(function () { e.push($(this).val()), 1, $(this).parent().removeClass("has-error"), $(this).hasClass("chzn-select") ? a.push("") : a.push($(this).find(":selected").text()) }), e.length > 0) for (var r = 0; r < e.length; r++) { 0 != r && 1 != r && 7 != r || 0 == $("#DataColumn-" + r).val() && $("#DataColumn-" + r).parent().addClass("has-error"); for (var n = 0; n <= e.length; n++)if (r != n && e[r] == e[n]) { 1; var i = $("#DataColumn-" + r).val(), l = $("#DataColumn-" + n).val(); (parseInt(i) > 0 || parseInt(l) > 0) && (o += 1, parseInt(i) > 0 && $("#DataColumn-" + r).parent().addClass("has-error"), parseInt(l) > 0 && $("#DataColumn-" + n).parent().addClass("has-error")) } } if ($(".spnExcelColumn").each(function () { var e = $(this).attr("data-val"); "State (State is required for US)" == e && (e = "State"), t.push(e) }), 0 == $("#DataColumn-0").val() || 0 == $("#DataColumn-1").val() || 0 == $("#DataColumn-7").val()) return !1; if (o > 0) return !1; if (!$(".norecored").is(":visible")) { var c = $('input[name="__RequestVerificationToken"]').val(); return $.ajax({ type: "POST", url: "/OIData/OrbImportPanelDataMatch", data: JSON.stringify({ OrgColumnName: a, ExcelColumnName: t, fileType: s }), headers: { __RequestVerificationToken: c }, dataType: "json", contentType: "application/json", success: function (e) { parent.ShowMessageNotification("success", e, !0) }, error: function (e, a, t) { } }), !0 } return parent.ShowMessageNotification("success", "Please Upload Data first.", !1), !1 }), $("body").on("click", "#ClsSalesForceLogin", function () { var e = "/OIData/OISalesforceLogin?LoggedIn=false&importMode=" + $("input[name='rBtnOrbImportDataOption']:checked").val(); $(this).attr("href", e), $(this).click() }), $("body").on("click", "#IdLowvolumeTab", function () { $(this).parent("li").hasClass("active") || LoadLowvolume() }), $("body").on("click", "#IdHighvolumeTab", function () { $(this).parent("li").hasClass("active") || LoadHighvolume() }), $("body").on("change", ".pagevalueChange", function () { var e = "/OIData/OIHighVolumeIndex?pagevalue=" + $(this)[0].value + "&sortby=" + $("#SortBy").val() + "&sortorder=" + $("#SortOrder").val() + "&FileType=" + $("#FileType").val() + "&IsInnerPage=" + !0; $.ajax({ type: "GET", url: e, dataType: "HTML", contentType: "application/html", async: !1, cache: !1, success: function (e) { $("#divImportJobListing").html(e), pageSetUp() }, error: function (e, a, t) { } }) }), $("body").on("change", "#DisplayImportFileType", function () { var e = "/OIData/OIHighVolumeIndex?FileType=" + $(this)[0].value + "&IsInnerPage=" + !0; $.ajax({ type: "GET", url: e, dataType: "HTML", contentType: "application/html", async: !1, cache: !1, success: function (e) { $("#divImportJobListing").html(e), pageSetUp() }, error: function (e, a, t) { } }) }), $("body").on("click", "#btnInsertLargeData", function () { var e = [], a = $("#Tags").val(), t = $("#IsTag").val(), o = $("#LicenseEnableTags").val(), s = $(".Language").val(), r = $("#fileType").val(), n = $("#ImportMode").val(), i = $("#ProvidersType").val(), l = 0, c = $("#IsHeader").val(); if ($(".SelectBox").each(function () { "0" == $(this).val() ? e.push("") : "select language" == $("option:selected", $(this)).text().toLowerCase() ? e.push("") : e.push($("option:selected", $(this)).text()), $(this).parent().removeClass("has-error") }), e.length > 0) for (var p = 0; p < e.length; p++) { 0 != p && 1 != p && 7 != p || 0 == $("#DataColumn-" + p).val() && $("#DataColumn-" + p).parent().addClass("has-error"); for (var d = 0; d <= e.length; d++)if (p != d && e[p] == e[d]) { 1; var u = $("#DataColumn-" + p).val(), f = $("#DataColumn-" + d).val(); (parseInt(u) > 0 || parseInt(f) > 0) && (l += 1, parseInt(u) > 0 && $("#DataColumn-" + p).parent().addClass("has-error"), parseInt(f) > 0 && $("#DataColumn-" + d).parent().addClass("has-error")) } } if ("false" == o.toLowerCase() ? "Match Refresh" == n || e.splice(9, 0, "null") : "true" == t.toLowerCase() ? a = null : "Match Refresh" == n || (e[9] = ""), "Data Import" == n && (0 == $("#DataColumn-0").val() || 0 == $("#DataColumn-1").val() || 0 == $("#DataColumn-7").val())) return !1; if ("Match Refresh" == n && 0 == $("#DataColumn-0").val()) return !1; if (l > 0) return !1; if (!$(".norecored").is(":visible")) { var m = $('input[name="__RequestVerificationToken"]').val(); return $.ajax({ type: "POST", url: "/OIData/LargeDataMatch", data: JSON.stringify({ MappingColumnName: e.toString(), fileType: r, ImportType: n, Tags: a, InLanguage: s, ProvidersType: i, IsHeader: c }), headers: { __RequestVerificationToken: m }, dataType: "json", contentType: "application/json", success: function (e) { parent.ShowMessageNotification("success", e, !0, !0, parent.LoadHighImportRequest) }, error: function (e, a, t) { } }), !0 } return parent.ShowMessageNotification("success", "Please Upload Data first.", !0), !1 }), $("body").on("click", ".clsFileTypes", function () { var e = "fileType:" + $(this).data("filetype") + "@#$importMode:" + $("input[name='rBtnOrbImportDataOption']:checked").val(); $.magnificPopup.open({ preloader: !1, closeBtnInside: !0, type: "iframe", height: "200px", items: { src: "/OIData/OIImportLargeDataPanel?Parameters=" + ConvertEncrypte(encodeURI(e)).split("+").join("***") }, callbacks: { close: function () { } }, closeOnBgClick: !1, mainClass: "popupImportHighVolume" }) }), $("body").on("click", "#btnOISubmitLargeData", function () { var e = new FormData, a = $("#ImportMode").val(); if (null != $("#file")[0].files[0]) { var t = "", o = $("#fileType").val(), s = $("#isText").val().toLowerCase(); if (t = $("#txtDelimiter").val(), "true" == s.toLowerCase()) { if ($(".errorMessage").text(""), "" == t) return $(".errorMessage").text(" Please enter delimiter"), !1 } else t = ""; e.append("file", $("#file")[0].files[0]), e.append("header", $("#WithHeader").prop("checked")), e.append("isTSV", $("#isTSV").val().toLowerCase()), e.append("delimiter", t), e.append("ImportMode", a); var r = $('input[name="__RequestVerificationToken"]').val(); $.ajax({ type: "POST", url: "/OIData/SaveLargeFile", data: e, headers: { __RequestVerificationToken: r }, dataType: "json", contentType: !1, processData: !1, success: function (e) { if ("Please select valid delimiter or upload a valid file" == e) return parent.ShowMessageNotification("success", e, !1), !1; if ("Only formats allowed are :xls,xlsx,csv,tsv,txt" == e) { var t = $("#allowedFormats").val().split(","); return parent.ShowMessageNotification("success", "Only formats allowed are : " + t, !1), $("#file").val(""), !1 } return e.indexOf("already belongs to this file") > -1 ? (parent.ShowMessageNotification("success", e, !1), !1) : "Upload failed due to conflicting column name in file - ImportProcessId. Please rename column." == e ? (parent.ShowMessageNotification("success", e, !1), !1) : e.indexOf("Error:") > -1 ? (parent.ShowMessageNotification("success", e, !1), !1) : "Unable to import blank file" == e ? (parent.ShowMessageNotification("success", e, !1), !1) : void ("success" == e && parent.CloseILargemportPanel(o, a)) }, error: function (e, a, t) { } }) } else parent.ShowMessageNotification("success", "Please select file first.", !1); return !1 }), $("body").on("change", ".SelectBox", function () { $("#btnOIDataMappingInsertData").attr("disabled", !1), ValidSelectedDropDown(), SetExampleValue($(this).val(), $(this).attr("id")); var e = $("#ImportMode").val(); $("#btnInsertLargeData").attr("disabled", !1), "Data Import" == e && (0 == $("#DataColumn-0").val() || 0 == $("#DataColumn-1").val() || 0 == $("#DataColumn-7").val() ? ($("#btnInsertLargeData").attr("disabled", "disabled"), $("#btnDataMappingInsertData").attr("disabled", "disabled")) : 0 == $("#DataColumn-0").val() || 0 == $("#DataColumn-1").val() || 0 == $("#DataColumn-7").val() ? $("#DataColumn-").parent().addClass("has-error") : ($("#btnInsertLargeData").attr("disabled", !1), $("#btnDataMappingInsertData").attr("disabled", !1))), "Match Refresh" == e && (0 == $("#DataColumn-0").val() ? $("#btnInsertLargeData").attr("disabled", "disabled") : $("#btnInsertLargeData").attr("disabled", !1)) });