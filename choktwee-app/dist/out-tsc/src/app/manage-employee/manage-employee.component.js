import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
var ManageEmployeeComponent = /** @class */ (function () {
    function ManageEmployeeComponent(service) {
        this.service = service;
    }
    ManageEmployeeComponent.prototype.ngOnInit = function () {
        console.log(this.service.refreshList().subscribe(function (res) { return console.log(res); }));
    };
    ManageEmployeeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-manage-employee',
            templateUrl: './manage-employee.component.html',
            styleUrls: ['./manage-employee.component.sass']
        }),
        tslib_1.__metadata("design:paramtypes", [EmployeeService])
    ], ManageEmployeeComponent);
    return ManageEmployeeComponent;
}());
export { ManageEmployeeComponent };
//# sourceMappingURL=manage-employee.component.js.map