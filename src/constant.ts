export const DATABASE_COLLECTION_NAME = {
  COMPANIES: 'companies',
  SERVICES: 'services',
  TEAM_MEMBERS: 'team_members',
  CONTACT_INFO: 'contact_info',
  CONTACT_MESSAGES: 'contact_messages',
  USERS: 'users',
  CONTENTS: 'contents',
  SETTINGS: 'settings',
} as const;

export const ID_TYPE = {
  USE_UUID: true, // Set to false to use MongoDB ObjectId
} as const;
