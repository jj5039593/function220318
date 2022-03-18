"use strict";

const gallery=document.querySelector('.gallery');

const galleryLi=document.querySelectorAll('.gallery>ul>li');

let i=-1

function autoGallery(){
    i++;

     // li간 거리 
    const gap = galleryLi[1].offsetLeft- galleryLi[0].offsetLeft;
    //gallery 가 왼쪽으로 이동

    const goto = (-i*gap) + 'px'
    console.log(`goto ${goto} gap ${gap} i${i}`);

    gallery.style.left=goto
    gallery.style.transition='all 1s'

    if(i>=galleryLi.length-1){ i=-1; }

}

//3초마다 autoGallery 실행 

setInterval(autoGallery,3000);

(()=>{
    autoGallery();
});


//galleryLi img넣기 ㅠㅠ 
//for, 배열, push 이용 

const arrBg=[]; // 배열 만들기 

for(let i=0;i<galleryLi.length-1;i++){
  arrBg.push(`url(../img/m${i}.jpg) no-repeat 50%/cover`);
  galleryLi[i].sytle.background=arrBg[i];
}


