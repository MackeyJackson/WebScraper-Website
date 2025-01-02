let cards = ["card1", "card2", "card3", "card4"];
let plans = {"free": "card1", "personal": "card2", "business": "card3", "enterprise": "card4"}
let results = {"card1": "free", "card2": "personal", "card3": "business", "card4": "enterprise"}

const user = JSON.parse(localStorage.getItem('loggedInUser')) || 
                JSON.parse(sessionStorage.getItem('loggedInUser'));
if (!user){
    console.log('no user')
    document.getElementById('blur').style.visibility = 'visible';
    document.getElementById('loginerror').style.visibility = 'visible';
    document.getElementById('loginb').style.visibility = 'visible';
}
let type = 0
const local = JSON.parse(localStorage.getItem('loggedInUser'))
const session = JSON.parse(sessionStorage.getItem('loggedInUser'))
let selected = user.plan
if(local){
    type = 1
}
if(session){
    type = 2
}
function highlight(cardId) {
    cards.forEach(i => {
        document.getElementById(i).style.outlineColor = 'white';
    });
    document.getElementById(cardId).style.outlineColor = 'var(--Accent)';
    selected = results[cardId]
}

cards.forEach(function(cardId) {
    document.getElementById(cardId).addEventListener('click', function() {
        highlight(cardId);
    });
});

function checkLoginStatus() {
    if (user.plan == null){
        user.plan = 'free'
    }
    if (user) {
        console.log('logged in')
        console.log(user.plan)
        document.getElementById(plans[user.plan]).style.outlineColor = 'var(--Accent)';
    }
}

function showMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    const loginBox = document.querySelector('.messages');
    loginBox.insertBefore(messageDiv, loginBox.firstChild);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

checkLoginStatus()
function setplan(){
    if (type == 1){
        console.log('local user', results[selected])
        user.plan = results[plans[selected]];
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        showMessage('Plan Changed to ' + results[plans[selected]], 'success')
    }
    if (type == 2){
        console.log('session user', results[selected])
        user.plan = results[plans[selected]];
        sessionStorage.setItem('loggedInUser', JSON.stringify(user));
        showMessage('Plan Changed to ' + results[plans[selected]], 'success')
    }
    else{
        console.log("please log in")
        showMessage('Login to change plan', 'error')
    }
}
document.getElementById('righttButton').addEventListener('click', setplan);

