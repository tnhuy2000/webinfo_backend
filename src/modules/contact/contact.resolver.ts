import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ContactService } from './contact.service';
import {
  CreateContactMessageInput,
  UpdateContactInfoInput,
} from '../../graphql.schema';

@Resolver('ContactMessage')
export class ContactResolver {
  constructor(private readonly contactService: ContactService) {}

  @Mutation('createContactMessage')
  async createContactMessage(
    @Args('input') createContactMessageInput: CreateContactMessageInput,
  ) {
    return this.contactService.createMessage(createContactMessageInput);
  }

  @Query('contactMessages')
  async findAllMessages() {
    return this.contactService.findAllMessages();
  }

  @Query('contactMessage')
  async findOneMessage(@Args('id') id: string) {
    return this.contactService.findOneMessage(id);
  }

  @Mutation('markAsRead')
  async markAsRead(@Args('id') id: string) {
    return this.contactService.markAsRead(id);
  }

  @Query('contactInfo')
  async getContactInfo() {
    return this.contactService.getContactInfo();
  }

  @Mutation('updateContactInfo')
  async updateContactInfo(
    @Args('input') updateContactInfoInput: UpdateContactInfoInput,
  ) {
    return this.contactService.updateContactInfo(updateContactInfoInput);
  }
}
