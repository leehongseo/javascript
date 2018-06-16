/*console.log(1 + '1');

var num = 1;
var num2 =3;
console.log(num+num2);

var num3:number; // 타입스크립트에서 데이터타입을 선언하는 방법
num3 =3; // 마이크로소프느가 vscode 만들고 최근 깃허브도 8조 들여서 구매
*/
var n = 3;
var f = 3.2; // 자바스크립트는 정수와 실수 따로 구분해있지 않다 
var s = 'abc'; // html은 "" , 자바스크립트는 ''  문법은 아니지만 규칙
var b = true; // 기본적인 데이터타입은 이 4개만 알아도 문제없다 조건문 사용할때 사용할수 있는 타입들
function test() {
    return 1;
} // 리턴이 상당히 중요한데 그 리턴하는 값이 어떤 데이터 타입이냐가 정요하다 
function test1() {
    //return 2; // 이렇게 리턴을 안해야지 에러가 나지 않는다 
}
// 리턴을 하고 안하고의 차이 : 넘버로 써있는건 대입이 되는데 void 같은 경우는 대입이 불가능하다 
var t1 = test();
var t = test1(); // any는 모든것을 다 대입할수있는 타입 
var t3;
t3 = '1';
t3 = 1;
t3 = true; // 자바스크립트는 객체지향기반 (객체지향은 아니지만 방향성이 객체지향쪽이다) 그리고 자바랑 1도 관계없다 
var n1 = 3;
var n2 = 2;
var result = 0;
/*console.log(n1+"+"+n2+"="+result);
var result = n1-n2;
console.log(n1+"-"+n2+"="+result);
var result = n1*n2;
console.log(n1+"*"+n2+"="+result);
var result = n1/n2;
console.log(n1+"/"+n2+"="+result);*/
/*n1++;
console.log('n1++ ='+n1);
n1--;
console.log('n1-- ='+n1);
n1 += 1;
console.log('n1+=1 = '+n1);
n1 -= 1;
console.log('n1-=1 = '+n1);
result = n1 % n2;
console.log(n1+'%'+n2+'='+result);

n1 = 3;
console.log(n1++);
console.log(n1);

console.log(++n1);
console.log(n1);*/
/*if(1=='1'){ // 해당 값이 같은지만 비교 === 하면 값과 타입이 다 같은지 비교
    console.log('1과 \'1\'은 같습니다.'); // 콘솔 하면 1과 '1'은 같습니다 라고 나온다. \' = '
}
else{
    console.log('1과 \'1\'은 다릅니다.');
}*/
var age = 20;
/*console.log('age==20'+(age==20));
console.log('age!=20'+(age!=20)); // ! 참이면 거짓 거짓이면 참으로 바꾸는 부정연산자
console.log('age>=20'+(age>=20));
console.log('age<=20'+(age<=20));
console.log('age<20'+(age>20));
console.log('age<20'+(age<20));*/
var age1 = 10;
/*console.log(age==20 || age1==20);
console.log(age==20 && age1==20);*/
/*for(var idx=1;idx<10;idx++){
    if((idx%2)==0){
        console.log(idx);
    }
}*/
var arr = new Array(); // 방번호는 0부터 해서 자동으로 지정 됨 
arr.push(1);
arr.push(2);
arr.push(3);
console.log(arr[0] + arr[1] + arr[2]);
console.log(arr.length);
for (var idx = 0; idx < arr.length; idx++) {
    console.log(arr[idx]);
}
//# sourceMappingURL=test.js.map