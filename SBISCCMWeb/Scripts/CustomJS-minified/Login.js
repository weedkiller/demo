﻿$("body").on("blur", "#EmailAddress", function () { $("#Password").val("") }), $("body").on("focus", "#Password", function () { $("#Password").attr("readonly", !1), $("#Password").val("") }), $("body").on("focus", "#EmailAddress", function () { $("#EmailAddress").attr("readonly", !1) }), $("body").on("focus", "#Email", function () { $("#Email").attr("readonly", !1) }), $("body").on("click", "#copylink", function () { var o = $("<input>"); $("body").append(o), o.val($("#copyaddress").text()).select(), document.execCommand("copy"), o.remove() });