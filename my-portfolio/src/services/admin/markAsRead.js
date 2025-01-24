import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

export async function markAsRead(messageId) {
    try {
        const messageRef = doc(db, "messages", messageId);

        await updateDoc(messageRef, {
            isRead: true 
        });

        await deleteDoc(messageRef);

        return { status: 200 };
    } catch (error) {
        console.error("Error processing message:", error);
        throw new Error("Failed to process the message.");
    }
}
