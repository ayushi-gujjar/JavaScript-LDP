
const addButton = document.getElementById('btn1');
addButton.addEventListener('click', addContent);


function addContent() {
    const box = document.createElement('div');
    box.classList.add('box');
    box.id = 'box';

    const text = document.createElement('p');
    text.textContent = 'Helle There';
    box.appendChild(text);

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('btn2');
    removeBtn.id = 'btn2';

    box.append(removeBtn);
    
    const main = document.getElementById("main");
    main.appendChild(box);

    const removeButton = document.getElementById('btn2');
    removeButton.addEventListener('click', removeContet);
}


function removeContet() {
    const listOfBox = document.getElementById('box');
    console.log(listOfBox, 'list of box')
    listOfBox.remove();
}
