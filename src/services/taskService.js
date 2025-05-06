
import { db } from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function createTask({ title, description, assignedTo, tags }) {
  return await addDoc(collection(db, 'tasks'), {
    title,
    description,
    assignedTo,
    tags: tags || [],
    state: 'pendiente',
    createdAt: serverTimestamp(),
  });
}
