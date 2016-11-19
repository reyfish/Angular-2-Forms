"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var FormComponent = (function () {
    function FormComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.showCity = true;
        this.formStatusChange = new core_1.EventEmitter();
    }
    FormComponent.prototype.formValidChanges = function () {
        console.log(this.userForm.valid);
    };
    FormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userForm = this._formBuilder.group({
            name: ['Alex', [forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.maxLength(10)]],
            email: [],
            address: this._formBuilder.group({
                street: [],
                city: ['Richmond Hill', [forms_1.Validators.required]],
                postalcode: [null, [forms_1.Validators.pattern('^[1-9][0-9]{4}$')]]
            })
        });
        this.userForm.statusChanges.subscribe(function (value) {
            console.log(value);
            _this.formStatusChange.emit(value);
        });
    };
    FormComponent.prototype.onSubmit = function () {
        console.log(this.userForm.value);
    };
    FormComponent.prototype.onClick = function () {
        this.showCity = !this.showCity;
        if (!this.showCity)
            this.userForm.controls['address'].controls['city'].disable();
        else
            this.userForm.controls['address'].controls['city'].enable();
        console.log(this.userForm.controls['address'].controls['city']);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FormComponent.prototype, "formStatusChange", void 0);
    FormComponent = __decorate([
        core_1.Component({
            selector: 'my-form',
            templateUrl: 'app/form.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map