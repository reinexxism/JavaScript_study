var itemList = [];

var addBtn = document.querySelector("#add"); // #add인 요소를 가져와 addBtn으로 저장
addBtn.addEventListener("click", addList); // addBtn을 클릭하면 addList 함수를 실행

function addList() {
  var item = document.querySelector("#item").value; //텍스트 필드의 내용을 가져옴
  if (item != null) {
    itemList.push(item); // itemList 배열 끝에 item 변숫값을 추가
    document.querySelector("#item").value = "";
    document.querySelector("#item").focus(); // 텍스트 필드에 focus() 함수를 적용
  }
  showList();
}

function showList() {
  var list = "<ul>"; // 목록을 시작하는 <ul> 태그 저장
  for (var i = 0; i < itemList.length; i++) {
    // 배열 요소마다 반복
    list +=
      "<li>" + itemList[i] + "<span class='close' id=" + i + ">X</span></li>"; // 각 요소를 <li>~</li>로 묶음
  }
  list += "</ul>"; // 목록을 끝내는 </ul> 태그 저장
  document.querySelector("#itemList").innerHTML = list;
  var remove = document.querySelectorAll(".clse"); // 삭제 버튼을 변수로 저장 -> 배열 형태가 됨
  for (var i = 0; i < remove.length; i++) {
    remove[i].addEventListener("click", removeList); // 요소를 클릭하면 removeList() 실행
  }
}

function removeList() {
  var id = this.getAttribute("id");
  itemList.splice(id, 1);
  showList();
}
