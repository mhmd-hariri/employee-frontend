import axios from "axios";

const Employees_API_BASE_UR ="http://localhost:8080/api/v1/employees";
class EmployeeService {

    getEmployees(){
        return axios.get(Employees_API_BASE_UR);
    }
    createEmployee(employee) {
        return axios.post(Employees_API_BASE_UR,employee);
    }
    getEmployeeById(employeeId){
        return axios.get(Employees_API_BASE_UR + '/' + employeeId);
    }
    updateEmployee(employee, employeeId) {
        return axios.put(Employees_API_BASE_UR + '/' + employeeId, employee);
    }
    deleteEmployeeById(employeeId) {
        return axios.delete(Employees_API_BASE_UR + '/' + employeeId);
    }

}
export default EmployeeService;