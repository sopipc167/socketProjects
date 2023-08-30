//const, let 키워드: 함수 스코프를 블록과 같이 할당
//객체 리터럴: 객체에 동적으로 속성을 추가, 객체를 선언함과 동시에 속성을 초기화할 수 있음
//템플릿 문자열 : 백틱을 이용해서 선언, ${}형식으로 변수를 집어넣을 수 있음
//화살표 함수: 람다식
//비구조화 할당: 
const condition = true;
const promise = new Promise((resolve, reject)=> {
    if (condidtion){
        resolve('성고')
    } else {
        reject('실패')
    }
});
promise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error);
})