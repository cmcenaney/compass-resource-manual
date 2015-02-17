$('#myTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});


$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});


$(".sidebar-nav li").click(function(){
	width = $(window).width();
	if (width <= 768){
		$("#wrapper").toggleClass("toggled");
	}
});




