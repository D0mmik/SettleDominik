let counter = 0;
const memberInput = document.getElementById("member-input");
const addMemberBtn = document.getElementById("add-member-btn");

const memberList = document.getElementById("member-list");
const countElement = document.getElementById("count");

addMemberBtn.disabled = true;
memberInput.addEventListener("input", checkInput);

function checkInput() {
    if (memberInput.value.length > 0) {
        addMemberBtn.disabled = false;
    } else {
        addMemberBtn.disabled = true;
    }
}

addMemberBtn.addEventListener("click", function(event) {
    const member = memberInput.value;
    const newMember = document.createElement("li");
    const memberName = document.createElement("p");

    event.preventDefault();
    if(memberInput.value.length > 0) {
        memberName.innerHTML = member;
        memberList.appendChild(newMember);
        newMember.appendChild(memberName);
        memberInput.value = "";
        counter++;
        countElement.textContent = "Member Count: " + counter;
        addMemberBtn.disabled = true;
    } 

});

const removeMemberBtn = document.getElementById("remove-member-btn");
removeMemberBtn.addEventListener("click", function(event) {
    event.preventDefault();
    if (memberList.hasChildNodes()) {
        memberList.removeChild(memberList.lastChild);
        counter--;
        countElement.textContent = "Member Count: " + counter;
      }
  });



const taskInput = document.getElementById("payment-input");
const addTaskBtn = document.getElementById("add-task-btn");

const taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", function(event) {
  event.preventDefault();
  const task = taskInput.value;
  const newTask = document.createElement("li");
  const taskName = document.createElement("p");
  taskName.innerHTML = task;
  taskList.appendChild(newTask);
  newTask.appendChild(taskName);
  taskInput.value = "";
});
