import { Service } from "typedi";
import { OrmRepository } from "typeorm-typedi-extensions";

import { Logger, LoggerInterface } from "../../decorators/Logger";
import { User } from "../models/User";
import { UserRepository } from "../repositories/UserRepository";
import { ObjectID } from "typeorm";

@Service()
export class UserService {
    constructor(
        @OrmRepository() private userRepository: UserRepository,
        @Logger(__filename) private log: LoggerInterface
    ) {}

    public all(): Promise<User[] | undefined> {
        this.log.info("Find all users");
        return this.userRepository.find();
    }

    public findOne(id: string): Promise<User | undefined> {
        this.log.info("Find one user with id => ", id);
        const oid = new ObjectID(id);
        return this.userRepository.findOne(oid);
    }

    public async create(user: User): Promise<User> {
        this.log.info("Create a new user => ", user.toString());
        const newUser = await this.userRepository.save(user);
        return newUser;
    }

    public update(id: string, user: User): Promise<User> {
        this.log.info("Update a user");
        user.id = new ObjectID(id);
        return this.userRepository.save(user);
    }

    public delete(id: string): Promise<void> {
        this.log.info("Delete a user");
        const oid = new ObjectID(id);
        return this.userRepository.removeById(oid);
    }
}
