import { Column, Entity } from "typeorm";
import { NumberIdEntity } from './base.entity';

@Entity()
export class TravelsBuy extends NumberIdEntity{
    
    @Column({nullable: true})
      travels_id: number;  

    @Column({nullable: true})
      email: string;
    
    @Column({nullable: true})
      numberseats: number;  
    
}

