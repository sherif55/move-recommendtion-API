var films=[];
var nameValue=document.getElementById("name");
var emailValue=document.getElementById("email");
var ageValue=document.getElementById("age");
var phoneValue=document.getElementById("phone");
var passwordValue=document.getElementById("password");
var repasswordValue=document.getElementById("repassword");
var btn=document.getElementById("btn")
var navOptions=document.getElementsByClassName("nav-options");
var nowPlaying="https://api.themoviedb.org/3/movie/now_playing?api_key=b25208a1b964675a3a9228d44cee7ab8&language=en-US&page=1";
var pouplar="https://api.themoviedb.org/3/movie/popular?api_key=b25208a1b964675a3a9228d44cee7ab8&language=en-US&page=1";
var trinding="https://api.themoviedb.org/3/trending/all/day?api_key=b25208a1b964675a3a9228d44cee7ab8";
var topReated="https://api.themoviedb.org/3/movie/top_rated?api_key=b25208a1b964675a3a9228d44cee7ab8&language=en-US&page=1";
var upcoming="https://api.themoviedb.org/3/movie/upcoming?api_key=b25208a1b964675a3a9228d44cee7ab8&language=en-US&page=1";
var url="https://api.themoviedb.org/3/movie/now_playing?api_key=b25208a1b964675a3a9228d44cee7ab8&language=en-US&page=1";
var option="";


for(var i=0 ; i<navOptions.length;i++){
    navOptions[i].addEventListener("click", function(e) {
   option=e.target.innerHTML;
   if(option=="Now Playing")
   {
       url=nowPlaying;
       getfilms()
   }
   if(option=="Poupler")
   {
       url=pouplar;
       getfilms()
   }
   if(option=="Top Reated")
   {
       url=topReated;
       getfilms()
   }
   if(option=="Trending")
   {
       url=trinding;
       getfilms()
   }
   if(option=="up coming")
   {
       url=upcoming;
       getfilms()
   }
    
})};
function getfilms(){
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("GET",url);
    httpRequest.send();
    httpRequest.addEventListener("readystatechange",function(){
     
        if (httpRequest.readyState==4 && httpRequest.status==200) {
            films=JSON.parse(httpRequest.response).results;
        }
        displayfilms();
    })
   
}


function serchbyword(text){
    var httpRequest = new XMLHttpRequest();
    var serchUrl=`https://api.themoviedb.org/3/search/movie?query=${text}&api_key=b25208a1b964675a3a9228d44cee7ab8&language=en-US&include_adult=false`
    httpRequest.open("GET",serchUrl);
    httpRequest.send();
    httpRequest.addEventListener("readystatechange",function(){
     
        if (httpRequest.readyState==4 && httpRequest.status==200) {
            films=JSON.parse(httpRequest.response).results;
        }
        displayfilms();
    })
}

 function displayfilms(){
    
    var cols=``
    for(var i=0 ; i<films.length;i++)
    {
        cols+=
        `
         <div class="col-md-4 my-3">
         <div class="info">
         <img class="w-100 img-div" src=https://image.tmdb.org/t/p/w500${films[i].poster_path}>
         <div class="caption w-100">
         <div class="content">
         <h2>${films[i].title}</h2>
         <p>${films[i].overview}</p>
         <p>rate:${films[i].vote_average}</p>
         <p>${films[i].release_date}</p>
         </div>
         </div>
         </div>
         </div>
        `
    }
    document.getElementById("filmsRow").innerHTML=cols;
 }
  
function search(text){
    var cols=``
    for(var i=0 ; i<films.length;i++)
    {

        if(films[i].title.toLowerCase().includes(text.toLowerCase())){
        cols+=
        `
         <div class="col-md-4 my-3">
         <div class="info">
         <img class="w-100 img-div" src=https://image.tmdb.org/t/p/w500${films[i].poster_path}>
         <div class="caption w-100">
         <div class="content">
         <h2>${films[i].title}</h2>
         <p>${films[i].overview}</p>
         <p>rate:${films[i].vote_average}</p>
         <p>${films[i].release_date}</p>
         </div>
         </div>
         </div>
         </div>
        `
    }
    document.getElementById("filmsRow").innerHTML=cols;
}
 }

function nameValdition(){

  
    var nameRejex=/^[a-z]{3,10}$/;
    if(!nameRejex.test(nameValue.value)){
        $('#namealert').show();
        btn.disabled="true";
    }
    else{
        $('#namealert').hide();
        btn.removeAttribute("disabled");
    }
}

function ageValdition(){

  
    var ageRejex=/^([2-5][0-9]|18|19|60)$/;
    if(!ageRejex.test(ageValue.value)){
        $('#agealert').show();
        btn.disabled="true";
    }
    else{
        $('#agealert').hide();
        btn.removeAttribute("disabled");
    }
}

function phoneValdition(){

  
    var phoneRejex=/^01[0125][0-9]{8}$/;
    if(!phoneRejex.test(phoneValue.value)){
        $('#phonealert').show();
        btn.disabled="true";
    }
    else{
        $('#phonealert').hide();
        btn.removeAttribute("disabled");
    }
}

function passwordValdition(){

  
    var passwordRejex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(!passwordRejex.test(passwordValue.value)){
        $('#passwordalert').show();
        btn.disabled="true";
    }
    else{
        $('#passwordalert').hide();
        btn.removeAttribute("disabled");
    }
}

function repasswordValdition(){

    if(repasswordValue.value==passwordValue.value){
        $('#repasswordalert').hide();
        btn.removeAttribute("disabled");
    }
    else{
        $('#repasswordalert').show();
        btn.disabled="true";
    }
}

function emailValdition(){

    var emailRejex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!emailRejex.test(emailValue.value)){
        $('#emailalert').show();
        btn.disabled="true";
    }
    else{
        $('#emailalert').hide();
        btn.removeAttribute("disabled");
    }
}
nameValue.onkeyup=function(){
    nameValdition();
}
ageValue.onkeyup=function(){
    ageValdition();
}
phoneValue.onkeyup=function(){
    phoneValdition();
}
passwordValue.onkeyup=function(){
    passwordValdition();
}
repasswordValue.onkeyup=function(){
    repasswordValdition();
}
emailValue.onkeyup=function(){
    emailValdition();
}

 $(".menuicon").click(function(){
    let navwidth = $(".navlinks").outerWidth();
    if($(".nav").css("left")=="0px"){
        $(".nav").animate({"left":-navwidth},500)
        $(".menuicon ").toggleClass("fa fa-align-justify fa fa-align-justify fa-times");
        $(".nav a").animate({
            opacity: "0",
            paddingTop: "500px"
        },500)

    }
    else{
        $(".nav").animate({"left":0},500),
        $(".nav .option0").animate({
            opacity: "1",
            paddingTop: "25px"
        }, 600),
        $(".nav .option1").animate({
            opacity: "1",
            paddingTop: "25px"
        }, 700),
        $(".nav .option2").animate({
            opacity: "1",
            paddingTop: "25px"
        }, 800),
        $(".nav .option3").animate({
            opacity: "1",
            paddingTop: "25px"
        }, 900),
        $(".nav .option4").animate({
            opacity: "1",
            paddingTop: "25px"
        }, 1000),
        $(".nav .option5").animate({
            opacity: "1",
            paddingTop: "25px"
        }, 1100),
        $(".menuicon ").toggleClass("fa fa-align-justify fa fa-align-justify fa-times");
    }
 })





 
 $("#filmsRow").hover(function(){
    if($(".info .content").css("top")=="550px"){
     $(".info .content").animate({"top":0},1000)
    }
    else{
        $(".info .content").animate({"top":550},1000)
    }
 })

 getfilms();
