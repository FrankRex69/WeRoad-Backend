import { INumberIdEntity } from './base.interface';

export interface IresponseTravels extends INumberIdEntity {    
    slug: string;
    name: string;
    description: string;
    startingdate: string;
    endingdate: string;
    price: number;   
    moods_nature: number;
    moods_relax: number;
    moods_history: number;
    moods_culture: number;
    moods_party: number;
}

