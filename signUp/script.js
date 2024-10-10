 
 const passError = document.getElementById('passError');
 const pass = document.getElementById('pass');
 const submitError = document.getElementById('error');
 const password = document.getElementById('password');
 const sub = document.getElementById('submit');
 const nam = document.getElementById('nam');
 const mail = document.getElementById('mail');
 const number = document.getElementById('num');
//  form.addEventListener('submit',(e)=>
function validateName(){
    const name = document.getElementById('nam').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    else{
        nameError.innerHTML = '<i class="fa-solid fa-check"></i>'
        return true;
    }
}

function validateEmail(){
    const email = document.getElementById('email').value;

    if(email.length == 0){
        emailError.innerHTML = "Email is required"
        return false;
    }
    else{
        emailError.innerHTML = '<i class="fa-solid fa-check"></i>'
        return true
    }
 }
function validatePass(){
    const password = document.getElementById('password').value;

    if(password.length <= 5){
        passError.innerHTML = "password must be more than 6"
        return false;
    }
    else{
        passError.innerHTML = '<i class="fa-solid fa-check"></i>'
        return true;

    }
}
function validateform(){
    if(!validateName() || !validateEmail() || !validatePass()){
        submitError.innerHTML ='please fix error to submit';
        return false;

    }
}
submit.addEventListener('click',Submit)

    function Submit(e){
        e.preventDefault()
    
        const dataObj = {
            name: nameTag.value,
            email: email.value,
            password: password.value,
            // phone_number: num.value,
            phone_number: num.value,
            // personal_data: info.value
        } 
        
    localStorage.setItem('sign_up',JSON.stringify(dataObj))
        // console.log(dataObj);
    }
    if(password.value === pass.value){
        passError.innerHTML = 'no'
    }
    else {
        // passError.style.display = 'block'
        passError.innerHTML = 'password or contact is incorrect'
        
    }
    // validateform()
    // return true;
// })
// {
//  if(nam.value === '' || nam.value == null){
//     // e.preventDefault();
//     name_error.innerHTML= 'Name is required';
//  }

//  if(password.value.length <= 5){
//     e.preventDefault();
//     pass_error.innerHTML = "Password must be more than 6 characters"
//  }
 
// })


const input = document.querySelector('input')
const Btn = document.querySelector('button')
const cont = document.querySelector('.dataBox')


let nameTag = document.getElementById('nam')
let email =document.getElementById('email')
// let password =document.getElementById('pass')
let num =document.getElementById('num')
// let info =document.getElementById('')
let Sub =document.getElementById('save')

// Sub.addEventListener('click',Submit)
