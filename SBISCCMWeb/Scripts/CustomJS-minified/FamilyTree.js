﻿function SelectCorporateLinkageDuns(e) { bootbox.confirm({ title: "<i class='fa fa-check-square-o' aria-hidden='true'></i> " + confirmBox, message: addTree, callback: function (a) { a && $.ajax({ type: "POST", url: "/FamilyTree/AddCorporateLinkageDuns/", data: JSON.stringify({ Parameters: ConvertEncrypte(encodeURI(e)).split("+").join("***") }), contentType: "application/json", success: function (e) { ShowMessageNotification("success", e.Message, !0), e && ChangeView() }, error: function (e, a, t) { } }) } }) } function CreateNewFamilyTree() { $.ajax({ type: "GET", url: "/FamilyTree/AddFamilyTree", dataType: "HTML", async: !1, success: function (e) { $("#AddFamilyTreeModalMain").html(e), DraggableModalPopup("#AddFamilyTreeModal") } }) } function DeleteFamilyTree() { var e = 0; if ("" == (e = $("#rdoSingle").is(":checked") ? $("#FamilyTreeId").val() : $("#RightView_FamilyTreeId").val())) return ShowMessageNotification("success", selectTree, !1), !1; "" == $("#FamilyTreeId").val() && "" == $("#RightView_FamilyTreeId").val() || bootbox.confirm({ title: "<i class='fa fa-check-square-o' aria-hidden='true'></i> " + confirmBox, message: deleteFamilyTree, callback: function (a) { if (a) { var t = $('input[name="__RequestVerificationToken"]').val(); $.ajax({ type: "POST", url: "/FamilyTree/DeleteFamilyTree?Parameters=" + ConvertEncrypte(encodeURI(e)).split("+").join("***"), dataType: "JSON", contentType: "application/json", headers: { __RequestVerificationToken: t }, cache: !1, success: function (e) { ShowMessageNotification("success", e.Message, !0), e.result && ChangeView() }, error: function (e, a, t) { } }) } } }) } function DuplicateFamilyTree() { $.ajax({ type: "GET", url: "/FamilyTree/DuplicateFamilyTree", dataType: "HTML", async: !1, success: function (e) { $("#DuplicateFamilyTreeModalMain").html(e), DraggableModalPopup("#DuplicateFamilyTreeModal") } }) } $("body").on("click", ".lnkCorporateLinkage", function () { $.ajax({ type: "GET", url: "/FamilyTree/GetCorporateLinkageDuns", dataType: "HTML", async: !1, success: function (e) { $("#FamilyTreeModalMain").html(e), DraggableModalPopup("#FamilyTreeModal") } }) }), $(function () { $("#rdoSingle").attr("checked", !0) }); var DragAndDrop = function (e) { function a(e) { var a = $(this).closest("li"), t = e.closest("li"); return !$.contains(t[0], a[0]) } function t(e, a) { } function i(e, a) { } function n(e, a) { var t = $(this).closest("li").attr("data-val"), i = a.draggable.closest("li").attr("data-val"); $(this).closest("li"), a.draggable.closest("li"); bootbox.confirm({ title: "<i class='fa fa-check-square-o' aria-hidden='true'></i> " + confirmBox, message: moveNode, callback: function (e) { if (e) { var a = $('input[name="__RequestVerificationToken"]').val(), n = "sourceFamilyTreeId:" + $("#FamilyTreeId").val() + "@#$sourceFamilyTreeDetailId:" + i + "@#$destinationFamilyTreeId:" + $("#FamilyTreeId").val() + "@#$destinationFamilyTreeDetailId:" + t, r = parent.ConvertEncrypte(encodeURI(n)).split("+").join("***"); $.ajax({ type: "POST", url: "/FamilyTree/MoveFamilyTree/", data: JSON.stringify({ Parameters: r }), headers: { __RequestVerificationToken: a }, contentType: "application/json", success: function (e) { e && ChangeView() }, error: function (e, a, t) { } }) } } }) } return e.enable = function (e) { $(e).find(".node-cpe").draggable({ helper: "clone", zIndex: 1e4, snapMode: "inner" }), $(e).find(".node-cpe, .node-facility").droppable({ activeClass: "active", hoverClass: "hover", accept: a, over: t, out: i, drop: n, greedy: !0, tolerance: "pointer" }) }, e }(DragAndDrop || {}); function AddNode() { $.ajax({ type: "GET", url: "/FamilyTree/AddFamilyNode?sourceFamilyTreeDetailId=" + parent.ConvertEncrypte(encodeURI("")).split("+").join("***"), dataType: "HTML", async: !1, success: function (e) { $("#AddFamilyNodeModalMain").html(e), DraggableModalPopup("#AddFamilyNodeModal") } }) } function ChangeView() { var e = 1; e = $("#rdoSingle").is(":checked") ? 1 : 0; var a = 0; $("#FamilyTreeId").length > 0 && (a = $("#FamilyTreeId").val()), "" == a && (a = 0); var t = 0; $("#LeftView_FamilyTreeId").length > 0 && (t = $("#LeftView_FamilyTreeId").val()), "" == t && (t = 0); var i = 0; $("#RightView_FamilyTreeId").length > 0 && (i = $("#RightView_FamilyTreeId").val()), "" == i && (i = 0); var n = $('input[name="__RequestVerificationToken"]').val(), r = "isSingleView:" + e + "@#$id:" + a + "@#$leftId:" + t + "@#$rightId:" + i, o = parent.ConvertEncrypte(encodeURI(r)).split("+").join("***"); $.ajax({ type: "POST", url: "/FamilyTree/ViewChange/", data: JSON.stringify({ Parameters: o }), contentType: "application/json", headers: { __RequestVerificationToken: n }, success: function (e) { e.Success && ($("#loadTree").html(""), $("#loadTree").html(e.ResponseString)) }, error: function (e, a, t) { } }) } function BindFamilyTree(e, a) { var t = $('input[name="__RequestVerificationToken"]').val(), i = a; $.ajax({ type: "POST", url: "/FamilyTree/BindFamilyTree/", headers: { __RequestVerificationToken: t }, data: JSON.stringify({ Parameters: ConvertEncrypte(encodeURI(i)).split("+").join("***") }), contentType: "application/json", success: function (a) { a.Success && ("SinglePanel" == e ? ($("#FamilyTreeId").empty(), $("#FamilyTreeId").append($("<option></option>").val("").html("--Select--")), $.each(a.Object, function (e, a) { $("#FamilyTreeId").append($("<option></option>").val(a.Key).html(a.Value)) })) : "SideBySideLeft" == e ? ($("#LeftView_FamilyTreeId").empty(), $("#LeftView_FamilyTreeId").append($("<option></option>").val("").html("--Select--")), $.each(a.Object, function (e, a) { $("#LeftView_FamilyTreeId").append($("<option></option>").val(a.Key).html(a.Value)) })) : "SideBySideRight" == e && ($("#RightView_FamilyTreeId").empty(), $("#RightView_FamilyTreeId").append($("<option></option>").val("").html("--Select--")), $.each(a.Object, function (e, a) { $("#RightView_FamilyTreeId").append($("<option></option>").val(a.Key).html(a.Value)) }))) }, error: function (e, a, t) { } }) } function getTreeValue() { $("#dragRoot").children().each(function () { }) } function GetData(e, a) { switch ("False" == $(a).attr("IsLoad")) { case !0: case "true": $(a).next("ul").length > 0 && $(a).next("ul").remove(), $.ajax({ type: "POST", url: "/FamilyTree/GetData/", data: JSON.stringify({ id: e }), contentType: "application/json", success: function (e) { e.Success && ($(a).after(e.ResponseString), $(a).attr("IsLoad", "True"), setTimeout(function () { PartialPageRefresh($(a).parent()) }, 500)) }, error: function (e, t, i) { $(a).attr("IsLoad", "False"), ShowMessageNotification("error", data.Message, !1) } }); case 1: case "1": case "on": case "yes": return !0; default: return !1 } } function RemovePageRefresh() { $(".tree > ul").removeAttr("role").find("ul").removeAttr("role"), $(el).find("li:has(ul)").removeClass("parent_li").removeAttr("role").find(" > span").removeAttr("title"), BindContextMenu() } function PartialPageRefresh(e) { $(".tree > ul").attr("role", "tree").find("ul").attr("role", "group"), $(e).find("li:has(ul)").addClass("parent_li").attr("role", "treeitem").find(" > span").attr("title", "Collapse this branch").on("click", function (e) { var a = $(this).parent("li.parent_li").find(" > ul > li"); a.is(":visible") ? (a.hide(), $(this).attr("title", "Expand this branch").find(" > i").removeClass().addClass("fa fa-lg fa-plus-circle")) : (a.show(), $(this).attr("title", "Collapse this branch").find(" > i").removeClass().addClass("fa fa-lg fa-minus-circle")), e.stopPropagation() }), BindContextMenu() } function PageRefresh() { $(".tree > ul").attr("role", "tree").find("ul").attr("role", "group"), $(".tree").find("li:has(ul)").addClass("parent_li").attr("role", "treeitem").find(" > span").attr("title", "Collapse this branch").on("click", function (e) { var a = $(this).parent("li.parent_li").find(" > ul > li"); a.is(":visible") ? (a.hide(), $(this).attr("title", "Expand this branch").find(" > i").removeClass().addClass("fa fa-lg fa-plus-circle")) : (a.show(), $(this).attr("title", "Collapse this branch").find(" > i").removeClass().addClass("fa fa-lg fa-minus-circle")), e.stopPropagation() }), BindContextMenu() } function BindContextMenu() { var e = $("#ActivateFeature").val(), a = !1; (a = "1" != $("#hdnIsEditable").val()) && (a = "1" == $("#hdnIsLockForEdit").val()); a || DragAndDrop.enable("#dragRoot"), $.contextMenu({ selector: ".context-menu-one", callback: function (e, a) { }, events: { show: function (a) { setTimeout(function () { a.$menu.find(".context-menu-disabled > span").attr("title", e) }, 50) } }, items: { DeleteNode: { name: deleteNodeSingle, disabled: function (e, a) { var t = !1; (t = "1" != $("#hdnIsEditable").val()) && (t = "1" == $("#hdnIsLockForEdit").val()); return t }, callback: function () { var e = $(this).attr("data-val"), a = $('input[name="__RequestVerificationToken"]').val(); bootbox.confirm({ title: "<i class='fa fa-check-square-o' aria-hidden='true'></i> " + confirmBox, message: deleteNode, callback: function (t) { if (t) { var i = "sourceFamilyTreeId:" + $("#FamilyTreeId").val() + "@#$sourceFamilyTreeDetailId:" + e; $.ajax({ type: "POST", url: "/FamilyTree/DeleteFamilytreeNode/", data: JSON.stringify({ Parameters: ConvertEncrypte(encodeURI(i)).split("+").join("***") }), contentType: "application/json", headers: { __RequestVerificationToken: a }, success: function (e) { parent.ShowMessageNotification("success", e.Message, !1), e.result && window.parent.ChangeView() }, error: function (e, a, t) { } }) } } }) } }, "Add Node": { name: addNode, disabled: function (e, a) { var t = !1; (t = "1" != $("#hdnIsEditable").val()) && (t = "1" == $("#hdnIsLockForEdit").val()); return t }, callback: function () { var e = $(this).attr("data-val"); $.ajax({ type: "GET", url: "/FamilyTree/AddFamilyNode?Parameters=" + ConvertEncrypte(encodeURI(e)).split("+").join("***"), dataType: "HTML", async: !1, success: function (e) { $("#AddFamilyNodeModalMain").html(e), DraggableModalPopup("#AddFamilyNodeModal") } }) } } } }) } function AddFamilyTree() { var e = 0, a = $("#txtFamilyTreeName").val(), t = $("#txtFamilyTreeType").val(), i = $("#txtAlternateId").val(); if (null != a && "" != a.trim() ? $("#spnFamilyTreeName").hide() : (e++ , $("#spnFamilyTreeName").show()), null != t && "" != t.trim() ? $("#spnFamilyTreeType").hide() : (e++ , $("#spnFamilyTreeType").show()), null != i && "" != i.trim() ? $("#spnAlternateId").hide() : (e++ , $("#spnAlternateId").show()), e > 0) return !1; var n = ConvertEncrypte(encodeURI("FamilyTreeName:" + a + "@#$FamilyTreeType:" + t + "@#$AlternateId:" + i)).split("+").join("***"), r = $('input[name="__RequestVerificationToken"]').val(); $.ajax({ type: "POST", url: "/FamilyTree/AddFamilyTree/", data: JSON.stringify({ Parameters: n }), contentType: "application/json", headers: { __RequestVerificationToken: r }, success: function (e) { $("#AddFamilyTreeModal").modal("hide"), parent.ShowMessageNotification("success", e.Message, !1), e.result && (window.parent.ChangeView(), window.parent.$.magnificPopup.close()) }, error: function (e, a, t) { } }) } function ConvertEncrypte(e) { var a = ""; return "" != e && null != e && $.ajax({ type: "POST", url: "/Home/GetEncryptedString", data: JSON.stringify({ strValue: e }), dataType: "json", contentType: "application/json", async: !1, success: function (e) { a = e }, error: function (e, a, t) { } }), a }