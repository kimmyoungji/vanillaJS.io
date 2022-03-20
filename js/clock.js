const clock = document.querySelector("#clock");

function getColck(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText  = `${hours}:${minutes}:${seconds}`;
}

// 일정 간격으로 함수 호출
getColck(); 
setInterval(getColck, 1000);

// 일정 시간 이후에 함수 호출
//setTimeout(sayHello,5000);

// 만약 길이가 1일 문자열이 있을때, 길이가 2가 아니라면, 앞에 0을 붙여라.
// 이 스트링의 길이가 2가 아니라면, 앞에 0을 붙여라
// "1".padStart(2,"0");



