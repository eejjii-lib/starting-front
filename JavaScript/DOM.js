//2025.07.17_DOM 조작하기

//1. DOM
//javascript를 html과 연결하는 개념. 

<h1 id="title">안녕!</h1> //html에서 만든 요소를 js에서 불러와서 특성을 부여하는 등 해야하기 때문에, id로 요소의 이름을 부여함.

const title = document.getElementById("title"); //이런 식으로 불러올 때 요소의 id인 "title"로 불러옴.
                                                //이후 다시 js에서 const로 선언함.
                                                //document는 현재 웹페이지를 말하는데, html에서 script를 호출하면 그 호출 당한 html 페이지를 document로 인식하게 됨.
                                                //정리하면, 현 문장의 의미는 : 상수 title은, 현 웹페이지의 title이라는 id를 가진 요소를 가리키는 객체이다.
title.innerText = "Hello, DOM!"; //title 객체의 내부에 텍스트를 넣음.

let btn = document.getElementById("myButton"); 
let items = document.querySelectorAll(".item"); //요소 한개를 가져올땐 ById, item이나 button처럼 한 클래스를 전부 가져올 땐 querySelectorAll을 사용함.

btn.innerText = "눌러주세요."; //btn 객체에 특성 부여
btn.style.color = "red"; //btn 객체에 스타일 추가
btn.style.display = "none";


//2. 이벤트 리스너 처리방법: 내부 클래스처리나 인터페이스 만들 필요 없음. 이름도 붙이지 않아도 됨. 
/*  item.addEventListener("이벤트",콜백 함수() {
        수행할 동작;
    });
*/
//인터페이스나 어뎁터가 있는게 아니라, 이벤트명이 실행되면, 콜백 함수를 실행하는 것. 콜백함수의 내용은 수행할 동작 코드로서 작성.

btn.addEventListener("click", function() { //click, mouseenter(올렸을 때), mouseout(마우 뗐을때), keydown(키보드 키 눌릴 때), input(input 값이 변할 때), submit(form이 제출될 때)
    alert("버튼 클릭됨");
});

const input = document.getElementById("name");
input.addEventListener("input",function(){
    console.log("현재 입력값: ", input.value);
});

items.forEach(function(item) { //items는 item들 전부를 의미하기 때문에 하나하나 반복하면서 리스너를 부여해야 함.
  item.addEventListener("click", function(e) { //이벤트 객체. 리스너가 너무 많으니까 어떤 이벤트가 발생했는지 구분하려고 사용함.
    alert("버튼이 눌렸어요!");
  });
});

// 이미 선언해둔 함수를 콜백함수로 사용해도 됨.
function handleClick() {
    alert("버튼 클릭됨");
}

btn.addEventListener("click", handleClick);