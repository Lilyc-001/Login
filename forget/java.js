let mail = document.querySelector('.type')
let password = document.querySelector('#pwd')
let pass = document.querySelector('.pass')
let sub = document.querySelector('.sub')
let error = document.getElementById('error')


sub.addEventListener('click',Submit)
function Submit(e){

    e.preventDefault()

    let storedData = JSON.parse(localStorage.getItem('sign_up'))
    storedData={
        ...storedData,
            // hellow 
        pass: password.value
    }
    localStorage.setItem('sign_up', JSON.stringify(storedData))
    if(password.value === pass.value && storedData.email === mail.value){
        window.location.href = '../login'
    }
    else{
        error.style.display = 'block'

    }
    // const dataObj = {
    //     // name: nameTag.value,
    //     email: email.value,
    //     password: password.value,
    //     // phone_number: num.value,
    //     phone_number: num.value,
    //     // personal_data: info.value
    // } 

    // let newn ={
    //     ...dataObj,
    //     storedData = {
    //         ...storedData,
    //     }
    // }
    // console.log('main', dataObj);

    
    

//     const info ={
//         cont: contact.value,
//         password: password.value
//     }

    // localStorage.setItem('newPassword',JSON.stringify(info))
    // window.location.href = '/login.html'
}