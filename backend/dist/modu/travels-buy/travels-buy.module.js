"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TravelsBuyModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const travels_buy_entity_1 = require("../../entities/travels-buy.entity");
const travels_buy_controller_1 = require("./travels-buy.controller");
const travels_buy_service_1 = require("./travels-buy.service");
let TravelsBuyModule = class TravelsBuyModule {
};
TravelsBuyModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([travels_buy_entity_1.TravelsBuy])],
        controllers: [travels_buy_controller_1.TravelsBuyController],
        providers: [travels_buy_service_1.TravelsBuyService],
    })
], TravelsBuyModule);
exports.TravelsBuyModule = TravelsBuyModule;
//# sourceMappingURL=travels-buy.module.js.map