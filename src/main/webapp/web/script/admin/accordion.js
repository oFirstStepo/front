/**
 * 创建手风琴
 * 
 * @returns
 */
function createAccordion() {

	// 创建手风琴
	$("#accordion").accordion({
		border : false,
		height : "100%"
	});

	// 联系我们
	var contactUs = [];
	contactUs.push("<ul>");
	contactUs.push("	<li>地址：郑州市高新区莲花街100号</li>");
	contactUs.push("	<li>电话：0371-63367958</li>");
	contactUs.push("	<li>手机：18538092658</li>");
	contactUs.push("	<li>传真：0371-63367958</li>");
	contactUs.push("	<li>邮件：qixia12288@163.com</li>");
	contactUs.push("	<li>网站：好帮手农业监测服务平台</li>");
	contactUs.push("</ul>");

	// 菜单
	var menu = [ {
		iconCls : "icon-sys",
		title : "系统管理",
		selected : true,
		children : [ {
			text : "用户管理",
			url : ""
		} ]
	}, {
		iconCls : "icon-sys",
		title : "实时数据监测",
		selected : false,
		children : [ {
			text : "0号蔬菜大棚",
			url : "http://localhost:8080/web/template/admin/admin.html"
		}, {
			text : "1号蔬菜大棚",
			url : ""
		}, {
			text : "2号蔬菜大棚",
			url : ""
		}, {
			text : "3号蔬菜大棚",
			url : ""
		}, {
			text : "地图",
			url : "/web/template/map/map.html"
		}, {
			text : "视频",
			url : "/web/template/video/camera/camera.html"
		}, {
			text : "chars",
			url : "/web/template/chars/index.html"
		} ]
	}, {
		iconCls : "icon-sys",
		title : "专家服务",
		selected : false,
		children : [ {
			text : "专家论坛",
			url : ""
		}, {
			text : "专家资料",
			url : ""
		} ]
	}, {
		iconCls : "icon-sys",
		title : "新闻通知",
		selected : false,
		children : [ {
			text : "新闻",
			url : ""
		}, {
			text : "动态",
			url : ""
		}, {
			text : "通知",
			url : ""
		} ]
	}, {
		iconCls : "icon-sys",
		title : "产品广告",
		selected : false,
		children : [ {
			text : "产品介绍",
			url : ""
		}, {
			text : "图片介绍",
			url : ""
		}, {
			text : "广告",
			url : ""
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

				content.push("<li>");
				content.push("<div>");
				content.push("<a url='" + children[j].url + "'>");
				content.push("<span class='icon'></span>");
				content.push(children[j].text);
				content.push("</a>");
				content.push("</div>")
				content.push("</li>");
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
		var title = $(this).text();
		var url = $(this).attr("url");
		addTab(title, url);
		$("#accordion li div").removeClass("selected");
		$(this).parent().addClass("selected");
	}).hover(function() {
		$(this).parent().addClass("hover");
	}, function() {
		$(this).parent().removeClass("hover");
	});
}