import { useNavigate } from 'react-router-dom';
import { updateHomePage } from "../../services/admin/updateHomePage";

export default function WelcomeUser() {
    const navigate = useNavigate();

    const updateHandler = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { title, subtitle, img1, img2, img3 } = Object.fromEntries(formData);

        const result = await updateHomePage(title, subtitle, img1, img2, img3);

        if (result.status === 200) {
            alert('Welcome page was updated successfully!');
            navigate('/admin/');
        } else {
            alert(`Error: ${result.message}`);
        }
    };

    return (
        <section id="admin">
            <div className="content">
                <h2>Update Welcome User Page</h2>
                <form onSubmit={updateHandler}>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" required />

                    <label htmlFor="subtitle">Subtitle:</label>
                    <input type="text" id="subtitle" name="subtitle" required />

                    <label htmlFor="img1">Image 1:</label>
                    <input type="text" id="img1" name="img1" required />

                    <label htmlFor="img2">Image 2:</label>
                    <input type="text" id="img2" name="img2" required />

                    <label htmlFor="img3">Image 3:</label>
                    <input type="text" id="img3" name="img3" required />

                    <input type="submit" value="Update" />
                </form>
            </div>
        </section>
    );
}
