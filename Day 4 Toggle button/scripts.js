const toggleBtn=document.querySelector(".toggle-btn"),
 lockIcon=document.querySelector(".icons i");

 toggleBtn.addEventListener("click", ()=>{
    toggleBtn.classList.toggle("active");
    if(toggleBtn.classList.contains("active")) {
       return lockIcon.classList.replace("bxs-lock-open", "bxs-lock");
    }
    lockIcon.classList.replace("bxs-lock", "bxs-lock-open");

 });