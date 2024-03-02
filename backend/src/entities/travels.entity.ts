import { Column, Entity } from "typeorm";
import { NumberIdEntity } from './base.entity';

@Entity()
export class Travels extends NumberIdEntity{
    
    @Column({nullable: true})
      slug: string;  

    @Column({nullable: true})
      name: string;
    
    @Column({nullable: true})
      description: string;
    
    @Column({nullable: true})
      startingdate: string;

    @Column({nullable: true})
      endingdate: string;

    @Column({nullable: true})
      price: number;

    @Column({nullable: true})
      moods_nature: number;

    @Column({nullable: true})
      moods_relax: number;

    @Column({nullable: true})
      moods_history: number;

    @Column({nullable: true})
      moods_culture: number;

    @Column({nullable: true})
      moods_party: number;
}

