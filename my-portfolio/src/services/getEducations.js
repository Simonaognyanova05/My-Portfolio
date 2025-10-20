import { db } from '../config/firebaseConfig';
import { collection, query, getDocs, orderBy } from 'firebase/firestore'; // Добавяш orderBy

export async function getEducations() {
    try {
        // 1. Добавяш orderBy(полето, посоката) към заявката
        const q = query(
            collection(db, "education"),
            orderBy("createdAt", "asc") // Сортира по createdAt във възходящ ред (най-старото е първо)
        );

        const querySnapshot = await getDocs(q);

        const products = [];
        querySnapshot.forEach((doc) => {
            products.push({ id: doc.id, ...doc.data() });
        });

        return products;
    } catch (error) {
        console.error("Error while getting education: ", error);
        return [];
    }
}