"use strict";


//함수 선언식 호이스팅 가능 
//↓
f1(100,300);
//가능 
function f1(num1,num2){
    return num1+num2;
}

const f1ReturnVal=f1(100,300);


//함수 표현식은 호이스팅이 안되서 위에 거 같이하면 에러남
const f2=function(num1,num2){
    console.log(`num1->${num1},  num2->${num2}`);
    return num1 + num2;
}

//arrow function 

const f3=()=>console.log(`f3함수 호출`);

f3();

const f4=num=>console.log(`f4함수 호출 num->${num}`);
f4(1000);

const f5=(num1,num2)=>num1+num2;
const f5ReturnVal=f5(200,300);


console.clear();

const words =  ['spray','limit','elite','exuberant','destrunction','present']

const result = words.filter(word => word.length>6);

const rs1=words.filter(function(el,idx,arr){
    if(idx>3) {
        return el;//배열에서 조건에 맞는 요소들을 필터링 
    }
});

//모두 true일때문 true 
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1=[1, 30, 39, 29, 10, 13];

console.log(array1.every(function(el){
    return el < 40;
}));
console.log(array1.every(el=>el<40));

//하나 이상 true면 true를 반환 

const array = [1, 1, 3, 1, 5];

const even = element => element % 2 === 0;
//함수 선언식 
function even1(element){
    return element % 2 === 0
}
//함수 표현식 
const even2=function(element){
    return element % 2 === 0;
}

console.log(array.some(even));
console.log(array.some(even1));
console.log(array.some(even2));

