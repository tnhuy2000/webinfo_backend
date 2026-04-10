import { Model } from 'mongoose';
import { SocialLinkDocument } from './schemas/social-link.schema';
import { CreateSocialLinkInput, UpdateSocialLinkInput } from '../../graphql.schema';
export declare class SocialLinkService {
    private readonly socialLinkModel;
    constructor(socialLinkModel: Model<SocialLinkDocument>);
    create(input: CreateSocialLinkInput): Promise<SocialLinkDocument>;
    findAll(isActive?: boolean): Promise<SocialLinkDocument[]>;
    findById(id: string): Promise<SocialLinkDocument>;
    update(id: string, input: UpdateSocialLinkInput): Promise<SocialLinkDocument>;
    delete(id: string): Promise<boolean>;
}
