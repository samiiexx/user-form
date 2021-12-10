// USER FORM SCRIPT
// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        // Remove error after 3s
        setTimeout(() => msg.remove(), 3000);
    } 
    else {
        // Create new list item with user
        const li = document.createElement('li');

        // Add text node with input values
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        // Add HTML
        li.innerHTML = `<strong>${nameInput.value}</strong>: ${emailInput.value}`;
        
        // Append to ul
        userList.appendChild(li);

        //  Clear the fields
        nameInput.value = '';
        emailInput.value = '';
    }
}

