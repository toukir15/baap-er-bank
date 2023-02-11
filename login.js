// 1st step 
document.getElementById('login__btn').addEventListener('click', function () {
    // 2nd step 
    const userEmail = document.getElementById('user__email');
    const email = userEmail.value;

    // 3rd step  
    const userPassword = document.getElementById('user__password');
    const password = userPassword.value;

    // 4th step 
    if (email === 'toukir@gmail.com' && password === 'toukir') {
        console.log('Valid user');
    }
    else {
        console.log('Invalid user')
    }
})