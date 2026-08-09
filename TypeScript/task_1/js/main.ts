// Sinfin konstruktoru üçün interfeys
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Sinfin özü üçün interfeys
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// Tələb olunan sinif (Class)
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}
