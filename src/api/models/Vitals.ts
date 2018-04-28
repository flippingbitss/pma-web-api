import { IsNotEmpty } from "class-validator";
import { Column } from "typeorm";

export class Vitals {
    @IsNotEmpty()
    @Column({ name: "blood_max" })
    public bloodMax: number;

    @IsNotEmpty()
    @Column({ name: "blood_min" })
    public bloodMin: number;

    @IsNotEmpty()
    @Column({ name: "heart_rate" })
    public heartRate: number;

    @IsNotEmpty()
    @Column({ name: "respiratory_rate" })
    public respiratoryRate: number;

    public toString(): string {
        return `[BP: ${this.bloodMin}/${this.bloodMax}, HR: ${this.heartRate}, RespRate: ${
            this.respiratoryRate
        }]`;
    }
}
