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
let balance = document.getElementById ('balaceTotal');

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
        balance.innerHTML =  (accounts[i].balance);
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

/* dEPOSIT FUNCTION */
document.getElementById('btn-deposit').addEventListener('click', function(){
    let balance = document.getElementById ('balaceTotal');
    let depositTotal = document.getElementById('depositTotal');
    let depositInput = document.getElementById('deposit-input')
    let depositAmount = Number.parseFloat(depositInput.value);
    let currentBalance = balance.innerText;
    let updateBalance = Number.parseFloat(currentBalance + depositAmount)
    let totalRule = 990
    
    if (depositAmount === 0){
        Swal.fire({
            icon: 'warning',
            title:'Advise',
            text: "You don't have any balance to deposit",
        })
    } else if( updateBalance > totalRule ){
        Swal.fire({
            icon: 'warning',
            title:'Advise',
            text: 'You exceeded the allowed limit',
        })
    } else {
    
        balance.innerText = updateBalance;
        depositTotal.innerText = depositAmount;
        depositInput.value = '';
    }


})

/* WITHDRAW FUNCTION */
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const value = withdrawInput.value
    const withdraw = document.getElementById('withdrawTotal')

    if(Number.parseFloat(value) === 0) {
        Swal.fire({
            icon: 'warning',
            title:'Advise',
            text: "You don't have any balance to withdraw",
        })
    } else if(Number.parseFloat(value) > balance.innerText) {
        Swal.fire({
        icon: 'warning',
        title:'Advise',
        text: "You don't have that much balance to withdraw",
    })
    } else {
        const balanceValue = balance.innerText - Number.parseFloat(value);
        const withdrawValue = Number(withdraw.innerText) + Number(value);
        withdraw.innerText = withdrawValue;
        balance.innerText = balanceValue;
        withdrawInput.value = '';
    }
    
})




