/**
 * Created by johannesmeyer on 5/11/16.
 */

$(".toggle-button").hover(
    function() {
        $(this).addClass("highlighted-button");
}, function () {
    $(this).removeClass("highlighted-button");
});

$(".toggle-button").click(function () {
    $(this).toggleClass("active");
    $(this).removeClass("highlighted-button");
    var panelId = $(this).attr("id").replace("-button","") + "Panel";
    $("#" + panelId).toggleClass("hidden");
    var activePanels = $(".active").length
    $(".panel").width(($(window).width() / activePanels) - 10);

});

$(".panel").height($(window).height() - $("header").height() - 55 );
$(".panel").width(($(window).width() / 2) - 10);


$("#htmlPanel").on('change keyup paste', function () {
    $("iframe").contents().find("html").html($("#htmlPanel").val());

});