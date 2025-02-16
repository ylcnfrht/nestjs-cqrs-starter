import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs';
import { CreateUserCommand } from '../create-user.command';
import { UserCreatedEvent } from '../../events/user-created.event';
import { generateUUID } from 'src/utils/uuid';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(private readonly eventBus: EventBus) {}
  async execute(command: CreateUserCommand): Promise<void> {
    const userId = generateUUID();
    // Perform database save operations...
    console.log(`User created with ID: ${userId}`);
    // Trigger the event to initiate read model update operations.
    this.eventBus.publish(new UserCreatedEvent(userId, command.username));
  }
}
