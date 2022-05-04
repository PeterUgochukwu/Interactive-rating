const openModal = document.querySelector(".thankContainer");
const starNumber = document.querySelectorAll(".numberButton");
const starValue = document.querySelector(".starValue");


starNumber.forEach((numberButton, index)=>{
    numberButton.addEventListener("click", ()=>{
        starNumber.forEach((numberButton)=>{
        numberButton.style.backgroundColor = "hsl(212, 19%, 26%)";
        numberButton.style.color="hsl(217, 12%, 63%)";
        });
        numberButton.style.backgroundColor = "hsl(217, 12%, 63%)";
        numberButton.style.color="white";
    });
});

function submit(){
    openModal.style.display="block";
}