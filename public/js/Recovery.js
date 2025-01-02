localStorage.removeItem('loggedInUser');
sessionStorage.removeItem('loggedInUser');
function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const question = document.getElementById('password').value;
    fetch('/public/data/users.json')
        .then(response => response.json())
        .then(data => {
            const user = data.users.find(u => 
                u.email === email && u.FavouriteFood === question
            );
            
            if (user) {
                showMessage('Your Password is ' + user.password, 'success');
                
                setTimeout(() => {
                    window.location.href = '/public/html/login.html';
                }, 3000);
                
            } else {
                showMessage('Invalid email or answer', 'error');
            }
        })
        .catch(error => {
            console.error('Login error:', error);
            showMessage('An error occurred during login', 'error');
        });
}
function showMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }
    const loginBox = document.querySelector('.login-box');
    loginBox.insertBefore(messageDiv, loginBox.firstChild);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

function checkLoginStatus() {
    const user = JSON.parse(localStorage.getItem('loggedInUser')) || 
                JSON.parse(sessionStorage.getItem('loggedInUser'));
                
    if (user) {
        window.location.href = '/public/html/login.html';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    checkLoginStatus();
    
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
});

