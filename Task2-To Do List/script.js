document.querySelector('#add').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert('Please Enter Task');
    }
    else {
        document.querySelector('#tasks').innerHTML+= `<div class="task">
<span id="tasknm">${document.querySelector("#newtask input").value}</span>
<button id="updatebtn"class="update">Update</button>
<button id="delbtn"class="delete">Delete</button></div>`;
        var update = document.querySelectorAll('.update');
        var dtsk = document.querySelectorAll('.delete');
        for(var i=0;i<update.length;i++){
            update[i].onclick=function(){
                var up = prompt("Enter Updated Task");
                this.parentNode.remove();
                document.querySelector('#tasks').innerHTML+= `<div class="task"><span id="tasknm">${up}</span>
                <button id="updatebtn"class="update">Update</button>
                <button id="delbtn"class="delete">Delete</button></div>`;
            }
        }
        for(var i=0;i<dtsk.length;i++){
            dtsk[i].onclick=function(){
                this.parentNode.remove();
            }
        }

        var task_list = document.querySelectorAll('#tasknm');
        for(var i=0;i<task_list.length;i++){
            task_list[i].onclick=function(){
                this.classList.toggle('Completed');
            }
        }
        document.querySelector('#newtask input').value = '';


    }
 }