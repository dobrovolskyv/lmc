const offerServicesCard = document.querySelector('.offer-services__bot-hidden');
const offerServicesBtn = document.querySelector('.offer-services__btn');

offerServicesBtn.addEventListener('click', (e)=>{
  if (offerServicesCard.style.display === "none") {
    offerServicesCard.style.display = "grid";
  } else {
    offerServicesCard.style.display = "none";
  }
})
