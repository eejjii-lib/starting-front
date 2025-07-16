//2025.07.16 _js 기본 구조

//1. 변수 선언
//자료형 없이 let(일반 변수), const(상수.한번 정하면 불변)로 변수 선언 방식만 결정.
let a = "copilot"; //문자열 ""
a = 22; //a는 변수니까 값을 바꿀 수 있음. 다만 java와 달리 동적 언어라 자료형도 변할 수 있음.
let age = 20;
let isAdult = true;
let scores = [100, 90, 80]; //배열

const PI = 3.14; //이후로 값을 변경할 수 없음.

//2. 객체 선언
//java와 동일한 개념. 찍어내는 자동차. but 클래스 없이도 객체 생성이 가능, 접근 제어자 없음 등 차이 존재
//개념은 같지만 구조가 완전 다르다. key-value 쌍으로 구성됨.
const person = {
    name: "bird", //클래스를 안만들어놔도 바로 객체 생성 가능.
    age: 3, // 자료형 선언도 안함.
    isAnimal : true //new 없이 그냥 객체를 생성한 것.
};

/* java와 차이 비교
class Person {
    String name;
    int age;
    boolean isAnimal;
}

Person p = new Person();
p.name = "bird";
p.age = 3;
p.isAnimal = true;

cf. 클래스(틀)를 먼저 만들고, 객체를 만들어 그 안의 특성을 부여했는데
    js에서는 클래스 선언을 안해도 되고, 자료형 선언은 안함.
    그냥 객체 선언 내에서 틀도 특성도 동시에 한 쌍으로서 만듦.*/

//class 선언을 해도 됨. 비슷한 객체를 여러개 만들 때는 사용함.
class Person {
    constructor(name, age){
        this.name = name; //생성자 this.
        this.age = age;
    }
}
const p1 = new Person("name", 22); //이 경우엔 new로 객체 생성.

//3. 조건문, 반복문
//기본적으로 알던 구조. 연산자도 유사.
let count =0;
let x;

//조건
if(x==2){
    console.log(count++); //console은 마치 System.out
}
else if(x==3){
    console.log(count--) //log는 일반 메시지 출력
}
else {
    console.log(count+=x); //연산자 동일
}

//반복
for (let i =0; i<5; i++){
    console.log(i);
}
while (i<5){
    console.log(i);
}
/*추가적인 연산자
5 == "5" 는 참임. type이 달라도 내용이 같으면 같다고 인식.
5 === "5"는 거짓임. type까지 동일해야할 땐 = 세개 사용.
!=와 !==도 동일한 관계.*/

//4. 함수
//public 등 쓸 필요 X, return 값의 자료형 선언할 필요 X.
//그냥 function + 함수 이름 + 매개 변수 쓰면 됨. 매개변수와 return은 없어도 됨. 
function sayHi(name){
    console.log("Hi, "+ name);
}
const add = (a,b) => a+b; 
// 화살표 함수: 매개변수 a와 b를 a+b 연산해 결과를 반환해 const add에 저장하는 함수이다.
console.log(add(3,5));

//5. 배열과 배열 메소드
//대괄호로 감싼다. 접근하는 방식도 java와 거의 유사. 모든 자료형을 넣을 수 있음.
let fruits = ["apple", "banana", "grape"];
let numbers = [1, 2, 3, 4, 5];

console.log(fruits[0]); //apple 반환.
console.log(numbers[3]); //4 반환.

let users = [ //배열 안에 객체를 넣을 수도 있음.
    { name: "gil dong", age: 15},
    { name: "gil mong", age: 16}
];

//기본 메소드
fruits.length; //배열의 요소 개수
fruits.push(); //맨 뒤에 추가
fruits.pop(); //가장 마지막 요소 삭제
fruits.includes(); //괄호 안의 값이 포함되어있는지 확인
fruits.indexOf(); //괄호 안의 값의 인덱스를 반환함.

//반복 메소드: 배열의 요소들을 전부 돌아가면서 적용함.
fruits.forEach(function(fruit){ //즉석에서 정의하는 익명 함수. 호출하는게 아니라 이름이 없음.
    //forEach문으로, fruits 배열의 모든 요소를 함수에 집어 넣는 동작을 반복하게 됨.
    console.log(fruit); //ex. fruits의 첫번째 요소, apple을 익명함수에 넣음. console.log("apple").
});

let doubled = numbers.map(function(n){ //배열의 각 요소를 변형해서 새 배열을 반환.
    return n*2; //모든 요소에 2를 곱한 새로운 배열을 반환해서 doubled에 저장하게 됨.
});
console.log(doubled);

let even = numbers.filter(function(n) { //필터링 해서 새 배열을 반환.
    return n % 2 === 0; //배열의 각 요소들 중 2로 나눠서 나머지가 0인 요소들만 반환
});
console.log(even);

let found = numbers.find(function(n){ //배열의 요소들 중 조건에 해당하는 요소를 찾아 새 배열 반환.
    return n > 3 ; // 3보다 큰 요소를 반환할 것.
});
console.log(found);

let sum = numbers.reduce((acc, cur) => { //배열의 값을 하나로 컴바인하는 메소드. acc: 누적 값, cur: 현재 값.
    return acc + cur; //배열의 모든 요소를 합해서 sum을 반환하게 됨.
}, 0);
console.log(sum);