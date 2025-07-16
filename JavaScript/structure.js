//2025.07.16 _js 기본 구조

//1. 변수 선언
//자료형 없이 let(일반 변수), const(상수.한번 정하면 불변)로 변수 선언 방식만 결정.
let a = "copilot"; //문자열은 ""
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
    isAnimal : true //new 이런거 없이 그냥 객체를 생성한 것.
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