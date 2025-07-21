//2025.07.21_list 추가하는 event 처리 테스트

const input = document.getElementById("todoInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("todoList");

button.addEventListener("click", function() {
  const text = input.value;
  if (text == "") return;

  const li = document.createElement("li"); //li라는 요소를 생성함.
  li.innerText = text; //input의 값을 li의 innerText로.

  li.addEventListener("click", () => { //click하는 이벤트 발생 시, 화살표 함수 호출.
    li.remove(); //화살표 함수 내용: 자기 자신인 li 제거하기.
  });

  list.appendChild(li);
  input.value = ""; //입력 창을 완전히 비우게 됨.

});