﻿$.UserRole = $("#UserRole").val(), $.UserLOBTag = $("#UserLOBTag").val(), $(document).ready(function () { $("#matchRefreshForm #txtSrcRecordid").focus(), $("#matchRefreshForm #btnImportData").attr("disabled", "disabled"), "lob" == $.UserRole.toLowerCase() && ($(".SingleEntryFormMatchFormTab #matchRefreshForm #TagsValue").attr("data-placeholder", "Add Tags (Required)"), $(".SingleEntryFormMatchFormTab #matchRefreshForm #TagsValue").trigger("chosen:updated")), $(".chzn-select").length > 0 && $(".chzn-select").chosen().change(function (e) { e.target == this && $("#Tags").val($(this).val()), "lob" == $.UserRole.toLowerCase() && Validation() }), Validation() }), $(document).on("click", "#matchRefreshForm #btnImportData", function () { var e = $("#matchRefreshForm #Tags").val(); return !!Validation() && ("lob" == $.UserRole.toLowerCase() && "" == e ? ($("#matchRefreshForm #spnTags").show(), !1) : void $("#matchRefreshForm #spnTags").hide()) }), $(document).on("blur", "#matchRefreshForm #txtSrcRecordid", function (e, a) { Validation() }), $(document).on("blur", "#matchRefreshForm #txtDUNSNumber", function (e, a) { Validation() }), $(document).on("change", "#matchRefreshForm #Country", function () { Validation() });