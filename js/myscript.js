let movies = JSON.parse(array);

$(document).ready(function() {
    for (let i=0;i<movies.length;i++) {
    $(".container").append(`<img src=${movies[i].img}><div class="movies"><h2>${movies[i].title}</h2>${movies[i].description}<br>
        <button class="${movies[i].counter}">Like <i class="fa fa-thumbs-up"></i></button><span class="circle ${movies[i].circle}">0</span></div>`);

let likes1 = `${movies[i].likes}`;
    $(".counter1").on("click", function(){
    likes1++;
    $(".circletext1").text(likes1);
})

let likes2 = `${movies[i].likes}`;
$(".counter2").on("click", function(){
    likes2++;
    $(".circletext2").text(likes2);
})

let likes3 = `${movies[i].likes}`;
$(".counter3").on("click", function(){
    likes3++;
    $(".circletext3").text(likes3);
})

let likes4 = `${movies[i].likes}`;
$(".counter4").on("click", function(){
    likes4++;
    $(".circletext4").text(likes4);
})

let likes5 = `${movies[i].likes}`;
$(".counter5").on("click", function(){
    likes5++;
    $(".circletext5").text(likes5);
})

let likes6 = `${movies[i].likes}`;
$(".counter6").on("click", function(){
    likes6++;
    $(".circletext6").text(likes6);
})

let likes7 = `${movies[i].likes}`;
$(".counter7").on("click", function(){
    likes7++;
    $(".circletext7").text(likes7);
})

let likes8 = `${movies[i].likes}`;
$(".counter8").on("click", function(){
    likes8++;
    $(".circletext8").text(likes8);
})

}})