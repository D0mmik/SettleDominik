let counter = 0;
const memberInput = document.getElementById("member-input");
const addMemberBtn = document.getElementById("add-member-btn");
let memberId = 0;

const memberList = document.getElementById("member-list");
const countElement = document.getElementById("count");
const newMember = document.createElement("li");

addMemberBtn.disabled = true;
memberInput.addEventListener("input", checkInput);

function checkInput() {
    if (memberInput.value.length > 0) {
        addMemberBtn.disabled = false;
    } else {
        addMemberBtn.disabled = true;
    }
}

addMemberBtn.addEventListener("click", function (event) {
    const member = memberInput.value;
    const newMember = document.createElement("li");
    const memberName = document.createElement("p");
    const moneyText = document.createElement("p");

    event.preventDefault();
    if (memberInput.value.length > 0) {
        memberName.innerHTML = member;
        memberList.appendChild(newMember);
        newMember.appendChild(memberName);
        newMember.appendChild(moneyText);
        counter++;
        countElement.textContent = "Member Count: " + counter;
    }
});

memberList.addEventListener("click", function (event) {
    if (event.target.tagName == "LI") {
        memberList.removeChild(event.target);
        counter--;
        countElement.textContent = "Member Count: " + counter;
        members.forEach(member => {
            console.log(member);
        });
    }
});



const taskInput = document.getElementById("payment-input");
const addTaskBtn = document.getElementById("add-task-btn");

const taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const task = taskInput.value;
    const newTask = document.createElement("li");
    const taskName = document.createElement("p");
    taskName.innerHTML = task;
    taskList.appendChild(newTask);
    newTask.appendChild(taskName);
    taskInput.value = "";
});


