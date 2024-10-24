import pool from './connection';
import fs from 'fs';
import path from 'path';

// Function to execute SQL from a file
const executeSQLFile = async (filePath: string) => {
    const sql = fs.readFileSync(path.join(__dirname, filePath)).toString();
    await pool.query(sql);
};

// Function to seed the database
export const seedDatabase = async () => {
    await executeSQLFile('employeeDetails/createTables.sql');
    await executeSQLFile('employeeDetails/insertDepartments.sql');
    await executeSQLFile('employeeDetails/insertEmployeeRoles.sql');  // Updated reference
    await executeSQLFile('employeeDetails/insertEmployees.sql');
};

// Example function to add an employee
export const addEmployee = async (firstName: string, lastName: string, roleId: number, managerId: number | null) => {
    const query = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)';
    await pool.query(query, [firstName, lastName, roleId, managerId]);
};

// Example function to update an employee role
export const updateEmployeeRole = async (employeeId: number, newRoleId: number) => {
    const query = 'UPDATE employee SET role_id = $1 WHERE id = $2';
    await pool.query(query, [newRoleId, employeeId]);
};
