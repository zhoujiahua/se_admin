$(function () {
	// Set iframe size
	var height = $('.main').height() - 30;
	$(".main-body").attr("style", "width:100%;height:" + height + "px");
	// $("#btmFrm").layout("resize", {
	// 	width: "100%",
	// 	height: height + "px"
	// });

	$(window).resize(function () {
		$(".main-body").attr("style", "width:100%;height:" + height + "px");
		// $("#btmFrm").layout("resize", {
		// 	width: "100%",
		// 	height: height + "px"
		// });
	});
	console.log('Welcome to use So Easy Resource System');
});