// fetch json data for translating//
function loadingscreen(){
    document.getElementById("loadingpage").style.visibility = "hidden "
};

//
//


let funnybusiness = 0
let originalCount = 0
const elementsWithId = document.querySelectorAll('#HowItWorks')
const fistButton = elementsWithId[0]
const secondButton = elementsWithId[1]
//const originalLang = document.getElementById("mainContent").innerHTML
// ---Intro---//
var userLanguage = navigator.language || navigator.userLanguage;
var lang = userLanguage.substring(0, 2);
let anim = false;
document.documentElement.userLanguage = lang;
console.log(document.documentElement.userLanguage)
//-----TRANSLATIONS-----//
//console.log("hi", document.querySelectorAll('#HowItWorks'), fistButton, secondButton)
//elementsWithId.forEach(element => {
//    element.addEventListener('click', expand);
//});
document.getElementById("LangBtn").innerHTML = '<img id="flags" src="/public/Images/flags/'+lang + '.png"/> ' + lang;
function Translate(){
    console.log(lang)
    if (lang.startsWith('fr')){
        console.log("french time")
        //base
        document.getElementById("QueriesTop").textContent = "Requêtes"
        document.getElementById("AboutTop").textContent = "À propos"
        document.getElementById("databaseTop").textContent = "Télécharger"
        document.getElementById("Account").textContent = "Compte";
        document.getElementById("Pricing").textContent = "Tarificat";
        document.getElementById("Settings").textContent = "Paramèt";
        document.getElementById("Contact").textContent = "Contact";
        document.getElementById("login").textContent = "comp";
        document.getElementById("footertitle").textContent = "À propos de ce site web";
        document.getElementById("par").textContent = "Ce site web a été créé pour un logiciel d'extraction de données web IA en suivant les directives et bonnes pratiques du W3C.";
        document.getElementById("copywtier").innerHTML = "&copy; 2024 Jackson Mackey. Tous droits réservés.";
        document.getElementById("Portfolio").textContent = "Mon portfolio";
        document.getElementById("totop").textContent = "Retour en haut";   
        //-----non universal pages-----//
        //document.getElementById("totop")?.textContent = "";

        if (window.location.pathname === "/public/html/login.html") {
            document.getElementById("logintitle").textContent = "Connexion";    
            document.getElementById("emai2l").textContent = "Courriel";    
            document.getElementById("password222").textContent = "mot de passe";
            document.getElementById("remem").innerHTML = '<input type="checkbox" name="remember"> souviens-toi de moi';
            document.getElementById("signuuu").innerHTML = "Vous n'avez pas de compte? <a href='/public/html/signup'>s'inscrire</a>";
            document.getElementById("fp").textContent = "mot de passe oublié ?";
            document.getElementById("loggg").textContent = "Connexion";
        }
        if (window.location.pathname === "/public/html/About.html") {
            document.getElementById("1").textContent = "À propos de notre WebScraper";
            document.getElementById("2").textContent = "Et comment vous pouvez l'utiliser";
            document.getElementById("3").textContent = "Utilisez n'importe quelle URL";
            document.getElementById("4").textContent = "Nous interprétons n'importe quelle URL de n'importe quel site, facilement et gratuitement";
            document.getElementById("5").textContent = "Entrez ce que vous voulez";
            document.getElementById("6").textContent = "Notre IA transforme des invites simples en données précieuses";
            document.getElementById("7").textContent = "Automatiser";
            document.getElementById("8").textContent = "Définissez n'importe quel intervalle pour réextraire automatiquement les données";
        }        
        if (window.location.pathname === "/public/html/pricing.html") {
            console.log('wdwdwd')
        }
        if (window.location.pathname === "/public/html/forgotpassword.html") {
            document.getElementById("titleeee").textContent = "mot de passe oublié";    
            document.getElementById("emmm").textContent = "Courriel";    
            document.getElementById("secq").textContent = "question de sécurité";
            document.getElementById("remo").innerHTML = "Vous n'avez pas de compte? <a href='/public/html/signup'>s'inscrire</a>";
            document.getElementById("reess").textContent = "réinitialiser";
        }
        if (window.location.pathname === "/public/html/Download.html") {
            document.getElementById("loginerror").textContent = "Connexion pour continuer";
            document.getElementById("loginb").textContent = "Pour vous connecter";
            document.getElementById("0").innerHTML = "<i class='fas fa-download'></i> Télécharger";
            document.getElementById("0.1").innerHTML = "<i class='fas fa-download'></i> Télécharger";
            document.getElementById("0.2").innerHTML = "<i class='fas fa-download'></i> Télécharger";
            document.getElementById("1").textContent = "Démo avec fonctionnalité limitée";
            document.getElementById("2").textContent = "Manuel de l'utilisateur";
            document.getElementById("3").textContent = "Comment utiliser et modifier notre web scraper";
            document.getElementById("4").textContent = "Version Démo";
            document.getElementById("6").textContent = "Dernière version stable de notre logiciel de web scraping AI";
        }
        if (window.location.pathname === "/public/html/pricing.html") {
            document.getElementById("loginerror").textContent = "Connectez-vous pour continuer";
            document.getElementById("loginb").textContent = "Connexion";
            document.getElementById("pagetitle").textContent = "Plans tarifaires";
            document.getElementById("righttButton").textContent = "Choisir un plan";
            document.getElementById("1").textContent = "Gratuit";
            document.getElementById("other").innerHTML = "&#8226 0 € / mois<br /><br />&#8226 200 requêtes<br /><br />&#8226 Accès limité<br /><br />&#8226 Pas de licence";
            document.getElementById("other2").innerHTML = "&#8226 2 € / mois<br /><br />&#8226 2000 requêtes<br /><br />&#8226 Accès complet<br /><br />&#8226 Revenus < 500 €";
            document.getElementById("other3").innerHTML = "&#8226 20 € / mois<br /><br />&#8226 Requêtes illimitées<br /><br />&#8226 Accès complet<br /><br />&#8226 < 50 employés";
            document.getElementById("enterprise").innerHTML = "&#8226 50 € / mois<br /><br />&#8226 Requêtes illimitées<br /><br />&#8226 Accès complet<br /><br />&#8226 Sans limite";
        }
        
        




        //                             //     
        //
    }
        //keep at bottom as this updates the translartion
        //2 document.getElementById("mainContent").innerHTML = document.getElementById("enterContainer").innerHTML
    if (lang.startsWith('en')){
        console.log("translating to english")
        //set to defult 
        document.getElementById("QueriesTop").textContent = "Queries"
        document.getElementById("AboutTop").textContent = "About"
        document.getElementById("databaseTop").textContent = "Download"
        document.getElementById("Account").textContent = "Account"
        document.getElementById("Pricing").textContent = "Pricing"
        document.getElementById("Settings").textContent = "Settings"
        document.getElementById("Contact").textContent = "Contact"
        document.getElementById("login").textContent = "login" 
        document.getElementById("footertitle").textContent = "About this website"
        document.getElementById("par").textContent = "This webiste was built for Ai-Web Scraping Software while by following W3C guidelines and best practices."
        document.getElementById("copywtier").innerHTML = "&copy; 2024 Jackson Mackey. All rights reserved."
        document.getElementById("Portfolio").textContent = "My Portfolio"
        document.getElementById("totop").textContent = "Back to top"
        if (window.location.pathname === "/public/html/login.html") {
            document.getElementById("logintitle").textContent = "Login";    
            document.getElementById("emai2l").textContent = "Email";    
            document.getElementById("password222").textContent = "Password";
            document.getElementById("remem").innerHTML = "<input type='checkbox' name='remember'>Remember me";
            document.getElementById("signuuu").innerHTML = "Don't have an account? <a href='/public/html/signup'>Sign up</a>";
            document.getElementById("fp").textContent = "Forgot Password?";
            document.getElementById("loggg").textContent = "Login";
        }
        if (window.location.pathname === "/public/html/forgotpassword.html") {
            document.getElementById("titleeee").textContent = "Forgot Password";    
            document.getElementById("emmm").textContent = "Email";    
            document.getElementById("secq").textContent = "Security Question";
            document.getElementById("remo").innerHTML = "Remember Password? <a href='/public/html/login.html'>Log in";
            document.getElementById("reess").textContent = "Reset";
        }
        if (window.location.pathname === "/public/html/About.html") {
            document.getElementById("1").textContent = "About Our WebScraper";
            document.getElementById("2").textContent = "And how you can use it";
            document.getElementById("3").textContent = "Use any URL";
            document.getElementById("4").textContent = "We interpret any URL from any site, easily and for free";
            document.getElementById("5").textContent = "Enter What you want";
            document.getElementById("6").textContent = "Our AI turns simple prompts into valuable data";
            document.getElementById("7").textContent = "Automate";
            document.getElementById("8").textContent = "Set any interval to automatically re-scrape data";
        }
        if (window.location.pathname === "/public/html/Download.html") {
            document.getElementById("loginerror").textContent = "Login to Continue";
            document.getElementById("loginb").textContent = "To Login";
            document.getElementById("0").innerHTML = "<i class='fas fa-download'></i> Download";
            document.getElementById("0.1").innerHTML = "<i class='fas fa-download'></i> Download";
            document.getElementById("0.2").innerHTML = "<i class='fas fa-download'></i> Download";
            document.getElementById("1").textContent = "Demo with limited functionality";
            document.getElementById("2").textContent = "User Manual";
            document.getElementById("3").textContent = "How to use and modify our web scraper";
            document.getElementById("4").textContent = "Demo Version";
            document.getElementById("6").textContent = "Latest stable release of our AI Web Scraping Software";
        }
        if (window.location.pathname === "/public/html/pricing.html") {
            document.getElementById("loginerror").textContent = "Login to Continue";
            document.getElementById("loginb").textContent = "To Login";
            document.getElementById("pagetitle").textContent = "Pricing Plans";
            document.getElementById("righttButton").textContent = "Select Plan";
            document.getElementById("1").textContent = "Free";
            document.getElementById("other").innerHTML = "&#8226 $0 / month<br /><br />&#8226 200 Queries/week<br /><br />&#8226 limited database acess<br /><br />&#8226Comerce Liscence:<br />&nbsp &nbsp none";
            document.getElementById("other2").innerHTML = "&#8226 $2 / month<br /><br />&#8226 2000 Queries/week<br /><br />&#8226 Full database acess<br /><br />&#8226Comerce Liscence:<br />&nbsp &nbsp < $500 revenue";
            document.getElementById("other3").innerHTML = "&#8226 $20 / month<br /><br />&#8226 Unlimited Queries<br /><br />&#8226 Full database acess<br /><br />&#8226Comerce Liscence:<br />&nbsp &nbsp < 50 employees";
            document.getElementById("enterprise").innerHTML = "&#8226 $50 / month<br /><br />&#8226 Unlimited Queries<br /><br />&#8226 Full database acess<br /><br />&#8226 Commerce liscence:<br />&nbsp &nbsp Unlimited";
        }
        

        if (originalCount > 0){
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
        document.getElementById("QueriesTop").textContent = "Consultas";
        document.getElementById("AboutTop").textContent = "Acerca";
        document.getElementById("databaseTop").textContent = "Descargar";
        document.getElementById("Account").textContent = "Cuenta";
        document.getElementById("Pricing").textContent = "Precios";
        document.getElementById("Settings").textContent = "Ajustes";
        document.getElementById("Contact").textContent = "Contacto";
        document.getElementById("login").textContent = "Entrar";  
        document.getElementById("footertitle").textContent = "Acerca de este sitio web";
        document.getElementById("par").textContent = "Este sitio web fue creado para un software de extracción web con IA siguiendo las directrices y mejores prácticas del W3C.";
        document.getElementById("copywtier").innerHTML = "&copy; 2024 Jackson Mackey. Todos los derechos reservados.";
        document.getElementById("Portfolio").textContent = "Mi portafolio";
        document.getElementById("totop").textContent = "Volver arriba";        
        //2 document.getElementById("mainContent").innerHTML = document.getElementById("enterContainer").innerHTML
        if (window.location.pathname === "/public/html/login.html") {
            document.getElementById("logintitle").textContent = "Iniciar sesión";    
            document.getElementById("emai2l").textContent = "Correo electrónico";    
            document.getElementById("password222").textContent = "Contraseña";
            document.getElementById("remem").innerHTML = '<input type="checkbox" name="remember"> Recuérdame';
            document.getElementById("signuuu").innerHTML = "¿No tienes una cuenta? <a href='/public/html/signup'>Registrarse</a>";
            document.getElementById("fp").textContent = "¿Olvidaste tu contraseña?";
            document.getElementById("loggg").textContent = "Conexión";
        }
        if (window.location.pathname === "/public/html/forgotpassword.html") {
            document.getElementById("titleeee").textContent = "Restablecer la contraseña";    
            document.getElementById("emmm").textContent = "Correo electrónico";    
            document.getElementById("secq").textContent = "Pregunta de seguridad";
            document.getElementById("remo").innerHTML = "¿Recuerdas la contraseña? <a href='/public/html/login.html'>Iniciar sesión</a>";
            document.getElementById("reess").textContent = "Restablecer";
        }
        if (window.location.pathname === "/public/html/About.html") {
            document.getElementById("1").textContent = "Acerca de nuestro WebScraper";
            document.getElementById("2").textContent = "Y cómo puedes usarlo";
            document.getElementById("3").textContent = "Usa cualquier URL";
            document.getElementById("4").textContent = "Interpretamos cualquier URL de cualquier sitio, fácilmente y de forma gratuita";
            document.getElementById("5").textContent = "Ingresa lo que quieras";
            document.getElementById("6").textContent = "Nuestra IA transforma simples prompts en datos valiosos";
            document.getElementById("7").textContent = "Automatizar";
            document.getElementById("8").textContent = "Establece cualquier intervalo para volver a extraer automáticamente los datos";
        }
        if (window.location.pathname === "/public/html/Download.html") {
            document.getElementById("loginerror").textContent = "Inicia sesión para continuar";
            document.getElementById("loginb").textContent = "Para iniciar sesión";
            document.getElementById("0").innerHTML = "<i class='fas fa-download'></i> Descargar";
            document.getElementById("0.1").innerHTML = "<i class='fas fa-download'></i> Descargar";
            document.getElementById("0.2").innerHTML = "<i class='fas fa-download'></i> Descargar";
            document.getElementById("1").textContent = "Demostración con funcionalidad limitada";
            document.getElementById("2").textContent = "Manual del usuario";
            document.getElementById("3").textContent = "Cómo usar y modificar nuestro web scraper";
            document.getElementById("4").textContent = "Versión Demo";
            document.getElementById("6").textContent = "Última versión estable de nuestro software de web scraping AI";
        }
        if (window.location.pathname === "/public/html/pricing.html") {
            document.getElementById("loginerror").textContent = "Inicia sesión para continuar";
            document.getElementById("loginb").textContent = "Iniciar sesión";
            document.getElementById("pagetitle").textContent = "Planes de precios";
            document.getElementById("righttButton").textContent = "Seleccionar plan";
            document.getElementById("1").textContent = "Gratis";
            document.getElementById("other").innerHTML = "&#8226 $0 / mes<br /><br />&#8226 200 consultas<br /><br />&#8226 Acceso limitado<br /><br />&#8226 Sin licencia";
            document.getElementById("other2").innerHTML = "&#8226 $2 / mes<br /><br />&#8226 2000 consultas<br /><br />&#8226 Acceso completo<br /><br />&#8226 Ingresos < $500";
            document.getElementById("other3").innerHTML = "&#8226 $20 / mes<br /><br />&#8226 Consultas ilimitadas<br /><br />&#8226 Acceso completo<br /><br />&#8226 < 50 empleados";
            document.getElementById("enterprise").innerHTML = "&#8226 $50 / mes<br /><br />&#8226 Consultas ilimitadas<br /><br />&#8226 Acceso completo<br /><br />&#8226 Sin límite";
        }
        
        
    }
    if (lang.startsWith('ch')){
        document.getElementById("QueriesTop").textContent = "查询";
        document.getElementById("AboutTop").textContent = "关于";
        document.getElementById("databaseTop").textContent = "下载";
        document.getElementById("Account").textContent = "账户";
        document.getElementById("Pricing").textContent = "价格";
        document.getElementById("Settings").textContent = "设置";
        document.getElementById("Contact").textContent = "联系";
        document.getElementById("login").textContent = "登录";
        document.getElementById("footertitle").textContent = "关于此网站";
        document.getElementById("par").textContent = "此网站是为人工智能网页抓取软件构建的，遵循 W3C 指南和最佳实践。";
        document.getElementById("copywtier").innerHTML = "&copy; 2024 Jackson Mackey。保留所有权利。";
        document.getElementById("Portfolio").textContent = "我的作品集";
        document.getElementById("totop").textContent = "回到顶部";    
        //document.getElementById("loggg").textContent = "登录";    
        //2 document.getElementById("mainContent").innerHTML = document.getElementById("enterContainer").innerHTML 
        // //      
        if (window.location.pathname === "/public/html/login.html") {
            document.getElementById("logintitle").textContent = "登录";    
            document.getElementById("emai2l").textContent = "电子邮件";    
            document.getElementById("password222").textContent = "密码";
            document.getElementById("remem").innerHTML = '<input type="checkbox" name="remember"> 记住我';
            document.getElementById("signuuu").innerHTML = "还没有账号? <a href='/public/html/signup'>注册</a>";
            document.getElementById("fp").textContent = "忘记密码?";
            document.getElementById("loggg").textContent = "登录"; 
        }
        if (window.location.pathname === "/public/html/forgotpassword.html") {
            document.getElementById("titleeee").textContent = "忘记密码";    
            document.getElementById("emmm").textContent = "电子邮件";    
            document.getElementById("secq").textContent = "安全问题";
            document.getElementById("remo").innerHTML = "记得密码吗? <a href='/public/html/login.html'>登录</a>";
            document.getElementById("reess").textContent = "重置";
        }    
        if (window.location.pathname === "/public/html/About.html") {
            document.getElementById("1").textContent = "关于我们的 WebScraper";
            document.getElementById("2").textContent = "以及如何使用它";
            document.getElementById("3").textContent = "使用任何 URL";
            document.getElementById("4").textContent = "我们从任何网站中解释任何 URL，轻松且免费";
            document.getElementById("5").textContent = "输入你想要的内容";
            document.getElementById("6").textContent = "我们的 AI 将简单的提示转化为有价值的数据";
            document.getElementById("7").textContent = "自动化";
            document.getElementById("8").textContent = "设置任何间隔来自动重新抓取数据";
        }
        if (window.location.pathname === "/public/html/Download.html") {
            document.getElementById("loginerror").textContent = "登录以继续";
            document.getElementById("loginb").textContent = "登录";
            document.getElementById("0").innerHTML = "<i class='fas fa-download'></i> 下载";
            document.getElementById("0.1").innerHTML = "<i class='fas fa-download'></i> 下载";
            document.getElementById("0.2").innerHTML = "<i class='fas fa-download'></i> 下载";
            document.getElementById("1").textContent = "功能有限的演示版";
            document.getElementById("2").textContent = "用户手册";
            document.getElementById("3").textContent = "如何使用和修改我们的网页抓取工具";
            document.getElementById("4").textContent = "演示版";
            document.getElementById("6").textContent = "我们AI网页抓取软件的最新稳定版本";
        }
        if (window.location.pathname === "/public/html/pricing.html") {
            document.getElementById("loginerror").textContent = "登录以继续";
            document.getElementById("loginb").textContent = "登录";
            document.getElementById("pagetitle").textContent = "定价计划";
            document.getElementById("righttButton").textContent = "选择计划";
            document.getElementById("1").textContent = "免费";
            document.getElementById("other").innerHTML = "&#8226 ¥0 / 月<br /><br />&#8226 每周 200 次查询<br /><br />&#8226 限制访问数据库<br /><br />&#8226 商业许可证:<br />&nbsp &nbsp 无";
            document.getElementById("other2").innerHTML = "&#8226 ¥2 / 月<br /><br />&#8226 每周 2000 次查询<br /><br />&#8226 完整访问数据库<br /><br />&#8226 商业许可证:<br />&nbsp &nbsp < ¥500 收入";
            document.getElementById("other3").innerHTML = "&#8226 ¥20 / 月<br /><br />&#8226 无限查询<br /><br />&#8226 完整访问数据库<br /><br />&#8226 商业许可证:<br />&nbsp &nbsp < 50 名员工";
            document.getElementById("enterprise").innerHTML = "&#8226 ¥50 / 月<br /><br />&#8226 无限查询<br /><br />&#8226 完整访问数据库<br /><br />&#8226 商业许可证:<br />&nbsp &nbsp 无限制";
        }
        
        
    }
}
Translate()
//-----TRANSLATIONS-----//

//
document.getElementById("fr").innerHTML = '<img src="/public/Images/flags/fr.png"/>fr';
document.getElementById("es").innerHTML = '<img src="/public/Images/flags/es.png"/>es';
document.getElementById("ch").innerHTML = '<img src="/public/Images/flags/ch.png"/>ch';
//


document.getElementsByClassName('languages')[0].style.width = document.getElementById('LangBtn').offsetWidth + 'px';


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
    document.getElementById(id).innerHTML = '<img src="/public/Images/flags/'+ origin + '.png"/>' + origin;
    document.getElementById("LangBtn").innerHTML = '<img src="/public/Images/flags/'+ lang + '.png"/> ' + lang;
    Translate();
}

['fr', 'es', 'ch'].forEach(id => {
    document.getElementById(id).addEventListener('click', () => SwapLang(id));
})
//document.getElementById("HowItWorks").addEventListener('click', expand);
// animation for left and right section 0 -- at scroll Y 3400


// ---- text change effect --- //
// Define an array of words to cycle through for each text element




//document.getElementById('explosion').setAttribute('src', 'Images/ExplosionEff' + Math.floor((scroll - 800) / 5.121212) + '.png');
document.getElementById('burgermenu').addEventListener('click', () => {
    console.log("menu")
    document.getElementById('line1').classList.toggle('expand');
    document.getElementById('line3').classList.toggle('expand');
    document.getElementById('sidebar').classList.toggle('expand');
});


//check if logged in, if so then change to log out

console.log(JSON.parse(localStorage.getItem('loggedInUser')), JSON.parse(sessionStorage.getItem('loggedInUser')), "dwdwd");
if (JSON.parse(localStorage.getItem('loggedInUser')) || JSON.parse(sessionStorage.getItem('loggedInUser'))){
    console.log("loged in account")
    document.getElementById('login').textContent = 'logout'
}