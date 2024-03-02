import { INumberIdEntity } from './base.interface';

export interface IresponseTravelsBuy extends INumberIdEntity {
    travelsid: number;
    pricetot: number;
    email: string;
    numberseats: number;
}

export interface IcreateTravelsBuyDTO {
    travelsid: number;
    pricetot: number;
    email: string;
    numberseats: number;
}