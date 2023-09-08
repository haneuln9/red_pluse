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
    spaceBetween:10,
    // disableOnInteraction:false,
    pagination:{
        el: '.swiper-pagination',
        clickable:true
    }
});
const s5_slide = new Swiper('#s5_slide',{
    //자동재생-중가로({}) 묶어줘야함
    autoplay:{delay:2500}, // delay 속도
    loop:true,
    slidesPerView:1,
    direction:'horizontal',
    // pagination:{
    //     el: '.swiper-pagination',
    //     clickable:true
    // }
});
//--------------------------------------------------------
const tabTitle = document.querySelectorAll('.tab_title > a')
const tabContents = document.querySelectorAll('.sub')
const button = document.querySelectorAll('.butn')
const s2 = document.querySelector('.s2')
console.log(tabTitle, tabContents,s2)
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
        button[i].style.display = 'block'
        s2.style.backgroundImage = `url(./imges/main${i}.png)`
    })
})
/*----------------숫자 올라가는 효과----------------------- */
// $(function() {
//     var cnt0 = 0;
//     timeCounter();
//     function timeCounter() {
//         id0 = setInterval(count0Fn, 2.597649);
//         function count0Fn() {
//             cnt0++;
//             if (cnt0 > 38,496,337) {
//                 clearInterval(id0);
//             } 
//             else {
//                 $(".number").eq(0).text(cnt0);
//             }
//         }
//     }
// })
// function Fullpage__init(){
    
// }