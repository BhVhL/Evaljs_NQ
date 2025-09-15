//Le fichier JS pour la partie Météo

// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// // ..
// AOS.init();

// You can also pass an optional settings object
// below listed default settings
// AOS.init({
//   // Global settings:
//   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
//   startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
//   initClassName: 'aos-init', // class applied after initialization
//   animatedClassName: 'aos-animate', // class applied on animation
//   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
//   disableMutationObserver: false, // disables automatic mutations' detections (advanced)
//   debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
//   throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

//   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
//   offset: 120, // offset (in px) from the original trigger point
//   delay: 0, // values from 0 to 3000, with step 50ms
//   duration: 400, // values from 0 to 3000, with step 50ms
//   easing: 'ease', // default easing for AOS animations
//   once: false, // whether animation should happen only once - while scrolling down
//   mirror: false, // whether elements should animate out while scrolling past them
//   anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

// });

let meteoCondition ;
let meteoTempActuel ;
let meteoTempMax ;
let meteoTempMin ;

function meteoAPI(){
    fetch("https://prevision-meteo.ch/services/paris")
    .then((response)=>{
        return response.json();
    }) 
    // console.log(response.json);
    .then((value)=>{
        let meteoCondition = value.current_condition[condition] ;
        let meteoTempActuel = value.current_condition[tmp];
        let meteoTempMax = value.fcst_day_0[tmax] ;
        let meteoTempMin = value.fcst_day_0[tmin] ;
    });
    // console.log(meteoAPI(value));
}

Button(meteoAPI(
    console.log(meteoAPI([meteoCondition],[meteoTempActuel],[meteoTempMax],[meteoTempMin]))
));


let info(){
    ajoute = document.createElement("div").innerHTML=`<div></div>`
    ajoute.style.height = "300px";
    ajoute.style.width = "200px";
    ajoute.style.margintop && ajoute.style.marginbottom = "16px";
    ajoute.style.border = "3px, solid, gray";
    ajoute.style.paddingtop = "16px";
    ajoute.style.paddingright && ajoute.style.paddingleft = "12px";
    ajoute.style.paddingbottom = "24px";
}


customElements.define("mon-info", info);

txt.addEventListener("keydown", function addInfo(){
    info("mon-info").innerHTML = `txt`
    .then((response)=>{
        return info.json;
    })
})

Button = document.querySelector("button");

Button.className.add("button__cardMeteo");

Button.addEventListener("mousedown", function(){
    if(isDown == false){
        isDown = true
        setTimeout(function(){
            if(isDown === true){
                button.style.backgroundColor = "darkorange";
            };
        secondesToHold * 1000;    
        })
    }
})

// const addinfo = document.styleSheets

// ----------------------------------------------
//     /!\ récupérer sur Reddit /!\
// isDown=faux;
//  secondesToHold=1 elem=document.querySelector('corps');
//   elem.addEventListener('mousedown', fonction(événement) {
//      // simulation d'un événement hold si (isDown==false){ estDown=true ;
//      //  setTimeout(fonction() { si (isDown==true){ console.log("Maintenir");
//      //  } }, (secondesToHold*1000));
//      //  } });
//      //  elem.addEventListener('mouseup', function(événement) { isDown=faux; });




let time = 1000;
setInterval(meteoAPI,time);






//-----------------------------------------------
// Affichage Membres

const tabData = [];

const usersHuman ;
const usersPet ;
const usersXeno ;

tabData.push(usersHuman, usersPet, usersXeno)

function cardHuman(e){
    e.document.createElement("article");
    e.document.createElement("h2", {
        h2: "titre"
    });
    e.document.createElement("img", {
        src: 'src/assets/?',
        alt: 'alt="Portrait de:"'
    });
    e.document.createElement("p", {
        date: "age",
        mail: "email"
    });
    e.appendChild(titre, img, p);

    e.className.add(".card");
    return e("article");
};


function cardPet(f){
    f.document.createElement("article");
    f.document.createElement("h2", {
        h2: "titre"
    });
    f.document.createElement("img", {
        src: 'src/assets/?',
        alt: 'alt="Portrait de:"'
    });
    f.document.createElement("p", {
        date: "age",
        mail: "email"
    });
    f.appendChild(titre, img, p);

    f.className.add(".card");
    return e("article");
};

function cardPet(f){
    g.document.createElement("article");
    g.document.createElement("h2", {
        h2: "titre"
    });
    g.document.createElement("img", {
        src: 'src/assets/?',
        alt: 'alt="Portrait de:"'
    });
    g.document.createElement("p", {
        date: "age",
        mail: "email"
    });
    g.appendChild(titre, img, p);

    g.className.add(".card");
    return e("article");
};