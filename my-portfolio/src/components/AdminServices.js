import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProject } from "../services/createProject";

export default function AdminServices() {
    const navigate = useNavigate();
    const [status, setStatus] = useState("idle");

    const createHandler = async (event) => {
        event.preventDefault();
        setStatus("saving");
        const { title, description, img, link } = Object.fromEntries(new FormData(event.currentTarget));
        const result = await createProject(title, description, img, link);
        if (result.status === 200) {
            setStatus("success");
            setTimeout(() => navigate("/my-work"), 650);
        } else setStatus("error");
    };

    return <section className="section admin-create-page">
        <div className="container admin-create-shell">
            <header className="admin-create-header">
                <div><p className="kicker">ADMIN · NEW ENTRY</p><h1>Add a <em>project</em></h1><p>Publish a new case study or project in your portfolio.</p></div>
                <button type="button" className="admin-close" onClick={() => navigate("/my-work")} aria-label="Cancel">×</button>
            </header>
            <form className="admin-create-form" onSubmit={createHandler}>
                <div className="admin-form-section">
                    <span className="admin-step">01</span>
                    <div className="admin-fields">
                        <div className="admin-section-title"><h2>Project information</h2><p>Give the project a clear name and concise story.</p></div>
                        <label><span>Project title</span><input name="title" type="text" placeholder="e.g. AI-Powered Analytics Platform" required /></label>
                        <label><span>Project description</span><textarea name="description" rows="6" placeholder="What did you build, which problem did it solve, and what was your role?" required /></label>
                    </div>
                </div>
                <div className="admin-form-section">
                    <span className="admin-step">02</span>
                    <div className="admin-fields">
                        <div className="admin-section-title"><h2>Links & preview</h2><p>Connect the live project and its featured image.</p></div>
                        <div className="admin-field-grid">
                            <label><span>Project URL</span><input name="link" type="url" placeholder="https://your-project.com" required /></label>
                            <label><span>Cover image URL <small>Optional</small></span><input name="img" type="url" placeholder="https://images.com/project.jpg" /></label>
                        </div>
                    </div>
                </div>
                <div className="admin-form-actions">
                    <p className={`admin-feedback ${status}`}>{status === "success" ? "✓ Project added successfully" : status === "error" ? "Could not save. Please try again." : "All fields are required"}</p>
                    <button type="button" className="admin-cancel" onClick={() => navigate("/my-work")}>Cancel</button>
                    <button type="submit" className="admin-submit" disabled={status === "saving" || status === "success"}>{status === "saving" ? "Saving…" : status === "success" ? "Saved ✓" : "Publish project ↗"}</button>
                </div>
            </form>
        </div>
    </section>;
}
