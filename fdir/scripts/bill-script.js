
let definitions = {
    cyber_law: document.getElementById('cyber-law-def-box'),
    big_tech: document.getElementById('tech-def-box'),
    fdir: document.getElementById('fdir-def-box'),
    tos: document.getElementById('tos-def-box')
}

let classes = [
    "tech-definitions",
    "cyber-definitions",
    "fdir-definitions"
]

document.body.addEventListener('mousemove', function(e) {
    if(e.target.className == 'cyber-definitions') {
        definitions.cyber_law.style.display = "block"
        definitions.cyber_law.style.position = "absolute";
        definitions.cyber_law.style.opacity = 1;
        definitions.cyber_law.style.left = e.pageX + 15 + 'px';
        definitions.cyber_law.style.top = e.pageY + -90 + 'px';
    } else if(e.target.className == 'tech-definitions') {
        definitions.big_tech.style.display = "block"
        definitions.big_tech.style.position = "absolute";
        definitions.big_tech.style.opacity = 1;
        definitions.big_tech.style.left = e.pageX + 15 + 'px';
        definitions.big_tech.style.top = e.pageY + -90 + 'px';
    } else if(e.target.className == 'fdir-definitions') {
        definitions.fdir.style.display = "block"
        definitions.fdir.style.position = "absolute";
        definitions.fdir.style.opacity = 1;
        definitions.fdir.style.left = e.pageX + 15 + 'px';
        definitions.fdir.style.top = e.pageY + -90 + 'px';
    } else if(e.target.className == 'tos-definitions') {
        definitions.tos.style.display = "block"
        definitions.tos.style.position = "absolute";
        definitions.tos.style.opacity = 1;
        definitions.tos.style.left = e.pageX + 15 + 'px';
        definitions.tos.style.top = e.pageY + -90 + 'px';
    }
})


document.body.addEventListener('mouseout', function(e) {
    if(e.target.className == 'cyber-definitions') {
        definitions.cyber_law.style.display = "none"
    } else if(e.target.className == 'tech-definitions') {
        definitions.big_tech.style.display = "none"
    } else if(e.target.className == 'fdir-definitions') {
        definitions.fdir.style.display = "none"
    } else if(e.target.className == 'tos-definitions') {
        definitions.tos.style.display = "none"
    }
})


// for(let i = 0; i < Object.values(definitions).length; i++) {
//     if(e.className == '')
// }