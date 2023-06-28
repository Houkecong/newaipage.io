
var content1="将全程智能筹办亚运陆续落到了实处，包括打造一站式数字观赛服务平台——“智能亚运一站通”、推出亚运史上首个数字火炬手、上线亚运Pass、智能公交等应用，以数字化手段提升筹办工作效率和服务保障效能，充分展现“数字中国”建设成果。";
var content2="";
setTimeout(function word_change1(){
    var word=document.getElementById("content");
    var pic=document.getElementById("pic");
    word.style.display="none";
    pic.style.display="block";
},5000);
setTimeout(function word_change2(){
    var word=document.getElementById("content");
    word.innerText=content1;
},10000);