import { EntityRepository, MongoRepository } from "typeorm";

import { Tip } from "../models/Tip";

@EntityRepository(Tip)
export class TipRepository extends MongoRepository<Tip> {}
