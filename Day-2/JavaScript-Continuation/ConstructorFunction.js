function Employee(id,name,salary){
  this.id = id;
  this.name = name;
  this.salary =salary;
  //"this" is implicitly returned
}

/*
Modify the above function to expose accessor functions that enforce the following constraints

1. "id" is readonly
2. "name" will resist assigning an empty string
3. "salary" will not accept a value less than the current salary
*/

