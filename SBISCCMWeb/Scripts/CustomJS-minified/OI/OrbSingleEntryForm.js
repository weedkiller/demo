﻿function LoadSingleEntryTags() { $("#OIDataImport #OrbsingleEntryTagsValue").length > 0 && $("#OIDataImport #OrbsingleEntryTagsValue").chosen().change(function (e) { e.target == this && $("#OIDataImport #OrbSingleEntryTags").val($(this).val()) }) } function SetTagValue(e) { $.magnificPopup.close(); var t = document.getElementById("OrbsingleEntryTagsValue"), a = document.createElement("option"); a.text = e, a.value = e, t.add(a), $(".chzn-select").trigger("chosen:updated") } function OISingleEntryValidation() { var e = $("#OIDataImport #OrbSingleEntryTags").val(); return "lob" == $.UserRole.toLowerCase() && "" == e ? ($("#OIDataImport #spnTags").show(), !1) : ($("#OIDataImport #spnTags").hide(), !0) } function OIMatchRefreshSuccess(e) { e.message.startsWith("Please fill proper information.") ? ($("#MatchRefreshOrbnumber").show(), $("#MatchRefreshOrbnumber").text("OrbNumber is Required.")) : ($("#SingleEntryFormModal").modal("hide"), parent.ShowMessageNotification("success", e.message, e.message.startsWith("Import Process Completed Successfully"))) } $(document).ready(function () { $(".dataImport").addClass("thColor"), LoadSingleEntryTags() }), $.UserRole = $("#UserRole").val(), $.UserLOBTag = $("#UserLOBTag").val(), $(document).on("click", "#OIDataImport .OpenTags", function () { $.magnificPopup.open({ preloader: !0, closeBtnInside: !0, type: "iframe", items: { src: "/Tags/AddTags/?isAllowLOBTag=" + !0 }, callbacks: { close: function () { } }, closeOnBgClick: !1, mainClass: "popupAddTags" }) }), $(document).on("change", ".OISingleEntryPopup input[type=checkbox][name=rBtnImportDataOption]", function () { var e = $("input.rButtonImportData").is(":checked"); 0 == e ? (e = "Data Import", $(".dataImport").addClass("thColor"), $(".matchRefresh").removeClass("thColor")) : 1 == e && (e = "Match Refresh", $(".matchRefresh").addClass("thColor"), $(".dataImport").removeClass("thColor")), "Data Import" == e ? $.ajax({ type: "GET", url: "/ImportData/OISingleEntryForm?IsPartial=" + !0, dataType: "html", async: !1, contentType: !1, processData: !1, success: function (e) { parent.addRemoveOISingleEntryPopupClass("popupOrbSingleEntryFormMatchRefresh", !1), $(".OISingleEntryMain").html(e), LoadSingleEntryTags() } }) : $.ajax({ type: "GET", url: "/ImportData/OISingleEntryMatchRefresh", dataType: "html", async: !1, contentType: !1, processData: !1, success: function (e) { parent.addRemoveOISingleEntryPopupClass("popupOrbSingleEntryFormMatchRefresh", !0), $(".OISingleEntryMain").html(e) } }) });