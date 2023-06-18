import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany } from "typeorm"
import { Passengers } from "./Passengers"

@Entity('Trains')
export class Trains extends BaseEntity  {

    @PrimaryGeneratedColumn()
    id: number

    @Column({unique :true})
    trainNum: number

    @Column()
    trainName: string

    @Column()
    from: string

    @Column()
    to: string

    @Column({type:'date'})
    date: string

    @Column({ type: 'simple-json'})
    price:{
        AC: number;
        General: number;
    }

    @Column({default:true})
    seatAvailability: boolean

    @ManyToMany(
        ()=> Passengers
    )
    passengers: Passengers[];

     
 
}
