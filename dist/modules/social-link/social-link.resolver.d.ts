import { SocialLinkService } from './social-link.service';
import { CreateSocialLinkInput, UpdateSocialLinkInput } from '../../graphql.schema';
export declare class SocialLinkResolver {
    private readonly socialLinkService;
    constructor(socialLinkService: SocialLinkService);
    socialLinks(isActive?: boolean): Promise<import("./schemas/social-link.schema").SocialLinkDocument[]>;
    socialLink(id: string): Promise<import("./schemas/social-link.schema").SocialLinkDocument>;
    createSocialLink(input: CreateSocialLinkInput): Promise<import("./schemas/social-link.schema").SocialLinkDocument>;
    updateSocialLink(id: string, input: UpdateSocialLinkInput): Promise<import("./schemas/social-link.schema").SocialLinkDocument>;
    deleteSocialLink(id: string): Promise<boolean>;
}
