import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactService } from './contact.service';
import { ContactResolver } from './contact.resolver';
import {
  ContactMessage,
  ContactMessageSchema,
} from './entities/contact-message.entity';
import { ContactInfo, ContactInfoSchema } from './entities/contact-info.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ContactMessage.name, schema: ContactMessageSchema },
      { name: ContactInfo.name, schema: ContactInfoSchema },
    ]),
  ],
  providers: [ContactResolver, ContactService],
  exports: [ContactService],
})
export class ContactModule {}
