export function accordionAboutDoctor(){
    document.querySelectorAll('.about-doctor__question').forEach((el)=>{
        el.addEventListener('click',()=>{
          let cont = el.nextElementSibling;
          console.log(cont);
          if(cont.style.maxHeight){
            document.querySelectorAll('.about-doctor__answer').forEach((el)=>el.style.maxHeight = null)
          } else {
            document.querySelectorAll('.about-doctor__answer').forEach((el)=>el.style.maxHeight = null)
            cont.style.maxHeight = cont.scrollHeight + "px";
          }
        })
        })
}