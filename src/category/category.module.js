"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CategoryModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var category_entity_1 = require("./category.entity");
var category_resolver_1 = require("./category.resolver");
var category_service_1 = require("./category.service");
var CategoryModule = /** @class */ (function () {
    //always create a empty class to export Modules
    function CategoryModule() {
    }
    CategoryModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([category_entity_1.Category])],
            providers: [category_service_1.CategoryService, category_resolver_1.CategoryResolver]
        })
        //always create a empty class to export Modules
    ], CategoryModule);
    return CategoryModule;
}());
exports.CategoryModule = CategoryModule;
