let movies = JSON.parse(array);

$(document).ready(function () {
    for (let i = 0; i < movies.length; i++) {
        $(".container").append(`<img src=${movies[i].img}><div class="movies"><h2>${movies[i].title}</h2>${movies[i].description}<br>
        <button class="${movies[i].counter}">Like <i class="fa fa-thumbs-up"></i></button><span class="circle ${movies[i].circle}">0</span></div>`);

        let likes = `${movies[i].likes}`;
            $(".counter" + [i]).on("click", function() {
                likes++;
                $(".circletext" +  [i]).text(likes);

            })
        
            // function compare(a,b) {
            //     if (a.likes < b.likes) return 1;
            //     else if (a.likes > b.likes) return -1;
            //     else return 0;
            // };

        function sortLikes() {
            movies.sort(function(a, b){return b.likes - a.likes});
        }

    $("#sort").on("click", function(sortLikes) {
    console.table(sortLikes);
    // what is missing?
    for (let i=0; i < movies.length; i++) {
        $(".container").append(`<img src=${movies[i].img}><div class="movies"><h2>${movies[i].title}</h2>${movies[i].description}<br>
        <button class="${movies[i].counter}">Like <i class="fa fa-thumbs-up"></i></button><span class="circle ${movies[i].circle}">0</span></div>`);

    }})

}})

