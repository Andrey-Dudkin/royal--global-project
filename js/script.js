// * popup
const popup = document.querySelector(".popup");
const openPopup = document.querySelectorAll(".open_popup");
const closePopup = document.querySelector(".icon_close_popup");
const forma = document.querySelector(".form");
const popupInputs = document.querySelectorAll(".popup_input");
const formaContainer = document.querySelector(".forma");
const message = document.querySelector(".message");

openPopup.forEach((btn) => {
    btn.onclick = function(){
       popup.classList.add("open"); 
    };
});
closePopup.onclick = function(){
    popup.classList.remove("open");
    popupInputs.forEach((input) => {
        input.style.borderColor = "#ffffff";  
    })
};

const buttonIndex = document.querySelector(".button_index");
buttonIndex.onclick = function(){
    popup.classList.remove("open"); 
    message.classList.remove("message_show");   
    formaContainer.classList.remove("close_forma");
    popupInputs.forEach((input) => {
        input.style.borderColor = "#ffffff";  
    })
}

forma.addEventListener("submit",function(e){
    e.preventDefault();
    validation()
})

function validation(){
    popupInputs.forEach((input) => {
        if(input.value === ""){
            input.style.borderColor = "#ff0000";
        }else{
            formaContainer.classList.add("close_forma");
            message.classList.add("message_show");
            input.value = "";
        }
    });

};

// * burger menu
const burgerButton = document.querySelector(".burger_menu");
burgerButton.onclick = function(){
    document.querySelector(".burger_menu_icon").classList.toggle("burger_menu_icon_active");
    document.querySelector(".menu_mobile").classList.toggle("menu_mobile_open");
};
