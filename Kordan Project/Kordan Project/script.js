let slides = document.querySelectorAll('.slide');
let btns = document.querySelectorAll('.btn');
let slideIndex = 1;



let manualNav = function(manual){
    slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
            btn.classList.remove('active');
        })
    })

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btn,i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    });
});


let repeat = function(activeClass){
    let active = document.getElementsByClassName('active');
    let i = 1;

    let repeater = () => {
        [...active].forEach((activeSlide) => {
            activeSlide.classList.remove('active')
        });

        slides[i].classList.add('active');
        btns[i].classList.add('active');
        i++;

        if(slides.length == i){
            i = 0;
        }
        if (i >= slides.length){
            return;
        };
        }
    setInterval(repeater,2000)

    }

repeat();


// let repeat = function(activeClass){
//     let active = document.getElementsByClassName('active');
//     let i = 1;

//     let repeater = () => {
//         setTimeout(function(){
//             [...active].forEach((activeSlide) => {
//                 activeSlide.classList.remove('active')
//             });

//         slides[i].classList.add('active');
//         btns[i].classList.add('active');
//         i++;

//         if(slides.length == i){
//             i = 0;
//         }
//         if (i >= slides.length){
//             return;
//         };
//         repeater()
//         }, 10000);
    
//     }
//     repeater();
// }
// repeat();