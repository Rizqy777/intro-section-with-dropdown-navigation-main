const plegableContainerFeatures = document.querySelector(".plegable-list-features");
const plegableContainerCompany = document.querySelector(".plegable-list-company");
const navFeatures = document.querySelector(".subcontainer_features-1");
const navCompany = document.querySelector(".subcontainer_company-1");
const menuBtn = document.querySelector(".icon-menu");
const overlay = document.querySelector(".overlay");
const expandedMenu = document.querySelector(".expanded-menu");
const closeBtn = document.querySelector(".close");
const arrow = document.querySelector(".arrow");
const arrowCompany = document.querySelector(".arrow-2")
const containersHead = document.querySelector(".containers_head");


navFeatures.addEventListener("click", () => {
     if(plegableContainerFeatures.style.display === "block"){
        plegableContainerFeatures.style.display = "none"
        arrow.classList.remove("active")
      arrow.classList.add("desactive")
     } else {
        plegableContainerFeatures.style.display = "block"
        arrow.classList.remove("desactive")
      arrow.classList.add("active")
     }
  });

  navCompany.addEventListener("click", () => {
    if(plegableContainerCompany.style.display === "block"){
       plegableContainerCompany.style.display = "none"
       arrowCompany.classList.remove("active")
     arrowCompany.classList.add("desactive")
    } else {
       plegableContainerCompany.style.display = "block"
       arrowCompany.classList.add("active")
       arrowCompany.classList.remove("desactive")
    }
 });
 function moveContainer() {
   if (window.innerWidth < 700) {
     expandedMenu.appendChild(containersHead);
   } else {
     if (expandedMenu.contains(containersHead)) {
       document.querySelector("header").appendChild(containersHead);
     }
   }
 }
 
 window.addEventListener('resize', moveContainer);
 window.addEventListener('DOMContentLoaded', moveContainer);


 menuBtn.addEventListener("click", () => {
   if (expandedMenu.style.display === ""){
      expandedMenu.style.display = "block";
      overlay.style.display = "block";
      containersHead.style.display = "flex"  
      expandedMenu.classList.add("active_menu");
    expandedMenu.classList.remove("desactive_menu");


   } else {
    expandedMenu.classList.add("active_menu");
      expandedMenu.style.display = "block";
      overlay.style.display = "block";
     
   }
})

 closeBtn.addEventListener("click", () => {
    expandedMenu.classList.remove("active_menu");
    expandedMenu.classList.add("desactive_menu");
     overlay.style.display = "none";
 });

 window.addEventListener("resize", () =>{
   if (window.innerWidth >= 700){
      expandedMenu.style.display = "none"
      overlay.style.display = "none"
   } 
 })
 
 