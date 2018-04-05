$( document ).ready(function() {
    console.log("hi");


    $("#showTop").on('click', function(){
        console.log("click top test")
        showTop();
    });
    $("#showSide").on('click', function(){
        console.log("click side test")
        showSide();
    });
    $("#showFront").on('click', function(){
        console.log("click fro nt test")
        showFront();
    });
});