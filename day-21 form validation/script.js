var nameError= document.getElementById("name-error");
var phoneError= document.getElementById("phone-error");
var emailError= document.getElementById("email-error");
var msgError= document.getElementById("msg-error");
var submitError= document.getElementById("submit-error");
function vaildateName(){
    var name=document.getElementById('content-name').value;
    if(name.length==0){
        nameError.innerHTML='Name is required';
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML='Write full name';
        return false;

    }
    nameError.innerHTML='<i class="fa-solid fa-check"></i>';
    return true;
}
function vaildatePhone(){
    var phone =document.getElementById('content-phone').value;
    if(phone.length==0){
        phoneError.innerHTML='Phone no is required';
        return false;
    }
    if(phone.length!==10){
        phoneError.innerHTML='Phone no should be 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML='only digits';
        return false;
    }
    phoneError.innerHTML='<i class="fa-solid fa-check"></i>';
    return true;
}
function vaildateEmail(){
    var email =document.getElementById('content-email').value;

    if(email.length==0){
        emailError.innerHTML='Email is required';
        return false;
    }
    if(!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        emailError.innerHTML='Email Invalid';
        return false;
    }
    emailError.innerHTML='<i class="fa-solid fa-check"></i>';
    return true;
}
function vaildateMsg(){
    var msg =document.getElementById('content-msg').value;
    var required=30;
    var left=required-msg.length;

    if(left>0){
        msgError.innerHTML=left+'more characters required';
        return false;
    }
    msgError.innerHTML='<i class="fa-solid fa-check"></i>';
    return true;

}
function vaildateForm(){
    if(!vaildateName()||!vaildatePhone()||!vaildateEmail()|| !vaildateMsg()){
        submitError.style.display='block';
        submitError.innerHTML='please fix error to submit';
        setTimeout(function(){submitError.style.display='none';},3000);
        return false;
    }
}