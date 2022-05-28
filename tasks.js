//- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, 
//  чтобы при клике на кнопку исчезал элемент с id="text".


let text = document.getElementById('text');

let button = document.getElementsByTagName('button');
button.onclick = (ec) => {
    text.remove();
}


//or

/*
let text = document.createElement('div');
text.setAttribute('id','text');
text.innerText = ('Hello');

let button = document.createElement ('button');
button.innerText = ('Disappear');

document.body.append(text,button);

button.onmousedown = (emd) => {
    text.remove()
}
*/


//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//  При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, 
//  та повідомити про це користувача

/*
let userAge = document.createElement('input');
userAge.type = 'number';
userAge.placeholder = 'Enter your age'

let submit = document.createElement('button');
submit.innerText = 'OK';

document.body.append(userAge,submit);

submit.addEventListener('click', function (ec) {
    if (userAge.value >= 18) {
        alert ('You can pass')
    } else {
        alert ('You shall not pass')
    }
})
*/

//- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується 
//  та виводиться на консоль інформація з цих 2х форм.
//  Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
//  Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

/*
let button = document.getElementById('btn');
button.onclick = (ec) => {
    console.log(document.forms.user.userName.value)
    console.log(document.forms.user.userSurname.value)
    console.log(document.forms.usersLoginPassword.usersLogin.value)
    console.log(document.forms.usersLoginPassword.usersPassword.value)
}
*/
    
//- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, 
//  третій вмиіст ячеєк.
//  При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//  (Додатковачастина для завдання)

/*
let numberOfRows = document.createElement('input');
numberOfRows.type = 'number';
numberOfRows.placeholder = 'Enter number of rows';

let numberOfBlocks = document.createElement('input');
numberOfBlocks.type = 'number';
numberOfBlocks.placeholder = 'Enter number of blocks';

let anyText =document.createElement('input');
anyText.type = 'text';
anyText.placeholder = 'Enter any text';

let submit = document.createElement('button');
submit.innerText = 'OK';

document.body.append(numberOfRows, numberOfBlocks, anyText, submit);

submit.addEventListener('click', function () {

    let tr = numberOfRows.value;
    let td = numberOfBlocks.value;
    let inputText = anyText.value;

    function createTable (tr,td,text) {
        let table = document.createElement('table');
        document.body.append(table);

        for (let i=0; i<tr; i++) {
            let tr = document.createElement('tr');
            table.appendChild(tr);

            for (let j=0; j<td; j++) {
                let td = document.createElement('td');
                td.innerText = `${text}`;
                td.style.border = '1px solid black';
                tr.appendChild(td);
            }
        }
    }

    createTable(tr,td,inputText);
})
*/