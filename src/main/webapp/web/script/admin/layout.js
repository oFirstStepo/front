/**
 * 创建layout布局
 * 
 * @returns
 */
function createLayout() {

	// 创建layout布局
	$("body").layout();

	// 添加北部
	$("body").layout("add", {
		id : "north",
		region : "north",
		split : true,
		height : 40
	});

	// 添加西部
	$("body").layout("add", {
		id : "west",
		region : "west",
		split : true,
		width : 180,
		title : "导航菜单"
	});

	// 添加中部
	$("body").layout("add", {
		id : "center",
		region : "center",
		split : true
	});

	// 添加南部
	$("body").layout("add", {
		id : "south",
		region : "south",
		split : true,
		height : 30
	});

	applyNorth();
	applyWest();
	applyCenter();
	applySouth();
}

/**
 * 渲染北部
 * 
 * @returns
 */
function applyNorth() {

	var html = [];
	html.push("<div class='header'>");
	html.push("		<a class='logo' href='#'/>");
	html.push("		<div style='float:left;margin:5px;'>");
	html.push("			<span style='font-size:16px;'>好帮手</span>");
	html.push("		</div>");
	html.push("		<a id='signout' style='margin-top:3px;margin-right:8px;float:right;'/>");
	html.push("</div>");

	$("#north").html(html.join(""));

	$("#signout").linkbutton({
		iconCls : "icon-signout",
		width : 23,
		height : 23,
		onClick : function() {
			alert("退出系统");
		}
	});
}

/**
 * 渲染西部
 * 
 * @returns
 */
function applyWest() {

	// 添加手风琴Div
	$("#west").html("<div id='accordion'></div>");
}

/**
 * 渲染中部
 * 
 * @returns
 */
function applyCenter() {

	// 设置内容
	$("#center").html("<div id='tabs'></div>");
}

/**
 * 渲染南部
 * 
 * @returns
 */
function applySouth() {

	// 设置内容
	$("#south").html("<div class='footer'>Built By haobangshou V2016 好帮手 技术支持</div>");
}