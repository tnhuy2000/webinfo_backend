import { Model } from 'mongoose';
import { ContactMessage, ContactMessageDocument } from './entities/contact-message.entity';
import { ContactInfo, ContactInfoDocument } from './entities/contact-info.entity';
import { CreateContactMessageInput, UpdateContactInfoInput } from '../../graphql.schema';
export declare class ContactService {
    private readonly contactMessageModel;
    private readonly contactInfoModel;
    constructor(contactMessageModel: Model<ContactMessageDocument>, contactInfoModel: Model<ContactInfoDocument>);
    createMessage(createContactMessageInput: CreateContactMessageInput): Promise<ContactMessage>;
    findAllMessages(): Promise<ContactMessage[]>;
    findOneMessage(id: string): Promise<ContactMessage>;
    markAsRead(id: string): Promise<ContactMessage>;
    getContactInfo(): Promise<ContactInfo>;
    updateContactInfo(updateContactInfoInput: UpdateContactInfoInput): Promise<ContactInfo>;
}
