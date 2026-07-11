import { Client, Storage, Databases, ID } from 'appwrite';

const endpoint = import.meta.env.VITE_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1';
const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const databaseId = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const collectionId = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
const bucketId = import.meta.env.VITE_APPWRITE_BUCKET_ID;

// Check if Appwrite is configured in .env
export const isAppwriteConfigured = !!(
  projectId &&
  databaseId &&
  collectionId &&
  bucketId
);

// Initialize Appwrite only if configuration keys are present
const client = new Client();

if (isAppwriteConfigured) {
  client
    .setEndpoint(endpoint)
    .setProject(projectId);
}

export const storage = isAppwriteConfigured ? new Storage(client) : null;
export const databases = isAppwriteConfigured ? new Databases(client) : null;
export { ID };

export const appwriteConfig = {
  databaseId,
  collectionId,
  bucketId
};
