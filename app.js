const mobile  =  document.querySelector('.menu-toggle');
const mobileLink = document.querySelector('.sidebar');





mobile.addEventListener("click",function(){
      mobile.classList.toggle("is-active");
      mobileLink.classList.toggle("active");
})


mobileLink.addEventListener("click", function(){
      const menuBars = document.querySelector(".is-active");
      if(window.innerWidth<=768 && menuBars) {
            mobile.classList.toggle("is-active");
            mobileLink.classList.toggle("active");
      }
})
      
var step = 100;
var stepFilter = 60;
var scrolling = true;

$(".back").bind("click" , function(e){
      e.preventDefault();
      $(".highlight-wrapper").animate({
            scrollLeft: "-=" +step + "px"
      });
});

$(".next").bind("click", function(e){
      e.preventDefault();
      $(".highlight-wrapper").animate({
            scrollLeft: "+=" + step + "px"
      })
})

$(".back-menus").bind("click",function(e){
      e.preventDefault();
      $(".filter-wrapper").animate({
            scrollLeft: "-=" + stepFilter+ "px"
      })
});

$(".next-menus").bind("click",function(e){
      e.preventDefault();
      $(".filter-wrapper").animate({
            scrollLeft: "+=" + stepFilter+ "px"
      })
});

$(".back-combos").bind("click",function(e){
      e.preventDefault();
      $(".combos-wrapper").animate({
            scrollLeft: "-=" + stepFilter+ "px"
      })
});

$(".next-combos").bind("click",function(e){
      e.preventDefault();
      $(".combos-wrapper").animate({
            scrollLeft: "+=" + stepFilter+ "px"
      })
});

$(".back-ava").bind("click",function(e){
      e.preventDefault();
      $(".detail-wrapper").animate({
            scrollLeft: "-=" + stepFilter+ "px"
      })
});

$(".next-ava").bind("click",function(e){
      e.preventDefault();
      $(".detail-wrapper").animate({
            scrollLeft: "+=" + stepFilter+ "px"
      })
});


var index = 0;
var slides = document.querySelectorAll(".slides");
var dot = document.querySelectorAll(".dot");

function changeSlide(){

  if(index<0){
    index = slides.length-1;
  }
  
  if(index>slides.length-1){
    index = 0;
  }
  
  for(let i=0;i<slides.length;i++){
    slides[i].style.display = "none";
    dot[i].classList.remove("active");
  }
  
  slides[index].style.display= "block";
  dot[index].classList.add("active");
  
  index++;
  
  setTimeout(changeSlide,2000);
  
}

changeSlide();