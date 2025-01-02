const user = JSON.parse(localStorage.getItem('loggedInUser')) || 
                JSON.parse(sessionStorage.getItem('loggedInUser'));
if (!user){
    console.log('no user')
    document.getElementById('blur').style.visibility = 'visible';
    document.getElementById('loginerror').style.visibility = 'visible';
    document.getElementById('loginb').style.visibility = 'visible';
}