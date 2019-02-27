import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegService } from 'src/app/service/reg.service';
var RegComponent = /** @class */ (function () {
    function RegComponent(fb, regservice) {
        this.fb = fb;
        this.regservice = regservice;
        this.submited = false;
        this.regForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            username: ['', Validators.required],
            idnumber: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
        this.list = "...";
    }
    RegComponent.prototype.ngOnInit = function () {
    };
    RegComponent.prototype.listing = function () {
        var _this = this;
        this.regservice.list().subscribe(function (response) { _this.list = response; }, function (error) { return console.error('Error!', error); });
    };
    RegComponent.prototype.onSubmit = function () {
        var _this = this;
        // console.log(this.regForm.value);
        this.regservice.reg(this.regForm.value)
            .subscribe(function (response) { console.log('Success!', response); _this.Check = response; }, function (error) { return console.error('Error!', error); });
        this.listing();
        this.success();
    };
    RegComponent.prototype.success = function () {
        if (this.Check['msg'] == "yes") {
            this.submited = true;
            this.name = this.Check['details'].username;
        }
    };
    RegComponent = tslib_1.__decorate([
        Component({
            selector: 'app-reg',
            templateUrl: './reg.component.html',
            styleUrls: ['./reg.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, RegService])
    ], RegComponent);
    return RegComponent;
}());
export { RegComponent };
//# sourceMappingURL=reg.component.js.map