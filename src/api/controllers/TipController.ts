import {
    // Authorized,
    Body,
    Get,
    JsonController,
    OnUndefined,
    Param,
    Post,
} from "routing-controllers";
import { TipService } from "../services/TipService";
import { Tip } from "../models/Tip";

// @Authorized()
@JsonController("/tips")
export class UserController {
    constructor(private tipService: TipService) {}

    @Get("/")
    @OnUndefined(Error)
    public find(/*@CurrentUser() user?: User*/): Promise<Tip[] | undefined> {
        return this.tipService.all();
    }

    @Get("/:id")
    @OnUndefined(Error)
    public one(@Param("id") id: string): Promise<Tip | undefined> {
        const oid = id.toUpperCase();
        return this.tipService.findOne(oid);
    }

    @Post()
    public create(@Body({validate: true}) tip: Tip): Promise<Tip> {
        return this.tipService.create(tip);
    }
}
