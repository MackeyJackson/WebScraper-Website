localStorage.removeItem('loggedInUser');
sessionStorage.removeItem('loggedInUser');
function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.querySelector('input[name="remember"]').checked;
    
    fetch('/public/data/users.json')
        .then(response => response.json())
        .then(data => {
            // get the use being entered
            const user = data.users.find(u => 
                u.email === email && u.password === password
            );
            
            if (user) {
                // sucess
                if (rememberMe) {
                    localStorage.setItem('loggedInUser', JSON.stringify({
                        email: user.email,
                        name: user.name,
                        plan: user.plan
                    }));
                } else {
                    // clears when browser closes
                    sessionStorage.setItem('loggedInUser', JSON.stringify({
                        email: user.email,
                        name: user.name,
                        plan: user.plan
                    }));
                }
                
                showMessage('Login successful!', 'success');
                
                setTimeout(() => {
                    window.location.href = '/';
                }, 1500);
                
            } else {
                showMessage('Invalid email or password', 'error');
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
        window.location.href = '/';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    checkLoginStatus();
    
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
});



