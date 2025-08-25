//2025.08.25 test.html 파일의 js

const input = document.getElementById("nameInput");
// 현 페이지에서 nameInput이라는 id를 가진 요소를 불러와 input이라는 객체생성

const btn = document.getElementById("greetBtn");
const result = document.getElementById("result");

btn.addEventListener("click",() =>{
    result.innerText = "Hello, " + input.value + "!";
});
//btn에 클릭하면 result의 내부 텍스트가 Hello, input의 값 !으로 입력되는 함수를 호출하는 리스너를 부여한다.
//click 은 정해진 문자열로, 무엇을 의미하는지 알고 있음.