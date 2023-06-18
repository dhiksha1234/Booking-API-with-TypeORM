import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, JoinTable, ManyToMany } from "typeorm"
import { Trains } from "./Trains"

@Entity('Passengers')
export class Passengers extends BaseEntity  {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    age: number

    @Column()
    gettingStation: string

    @Column()
    finalDestination: string

    @Column({type:'date'})
    date: string

    @Column()
    seatPreference: string

    @Column({default:true})
    needFood: boolean

    @ManyToMany(
        () => Trains
    )

    @JoinTable({
        name:"PassengersBookedTrain",
        joinColumn: {
            name:'train',
            referencedColumnName: 'id'
        },
        inverseJoinColumn:{
            name:"passenger",
            referencedColumnName:'id'
        }
    })
    trains: Trains[];
}
