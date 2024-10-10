let num = document.getElementById('type');
let pwd = document.getElementById('pwd');
let login = document.querySelector('.sub');
let error = document.querySelector('.error')

login.addEventListener('click', ()=>{
    let storeData = JSON.parse(localStorage.getItem('sign_up'))
    // console.log(storeData)

    if (num.value === storeData.phone_number && pwd.value === storeData.password){
        // console.log(storeData)
        // window.open('index.html')
        window.location.href = "/index.html"
        window.remove
    }
    else{

        error.style.display = "block"

    }

    // function Pass(){
    //     // const password = document.getElementById('pwd').value;
    
    //     if(password.length <= 5){
    //         passError.innerHTML = "password must be more than 6"
    //         return false;
    //     }
    //     else{
    //         passError.innerHTML = '<i class="fa-solid fa-check"></i>'
    //         return true;
    
    //     }
    // }
    
})


