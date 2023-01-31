document.querySelector("#register").addEventListener("click", ()=>{
    let username = document.querySelector("#username").value;
    let mail = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let confirm = document.querySelector("#again").value;

    if(password !== confirm){
    alert("sifre duz deil")
}else{
    alert("sifre duzdur")
}
})