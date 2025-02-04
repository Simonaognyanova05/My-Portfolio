import { useNavigate, useParams } from "react-router-dom";
import { updateEdu } from "../../services/admin/updateEdu";

export default function UpdateEdu() {
    const navigate = useNavigate();
    const { eduId } = useParams(); 

    const updateHandler = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { title, subtitle, years, description } = Object.fromEntries(formData);

        let res = await updateEdu(title, subtitle, years, description, eduId);

        if (res.status === 200) {
            alert('The education was updated successfully!');
            navigate('/');
        } else {
            alert(res.message); 
        }

        e.target.reset(); 
    };

    return (
        <section id="admin">
            <div className="content">
                <h2>Update Education</h2>
                <form onSubmit={updateHandler}>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" required />

                    <label htmlFor="subtitle">Subtitle:</label>
                    <input type="text" id="subtitle" name="subtitle" required />

                    <label htmlFor="years">Years of studying:</label>
                    <input type="text" id="years" name="years" required />

                    <label htmlFor="description">Description:</label>
                    <input type="text" id="description" name="description" required />

                    <input type="submit" value="Update" />
                </form>
            </div>
        </section>
    );
}