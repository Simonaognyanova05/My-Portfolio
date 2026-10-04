import { db } from '../config/firebaseConfig';
import { collection, query, getDocs, orderBy, limit, startAfter } from 'firebase/firestore';

export async function getProjectsPage(lastDocument = null, pageSize = 6) {
    try {
        const constraints = [orderBy('createdAt', 'desc')];
        if (lastDocument) constraints.push(startAfter(lastDocument));
        constraints.push(limit(pageSize + 1));

        const snapshot = await getDocs(query(collection(db, 'projects'), ...constraints));
        const documents = snapshot.docs;
        const hasMore = documents.length > pageSize;
        const visibleDocuments = documents.slice(0, pageSize);

        return {
            projects: visibleDocuments.map((document) => ({ id: document.id, ...document.data() })),
            lastDocument: visibleDocuments[visibleDocuments.length - 1] || null,
            hasMore
        };
    } catch (error) {
        console.error('Error while getting projects:', error);
        throw error;
    }
}

export async function getProjects() {
    const result = await getProjectsPage(null, 100);
    return result.projects;
}
