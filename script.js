$(".navbar-nav .nav-item .nav-link").on("click", function(){
    $(".navbar-nav").find(".active").removeClass("active");
    $(this).addClass("active");
 });

function switchImage() {
    $(".imageContent").css("content", "url(Images/anonPartTwo.png)");

    $(".sectionTwo ul li:nth-child(1) a").css("color", "#2274F8");
    $(".sectionTwo ul li:nth-child(2) a").css("color", "black");
    $(".sectionTwo ul li:nth-child(3) a").css("color", "black");
    $(".sectionTwo ul li:nth-child(4) a").css("color", "black");
    $(".sectionTwo ul li:nth-child(5) a").css("color", "black");

    $(".sectionTwo ul li:nth-child(1) a").css("font-weight", "400");
    $(".sectionTwo ul li:nth-child(2) a").css("font-weight", "200");
    $(".sectionTwo ul li:nth-child(3) a").css("font-weight", "200");
    $(".sectionTwo ul li:nth-child(4) a").css("font-weight", "200");
    $(".sectionTwo ul li:nth-child(5) a").css("font-weight", "200");

    document.getElementById('foo').innerHTML = 'We value your privacy above all, with the touch of a button, anonymity is yours!';
}

function switchImage1() {
    $(".imageContent").css("content", "url(Images/replyPartTwo.png)");

    $(".sectionTwo ul li:nth-child(1) a").css("color", "black");
    $(".sectionTwo ul li:nth-child(2) a").css("color", "#2274F8");
    $(".sectionTwo ul li:nth-child(3) a").css("color", "black");
    $(".sectionTwo ul li:nth-child(4) a").css("color", "black");
    $(".sectionTwo ul li:nth-child(5) a").css("color", "black");

    $(".sectionTwo ul li:nth-child(1) a").css("font-weight", "200");
    $(".sectionTwo ul li:nth-child(2) a").css("font-weight", "400");
    $(".sectionTwo ul li:nth-child(3) a").css("font-weight", "200");
    $(".sectionTwo ul li:nth-child(4) a").css("font-weight", "200");
    $(".sectionTwo ul li:nth-child(5) a").css("font-weight", "200");

    document.getElementById('foo').innerHTML = 'Very organized and compact reply system that makes replying more convenient than ever!';
}

function switchImage2() {
    $(".imageContent").css("content", "url(Images/searchPartTwo.png)");

    $(".sectionTwo ul li:nth-child(1) a").css("color", "black");
    $(".sectionTwo ul li:nth-child(2) a").css("color", "black");
    $(".sectionTwo ul li:nth-child(3) a").css("color", "#2274F8");
    $(".sectionTwo ul li:nth-child(4) a").css("color", "black");
    $(".sectionTwo ul li:nth-child(5) a").css("color", "black");

    $(".sectionTwo ul li:nth-child(1) a").css("font-weight", "200");
    $(".sectionTwo ul li:nth-child(2) a").css("font-weight", "200");
    $(".sectionTwo ul li:nth-child(3) a").css("font-weight", "400");
    $(".sectionTwo ul li:nth-child(4) a").css("font-weight", "200");
    $(".sectionTwo ul li:nth-child(5) a").css("font-weight", "200");

    document.getElementById('foo').innerHTML = 'With our search platform, connecting to your classmates is as easy as entering a few details about your class!';
}

function switchImage3() {
    $(".imageContent").css("content", "url(Images/fullPartTwo.png)");

    $(".sectionTwo ul li:nth-child(1) a").css("color", "black");
    $(".sectionTwo ul li:nth-child(2) a").css("color", "black");
    $(".sectionTwo ul li:nth-child(3) a").css("color", "black");
    $(".sectionTwo ul li:nth-child(4) a").css("color", "#2274F8");
    $(".sectionTwo ul li:nth-child(5) a").css("color", "black");

    $(".sectionTwo ul li:nth-child(1) a").css("font-weight", "200");
    $(".sectionTwo ul li:nth-child(2) a").css("font-weight", "200");
    $(".sectionTwo ul li:nth-child(3) a").css("font-weight", "200");
    $(".sectionTwo ul li:nth-child(4) a").css("font-weight", "400");
    $(".sectionTwo ul li:nth-child(5) a").css("font-weight", "200");

    document.getElementById('foo').innerHTML = 'Edit/delete messages, send attachements, and more. All of which is configured through a simple drop-down menu!';
}

function switchImage4() {
    $(".imageContent").css("content", "url(Images/sleekPartTwo.png)");

    $(".sectionTwo ul li:nth-child(1) a").css("color", "black");
    $(".sectionTwo ul li:nth-child(2) a").css("color", "black");
    $(".sectionTwo ul li:nth-child(3) a").css("color", "black");
    $(".sectionTwo ul li:nth-child(4) a").css("color", "black");
    $(".sectionTwo ul li:nth-child(5) a").css("color", "#2274F8");

    $(".sectionTwo ul li:nth-child(1) a").css("font-weight", "200");
    $(".sectionTwo ul li:nth-child(2) a").css("font-weight", "200");
    $(".sectionTwo ul li:nth-child(3) a").css("font-weight", "200");
    $(".sectionTwo ul li:nth-child(4) a").css("font-weight", "200");
    $(".sectionTwo ul li:nth-child(5) a").css("font-weight", "400");

    document.getElementById('foo').innerHTML = 'Easy to use user interface that will blow your mind away!';
}