new fullpage('#full-page',{
    licensKey:'',//완전한 무료가 아님
    navigation:true,
    navigationPosition: 'right',
    verticalCentered : true
    // dragAndMove: horizontal
})

//const 변수명 = new Swiper('적용대상',{속성:값, 속성:값});
const main_slide = new Swiper('#main_slide',{
    //자동재생-중가로({}) 묶어줘야함
    autoplay:{delay:2500}, // delay 속도
    loop:true,
    direction:'horizontal',

    pagination:{
        el: '.swiper-pagination',
        clickable:true
    }
});
//--------------------------------------------------------
const tabTitle = document.querySelectorAll ('.tab_title > a')
const tabContents = document.querySelectorAll ('.sub')
const button = document.querySelectorAll('.butn')
const s2 = document.querySelector('.s2')
console.log(tabTitle, tabContents)
//---------------------
for(let j of button){j.style.display = 'none'}
for(let i of tabContents){i.style.display = 'none'}
tabTitle.forEach(function(t,i,a){
    t.addEventListener('click',function(e){
        e.preventDefault()
        for(let i of tabTitle)[i.classList.remove('active')]
        t.classList.add('active')
        for(let i of tabContents){i.style.display = 'none'}
        tabContents[i].style.display = 'block'
        for(let i of button){i.style.display = 'none'}
        button[i].style.display = 'block',
        s2.css('backgorund-image','url(../imges/main2.png)')
    })
})
// tabTitle.addEventListener('click',function(e){
//     $('s1').css('backgorund-image','url(../imges/main2.png)')
// })
const h_grap = document.querySelector('.contents .h_grap')
const f_grap = document.querySelector('.contents .f_grap')
const title = document.querySelector('.s4 .title')
console.log(h_grap,f_grap,title)
gsap.to(f_grap,{
    scrollTriger:title,
    scaleX:1,
    duration:3,
    delay:3,
    ease:"power2.out"
    // duration:2
})