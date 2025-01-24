import { collection, addDoc } from "firebase/firestore"; // Firebase функции
import { db } from "../../config/firebaseConfig"; // Импортиране на конфигурацията на Firebase

export async function sentMessage(name, email, message) {
    try {
        // Вземаме референция към колекцията 'messages'
        const messagesRef = collection(db, "messages");

        // Добавяме ново съобщение в колекцията 'messages'
        await addDoc(messagesRef, {
            name,
            email,
            message,
            timestamp: new Date() // Добавяме времева марка
        });

        return { status: 200, message: 'Message sent successfully!' }; // Успешен отговор
    } catch (error) {
        console.error("Error sending message:", error);
        return { status: 500, message: 'Failed to send message. Please try again.' }; // Грешка при изпращането
    }
}
