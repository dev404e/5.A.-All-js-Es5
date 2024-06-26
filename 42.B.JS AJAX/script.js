// create a new request

function lodeData(){

const xhr=new XMLHttpRequest();


//রেসপন্স চলে আসার পরে কি করবো
// তা বলে দিতে হবে

xhr.onload =function(){

const container =document.getElementById('demo');

demo.innerHTML=xhr.responseText;

};

// pepare request- mathod: Get, post, put, delete,

xhr.open("GET", "./data.txt", true);

// ----Request send----

xhr.send();



}