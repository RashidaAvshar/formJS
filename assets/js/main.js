// document.querySelector("#register").addEventListener("click", ()=>{
//     let username = document.querySelector("#name").value;
//     let mail = document.querySelector("#email").value;
//     let password = document.querySelector("#password").value;
//     let confirm = document.querySelector("#again").value;
//     let errorMessage = document.querySelector("#error-message");

//     if(password !== confirm){
//     errorMessage.style.color = "red";
//     errorMessage.innerHTML = "Şifrə düz deyil"
// }else{
//     errorMessage.style.color = "green";
//     errorMessage.innerHTML = "Şifrə uyğundur"
//     let data = {
//         username,
//         mail,
//         password,
//         confirm,
//     }
//     console.log(data);
//     username = "";
//     mail = "";
//     password = "";
//     confirm =  "";
// }
// })

// !========================minimum 8 simvol

document.querySelector("#register").addEventListener("click", ()=>{
    let username = document.querySelector("#name").value;
    let mail = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let confirm = document.querySelector("#again").value;
    let errorMessage = document.querySelector("#error-message");

    if(password.length<8){
        errorMessage.style.color = "red";
            errorMessage.innerHTML = "Minimum 8 simvol"
    } else   
    if(password !== confirm){
            errorMessage.style.color = "red";
            errorMessage.innerHTML = "Şifrə düz deyil"
        }else{
            errorMessage.style.color = "green";
            errorMessage.innerHTML = "Şifrə uyğundur"
    let data = {
        username,
        mail,
        password,
        confirm,
    }
    console.log(data);
    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#password").value = "";
    document.querySelector("#again").value = "";
}
})

password.addEventListener("keyup", ()=>{
    let password =document.querySelector ("#password");
    if (password.value.length >= 8){
        password.style.border = "10px solid green"
    }else{
        password.style.border = "10px solid red"
    }
})