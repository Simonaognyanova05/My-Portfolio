import { db } from '../config/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

export async function createProject(title, description, img, link = null) {
    try {
        const docRef = await addDoc(collection(db, "projects"), {
            title,
            description,
            link,
            img,
            createdAt: new Date()
        });

        return { status: 200, message: "Project was created successfuly!" };
    } catch (error) {
        console.error("Error while creating projects: ", error.message);

        if (error.message.includes("invalid") || error.message.includes("missing")) {
            return { status: 400, message: error.message };
        }

        return { status: 500, message: "Error!" };
    }
}