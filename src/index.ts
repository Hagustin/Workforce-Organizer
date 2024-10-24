// Code to start the application
// Import the inquirer package
// Import the getAllEmployees and addEmployee functions from the queries.ts file
import inquirer from 'inquirer';
import { seedDatabase, addEmployee, updateEmployeeRole } from '../db/db';


// Main function to start the application
const main = async () => {
    await seedDatabase();  // Seed the database on startup

    // Add your logic for user interaction here
    // Example prompt to add an employee
    const response = await inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: 'Enter the first name of the employee:',
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'Enter the last name of the employee:',
        },
        {
            type: 'number',
            name: 'roleId',
            message: 'Enter the role ID for the employee:',
        },
        {
            type: 'number',
            name: 'managerId',
            message: 'Enter the manager ID for the employee (leave blank if none):',
        },
    ]);

    await addEmployee(response.firstName, response.lastName, response.roleId, response.managerId || null);
    console.log('Employee added successfully.');

    // More prompts for other functionalities like updating roles can be added here
};

main().catch(err => console.error(err));

