export async function deleteEducation(id) {
    const confirmDelete = window.confirm("Сигурни ли сте, че искате да изтриете тази стая?");
    if (!confirmDelete) return;

    try {
        await deleteDoc(doc(db, "education", id));
        alert("Education was deleted successfully!");
        window.location.reload();
    } catch (error) {
        console.error("Error while deleting:", error);
        alert("Error while deleting.");
    }
}