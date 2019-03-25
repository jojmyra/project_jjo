import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
        this.url = 'http://localhost:3000/api/employee';
    }
    EmployeeService.prototype.refreshList = function () {
        return this.http.get(this.url + "/all");
    };
    EmployeeService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], EmployeeService);
    return EmployeeService;
}());
export { EmployeeService };
//# sourceMappingURL=employee.service.js.map