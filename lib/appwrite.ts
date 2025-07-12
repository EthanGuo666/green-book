import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';
import { User } from './modal';

const projectId = '686e085c00251ee6968e';
const databaseId = '686e0a1b00311eef5fea';
const collectionIdUser = '686e0bc90025a12a7238';

const client = new Client().setEndpoint('https://syd.cloud.appwrite.io/v1').setProject(projectId);
const account = new Account(client);
const database = new Databases(client);
const avatars = new Avatars(client);

export const createUser = async (email: string, name: string, userId: string, avatarUrl: string) => {
  try {
    const user = await database.createDocument(databaseId, collectionIdUser, ID.unique(), {
      email,
      name,
      userId,
      avatarUrl
    });
    return user.$id;
  } catch (err) {
    console.log(err);
  }
}

export const getUserByUserId = async (userId: string) => {
  try {
    const user = await database.listDocuments(databaseId, collectionIdUser, [
      Query.equal('userId', userId)
    ]);
    return user.documents[0];
  } catch (err) {
    console.log(err);
  }
}

export const login = async (email: string, password: string) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (err) {
    console.log(err);
    throw new Error('Login failed');
  }
}

export const logout = async () => {
  try {
    await account.deleteSession('current');
  } catch (err) {
    console.log(err);
    throw new Error('Logout failed');
  }
}

export const register = async (email: string, password: string, name: string) => {
  try {
    const user = await account.create(ID.unique(), email, password, name);
    console.log("User created:", user);
    const avatarUrl = await avatars.getInitials(user.name, 128);
    console.log("avatarUrl created:", avatarUrl.toString());
    const res = await createUser(email, name, user.$id, avatarUrl.toString())
    return user;
  } catch (error) {
    console.log("here is the error:", error)
    throw error;
  }
}

export const getCurrentUser = async () => {
  const res = await account.get()
  if (res.$id) {
    const user = await getUserByUserId(res.$id)
    return {
      userId: res.$id,
      name: user.name,
      email: user.email,
      avatarUrl: user.avatarUrl
    } as User
  }
  return null
}