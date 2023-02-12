let parrallax_strong = 20;
let Other_parrallax_strong = 30;


let bg = document.querySelector('.parralax_one_JS');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg.style.transform = 'translate(-' + x * parrallax_strong + 'px, -' + y * parrallax_strong + 'px)';
    

});



let otherParalaxed = document.querySelectorAll('.otherParralaxed');
for (let i = 0; i < otherParalaxed.length; i++){
    window.addEventListener('mousemove', function(e) { 
        let x2 = e.clientX / window.innerWidth;
        let y2 = e.clientY / window.innerHeight;     
        otherParalaxed[i].style.transform = 'translate(+' + x2 * Other_parrallax_strong + 'px, +' + y2 * Other_parrallax_strong + 'px)';
    });    
}