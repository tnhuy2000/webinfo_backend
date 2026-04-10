export const DATABASE_COLLECTION_NAME = {
  COMPANIES: 'companies',
  SERVICES: 'services',
  TEAM_MEMBERS: 'team_members',
  CONTACT_INFO: 'contact_info',
  CONTACT_MESSAGES: 'contact_messages',
  USERS: 'users',
  CONTENTS: 'contents',
  SETTINGS: 'settings',
  // Portfolio collections
  NAVIGATIONS: 'navigations',
  SOCIAL_LINKS: 'social_links',
  SKILLS: 'skills',
  SKILL_ITEMS: 'skill_items',
  WORK_EXPERIENCES: 'work_experiences',
  TAGS: 'tags',
  PROJECTS: 'projects',
  ARTICLES: 'articles',
} as const;

export const ID_TYPE = {
  USE_UUID: true, // Set to false to use MongoDB ObjectId
} as const;
