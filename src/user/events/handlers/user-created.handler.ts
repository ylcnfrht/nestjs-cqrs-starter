import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { UserCreatedEvent } from '../user-created.event';

@EventsHandler(UserCreatedEvent)
export class UserCreatedHandler implements IEventHandler<UserCreatedEvent> {
  async handle(event: UserCreatedEvent): Promise<void> {
    // Example of a read model update operation (e.g., saving to MongoDB)
    console.log(`UserCreatedEvent Handler: ${event.username}`);
    // Here, perform the corresponding database operations.
  }
}
