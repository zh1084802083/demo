
$(document).ready(function () {
    $("#list1").on("click",function () {
        $("#list2").removeClass("active");
        $("#list3").removeClass("active");
        $("#list1").addClass("active");
    })
    $("#list2").on("click",function () {
        $("#list1").removeClass("active");
        $("#list3").removeClass("active");
        $("#list2").addClass("active");
    })
    $("#list3").on("click",function () {
        $("#list1").removeClass("active");
        $("#list2").removeClass("active");
        $("#list3").addClass("active");
    })
})