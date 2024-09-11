let menu = document.querySelector(".fixed-menu");
menu.addEventListener('click',function(event){
  let body = document.querySelector("body");
  let mobileMenu = document.querySelector('.mobile-menu');
  if (!body.classList.contains("off-scroll") && !mobileMenu.classList.contains('hide')){
    body.classList.add("off-scroll")
  }
  else{
    body.classList.remove("off-scroll")
  }
});

menu.addEventListener('click', function(event){
   let clickTarget = event.target;
   let activeBtn = document.querySelector('.active');
   
   if (clickTarget.classList.contains('lig')){
       clickTarget.classList.add('active');
       activeBtn.classList.remove('active');
   }
});
