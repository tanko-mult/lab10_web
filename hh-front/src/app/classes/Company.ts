export class Company {
  id: number = undefined;
  name: string = undefined;
  description: string = undefined;
  city: string = undefined;
  address: string = undefined;

  constructor(id: number, name: string, description: string, city: string, address: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.city = city;
    this.address = address;
  }
}
