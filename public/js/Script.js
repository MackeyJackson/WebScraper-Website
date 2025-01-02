// ---Intro---//
const userLanguage = navigator.language || navigator.userLanguage;
let lang = userLanguage.substring(0, 2);
console.log(lang)
//document.getElementById("Language").textContent = lang
function changeSize() {
    var maxSize = 150;
    var scroll = (window.scrollY);
    var size = Math.min((scroll) / 2, maxSize + 250);
    var seperation = Math.max(0, (Math.min((scroll) / 2 - 400)));
    console.log(scroll)

    //make full at 3000, make come in at 2000
    //the main oage
    transparency(scroll)
    if (scroll >= 2500 && scroll <= 3500) {
        console.log("come in", document.getElementById('enterContainer').style.scale, document.getElementById('enterContainer').style.height)
        document.getElementById('enterContainer').style.visibility = `visible`;
        document.getElementById('enterContainer').style.scale = 2 - ((scroll - 2500) / 1000);
        document.getElementById('enterContainer').style.height = ((scroll - 2500) / 10) + 'vh';
    }
    //setting its max
    if (scroll >= 3500){
        console.log("main web fixed", document.getElementById('enterContainer').style.scale, document.getElementById('enterContainer').style.height)
        document.getElementById('enterContainer').style.scale = 1;
        document.getElementById('enterContainer').style.height = 100 + 'vh';

    }
    if (scroll <= 2000) {
        document.getElementById('enterContainer').style.visibility = `hidden`;
    }
    if (scroll >= 800){
        animation(scroll);
    }
    else {
        document.getElementById('explosion').style.visibility = 'hidden';
    }
    if (scroll /2 >= maxSize + 250 + 50) {
        document.getElementById('expandLeft').style.transform = `translateX(-${seperation}px)`;
        document.getElementById('expand').style.transform = `translateX(${seperation}px)`;
    }
    else {
        document.getElementById('expandLeft').style.transform = `translateX(-${seperation}px)`;
        document.getElementById('expand').style.transform = `translateX(${seperation}px)`;
        ['expand', 'expandLeft'].forEach(id => {
            document.getElementById(id).style.width = size/4  + '%';
            if (window.innerWidth <= 768) {
                document.getElementById(id).style.height = size /4 * (10/70) + '%'; //(10/70) is aspect ratio for phones- change if change in css
            }
            else{
                document.getElementById(id).style.height = size /4 * (15/40) + '%'; //(10/35) is current aspect ratio - change if change in css
            }
        })
    }
}
function animation(scroll) {
    if (scroll <= 970){
        document.getElementById("explosion").style.opacity = "1";
        document.getElementById('explosion').style.visibility = 'visible'
        document.getElementById('explosion').style.width = '20%'
        //document.getElementById("explosion").style.scale = 2.5
        document.getElementById('explosion').setAttribute('src', 'ExplosionEff' + Math.floor((scroll - 800) / 5.121212) + '.png');
    }
    else{
        document.getElementById('explosion').setAttribute('src', 'ExplosionEff33.png');
        document.getElementById("explosion").style.opacity = Math.max(0, Math.min( 1, (1 - ((scroll - 970) / 100))));
        //document.getElementById("explosion").style.scale = (((scroll + 2.5) - 970) / 50);
        //document.getElementById('explosion').style.visibility = 'hidden'
    }
}
function transparency(scroll){
    document.getElementById('sign').style.opacity = (100 - (scroll / 2)) + '%';
}
  window.addEventListener('scroll', function(){
    requestAnimationFrame(changeSize);
})
//gogole translate--//
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
    }, 'google_translate_element');
}

function loadGoogleTranslate() {
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(script);
}
