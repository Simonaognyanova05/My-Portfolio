import { db } from '../config/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

export async function createEducation(subject, description, img, link = null) {
    try {
        const docRef = await addDoc(collection(db, "education"), {
            subject,
            description,
            link,
            img,
            createdAt: new Date()
        });

        return { status: 200, message: "Education was creates successfuly!" };
    } catch (error) {
        console.error("Error while creating education: ", error.message);

        if (error.message.includes("invalid") || error.message.includes("missing")) {
            return { status: 400, message: error.message };
        }

        return { status: 500, message: "Error!" };
    }
}