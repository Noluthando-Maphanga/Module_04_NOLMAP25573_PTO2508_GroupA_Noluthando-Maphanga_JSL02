// --- TASK 1 ---
const task1Title = prompt("Enter task 1 title:");
const task1Description = prompt("Enter task 1 description:");

// 1. Get the status and immediately make it lowercase
let task1Status = prompt(
  "Enter task 1 status (todo, doing, done):",
).toLowerCase();

// 2. The "While" loop keeps running as long as the status is WRONG
while (
  task1Status !== "todo" &&
  task1Status !== "doing" &&
  task1Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task1Status = prompt(
    "Enter task 1 status (todo, doing, done):",
  ).toLowerCase();
}

// --- TASK 2 ---
const task2Title = prompt("Enter task 2 title:");
const task2Description = prompt("Enter task 2 description:");

let task2Status = prompt(
  "Enter task 2 status (todo, doing, done):",
).toLowerCase();

while (
  task2Status !== "todo" &&
  task2Status !== "doing" &&
  task2Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task2Status = prompt(
    "Enter task 2 status (todo, doing, done):",
  ).toLowerCase();
}

// 4. Check Task 1
if (task1Status === "done") {
  console.log("Completed: " + task1Title);
}

// 5. Check Task 2
if (task2Status === "done") {
  console.log("Completed: " + task2Title);
}

// 6. Check if NOTHING was done
if (task1Status !== "done" && task2Status !== "done") {
  console.log("No tasks completed, let's get to work!");
}
