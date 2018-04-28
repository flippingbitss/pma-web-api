import { IsNotEmpty } from "class-validator";
import { Column, Entity, ObjectIdColumn, ObjectID, Index } from "typeorm";
import { Visit } from "./Visit";

@Entity()
export class User {
    @ObjectIdColumn() public id: ObjectID;

    @IsNotEmpty()
    @Column({ name: "first_name" })
    public firstName: string;

    @IsNotEmpty()
    @Column({ name: "last_name" })
    public lastName: string;

    @IsNotEmpty()
    @Column()
    @Index({ unique: true })
    public email: string;

    @IsNotEmpty()
    @Column(type => Visit)
    public visits: Visit[];

    public toString(): string {
        return `${this.firstName} ${this.lastName} (${this.email}), Total ${
            this.visits.length
        } Visits`;
    }
}
