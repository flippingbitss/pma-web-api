import { IsNotEmpty } from "class-validator";
import { Column } from "typeorm";
import { Vitals } from "./Vitals";

export class Visit {
    @IsNotEmpty()
    @Column()
    public date: Date;

    @IsNotEmpty()
    @Column(type => Vitals)
    public vitals: Vitals;

    public toString(): string {
        return `${this.date}, ${this.vitals}`;
    }
}
