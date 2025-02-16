import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserCommand } from './commands/create-user.command';
import { GetUserQuery } from './queries/get-user.query';

@Controller('users')
export class UserController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  async createUser(
    @Body() body: { username: string; email: string },
  ): Promise<void> {
    await this.commandBus.execute(
      new CreateUserCommand(body.username, body.email),
    );
  }

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<any> {
    return await this.queryBus.execute(new GetUserQuery(id));
  }
}
