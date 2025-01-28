const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwritedatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID), // Fix: Database ID should map to DATABASE_ID
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID), // Fix: Collection ID should map to COLLECTION_ID
    appwritebucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default conf;
