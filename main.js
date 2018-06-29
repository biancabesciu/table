const Obj = {
    'pet': "",
    'name': "",
    'color': "",
    'gender': ""
};

let tr = document.getElementsByClassName('row');

function alternateRow() {
    for (let i = 0; i < tr.length; i++) {
        let rowIndex = tr[i].rowIndex - 1;
        let odd = rowIndex % 2 ;

        if(odd) {
            tr[i].classList.add('odd');
        } else {
            tr[i].classList.add('even');
        }
    }
}

let addRowBtn = document.getElementById('addRow');
addRowBtn.addEventListener('click', function() {
    let pet = document.getElementById('pet').value;
    let name = document.getElementById('name').value;
    let color = document.getElementById('color').value;
    let gender = document.getElementById('gender').value;
    let table = document.getElementById('tableBody');

    Obj.pet = pet;
    Obj.name = name;
    Obj.color = color;
    Obj.gender = gender;

    let newRow = document.createElement('tr');
    newRow.className = "row";
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');
    let btnDelete = document.createElement('input');
    btnDelete.type = "button";
    btnDelete.value = "Delete";
    td5.appendChild(btnDelete);

    td1.innerHTML = Obj.pet;
    td2.innerHTML = Obj.name;
    td3.innerHTML = Obj.color;
    td4.innerHTML = Obj.gender;

    newRow.appendChild(td1);
    newRow.appendChild(td2);
    newRow.appendChild(td3);
    newRow.appendChild(td4);
    newRow.appendChild(td5);

    table.appendChild(newRow);
    alternateRow(table.children)
});

document.addEventListener('DOMContentLoaded', alternateRow);