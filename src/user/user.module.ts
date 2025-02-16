import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateUserHandler } from './commands/handlers/create-user.handler';
import { GetUserHandler } from './queries/handlers/get-user.handler';
import { UserController } from './user.controller';
import { UserCreatedHandler } from './events/handlers/user-created.handler';

@Module({
  imports: [CqrsModule],
  controllers: [UserController],
  providers: [CreateUserHandler, GetUserHandler, UserCreatedHandler],
})
export class UserModule {}
