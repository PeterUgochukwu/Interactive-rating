const openModal = document.querySelector(".thankContainer");
const starNumber = document.querySelectorAll(".numberButton");
var numberSelected = document.getElementById("numberSelected");
var numberRating = 0;


/*starNumber.forEach((numberButton, index)=>{
    numberButton.addEventListener("click", ()=>{
        starNumber.forEach((numberButton)=>{
        numberButton.style.backgroundColor = "hsl(212, 19%, 26%)";
        numberButton.style.color="hsl(217, 12%, 63%)";
        });
        numberButton.style.backgroundColor = "hsl(217, 12%, 63%)";
        numberButton.style.color="white";
    });
}); */
starNumber.forEach(function(e){
    e.addEventListener("click", clickNumber);
});
function clickNumber(){
    starNumber.forEach(function(e){
        e.id = false;
    });
    numberRating = this.innerHTML;
    this.id = "active";
}
function submit(){
    openModal.style.display="block";
    numberSelected.innerHTML = numberRating;
}
