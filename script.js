document.addEventListener('DOMContentLoaded', () => 
{
    document.querySelector('#new-task').onsubmit = () => 
    {
        cb = document.createElement("INPUT");
        cb.setAttribute("type", "checkbox");
    
        const li = document.createElement('li');
        li.appendChild(cb);
    
        taskText = document.createTextNode(document.querySelector('#task').value);
        li.appendChild(taskText);
    
        deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'x';
        deleteBtn.style.marginLeft = '10px';
        deleteBtn.onclick = () => 
        {
            li.remove();
        };
        li.appendChild(deleteBtn);
    
        document.querySelector('#tasks').append(li);
        document.querySelector('#task').value = '';

        return false;
    };

    document.querySelector('#toggle-all').onclick = () => 
    {
        checkboxes = document.querySelectorAll('#tasks input[type="checkbox"]');
        allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);

        checkboxes.forEach(checkbox => 
        {
            checkbox.checked = !allChecked;
        });
    };
});
