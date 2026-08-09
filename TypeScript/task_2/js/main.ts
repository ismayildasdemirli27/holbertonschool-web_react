// İşçinin Director olub-olmadığını yoxlayan Type Predicate funksiyası
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// İşçinin tipinə uyğun tapşırığı icra edən funksiya
function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

// Nəticəni yoxlamaq üçün (Şərtdəki Example)
executeWork(createEmployee(200));
executeWork(createEmployee(1000));
