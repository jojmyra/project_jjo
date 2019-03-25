export class Employee {
    ID_MST_employeeId : String;
    employee_type: String;
    employee_first_name : String;
    employee_last_name: String;
    employee_citizen_id : String;
    employee_gender : String;
    employee_telephone : String;
    employee_salary : Number;
    employee_birthday : String;
    username : String;
    password : String;
    address? : {
        address_id : String
        bloc : String
        district : String
        sub_district : String
        province : String
        postcode : String 
    }
}
