import { doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

const USE_FIREBASE = true;

export async function updateHomePage(title, subtitle, img1, img2, img3) {
    if (USE_FIREBASE) {
        try {
            const docRef = doc(db, "homePage", "welcomeUser"); 
            await setDoc(docRef, {
                title,
                subtitle,
                img1
            });
            return { status: 200, message: "Firebase: Data updated successfully" };
        } catch (error) {
            console.error("Firebase error:", error);
            return { status: 500, message: "Firebase: Error updating data" };
        }
    } else {
        try {
            let response = await fetch('http://localhost:2005/admin/welcome', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, subtitle, img1, img2, img3 }),
            });

            if (response.ok) {
                return { status: 200, message: "Backend: Data updated successfully" };
            } else {
                const errorData = await response.json();
                return { status: response.status, message: errorData.message || "Backend: Error updating data" };
            }
        } catch (error) {
            console.error("Backend error:", error);
            return { status: 500, message: "Backend: Error updating data" };
        }
    }
}
