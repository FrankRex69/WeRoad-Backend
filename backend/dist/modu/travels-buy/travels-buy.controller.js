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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TravelsBuyController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const travels_buy_interface_1 = require("../../commons/interfaces/travels-buy.interface");
const travels_buy_service_1 = require("./travels-buy.service");
const public_decorator_1 = require("../auth/decorators/public.decorator");
let TravelsBuyController = class TravelsBuyController {
    async findAll() {
        return await this.service.findAll();
    }
};
__decorate([
    common_1.Inject(travels_buy_service_1.TravelsBuyService),
    __metadata("design:type", travels_buy_service_1.TravelsBuyService)
], TravelsBuyController.prototype, "service", void 0);
__decorate([
    public_decorator_1.Public(),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TravelsBuyController.prototype, "findAll", null);
TravelsBuyController = __decorate([
    swagger_1.ApiTags('Travels buy'),
    common_1.Controller('travels-buy')
], TravelsBuyController);
exports.TravelsBuyController = TravelsBuyController;
//# sourceMappingURL=travels-buy.controller.js.map