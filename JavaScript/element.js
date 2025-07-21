//2025.07.21_js에서 element 추가& 삭제하기

//html에서 만들어둔 요소들은 처음부터 화면에 존재하는 요소들이라서 코드를 수정하지 않는 이상 요소가 사용자에 의해 생기거나 지워지지 않음.
//js에서 요소를 만들면 사용자가 웹에서 버튼을 누르거나 동작할 때 요소가 생겨나거나 사라지게 할 수 있음.

const newItem = document.createElement("li"); // 일단 js에서 <li> 요소를 만들어줌.
newItem.innerText = "새로운 할 일";          // 텍스트를 넣어줌

/*html
<ul id="todoList"></ul> //html에서 todoList라는 id를 가진 ul을 만듦. */

const list = document.getElementById("todoList"); //html에서 만든 todoList를 js로 불러옴.
list.appendChild(newItem); // <ul> 안에 <li>를 붙임

newItem.remove(); // 그 요소를 완전히 없앰
