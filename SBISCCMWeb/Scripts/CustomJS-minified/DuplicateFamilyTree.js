﻿function DuplocateFamilyTree() { var e = 0, a = "", i = ""; window.parent.$("#rdoSingle").is(":checked") ? (e = window.parent.$("#FamilyTreeId").val(), a = $("#txtDuplicateFamilyTreeName").val(), i = $("#txtDuplicateFamilyTreeType").val()) : (e = window.parent.$("#RightView_FamilyTreeId").val(), a = $("#txtDuplicateFamilyTreeName").val(), i = $("#txtDuplicateFamilyTreeType").val()); var t = 0; if ("" == a || a && "" == a.trim() ? ($("#spnFamilyTreeName").show(), t++) : $("#spnFamilyTreeName").hide(), "" == i || i && "" == i.trim() ? ($("#spnFamilyTreeType").show(), t++) : $("#spnFamilyTreeType").hide(), t > 0) return !1; var r = $('input[name="__RequestVerificationToken"]').val(), n = "FamilyTreeId:" + e + "@#$FamilyTreeName:" + a + "@#$FamilyTreeType:" + i, l = parent.ConvertEncrypte(encodeURI(n)).split("+").join("***"); $.ajax({ type: "POST", url: "/FamilyTree/DuplicateFamilyTree/", data: JSON.stringify({ Parameters: l }), contentType: "application/json", headers: { __RequestVerificationToken: r }, success: function (e) { $("#DuplicateFamilyTreeModal").modal("hide"), parent.ShowMessageNotification("success", e.Message, !1), e.result && window.parent.ChangeView() }, error: function (e, a, i) { } }) }