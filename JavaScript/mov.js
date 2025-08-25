//2025. 08. 25 js의 요소 animation

//1. 이벤트 기반 제어
const box= document.getElementById("box");
box.addEventListener("click", ()=> {
    box.style.transform = "translateX(200px)";
    //요소.style.속성명 = "값" 꼴
    //클릭하면 box가 X축으로 200px 만큼 이동함.
    box.style.color="red";
});

//2. 정밀한 애니메이션
let x=0;
function move(){
    x+=2;
    box.style.transform = `translateX(${x}px)`;
    //값이 고정이 아니라서 ""가 아니라 ``사용. 변수 값 넣을 땐 ${} 사용.
    //또는 "translateX(" + x + " px)" 가능.
    if (x<300) requestAnimationFrame(move);
    //requestAnimationFrame은 다음 화면을 그리기 전에 move 함수를 다시 실행해달라고 요청하는 함수. 계속 활성화시키는 느낌.
    //결론 적으로 x가 300보다 작으면 이벤트를 실행하기 위해, 다음 화면으로 업데이트 될 때 move 함수를 실행한걸 반영하라는 의미.
}
move();