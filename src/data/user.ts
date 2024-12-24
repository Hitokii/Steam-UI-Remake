import { collection, Firestore, getDocs } from "@firebase/firestore";

export interface User {
    id: string;
    username: string;
    avatarURL: string;
    email: string;
    password: string;
    isAdmin: boolean;
    wallet: number|null;
}

export async function getUsers(db: Firestore): Promise<any[]> {
  const users = collection(db, 'users');  
  const usersSnapshot = await getDocs(users);
  const usersList = usersSnapshot.docs.map(doc => doc.data());
  return usersList;
}

export async function getUserByUsername(db: Firestore, username: string): Promise<User | null> {
  const users = collection(db, 'users');  
  const usersSnapshot = await getDocs(users);
  const usersList = usersSnapshot.docs.map(doc => doc.data());
  const user = usersList.find(user => user.username === username) as User;
  return user;
}
