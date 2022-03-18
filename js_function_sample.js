"use strict";

let i=-1

function autoGallery(){
    i++;
    console.log(`i->${i}`)

    if(i>3){
        i=-1;
    }
}

// setInterval(함수, 시간);
//함수를 시간(1000이 1초) 후 마다 실행 

//0~5까지만 콘솔에 출력
// 다시 0~5


setInterval(autoGallery,5000);


//()();즉시 실행 함수 

(function(){
    autoGallery();
})();

(()=>autoGallery());