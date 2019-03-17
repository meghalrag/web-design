$(document).ready(

function(){

$("#img1").animate({left:'100%'},1000).fadeOut(1000).fadeIn(1000).slideUp(2000).slideDown(8000)
.fadeOut(1000).fadeIn(1000).slideUp(2000).slideDown(8000)
.fadeOut(1000).fadeIn(1000).slideUp(2000).slideDown(8000)
.fadeOut(1000).fadeIn(1000).slideUp(2000).slideDown(8000)
.fadeOut(1000).fadeIn(1000).slideUp(2000).slideDown(8000)
.fadeOut(1000).fadeIn(1000).slideUp(2000).slideDown(8000);
$("#areg").click(function()
{
$("#div1").slideDown(1000);
$("#div2").slideUp(1000);
$("#div3").slideUp(1000);
$("#div4").slideUp(1000);
$("#div5").hide();
});

$("#alogin").click(function()
{
$("#div1").slideUp(1000);
$("#div3").slideUp(1000);
$("#div4").slideUp(1000);
$("#div2").slideDown(1000);
$("#div5").hide();
});

$("#aboutus").click(function()
{
$("#div1").slideUp(1000);
$("#div2").slideUp(1000);
$("#div4").slideUp(1000);
$("#div3").slideDown(1000);
$("#div5").hide();
});

$("#gallery").click(function()
{
$("#div1").slideUp(1000);
$("#div2").slideUp(1000);
$("#div3").slideUp(1000);
$("#div4").slideDown(1000);
$("#div5").hide();

});
$(".home").click(function()
{
$("#div1").slideUp(1000);
$("#div2").slideUp(1000);
$("#div3").slideUp(1000);
$("#div4").slideUp(1000);
$("#div5").show();

});


});