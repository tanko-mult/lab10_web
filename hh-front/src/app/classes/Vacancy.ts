export class Vacancy {
  id: number = undefined;
  name: string = undefined;
  description: string = undefined;
  salary: string = undefined;
  company: string = undefined;

  constructor(id: number, name: string, description: string, salary: string, company: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.salary = salary;
    this.company = company;
  }
}
