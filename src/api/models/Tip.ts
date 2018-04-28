import { IsNotEmpty, IsDefined } from "class-validator";
import { Column, Entity, ObjectIdColumn, ObjectID } from "typeorm";

@Entity()
export class Tip {
    @ObjectIdColumn() public id: ObjectID;

    @IsDefined()
    @IsNotEmpty()
    @Column()
    public title: string;

    @IsNotEmpty()
    @Column()
    public message: string;

    public toString(): string {
        return `${this.title} : ${this.message}`;
    }
}
