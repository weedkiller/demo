﻿function ShowMessageNotification(o, n, e, t, c) { 1 == e && $.magnificPopup.close(), t && c() } function CallbackCountryGroup(o) { $.magnificPopup.close(), $("#CountryGroupId").append(new Option(o.split("@#$")[0], o.split("@#$")[1])) } $(document).ready(function () { $("select.chzn-select").chosen({ no_results_text: "Oops, nothing found!", width: "100%", search_contains: !0 }) }), $(document).on("click", ".CreateCountyGroup", function () { $.magnificPopup.open({ preloader: !0, closeBtnInside: !0, type: "iframe", items: { src: "/Portal/AddCountryGrpPopup" }, callbacks: { close: function () { } }, closeOnBgClick: !1, mainClass: "popupCreateCountryGrp" }) });