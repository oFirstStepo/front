/**
 * 创建标签
 * 
 * @returns
 */
function createTabs() {

	$("#tabs").tabs({
		height : "100%",
		border : false
	});

	$("#tabs").tabs("add", {
		title : "欢迎使用",
		content : "<div style='margin-top:50px;text-align:center;font-size:20px;'>Welcome to haobangshou!</div>"
	});
}

/**
 * 添加标签
 * 
 * @param title
 * @param url
 * @returns
 */
function addTab(title, url) {

	if ($("#tabs").tabs("getTab", title)) {

		$("#tabs").tabs("select", title);
	} else {

		var content = [];
		content.push("<div style='height:100%;overflow-y: hidden;'>");
		content.push("<iframe src='");
		content.push(url);
		content.push("' width='100%' height='100%'></iframe>");
		content.push("</div>");

		$("#tabs").tabs("add", {
			title : title,
			content : content.join(""),
			closable : true
		});
	}
}
