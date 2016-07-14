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
 * @param content
 * @returns
 */
function addTab(title, content) {

	if ($("#tabs").tabs("getTab", title)) {

		$("#tabs").tabs("select", title);
	} else {

		$("#tabs").tabs("add", {
			title : title,
			content : content,
			closable : true
		});
	}
}
