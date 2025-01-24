import { collection, getDocs } from "firebase/firestore"; 
import { db } from "../../config/firebaseConfig"; 

export async function getMessages() {
    try {
        const messagesRef = collection(db, "messages");
        const querySnapshot = await getDocs(messagesRef);

        const messages = querySnapshot.docs.map(doc => ({
            id: doc.id,  
            ...doc.data() 
        }));

        return { status: 200, messages }; 
    } catch (error) {
        console.error("Error fetching messages:", error);
        return { status: 500, message: "Failed to fetch messages." }; 
    }
}
