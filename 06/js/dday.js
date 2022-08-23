var now = new Date(); // 오늘 날짜 정보
var firstDay = new Date("2022-04-10"); // 처음 만난 날의 날짜 정보

var toNow = now.getTime();
var toFirst = firstDay.getTime();
var passedTime = toNow - toFirst; // 처음 만난 날과 오늘 사이의 차이(밀리초값)
var passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24)); // 밀리초를 날짜 수로 변환한 후 반올림

document.querySelector("#accent").innerText = passedDay + "일";

//날짜를 계산하는 함수
function calcDate(days) {
  var future = toFirst + days * (1000 * 60 * 60 * 24);
  var someday = new Date(future);

  var year = someday.getFullYear();
  var month = someday.getMonth() + 1;
  var date = someday.getDate();

  document.querySelector("#date" + days).innerText =
    year + "년 " + month + "월 " + date + "일";
}

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);
