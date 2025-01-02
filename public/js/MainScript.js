// fetch json data for translating//
console.log(document.querySelectorAll('.HowItWorks'));
let textWords = {
    text1: ["100,000 Websites Scraped", "4.9-Star Average Rating "],
    text2: ["1M+ Database Entries    ", "   Advanced AI Scraper  "],
    text3: ["50,000 Unique Users     ", "   Automatic Scraping   "]
};
const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ,.";
//set psudo defults
document.getElementById("section0").style.clipPath = 'inset(25vh 0 25vh 0)'
document.getElementById("divider").style.clipPath = 'inset(0 39.5vw 0 39.5vw)'
document.getElementById("section1").style.marginTop = "-70vh"
//loading screen
function loadingscreen(){
    document.getElementById("loadingpage").style.visibility = "hidden "
};

//
function expand(){
    console.log('working')
};
//


let funnybusiness = 0
let originalCount = 0
const elementsWithId = document.querySelectorAll('#HowItWorks')
const fistButton = elementsWithId[0]
const secondButton = elementsWithId[1]
document.getElementById("enterContainer").innerHTML = document.getElementById("mainContent").innerHTML
console.log(document.getElementById("mainContent").textContent, 'test')
const originalLang = document.getElementById("mainContent").innerHTML
// ---Intro---//
var userLanguage = navigator.language || navigator.userLanguage;
var lang = userLanguage.substring(0, 2);
let anim = false;
document.documentElement.userLanguage = lang;
console.log(document.documentElement.userLanguage)
document.getElementById("LangBtn").innerHTML = '<img id="flags" src="public/Images/flags/'+lang + '.png"/> ' + lang;
//-----TRANSLATIONS-----//
//console.log("hi", document.querySelectorAll('#HowItWorks'), fistButton, secondButton)
//elementsWithId.forEach(element => {
//    element.addEventListener('click', expand);
//});
requestAnimationFrame(changeSize);
function Translate(){
    console.log(lang)
    if (lang.startsWith('fr')){
        console.log("translating to french")
        //use manual translations
        document.getElementById("sign").src="public/Images/Scrollfr.png";
        document.getElementById("heading").textContent = "Grattage automatique";
        document.getElementById("section1P").textContent = "Avec une simple saisie, notre grattoir Web interprète automatiquement les pages Web non structurées en de vastes bases de données contenant des données précieuses, sans aucune maintenance requise.";
        document.getElementById("Slogan").innerHTML = 'Web Scrape AI est le moyen le <mark>plus rapide</mark> de commencer à tourner <br>des sites Web non structurés en <mark>données précieuses</mark></p>';
        document.getElementById("landingTitle").innerHTML = 'Web-Scraping <div id="split">Sans Code</div id="split"></h1>'
        document.getElementById("HowItWorks").textContent = 'Voyez comment ça marche'
        document.getElementById("rightH1").textContent = 'Base de Données Infinie'
        document.getElementById("right").textContent = "Évitez le scraping et obtenez instantanément les données dont vous avez besoin. Utilisez notre base de données gratuite de sites Web pré-grattés avec des millions d'entrées, mise à jour toutes les heures."
        document.getElementById("righttButton").textContent = "Vers notre Base Gratuite"
        document.getElementById("leftH1").textContent = 'Scraping illimité, gratuitement'
        document.getElementById("left").textContent = "Définissez une invite pour que notre IA puisse interpréter facilement, entrez une URL et obtenez toutes les données dans le format de votre choix    "
        document.getElementById("lefttButton").textContent = "Commencer à gratter"
        //base
        document.getElementById("QueriesTop").textContent = "Requêtes"
        document.getElementById("AboutTop").textContent = "À propos"
        document.getElementById("databaseTop").textContent = "Télécharger"
        document.getElementById("Account").textContent = "Compte";
        document.getElementById("Pricing").textContent = "Tarificat";
        document.getElementById("Settings").textContent = "Paramèt";
        document.getElementById("Contact").textContent = "Contact";
        document.getElementById("login").textContent = "comp";
        //
        textWords = {
            text1: ["100,000 Sites Web Gratté", "Note Moyenne: 4,9 Étoiles"],
            text2: ["  1M+ Entrées en Base   ", "    Scraper IA Avancé    "],
            text3: ["  50 000 Utilisateurs   ", "  Grattage Automatique   "]
        };
    }
        //keep at bottom as this updates the translartion
        document.getElementById("mainContent").innerHTML = document.getElementById("enterContainer").innerHTML
    if (lang.startsWith('en')){
        console.log("translating to english")
        //set to defult 
        
        document.getElementById("sign").src="public/Images/Scroll.png";
        document.getElementById("section1").style.marginTop = "20vh"
        document.getElementById("mainContent").innerHTML = originalLang
        document.getElementById("enterContainer").innerHTML = originalLang
        //base
        document.getElementById("QueriesTop").textContent = "Queries"
        document.getElementById("AboutTop").textContent = "About"
        document.getElementById("databaseTop").textContent = "Download"
        document.getElementById("Account").textContent = "Account"
        document.getElementById("Pricing").textContent = "Pricing"
        document.getElementById("Settings").textContent = "Settings"
        document.getElementById("Contact").textContent = "Contact"
        document.getElementById("login").textContent = "login"
        //footer
        document.getElementById("footertitle").textContent = "About this website"
        document.getElementById("par").textContent = "This webiste was built for Ai-Web Scraping Software while by following W3C guidelines and best practices."
        document.getElementById("copywtier").innerHTML = "&copy; 2024 Jackson Mackey. All rights reserved."
        document.getElementById("Portfolio").textContent = "My Portfolio"
        document.getElementById("totop").textContent = "Back to top"
        //
        //1 document.getElementById("mainContent").innerHTML = document.getElementById("enterContainer").innerHTML
        if (originalCount > 0){
            document.getElementById("section1").style.marginTop = "10vh"
            document.getElementById("section0").style.clipPath = 'inset(0 0 0 0)'
            document.getElementById("divider").style.clipPath = 'inset(0 0 0 0)'
            textWords = {
                text1: ["100,000 Websites Scraped", "4.9-Star Average Rating "],
                text2: ["1M+ Database Entries    ", "   Advanced AI Scraper  "],
                text3: ["50,000 Unique Users     ", "   Automatic Scraping   "]
            };
            requestAnimationFrame(changeSize);
            document.getElementById("loadingpage").style.visibility = "visible";
            setTimeout(loadingscreen, 1000);
        } 
        else{  
            originalCount += 1
        }
    }
    if (lang.startsWith('es')){
        console.log("translating to spanish")
        //use manual translations
        document.getElementById("sign").src="public/Images/Scrolles.png";
        document.getElementById("heading").textContent = "Raspado automático";
        document.getElementById("section1P").textContent = "Con una simple entrada, nuestro raspador web interpreta automáticamente las páginas web no estructuradas en vastas bases de datos que contienen datos valiosos, sin necesidad de mantenimiento.";
        document.getElementById("Slogan").innerHTML = 'Web Scrape AI es la forma <mark>más rápida</mark> de comenzar a convertir <br>sitios web no estructurados en <mark>datos valiosos</mark></p>';
        document.getElementById("landingTitle").innerHTML = 'Web-Scraping <div id="split">Sin Código</div id="split"></h1>';
        document.getElementById("HowItWorks").textContent = 'Mira cómo funciona';
        document.getElementById("rightH1").textContent = 'Base de Datos Infinita';
        document.getElementById("right").textContent = "Evita el raspado y obtén instantáneamente los datos que necesitas. Usa nuestra base de datos gratuita de sitios web pre-raspados con millones de entradas, actualizada cada hora.";
        document.getElementById("righttButton").textContent = "Ir a nuestra Base Gratuita";
        document.getElementById("leftH1").textContent = 'Raspado ilimitado, gratis';
        document.getElementById("left").textContent = "Define una solicitud para que nuestra IA pueda interpretarla fácilmente, ingresa una URL y obtén todos los datos en el formato que elijas.";
        document.getElementById("lefttButton").textContent = "Comenzar a raspar";
        textWords = {
            text1: [" 100,000 Webs Raspadas  ".trim(), "      4.9 Estrellas      ".trim()],
            text2: ["      1M+ Entradas      ".trim(), "       AI Avanzado       ".trim()],
            text3: ["    50,000 Usuarios     ".trim(), "     Rastreo Autom.      ".trim()],
        };        
        //base
        document.getElementById("QueriesTop").textContent = "Consultas";
        document.getElementById("AboutTop").textContent = "Acerca";
        document.getElementById("databaseTop").textContent = "Descargar";
        document.getElementById("Account").textContent = "Cuenta";
        document.getElementById("Pricing").textContent = "Precios";
        document.getElementById("Settings").textContent = "Ajustes";
        document.getElementById("Contact").textContent = "Contacto";
        document.getElementById("login").textContent = "Entrar";
        //
        document.getElementById("mainContent").innerHTML = document.getElementById("enterContainer").innerHTML
    }
    if (lang.startsWith('ch')){
        console.log("translating to chinese")
        //use manual translations
        document.getElementById("sign").src="public/Images/Scrollcn.png";
        document.getElementById("heading").textContent = "自动抓取";
        document.getElementById("section1P").textContent = "只需输入一个简单的指令，我们的网络抓取工具会自动将非结构化的网页转换成包含有价值数据的庞大数据库，无需任何维护。";
        document.getElementById("Slogan").innerHTML = 'Web Scrape AI 是将<br>非结构化网站转化为<mark>有价值数据</mark>的<mark>最快</mark>方式</p>';
        document.getElementById("landingTitle").innerHTML = '网页抓取 <div id="split">无代码</div id="split"></h1>';
        document.getElementById("HowItWorks").textContent = '看看它如何工作';
        document.getElementById("rightH1").textContent = '无限数据库';
        document.getElementById("right").textContent = "无需抓取，即刻获取所需数据。使用我们的免费预抓取网站数据库，包含数百万条目，每小时更新。";
        document.getElementById("righttButton").textContent = "访问我们的免费数据库";
        document.getElementById("leftH1").textContent = '免费无限抓取';
        document.getElementById("left").textContent = "定义一个提示，让我们的 AI 轻松解析，输入一个 URL，获取所需格式的所有数据。";
        document.getElementById("lefttButton").textContent = "开始抓取";
        textWords = {
            text1: ["已抓取 100,000 个网站", "4.9 星的平均评分"],
            text2: ["超过 1M 条数据库记录", "高级 AI 抓取工具"],
            text3: ["50,000 独立用户", "自动抓取功能"]
        }; 
        //base
        document.getElementById("QueriesTop").textContent = "查询";
        document.getElementById("AboutTop").textContent = "关于";
        document.getElementById("databaseTop").textContent = "下载";
        document.getElementById("Account").textContent = "账x   户";
        document.getElementById("Pricing").textContent = "价格";
        document.getElementById("Settings").textContent = "设置";
        document.getElementById("Contact").textContent = "联系";
        document.getElementById("login").textContent = "登录";
        document.getElementById("mainContent").innerHTML = document.getElementById("enterContainer").innerHTML 
        // //      
    }
}
Translate()
//-----TRANSLATIONS-----//

//
document.getElementById("fr").innerHTML = '<img src="public/Images/flags/fr.png"/>fr';
document.getElementById("es").innerHTML = '<img src="public/Images/flags/es.png"/>es';
document.getElementById("ch").innerHTML = '<img src="public/Images/flags/ch.png"/>ch';
//


document.getElementsByClassName('languages')[0].style.width = document.getElementById('LangBtn').offsetWidth + 'px';

// -- trying to make button work --
function changeSize() {
    var maxSize = 150;
    var scroll = (window.scrollY);
    var size = Math.min((scroll) / 2, maxSize + 250);
    var seperation = Math.max(0, (Math.min((scroll) / 2 - 400)));
    console.log(scroll)
    document.getElementById("sign").style.top = 70 - scroll/6.75 + '%';
    if (anim == true) {
        document.getElementById("section1").style.marginTop = '10vh';
        document.getElementById("section0").style.clipPath = 'inset(0 0 0 0)'
        document.getElementById("divider").style.clipPath = 'inset(0 0 0 0)'
    };  
    //make full at 3000, make come in at 2000
    //the main oage
    transparency(scroll)
    if (scroll >= 2500 && scroll <= 3500) {
        console.log("come in", document.getElementById('enterContainer').style.scale, document.getElementById('enterContainer').style.height)
        document.getElementById('enterContainer').style.visibility = `visible`;
        document.getElementById('enterContainer').style.scale = 2 - ((scroll - 2500) / 1000);
        document.getElementById('enterContainer').style.top = (100 - ((scroll - 2500) / 10)) + '%';
        document.getElementById('enterContainer').style.transform = 'translateY(' + (25 - ((scroll - 2500) / 40)) + '%)';
        document.getElementById('enterContainer').style.height = 200 + ((scroll - 2500) / 10) + 'vh';
        document.getElementById('enterContainer').style.position = 'fixed';
    }
    //setting its max 3500
    if (scroll >= 3500){
        console.log("main web fixed", document.getElementById('enterContainer').style.scale, document.getElementById('enterContainer').style.height)
        //funny business
        console.log("Funnybusiness:", funnybusiness);   
        document.getElementById("mainContent").innerHTML = document.getElementById("enterContainer").innerHTML;
        document.getElementById('enterContainer').style.scale = 1;

        document.getElementById('enterContainer').style.height = '300vh';
        document.getElementById('enterContainer').style.visibility = 'visible';
        //document.getElementById('mainContent').style.visibility = 'hidden';
        //document.getElementById('mainContent').style.top = '3500px';
        //document.getElementById('enterContainer').style.position = 'absolute';
        // Add these lines to ensure proper sizing and centering
        //document.getElementById('mainContent').style.width = '113%';
        //document.getElementById('mainContent').style.left = '14.40%';
        //document.getElementById('mainContent').style.transform = 'translateX(0%)';
        //animate here, main content
        document.getElementById('enterContainer').style.top = -(scroll - 3500) + 'px';

    }
    if (scroll < 3500){
        document.getElementById('mainContent').style.visibility = 'hidden';
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
        //makes sure if you refresh the page halfway throuvh its at cortect size
        ['expand', 'expandLeft'].forEach(id => {
            if (document.documentElement.clientWidth <= 768) {
                console.log("mobbille, 2")
                document.getElementById(id).style.height = (10/50) * 100 + '%';//recalculate //(10/70) is aspect ratio for phones- change if change in css
            }
            else{
                document.getElementById(id).style.height = (15/40)*100 + '%';
                document.getElementById(id).style.width = 100 + '%';
            }
        })
        //
        document.getElementById('expandLeft').style.transform = `translateX(-${seperation}px)`;
        document.getElementById('expand').style.transform = `translateX(${seperation}px)`;
    }
    else {
        console.log('11221')
        document.getElementById('expandLeft').style.transform = `translateX(-${seperation}px)`;
        document.getElementById('expand').style.transform = `translateX(${seperation}px)`;
        ['expand', 'expandLeft'].forEach(id => {
            document.getElementById(id).style.width = size/4  + '%';
            if (document.documentElement.clientWidth <= 768) {
                console.log("mobbille")
                document.getElementById(id).style.height = size /4 * (10/50) + '%';//recalculate //(10/70) is aspect ratio for phones- change if change in css
            }
            else{
                console.log('nonmovile')
                document.getElementById(id).style.height = size /4 * (15/40) + '%'; //(10/35) is current aspect ratio - change if change in css
            }
        })
    }
    if (scroll >= 3600 && anim == false){
        document.getElementById("section1").style.marginTop = '10vh'
        document.getElementById("section0").style.clipPath = 'inset(0 0 0 0)'
        document.getElementById("divider").style.clipPath = 'inset(0 0 0 0)'
        anim = true
    }
    if (scroll >= 3400 && anim == false && scroll <= 3600){
        console.log('anim')
        //clip-path: inset(25vh 0 25vh 0);
        //clip-path: inset(0 37vw 0 37vw);
        // doesnt update main content every time
        console.log("ji")
        document.getElementById("section0").style.clipPath = "inset(0 " + 39.5 * (1-(((scroll - 3400)/2)/100))+"vw 0 " + 39.5 * (1-(((scroll - 3400)/2)/100))+"vw)";
        document.getElementById("divider").style.clipPath = "inset(" + 25 * (1-(((scroll - 3400)/2)/100))+"vh 0 " + 25 * (1-(((scroll - 3400)/2)/100))+"vh 0)";
        document.getElementById("section1").style.marginTop = -70 + ((scroll - 3400) / 2.5)+"vh"
        if (scroll >= 3600){
            anim = true;
        }
        
    }
}
function animation(scroll) {
    if (scroll <= 970){
        document.getElementById("explosion").style.opacity = "1";
        document.getElementById('explosion').style.visibility = 'visible'
        //document.getElementById('explosion').style.width = '20vw'
        //document.getElementById('explosion').style.height = '20vh'
        //document.getElementById("explosion").style.scale = 2.5
        document.getElementById('explosion').setAttribute('src', 'public/Images/ExplosionEff' + Math.floor((scroll - 800) / 5.121212) + '.png');
    }
    else{
        document.getElementById('explosion').setAttribute('src', 'public/Images/ExplosionEff33.png');
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
//loadGoogleTranslate();


//---dropdown--//
function LangChange() {
    console.log("clickadoodledo");
    document.getElementById("LangDropdown").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.LangBtn') && !event.target.closest('.languages')) {
        var dropdowns = document.getElementsByClassName("languages");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


document.getElementById('LangBtn').addEventListener('click', LangChange);

//swap the languadge buttons
function SwapLang(id){
    //set tio last 2 characters of text content
    lang = document.getElementById(id).textContent.slice(-2);
    origin = document.getElementById('LangBtn').textContent.slice(-2);
    //making the buttons translate
    console.log('switched to ' + lang + ' from an origin of ' + origin)
    //switching the buttons
    document.getElementById(id).innerHTML = '<img src="public/Images/flags/'+ origin + '.png"/>' + origin;
    document.getElementById("LangBtn").innerHTML = '<img src="public/Images/flags/'+ lang + '.png"/> ' + lang;
    Translate();
}

['fr', 'es', 'ch'].forEach(id => {
    document.getElementById(id).addEventListener('click', () => SwapLang(id));
})
//document.getElementById("HowItWorks").addEventListener('click', expand);
// animation for left and right section 0 -- at scroll Y 3400


// ---- text change effect --- //
// Define an array of words to cycle through for each text element




function getNextChar(currentChar, targetChar) {
    const enterContainer = document.getElementById("enterContainer");
    const mainContent = document.getElementById("mainContent");
    
    // Transfer only text1, text2, and text3 elements
    ['text1', 'text2', 'text3'].forEach(id => {
        const sourceElement = enterContainer.querySelector(`#${id}`);
        const targetElement = mainContent.querySelector(`#${id}`);
        if (sourceElement && targetElement) {
            targetElement.textContent = sourceElement.textContent;
        }
    });
    if (currentChar === targetChar) return targetChar;
    
    const currentIndex = charset.indexOf(currentChar);
    const targetIndex = charset.indexOf(targetChar);
    
    if (currentIndex == -1 || targetIndex == -1) return targetChar;
    
    const nextIndex = (currentIndex + 1) % charset.length;
    return charset[nextIndex];
}

function animateText(elementId, fromText, toText, onComplete) {
    const element = document.getElementById(elementId);
    const maxLength = Math.max(fromText.length, toText.length);
    
    const paddedFromText = fromText.padEnd(maxLength, ' ');
    const paddedToText = toText.padEnd(maxLength, ' ');
    
    let currentText = paddedFromText;
    const startTime = Date.now();
    const duration = 900;

    function updateText() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        if (progress < 1) {
            let newText = '';
            for (let i = 0; i < maxLength; i++) {
                if (paddedFromText[i] === paddedToText[i]) {
                    newText += paddedFromText[i];
                } else {
                    newText += getNextChar(currentText[i], paddedToText[i]);
                }
            }
            currentText = newText;
            element.textContent = currentText;
            requestAnimationFrame(updateText);
        } else {
            element.textContent = paddedToText;
            if (onComplete) onComplete();
        }
    }

    updateText();
}

function startSequence() {
    let currentElementIndex = 0;
    let currentWordIndexes = { text1: 0, text2: 0, text3: 0 };
    const elements = ['text1', 'text2', 'text3'];
    
    function animateNext() {
        const elementId = elements[currentElementIndex];
        const words = textWords[elementId];
        const fromWordIndex = currentWordIndexes[elementId];
        const toWordIndex = (fromWordIndex + 1) % words.length;
        
        // get what it currently is and to what word im making it
        const fromText = words[fromWordIndex];
        const toText = words[toWordIndex];
        
        animateText(elementId, fromText, toText, () => {
            // Update the word index for this element   
            currentWordIndexes[elementId] = toWordIndex;
            
            // wait 1 second
            setTimeout(() => {
                currentElementIndex = (currentElementIndex + 1) % elements.length;
                animateNext();
            }, 1000);
        });
    }

    // recurance
    animateNext();
}
//
//
// STATRTST
let frameIndex = 1;
let clickcount = 0;
let fade = 0;
let done = false
startSequence();
function pigmessage(){
    if (fade < 100){
    //document.getElementById('pigText').textContent = "There's money in data";
    console.log("display text")
    fade += 1;
    document.getElementById('pigText').style.opacity = fade + "%";
    }
    if (fade >= 100 && document.getElementById('pigText').textContent == "There's money in data..."){
        setTimeout(() => {
            //fade = 0;
            //document.getElementById('pigText').style.opacity = "0%";
            document.getElementById('pigText').textContent = "Break open the Piggy Bank with AI.";
        }, 3000);
    }
}

function pigexplode(){
    intervalId2 = setInterval(() => {
        frameIndex = (frameIndex + 1) % 120;
        console.log(frameIndex)
        document.getElementById('pig').setAttribute('src', 'public/outputs/' + frameIndex + '.png')
        if (frameIndex > 50){
            setInterval(pigmessage, 5);
        }
        if (frameIndex >= 119){
            console.log("done")
            clearInterval(intervalId2)
            done = true
            //make some text visible here
            document.getElementById('pig').setAttribute('src', 'public/outputs/' + 120 + '.png')
        }
    }, 1000 / 24);
};
function piganim(){
    if (frameIndex == 1){
        intervalId = setInterval(() => {
            if (frameIndex < 16 && clickcount < 2){
                frameIndex = (frameIndex + 1) % 120; // Loop through images
                console.log(frameIndex)
                document.getElementById('pig').setAttribute('src', 'public/outputs/' + frameIndex + '.png')
            }
            else{
                frameIndex = 1
                clearInterval(intervalId)
                document.getElementById('pig').setAttribute('src', 'public/outputs/' + frameIndex + '.png')
                if (clickcount > 1){
                    pigexplode()
                    return
                }
                clickcount += 1
            }
        }, 1000 / 24);
        console.log("piggy")
    }
}
if (clickcount < 3){
    document.getElementById("pig").addEventListener("click", piganim)
}
//document.getElementById('explosion').setAttribute('src', 'Images/ExplosionEff' + Math.floor((scroll - 800) / 5.121212) + '.png');
document.getElementById('burgermenu').addEventListener('click', () => {
    console.log("menu")
    document.getElementById('line1').classList.toggle('expand');
    document.getElementById('line3').classList.toggle('expand');
    document.getElementById('sidebar').classList.toggle('expand');
});


//check if logged in, if so then change to log out

if (JSON.parse(localStorage.getItem('loggedInUser')) || JSON.parse(sessionStorage.getItem('loggedInUser'))){
    console.log("loged in account")
    document.getElementById('login').textContent = 'logout'
}


//
let originalWidth;

window.onload = function() {
    // Store the original width on first load
    originalWidth = document.documentElement.scrollWidth;
    adjustScale();
}

