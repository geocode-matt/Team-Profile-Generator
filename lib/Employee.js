class Employee {
    constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    }
    getName() {
        return this.name;
      };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
      };

    getRole() {
        return 'Employee';
    };
}

module.exports = Employee;


// example code from modules
// getName() {
//     if (this.health === 0) {
//       return false;
//     }
//     return true;
//   };

// getId() {
// return `${this.name}'s health is now ${this.health}!`;
// };

// getEmail() {
//     const min = this.strength - 5;
//     const max = this.strength + 5;
  
//     return Math.floor(Math.random() * (max - min) + min);
//   };

// getRole() {
// this.health -= health;

// if (this.health < 0) {
//     this.health = 0;
// }
// };