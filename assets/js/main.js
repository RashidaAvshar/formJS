const username = document.querySelector("#name");
const mail = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmP = document.querySelector("#again");
const errorMessage = document.querySelector("#error-message");


// burasi okdi bunu ede bilmirik demek ki value kimi adlandirib her yere teyin elemek?gerek her defe yeniden goturesen deyisen kimi olmasa da

// document.querySelector("#register").addEventListener("click", ()=>{


//     if(passwordV !== confirmV){
//         errorMessage.style.color = "red";
//         errorMessage.innerHTML = "sifre yanlisdir"

//     }else{
//         errorMessage.style.color = "green";
//         errorMessage.innerHTML = "sifre dogrudur"

//         let data = {
//             username,
//             mail,
//             password,
//             confirm,
//         }
//         console.log(data)
//         document.querySelector("#name").value ="";
//         document.querySelector("#email").value="";
//         document.querySelector("#password").value="";
//         document.querySelector("#again").value="";
//     }
// })



document.querySelector("#register").addEventListener("click", ()=>{
   

    if(password.value < 8){
        errorMessage.style.color = "red"
        errorMessage.innerHTML = "minimum 8 simvol olmalidir"

    }else if(password.value !== confirmP.value){
        errorMessage.style.color = "red";
        errorMessage.innerHTML = "sifre yanlisdir"   

    }else{
        errorMessage.style.color = "green";
        errorMessage.innerHTML = "sifre dogrudur"

// yuxaridaki elementleri tanimasi ucun
let userV = username.value
let mailV =  mail.value
let  passwordV = password.value
let confirmV = confirmP.value
// burda value lari deyisenlerde saxlamisan deye ehtiyac olmuyub, birbasa yaza bilmiyecekdin
       
        // informasiyani obyekt kimi saxlamasi uucun
        // bax burda userV usernamein value beraber elemisen sora da userVkey yazmisan key nie bunu basqa hansi formada yazirdiq. men obyektin ozunde key teyin elemisem yeniden, basqa cur key teyin etmeden de olardi, bu valueleri basqa yerlerde de istifade ede bilesen deye lap basa da ata bilersen
        const data = {
           userV,//error verdi bu ona gore error erdiki biz globallasdirdiq yuxarida ?yox, ona gore verdi ki sen evvelden constnan elan edende elementin valuesini etmisdin, valueleri sildik deye mecbur .value yazmaliyig, o da errordu, ya evveline key ozun artirmalisan eger .value yazacagsansa, ya da yeniden deyisen elan edib .valueni saxliyacagsan onda, indiki halda passwordV, sonra obyektde key teyin etmeden birbasa yazacagsan
        //    tesekkursene de tesekkur, ozve yaxsi bax, he;lelik sen de
           mailV,
        passwordV,
        confirmV
        }
        console.log(data)
        // yeniden xanalari bos vermesi ucun burda sen yazandi, eslinde burdhee bilirem
      userV ="";
       mailV="";
       passwordV="";
        confirmV="";
    }

    // bax burda iki defe teyin elemisen. biz yuxarda elementin ozunu goturm
})

    password.addEventListener("keyup", ()=>{
    // console.log(password.value);
    if (password.value.length >= 8){
        password.style.border = "10px solid green"
    }else{
        password.style.border = "10px solid red"
    }
});

mail.addEventListener("focusout", ()=>{
    // const mail = document.querySelector("#email");
    console.log(mail.value)
    if(mail.value.indexOf("@") ==-1){
        errorMessage.style.color = "red";
        errorMessage.innerHTML = "@ isaresi yoxdu"
    }else{
    mail.style.border = "10px solid green"
    }
})

register.addEventListener("keyup", (e)=>{
    if(e.witch.length==13){

    }
})













// eslinde obyekt const obj = {
//     first: first,
//     second: second, ve s
// key: value,
// } orda yazilan tek formalar da key avtomatik yaranir, ancag valueni daxil edirsen, calis ele bu standart formani yadda saxla ki sonra cashdirmasin seni, maragcun indi sen yuxaridakilari sil, oz bildiyin qaydaynan elan ele. ya da gel edek, netice ferqine baxaq

// {userV: 'aaaa', mailV: '@ddd', passwordV: '11111111', confirmV: '11111111'} burda elan elediyin deyisenin adini key kimi goturub avtomatik savalan 10 deq gozle otaqdan cixiram gelim adam kimi baxim
// get isinde ol, burdayam xeber edecem

// {userVkey: 'aaa', mailVkey: '@ddd', passwordVkey: '11111111', confirmVkey: '11111111'}burda amma yeni key goturdu, yeni oz yazdigimizi error verir, cunki key tapammir, sen yazan halda deyisenin adini key olarag avtomatik gotururdu, men yazan halda deyisenin adini yox, oz yazdigim adi key gotursun deyirem
// basqa ne sualin varsa ver var bele
// qisasi, elementin ozun constnan gotur, value lazim olan yerde .value yaz en yaxsi usul budu tesekkur isletdim seni))narahat olma dur get evine))gedirem0 bir meseleni de yadinda saxla ki, indiki halda obyekte sen istiyen kimi tekce value yazsan mecbur meselen password.value, name.value yazmalisan, onda da error verdi, mecbur evvelde ozun key teyin etmelisen meslen key: password.value, key2: name.value, ve s bu halda istifade edende key2 gotururem ki?b name istifade olunacaqsa