//google translate  
//On fait appel à l'API de google translate
function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {pageLanguage: 'en'},
        'google_translate_element'
    );
}



// Pour changer d'image en cliquant 

/* le tableau tabImage contient les noms des fichiers image du répertoire. */
var tabImage = [
    "image/readingf.jpg",
    "image/listeningf.jpg",
    "image/writef.jpg",
    "image/callf.jpg"
];

/*IndiceImage représente l'indice de l'image courante. la variable IndiceImage vaut 0.*/
var indiceImage = 0;


/*La fonction afficheImage change la source de  l'élément image d'id lescompetences et 
lui attribue la valeur de l'élément indiceImage  du tableau tabImages.*/
var afficheImage = function() {
    var testt = document.getElementById("lescompetences")
    testt.src = tabImage[indiceImage];
}

/*la fonction imageSuivante, sans paramètre, permet d'afficher dans l'id compétences l'image de tabImages d'indice 
suivant par rapport à indiceImage, avec l'image d'indice qui suit l'image du dernier indice défini du tableau.*/
var imageSuivante = function() {
    indiceImage++;
    if(indiceImage == tabImage.length) {
        indiceImage = 0;
    }
    afficheImage();
}

var setupListeners = function() {
    var testt = document.getElementById("lescompetences");//On récupère tous les éléments dont le id est "cométences".
    testt.addEventListener("click",imageSuivante); 
    /*On ajoute un Eventlistener à compétences, celui-ci permet d'effectuer un changement lorsqu'un événement arrive. il prend les paramètres l'event et la fonction à exécuter. dans ce cas, 
    l'event est 'click' qui signifie quand on clique sur l'élément. La fonction à exécuter lorsque l'événeem  intervient est la fonction affichImage qui permet de changer l'image.*/
    afficheImage();
}
// On veut exécuter le code au chargement de la fenêtre
window.addEventListener("load", setupListeners);
// On ajoute un eventlistener à la fenêtre globale window, l'event Load siqgnifie le chargement de la fenêtre global. la fonction exécutée est addSectionClick qui exécute le code.


//Compte à rebours

// On défini la date du compte a rebours
var countDownDate = new Date("Nov 13, 2020 12:00:00").getTime();

// Update le compte a rebours avec la méthode setInterval (1 seconde par defaut comme une montre)
var x = setInterval(function() {

  // on récuprer la date actuelle dans la variable now
  var now = new Date().getTime();
    
  // on récupére la différence de temps entre la fin du compte a rebours et l'heure actuelle dans la variable distance
  var distance = countDownDate - now;
    
  // On calcul le temps en jours, heures, minutes et secondes
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // On met le résultat dans un élément avec l'id compteRebours
  document.getElementById("compteRebours").innerHTML = days + "j " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // On ajoute une condition qui permet d'afficher un message quand le compte à rebours est fini
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("compteRebours").innerHTML = "Date de l'épreuve révolue";
  }
}, 1000);



//Typewriter 
//Fonction permettant d'afficher du texte caractère par caractère à une certaine vitesse 

var i = 0; //variable compteur 
var txt = 'Immergez-vous dans la langue étrangère que vous désirez grâce à la réalité virtuelle.'; //la variable de type chaine de caractère dans laquelle on stocke notre message
var speed = 50;  //variable vitesse destiné a être utiliser dans la méthode setTimeout donc représente ici 50ms, vitesse d'affichage

function typeWriter() {
  if (i < txt.length) {  //boucle permettant de parcourir toute la chaine de caractère, caractère par caractère
    document.getElementById("typewriter").innerHTML += txt.charAt(i);  //A chaque itération, on va chercher l'élément d'indice i correspondant a une lettre
    i++;
    setTimeout(typeWriter, speed);  //la méthode setTimeout permet d'attendre une certaine durée avant d'executer l'instruction, ici appeler notre fonction typewriter
  }
}



// Changement de texte portrait 
//on appel ces fonctions depuis le HTML avec mouseover et mosueout

function changeText1(text)
//accède à l'élément avec l'id  omatexte, on retire le contenu html et on le remplace par la variable text
// l'argument de la fonction à été défini dans la page HTML
{
    var display = document.getElementById("omatexte");   
    display.innerHTML = "";
    display.innerHTML = text;
}

function defaultText1()
// même chose ici mais on remplace direction par Découvrir ma devise
{
    var display = document.getElementById("omatexte");
    display.innerHTML = "";
    display.innerHTML = "Découvrir ma devise";
}


function changeText2(text)
{
    var display = document.getElementById("armandtexte");
    display.innerHTML = "";
    display.innerHTML = text;
}

function defaultText2()
{
    var display = document.getElementById("armandtexte");
    display.innerHTML = "";
    display.innerHTML = "Découvrir ma devise";
}


function changeText3(text)
{
    var display = document.getElementById("teutatexte");
    display.innerHTML = "";
    display.innerHTML = text;
}

function defaultText3()
{
    var display = document.getElementById("teutatexte");
    display.innerHTML = "";
    display.innerHTML = "Découvrir ma devise";
}

//Permet de renvoyer vers une autre page web 
function visitPage(){
    window.location='https://eduscol.education.fr/cid51189/certifications-en-langues-vivantes-etrangeres.html';
}