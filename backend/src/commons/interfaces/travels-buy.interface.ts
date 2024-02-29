import { INumberIdEntity } from './base.interface';

export interface IresponseTravelsBuy extends INumberIdEntity {
    travels_id: number;
    email: string;
    numberseats: number;
}

export interface IcreateTravelsBuyDTO {
    travels_id: number;
    email: string;
    numberseats: number;
}