function submitForm() {
    const passwordInput = document.querySelector('.password-input');
    const password = passwordInput.value;

    if (password === 'P0DS') {
        window.location.href = 'main1.html';
    } 
    else if (password === 'CS3SA') {
        window.location.href = 'main2.html';
    } 
    else if(password === 'LTC3') {
        window.location.href = 'main3.html';
    } 
    else if(password === 'rising05') {
        window.location.href = 'main.html';
    } 
    else {
        alert('dude Incorrect password. Please try again or go back.');
    }
}