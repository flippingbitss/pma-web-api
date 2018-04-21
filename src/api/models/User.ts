import { IsNotEmpty } from "class-validator";
import { Column, Entity, ObjectIdColumn, ObjectID, Index } from "typeorm";

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

    public toString(): string {
        return `${this.firstName} ${this.lastName} (${this.email})`;
    }
}
