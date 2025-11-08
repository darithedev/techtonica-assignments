const ingredients = document.querySelector('ul.ingredients');
const list = ingredients.querySelectorAll('li');

for (let i = 0; i < list.length; i++) {
    const text = list[i].textContent;
    
    list[i].textContent = '';
    
    let checkbox = document.createElement("input");
    
    checkbox.type = "checkbox";
    checkbox.name = "ingredient";
    checkbox.value = text;
    
    let label = document.createElement("label");
    
    label.appendChild(checkbox);
    label.appendChild(
        document.createTextNode(text)
    );

    list[i].appendChild(label);
    
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            label.classList.add('checked');
        } else {
            label.classList.remove('checked');
        }
    });
}

const instructions = document.querySelector('ol');
const listInst = instructions.querySelectorAll('li');

for (let i = 0; i < listInst.length; i++) {
    const textInst = listInst[i].textContent;
    
    listInst[i].textContent = '';
    
    let checkbox = document.createElement("input");
    
    checkbox.type = "checkbox";
    checkbox.name = "instruction";
    checkbox.value = textInst;
    
    let label = document.createElement("label");
    
    label.appendChild(checkbox);
    label.appendChild(
        document.createTextNode(textInst)
    );

    listInst[i].appendChild(label);

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            label.classList.add('checked');
        } else {
            label.classList.remove('checked');
        }
    });
}