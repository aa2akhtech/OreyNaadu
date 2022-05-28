let text = document.lastModified;
document.getElementById("time1").innerHTML = text;
document.getElementById("time2").innerHTML = text;
document.getElementById("time3").innerHTML = text;
document.getElementById("time4").innerHTML = text;
document.getElementById("time5").innerHTML = text;
document.getElementById("time6").innerHTML = text;
document.getElementById("time7").innerHTML = text;

const btnHam = document.querySelector('.ham-btn');
const btnTimes = document.querySelector('.times-btn');
const navBar = document.getElementById('nav-bar');

btnHam.addEventListener('click', function(){
    if(btnHam.className !== ""){
        btnHam.style.display = "none";
        btnTimes.style.display = "block";
        navBar.classList.add("show-nav");
    }
})

btnTimes.addEventListener('click', function(){
    if(btnHam.className !== ""){
        this.style.display = "none";
        btnHam.style.display = "block";
        navBar.classList.remove("show-nav");
    }
})