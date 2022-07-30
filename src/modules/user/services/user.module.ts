import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserController } from "src/modules/user/controllers/user.controller";
import { UserEntity } from "../entities/user.entity";
import { UserService } from "./user.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            UserEntity,
        ]),
    ],

    controllers:[
        UserController,
    ],
    providers: [
        UserService,
    ],
    exports: [
        UserService,
    ]

})
export class UserModule {}