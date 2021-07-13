function addList() {
    let list = document.getElementById('todolist'); // ul 값 가져옴
    let todo = document.getElementById('item'); // input 값 가져옴
    let listItem = document.createElement('li'); // create element이용 새로운 li 생성
    let xBtn = document.createElement('button'); // ↑ 위에서 생성한 li에 닫기 버튼 생성
    listItem.className = 'list-group-item list-group-item-action list-group-item-warning';

    xBtn.className ='close';
    xBtn.innerHTML = 'x'; // close 버튼에 이벤트처리
    xBtn.onclick = function(e){
        // 이벤트가 발생한 li요소를 구해서 ul에서 제거하기
        let pnode = e.target.parentNode;
        list.removeChild(pnode);
    }

    listItem.innerText = todo.value; // li 요소 구성
    listItem.appendChild(xBtn);
    list.appendChild(listItem); // ul 요소에 li 요소 추가

    todo.value = ""; // todo 등록 후 input칸 비우기  
    todo.focus(); // 포커스 이동
}

function press(f){
    if(f.keyCode == 13){
        formname.submit();
    }
}
