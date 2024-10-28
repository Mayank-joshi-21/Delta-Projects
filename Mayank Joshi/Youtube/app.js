let subscribeBtn = document.querySelector("#subscribe");

subscribeBtn.addEventListener("click" ,()=>{
    subscribeBtn.innerHTML =  "Subscribed";
    subscribeBtn.style.backgroundColor= "red"
    subscribeBtn.style.color = "white"
});
