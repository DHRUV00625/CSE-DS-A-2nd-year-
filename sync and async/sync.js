function executeTask(taskName, duration) {
	const startTime = Date.now();

	while (Date.now() - startTime < duration) {
	}

	console.log(`${taskName} completed`);
}

console.log("Program started");
executeTask("Task 1", 1000);
executeTask("Task 2", 1000);
executeTask("Task 3", 1000);
console.log("Program completed");
