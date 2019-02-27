import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';
import { ToastrService } from 'ngx-toastr';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, loginservice, toastr) {
        this.fb = fb;
        this.loginservice = loginservice;
        this.toastr = toastr;
        this.submited = false;
        this.LoginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loginservice.login(this.LoginForm.value)
            .subscribe(function (response) { console.log('Success!', response); _this.submited = true; }, function (error) { return console.error('Error!', error); });
    };
    LoginComponent.prototype.showSuccess = function () {
        this.toastr.success('Hello world!', 'Toastr fun!');
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, LoginService, ToastrService])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map