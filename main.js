let accounts = [
    { name: 'mali', balance: '200' , password: '1234'},
    { name: 'giselle', balance: 600 , password: '1abril2023'},
    { name: 'salvador', balance: 550 , password: '202020'}
];




var homeView = document.getElementById("home");
var loginView = document.getElementById("login");
var welcome = document.getElementById('welcome');
let user = document.getElementById ('user');
let password = document.getElementById ('password');
let balance = document.getElementById ('balance-total');

//functions

// This function authorizes login
function login(){
    let user = document.getElementById('user').value;
    let  password = document.getElementById('password').value;
    let validatedSession = false;
    let i ;
    
    for ( i = 0; i < accounts.length; i++) {
        if(user == accounts[i].name && password == accounts[i].password){
            validatedSession = true;
            break; 
        }
    }

    if(validatedSession) { //es lo mismo que: if(validatedSession === true) {}
        homeView.style.display = "block";
        loginView.style.display = "none";
        welcome.innerHTML ='Welcome ' + accounts[i].name + ' !';
        balance.innerHTML = '$' + (accounts[i].balance) + ' USD';
    } else {
        Swal.fire('Contraseña incorrecta');


    }
}

/* This function logs you out */
function logOut (){
    homeView.style.display = 'none';
    loginView.style.display = 'flex'
    user.value = '';
    password.value = '';

}

document.getElementById('btn-deposit').addEventListener('click', function(){

    let depositTotal = document.getElementById('deposit-total');
    let depositInput = document.getElementById('deposit-input')
    let depositAmount = Number(depositInput.value);
    let currentBalance = Number(balance.innerText);
    let updateBalance = currentBalance + depositAmount
    let totalRule = 990
    console.log(typeof updateBalance)
    if (depositAmount === 0){
        Swal.fire({
            icon: 'warning',
            title:'Advise',
            text: "You don't have any balance to withdraw",
        })
    } else if (updateBalance > totalRule){
        Swal.fire({
            icon: 'warning',
            title:'Advise',
            text: 'You exceeded the allowed limit',
        })
    } else {
        
        balance.innerText = '$' + updateBalance + ' USD';
        depositTotal.innerText = '$' + depositAmount + ' USD';
        depositInput.value = '';
    }


})




