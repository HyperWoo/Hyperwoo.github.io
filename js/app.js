function download_file() {
    document.getElementById("my_download").click()
  }


var btn_first = document.getElementById("first");
var btn_second = document.getElementById("second");
var fill_js = document.getElementById("fill_btn_j")

var first_div = document.getElementById("first_div");
var second_div = document.getElementById("second_div");

btn_first.addEventListener('click', () =>{
  first_div.style.display='flex';
  second_div.style.display='none';
  btn_first.style.color='#BB9981';
  btn_second.style.color='#534340';
  fill_js.style.fill='#BB9981';
  btn_first.style.scale='1.2';
  btn_second.style.scale='1'
  
  
})

btn_second.addEventListener('click', () =>{
  second_div.style.display='flex';
  first_div.style.display='none';
  btn_second.style.color='#BB9981';
  btn_first.style.color='#534340';
  fill_js.style.fill='#534340';
  btn_first.style.scale='1';
  btn_second.style.scale='1.2'
  
})