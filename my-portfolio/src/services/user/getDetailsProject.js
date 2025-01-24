import { doc, getDoc } from "firebase/firestore";  // Импортиране на необходимите функции от Firebase
import { db } from "../../config/firebaseConfig";  // Импортиране на конфигурацията на Firebase

// Функция за извличане на данни за конкретен проект от Firestore
export async function getDetailsProject(projectId) {
    try {
        // Вземаме референция към документа с конкретния projectId в колекцията "projects"
        const projectRef = doc(db, "projects", projectId);

        // Извличаме данните за проекта
        const projectSnap = await getDoc(projectRef);

        // Проверяваме дали проектът съществува в базата данни
        if (projectSnap.exists()) {
            return projectSnap.data();  // Връща данни за проекта
        } else {
            // Ако проектът не съществува
            throw new Error("Project not found!");
        }
    } catch (error) {
        // Ако има грешка при извличането на данни
        console.error("Error fetching project details:", error);
        throw error;  // Хвърляне на грешка за обработка в компонентите
    }
}
