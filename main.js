let pet = document.getElementsByClassName('pet');
let name = document.getElementsByClassName('name');
let color = document.getElementsByClassName('color');
let gender = document.getElementsByClassName('gender');

const Obj = {
    'pet': pet,
    'name': name,
    'color': color,
    'gender': gender
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

document.addEventListener('DOMContentLoaded', alternateRow);