﻿function sendEmail() { $("#divProgress").show(), $.ajax({ type: "POST", url: "/Account/SendMailVarificationCode", dataType: "json", contentType: "application/json", success: function (n) { $("#divProgress").hide() }, error: function (n, s, e) { $("#divProgress").hide() } }) } $(document).ready(function () { $("#left-panel").css("display", "none"), $("#ribbon").css("display", "none"), $(".pull-right").css("display", "none") });