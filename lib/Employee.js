//Create this 1st and then make copies for others
class Employee {
    constructor(name, id, email) {
        //trim() remove blank spaces
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }

        this.name = name;
        this.id = id;
        this.email = email;

    }
    // These are all Getters
    getName() {
        // console.log(`Employee Name: ${this.name} `);
        return this.name;
    };

    getId() {
        // console.log(`Employee ID: ${this.id}`);
        return this.id;
    };

    getEmail() {
        // console.log(`Employee Email: ${this.email}`);
        return this.email;
    }

    getRole() {
        // It will return what this object functionally is-- the string: 'employee'
        // console.log(`Employee Role: ${this.getRole}`);
        return "Employee";
    }
}

module.exports = Employee;