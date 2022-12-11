let BEST = document.querySelector(".BEST_EDUCATION");
let TOP = document.querySelector(".TOP_MANAGEMENT");
let QUALITY = document.querySelector(".QUALITY_MEETING");
let clas1 = document.querySelector(".clas1");
let clas2 = document.querySelector(".clas2");
let clas3 = document.querySelector(".clas3");
let tect1_h1 = document.querySelector(".tect1_h1");
let tect2_h1 = document.querySelector(".tect2_h1");
let tect3_h1 = document.querySelector(".tect3_h1");
let card = document.querySelectorAll(".card");

for (let i = 0; i < card.length; i++) {
    // console.log(card[i]);

    card[i].addEventListener("mouseenter", () => {
        card[i].style.background = "orange";
        card[i].style.padding = "40px 60px";
        card[i].style.transition = "all .5s linear";
})

card[i].addEventListener("mouseleave", () => {
   
    card[i].style.padding = "5px 20px";
    card[i].style.transition = "all .5s linear";
    card[i].style.background = "rgba(22, 34, 57, 0.95)";
})
    
}


BEST.addEventListener("click", () => {
    clas1.style.display="block";
    clas2.style.display="none";
    clas3.style.display="none";
    // tect1_h1.style.display="block";
    // tect2_h1.style.display="none";
    // tect3_h1.style.display="none";

})

TOP.addEventListener("click", () => {
    clas1.style.display="none";
    clas2.style.display="block";
    clas3.style.display="none";
    // tect1_h1.style.display="none";
    // tect2_h1.style.display="block";
    // tect3_h1.style.display="block";

})
QUALITY.addEventListener("click", () => {
    clas1.style.display="none";
    clas2.style.display="none";
    clas3.style.display="block";
    // tect1_h1.style.display="block";
    // tect2_h1.style.display="none";
    // tect3_h1.style.display="block";

})




let inputValid=document.querySelectorAll(".form-control")
let btn=document.getElementById("myBtn");
let footerBtnSpan =document.querySelectorAll(".footerBtnSpan");
let bigItem=document.querySelectorAll(".bigItem");
let footerDivs=document.querySelectorAll(".footerDivs")




 
  window.onload=function(){
 
      window.setInterval(function(){
 
       let a = new Date()  
 
       let date=a.getDate();
       let newdays= 31-`${date}`;
       let hours =a.getHours();
       let newHours= 23-`${hours}`;
       let minutes=a.getMinutes();
       let newMinutes=59-`${minutes}`;
       let seconds=a.getSeconds();
       let newSeconds=59-`${seconds}`;
       datesDays.innerHTML=newdays;
       datesHours.innerHTML=newHours;
       datesMinutes.innerHTML=newMinutes;
       datesSeconds.innerHTML=newSeconds
     })
  }
 
  for (let i = 0; i < footerBtnSpan.length; i++) {
     footerBtnSpan[i].addEventListener("click",()=>{
         for (let i = 0; i < footerBtnSpan.length; i++) {
             footerBtnSpan[i].classList.remove("activeBtn"); 
         }
         footerBtnSpan[i].classList.add("activeBtn")   
  })
 }
  
for (let i = 0; i < bigItem.length; i++) {
    bigItem[i].addEventListener("click",()=>{
        for (let i = 0; i < footerBtnSpan.length; i++){
        bigItem[i].classList.remove("active")
        }
        bigItem[i].classList.add("activeNone")
    })
    
    
}

