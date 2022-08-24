var itemList = [];

/** 사용자의 입력값을 itemList 배열에 추가하는 함수 */
function addList() {
  var item = document.querySelector("#item").value;
  itemList.push(item);
  showList();
}

var addBtn = document.querySelector("#add");
addBtn.addEventListener("click", addList);

/**itemList 배열의 내용을 화면에 보여주는 함수 */
function showList() {
  const listDiv = document.querySelector("#itemList");
  listDiv.innerHTML = "";

  for (let i = 0; i < itemList.length; i++) {
    const list = document.createElement("li");
    list.textContent = itemList[i];
    const xBtn = document.createElement("button");
    xBtn.textContent = "X";
    list.appendChild(xBtn);
    listDiv.appendChild(list);
  }

  // itemList.forEach((item) => {
  //   const list = document.createElement("li");
  //   list.textContent = item;

  //   listDiv.appendChild(list);
  // });
}

function removeList() {}
