class SchoolProject {
  constructor() {
    this.students = [];
    this.subjects = ["Math", "English", "Science"];
    this.tasks = [
      { subject: "Math", task: "Define the formula for y = mx + b" },
      { subject: "English", task: "Identify and correct common spelling mistakes in sentences" },
      { subject: "Science", task: "Discuss why solar panels are essential for reducing carbon emissions" }
    ];

    this.tasks.push({ subject: "Art", task: "Draw a picture of your favorite animal" });
  }

  showTasks() {
    this.students.forEach(student => console.log(`${student.name} is working on: ${student.subject}`));
    console.log(`The tasks completed so far are:\n${this.tasks.map(task => `${task.subject}: ${task.task}`).join('\n')}`);
  }
}

const schoolProject = new SchoolProject();
schoolProject.showTasks();
