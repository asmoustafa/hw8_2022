
//  from https://blog.hubspot.com/website/bootstrap-navbar and https://codepen.io/albizan/pen/mMWdWZ

$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});