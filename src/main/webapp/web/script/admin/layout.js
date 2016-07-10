$(function() {
	createLayout();
});

function createLayout() {

	$("body").layout("add", {
		id : "north",
		region : "north",
		split : true,
		height : 50
	});

	$("body").layout("add", {
		id : "west",
		region : "west",
		split : true,
		width : 100
	});

	$("body").layout("add", {
		id : "center",
		region : "center",
		split : true
	});

	$("body").layout("add", {
		id : "south",
		region : "south",
		split : true,
		height : 50
	});
}