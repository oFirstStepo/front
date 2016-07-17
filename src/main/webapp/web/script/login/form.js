/**
 * 创建登陆表单
 * 
 * @returns
 */
function createForm() {

	var html = [];
	html.push("<div style='width:100%'>");
	html.push("<div style='margin-bottom:20px'>");
	html.push("<input id='username'/>");
	html.push("</div>");
	html.push("<div style='margin-bottom:30px'>");
	html.push("<input id='password' type='password'/>");
	html.push("</div>");
	html.push("<div style='margin-bottom:0px'>");
	html.push("<a id='submit'><span style='font-size:14px;'>登陆</span></a>");
	html.push("</div>");
	html.push("</div>");

	$("#form").html(html.join(""));

	applyForm();
}

/**
 * 渲染表单
 * 
 * @returns
 */
function applyForm() {

	$("#username").textbox({
		width : "100%",
		height : "40px",
		prompt : "用户名",
		iconCls : "icon-man",
		iconWidth : 38
	});

	$("#password").textbox({
		width : "100%",
		height : "40px",
		prompt : "密码",
		iconCls : "icon-lock",
		iconWidth : 38
	});

	$("#submit").linkbutton({
		width : "100%",
		iconCls : "icon-ok",
		onClick : function() {
			alert("登陆");
		}
	});
}