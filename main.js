'use strict'

// ハンバーガーメニューの実装
const humburger = document.getElementById('humburger-img');
const incorrect = document.getElementById('incorrect-img');
const navigation = document.getElementById('target')
const header = document.getElementById('header');

humburger.addEventListener('click', () => {
    navigation.classList.remove('header-contents-hide');
    header.classList.add('header-hide');
});


incorrect.addEventListener('click', () => {
    navigation.classList.add('header-contents-hide');
    header.classList.remove('header-hide');
});


// スライドショーの実装（第一回提出時）
// let first_bg =  document.getElementById('slide-show');
// console.log(first_bg);
// let current_bg = first_bg;


// setInterval(function(){
//     let next_bg = current_bg.nextElementSibling ? current_bg.nextElementSibling: first_bg;
//     current_bg.classList.remove('is_active');
//     next_bg.classList.add('is_active');
    
//     current_bg = next_bg;

//   }, 4000);


// スライドショーの実装（第二回提出時）
const images = [
    './images/slide/slide1.png',
    './images/slide/slide2.png',
    './images/slide/slide3.png',
    './images/slide/slide4.png',
    './images/slide/slide5.png',
    './images/slide/slide6.png',    
]; // images.length = 6 




let currentIndex = -1; // 現在表示している配列番号 -> 初めに表示される背景画像を[0]にするために初期値を-1に設定
    let IndexFlag = 0;  // どっちを表示して、どっちを消すかのフラグ

    function imageChange() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        IndexFlag = (IndexFlag == 0) ? 1 : 0;
        
        const slide1 = document.getElementById('slide-show1');
        const slide2 = document.getElementById('slide-show2');
        console.log('IndexFlag',IndexFlag);
        if (IndexFlag == 0) {
            slide1.style.backgroundImage = `url( ${images[currentIndex]} )`
            slide1.classList.add('fadein');
            slide1.classList.remove('fadeout');
            slide2.classList.remove('fadein');
            slide2.classList.add('fadeout');
            
        }else{
            slide2.style.backgroundImage = `url( ${images[currentIndex]} )`
            slide1.classList.remove('fadein');
            slide1.classList.add('fadeout');
            slide2.classList.add('fadein');
            slide2.classList.remove('fadeout');
        }

        setTimeout( 'imageChange()' , 5000);
    }


    
imageChange();

    

    
