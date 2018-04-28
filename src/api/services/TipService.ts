import { Service } from "typedi";
import { ObjectID } from "typeorm";
import { OrmRepository } from "typeorm-typedi-extensions";
import { Logger, LoggerInterface } from "../../decorators/Logger";

import { Tip } from "../models/Tip";
import { TipRepository } from "../repositories/TipRepository";

@Service()
export class TipService {
    constructor(
        @OrmRepository() private tipRepository: TipRepository,
        @Logger(__filename) private log: LoggerInterface
    ) {}

    public all(): Promise<Tip[] | undefined> {
        this.log.info("Find all Tips");
        return this.tipRepository.find();
    }

    public findOne(id: string): Promise<Tip | undefined> {
        this.log.info("Find one Tip with id => ", id);
        const oid = new ObjectID(id);
        return this.tipRepository.findOne(oid);
    }

    public async create(tip: Tip): Promise<Tip> {
        this.log.info("Create a new Tip => ", tip.toString());
        const newTip = await this.tipRepository.save(tip);
        return newTip;
    }
}
