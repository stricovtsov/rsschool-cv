//меню бургер
const iconMenu=document.querySelector('.menu_icon');
const menuBody=document.querySelector('.menu_body')
if(iconMenu){
iconMenu.addEventListener("click",function(e) {
   document.body.classList.toggle('_lock')
   iconMenu.classList.toggle('_active');
   menuBody.classList.toggle('_active')
});
}
const menuLinks = document.querySelectorAll('.menu_link[data-goto]');
if(menuLinks.length>0){
   menuLinks.forEach(menuLink =>{menuLink.addEventListener("click",onMenuLinkClick);
});
function onMenuLinkClick(e){
   const menuLink =e.currentTarget;
   console.log(menuLink)
   if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
      const gotoBlock=document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset  - document.querySelector('header').offsetHeight-20 ;
      if (iconMenu.classList.contains('_active')){
         document.body.classList.remove('_lock');
         iconMenu.classList.remove('_active');
         menuBody.classList.remove('_active');
      }
      window.scrollTo({
       top: gotoBlockValue,
       behavior:"smooth"
          });
 e.preventDefault();
         }
      };
   }
