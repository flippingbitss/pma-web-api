import {
    // Authorized,
    Body,
    // CurrentUser,
    Delete,
    Get,
    JsonController,
    OnUndefined,
    Param,
    Post,
    Put
} from "routing-controllers";

import { User } from "../models/User";
import { UserService } from "../services/UserService";

// @Authorized()
@JsonController("/users")
export class UserController {
    constructor(private userService: UserService) {}

    @Get("/")
    @OnUndefined(Error)
    public find(/*@CurrentUser() user?: User*/): Promise<User[] | undefined> {
        return this.userService.all();
    }

    @Get("/:id")
    @OnUndefined(Error)
    public one(@Param("id") id: string): Promise<User | undefined> {
        const oid = id.toUpperCase();
        return this.userService.findOne(oid);
    }

    @Post()
    @OnUndefined(Error)
    public create(@Body() user: User): Promise<User> {
        return this.userService.create(user);
    }

    @Put("/:id")
    public update(@Param("id") id: string, @Body() user: User): Promise<User> {
        return this.userService.update(id, user);
    }

    @Delete("/:id")
    public delete(@Param("id") id: string): Promise<void> {
        return this.userService.delete(id);
    }
}
