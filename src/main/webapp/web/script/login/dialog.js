/**
 * 创建登录对话框
 * 
 * @returns
 */
function createDialog() {

	var content = [];
	content.push("<div id='content' class='content'>");
	content.push("<h1>登陆</h1>");
	content.push("<hr/>");
	content.push("<form id='form' class='form'></form>");
	content.push("</div>");

	$("#login").dialog({
		width : 500,
		height : 330,
		closable : false,
		noheader : true,
		draggable : false,
		style : {
			backgroundColor : "#E8EEEE"
		},
		content : content.join("")
	});
}