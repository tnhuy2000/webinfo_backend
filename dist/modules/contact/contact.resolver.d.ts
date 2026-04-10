import { ContactService } from './contact.service';
import { CreateContactMessageInput, UpdateContactInfoInput } from '../../graphql.schema';
export declare class ContactResolver {
    private readonly contactService;
    constructor(contactService: ContactService);
    createContactMessage(createContactMessageInput: CreateContactMessageInput): Promise<import("./entities/contact-message.entity").ContactMessage>;
    findAllMessages(): Promise<import("./entities/contact-message.entity").ContactMessage[]>;
    findOneMessage(id: string): Promise<import("./entities/contact-message.entity").ContactMessage>;
    markAsRead(id: string): Promise<import("./entities/contact-message.entity").ContactMessage>;
    getContactInfo(): Promise<import("./entities/contact-info.entity").ContactInfo>;
    updateContactInfo(updateContactInfoInput: UpdateContactInfoInput): Promise<import("./entities/contact-info.entity").ContactInfo>;
}
