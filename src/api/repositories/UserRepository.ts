import { EntityRepository, MongoRepository, ObjectID } from "typeorm";

import { User } from "../models/User";

@EntityRepository(User)
export class UserRepository extends MongoRepository<User> {
    public async removeById(id: ObjectID): Promise<void> {
        const items = await this.findOne(id);
        this.remove(items);
    }
}
