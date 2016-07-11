$(function() {
	createLayout();

	applyWest();
	applySouth();
});

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
		height : 50
	});

	// 添加西部
	$("body").layout("add", {
		id : "west",
		region : "west",
		split : true,
		width : 180,
		title : "导航菜单"
	});

	// 添加中心
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
}

/**
 * 渲染西部
 * 
 * @returns
 */
function applyWest() {

	// 添加手风琴Div
	$("#west").html("<div id='accordion'></div>");

	// 创建手风琴
	$("#accordion").accordion({
		border : false,
		height : "100%"
	});

	// 联系我们
	var contactUs = [];
	contactUs.push("<ul>");
	contactUs.push("<li>地址：郑州市高新区莲花街100号</li>");
	contactUs.push("<li>电话：0371-63367958</li>");
	contactUs.push("<li>手机：18538092658</li>");
	contactUs.push("<li>传真：0371-63367958</li>");
	contactUs.push("<li>邮件：qixia12288@163.com</li>");
	contactUs.push("<li>网站：好帮手农业监测服务平台</li>");
	contactUs.push("</ul>");

	// 菜单
	var menu = [ {
		iconCls : "icon-sys",
		title : "系统管理",
		selected : true,
		children : [ {
			url : "",
			text : "用户管理"
		} ]
	}, {
		iconCls : "icon-sys",
		title : "实时数据监测",
		selected : false,
		children : [ {
			url : "",
			text : "0号蔬菜大棚"
		}, {
			url : "",
			text : "1号蔬菜大棚"
		}, {
			url : "",
			text : "2号蔬菜大棚"
		}, {
			url : "",
			text : "3号蔬菜大棚"
		} ]
	}, {
		iconCls : "icon-sys",
		title : "专家服务",
		selected : false,
		children : [ {
			url : "",
			text : "专家论坛"
		}, {
			url : "",
			text : "专家资料"
		} ]
	}, {
		iconCls : "icon-sys",
		title : "新闻通知",
		selected : false,
		children : [ {
			url : "",
			text : "新闻"
		}, {
			url : "",
			text : "动态"
		}, {
			url : "",
			text : "通知"
		} ]
	}, {
		iconCls : "icon-sys",
		title : "产品广告",
		selected : false,
		children : [ {
			url : "",
			text : "产品介绍"
		}, {
			url : "",
			text : "图片介绍"
		}, {
			url : "",
			text : "广告"
		} ]
	}, {
		iconCls : "icon-sys",
		title : "联系我们",
		selected : false,
		content : contactUs.join("")
	} ];

	// 遍历菜单
	for (var i = 0, length = menu.length; i < length; i++) {

		// 菜单配置
		var config = menu[i];

		// 内容
		var content = [];
		// 存在内容
		config.content && content.push(config.content);
		// 存在子菜单
		if (config.children) {

			content.push("<ul>");
			// 子菜单
			var children = config.children;
			// 遍历子菜单
			for (var j = 0, jLength = children.length; j < jLength; j++) {

				content.push("<li><div><a href='");
				content.push(children[j].url);
				content.push("'><span class='icon'></span>");
				content.push(children[j].text);
				content.push("</a></div></li>");
			}
			content.push("</ul>");
		}

		// 添加一级菜单
		$("#accordion").accordion("add", {
			iconCls : config.iconCls,
			title : config.title,
			selected : config.selected,
			content : content.join(""),
		});
	}

	// 手风琴节点事件
	$("#accordion").find("a").click(function() {
		var tabTitle = $(this).text();
		var url = $(this).attr("href");
		addTab(tabTitle, url);
		$('.easyui-accordion li div').removeClass("selected");
		$(this).parent().addClass("selected");
	}).hover(function() {
		$(this).parent().addClass("hover");
	}, function() {
		$(this).parent().removeClass("hover");
	});
}

/**
 * 渲染南部
 * 
 * @returns
 */
function applySouth() {

	// 设置背景色
	$("#south").css("background-color", "#D2E0F2");

	// 设置内容
	$("#south").html("<div class='footer'>Built By haobangshou V2016 好帮手 技术支持</div>");
}
