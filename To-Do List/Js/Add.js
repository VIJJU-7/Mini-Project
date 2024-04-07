
var addButton = document.querySelector('button');
var dateInput = document.querySelector('#date');
var messageInput = document.querySelector('#message');
var tableBody = document.querySelector('tbody');

addButton.addEventListener('click', function() {

    if (!dateInput.value || !messageInput.value) {
        alert('Some Fields Are Missing !!!!');
        return;
    }
    
    var row = document.createElement('tr');
    var dateCell = document.createElement('td');
    var messageCell = document.createElement('td');
    var actionCell = document.createElement('td');
    var checkbox = document.createElement('input');
   
    dateCell.textContent = dateInput.value;
    messageCell.textContent = messageInput.value;
    checkbox.type = 'checkbox';
    actionCell.appendChild(checkbox);
    
    row.appendChild(dateCell);
    row.appendChild(messageCell);
    row.appendChild(actionCell);
   
    tableBody.appendChild(row);
    dateInput.value = '';
    messageInput.value = '';

    alert('Task Has Been Added')
// });

// deletebutton.addEventListener('click', function() {
   
//     var checkboxes = document.querySelectorAll('input[type=checkbox]');
//     for (var i = 0; i < checkboxes.length; i++) {
//         if (checkboxes[i].checked) {
//             tableBody.removeChild(checkboxes[i].parentNode.parentNode);
//         }
//     }

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {  
            tableBody.appendChild(row);
        } else {
            tableBody.insertBefore(row, tableBody.firstChild);
        }
    });
});
    // deletebutton.addEventListener('click', function() {
    //     tableBody.removeChild(row);
    // });
// });
