﻿$("body").on("click", "#btnAddDelimiter", function () { var e = $("#txtDelimiter").val(), i = $('input[name="__RequestVerificationToken"]').val(); return null != e && "" != e ? ($("#spnDelimiter").hide(), $.ajax({ type: "POST", url: "/ExportView/SetDelimiter/", headers: { __RequestVerificationToken: i }, data: JSON.stringify({ Delimiter: e }), dataType: "json", contentType: "application/json", cache: !1, async: !1, success: function (e) { callbackCloseDelimiter(e) }, error: function (e, i, t) { } }), !0) : ($("#spnDelimiter").show(), !1) });