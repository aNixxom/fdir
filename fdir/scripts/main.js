// links
let cato_links = document.getElementById('cato-link')
let cq_link = document.getElementById('cq-link')
let sirs_link = document.getElementById('sirs-link')
let brookings_link = document.getElementById('brookings-link')
let g_font_3 = document.getElementById('g-font-3')
let g_font_2 = document.getElementById('g-font-2')
let g_font_1 = document.getElementById('g-font-1')
let icon_link = document.getElementById('icon-link')

// info boxes
let info_box_1 = document.getElementById('info-box-1')
let info_box_2 = document.getElementById('info-box-2')
let info_box_3 = document.getElementById('info-box-3')

let ib1t = document.getElementById('ib1t')
let ib1t2 = document.getElementById('ib1t2')

let ib2t = document.getElementById('ib2t1')
let ib2t2 = document.getElementById('ib2t2')

// credit element
let credits = document.getElementById("snackbar");
let creditsListener = document.getElementById('credits-button')

creditsListener.addEventListener('click', showCredits)

function showCredits() {
    credits.className = "show";
    setTimeout(function(){ credits.className = credits.className.replace("show", ""); }, 3000);
}

icon_link.addEventListener('click', openIconLink)
g_font_1.addEventListener('click', openGoogleFont1)
g_font_2.addEventListener('click', openGoogleFont2)
g_font_3.addEventListener('click', openGoogleFont3)
sirs_link.addEventListener('click', openSirsLink)
cq_link.addEventListener('click', openCqLink)
cato_links.addEventListener('click', openCatoLink)
brookings_link.addEventListener('click', openBrookingLink)


function openIconLink(){open("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css")}
function openGoogleFont1(){open("https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap")}
function openGoogleFont2(){open("https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@500&display=swap")}
function openGoogleFont3(){open("https://fonts.googleapis.com/css2?family=Saira&display=swap")}
function openSirsLink(){open("https://explore.proquest.com/sirsissuesresearcher/document/2321158878?accountid=34697")}
function openCqLink(){open("https://library.cqpress.com/cqresearcher/document.php?id=cqresrre2021050700")}
function openCatoLink(){open("https://www.cato.org/policy-report/january/february-2021/big-tech-free-speech")}
function openBrookingLink(){open("https://www.brookings.edu/blog/techtank/2021/06/01/addressing-big-techs-power-over-speech/")}



info_box_1.addEventListener('mouseover', changeInfo1)
info_box_1.addEventListener('mouseout', defaultTitle1)

info_box_2.addEventListener('mouseover', changeInfo2)
info_box_2.addEventListener('mouseout', defaultTitle2)

info_box_3.addEventListener('mouseover', changeInfo3)
info_box_3.addEventListener('mouseout', defaultTitle3)

function changeInfo1() {
    ib1t2.style.display = "block"
    ib1t2.style.opacity = "1"
    ib1t2.innerText = "Our goal is to pass the 21st Century Regulation of Information Technology Act. Gettings this bill passed into law will allow the FDIR to take actions against the companies just want your data and money"
}

function defaultTitle1() {
    ib1t2.style.opacity = "0"
    ib1t2.style.padding = "0"
}

function changeInfo2() {
    ib2t2.style.display = "block"
    ib2t2.style.opacity = "1"
    ib2t2.innerText = "This bill will be funded by the revenue acquired from increasing taxes on Tech Companies. With the intent on using the money to build and enforce the FDIR government agency regulating the control of Tech Companies over information dealt out and held from the general public."
}

function defaultTitle2() {
    ib2t2.style.opacity = "0"
    ib1t2.style.padding = "0"
}

function changeInfo3() {
    ib3t2.style.display = "block"
    ib3t2.style.opacity = "1"
    ib3t2.innerText = " Failure to follow these regulations set in place by the FDIR will result in heavy fines of up to 50% of the companies annual income, and/or jail time should the people held responsible continue to disregard the regulations."
}

function defaultTitle3() {
    ib3t2.style.padding = "0"
    ib3t2.style.opacity = "0"
}
