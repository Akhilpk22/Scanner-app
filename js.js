const wrape = document.querySelector(".wrape"),
qrinput = wrape.querySelector(".form input"),
generateBtn = wrape.querySelector(".form button"),
qrimg = wrape.querySelector(".Qr-code img");

 generateBtn.addEventListener("click",()=>{

    let qrvalue =qrinput.value;
    if(!qrvalue)return;//if the input is empty return form here is there is qr is displayed in the screen must be wreite the text
    // console.log(qrvalue); 
    // lets upload the qr code with the input
    generateBtn.innerHTML="genrating qr code..."
    //  getting  a qr code of user entered value using the qrserver
    // api and passing  the api returned img src to qrimg 
    qrimg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrvalue}`; 

        qrimg.addEventListener("load",()=>{ //once qr code img loaded

            // once imge loaded then add active class in wrapper 
            wrape.classList.add("active");
            generateBtn.innerHTML="Genarator QR code"

        });

 });
//  lets  remove the active class form wrapper  if the input field is empty
// the  text is not in the display the qr code is automatic remove the code 

qrinput.addEventListener("keyup",()=>{
    if(!qrinput.value){
        wrape.classList.remove("active");

    }
})