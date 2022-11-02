export function accordion(){
    document.querySelectorAll('.accrodion').forEach((el)=>{
        el.addEventListener('click',()=>{
          let cont = el.nextElementSibling;
          console.log(cont);
          if(cont.style.display){
            document.querySelectorAll('.content').forEach((el)=>el.style.display = null)
          } else {
            document.querySelectorAll('.content').forEach((el)=>el.style.display = null)
            cont.style.display = "block";
          }
        })
        })
}