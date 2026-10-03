import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createEducation } from "../services/createEducation";

export default function AdminEdu() {
    const navigate = useNavigate();
    const [status, setStatus] = useState("idle");

    const createHandler = async (event) => {
        event.preventDefault();
        setStatus("saving");
        const { subject, description, img, link } = Object.fromEntries(new FormData(event.currentTarget));
        const result = await createEducation(subject, description, img, link);
        if (result.status === 200) {
            setStatus("success");
            setTimeout(() => navigate("/services"), 650);
        } else setStatus("error");
    };

    return <section className="section admin-create-page">
        <div className="container admin-create-shell">
            <header className="admin-create-header">
                <div><p className="kicker">ADMIN · NEW ENTRY</p><h1>Add <em>education</em></h1><p>Share a completed course, certification, or learning milestone.</p></div>
                <button type="button" className="admin-close" onClick={() => navigate("/services")} aria-label="Cancel">×</button>
            </header>
            <form className="admin-create-form" onSubmit={createHandler}>
                <div className="admin-form-section">
                    <span className="admin-step">01</span>
                    <div className="admin-fields">
                        <div className="admin-section-title"><h2>Basic information</h2><p>The main details shown on the education card.</p></div>
                        <label><span>Course or qualification</span><input name="subject" type="text" placeholder="e.g. React Advanced" required /></label>
                        <label><span>Description</span><textarea name="description" rows="6" placeholder="What did you study and what skills did you gain?" required /></label>
                    </div>
                </div>
                <div className="admin-form-section">
                    <span className="admin-step">02</span>
                    <div className="admin-fields">
                        <div className="admin-section-title"><h2>Links & media</h2><p>Add a certificate and a visual for this entry.</p></div>
                        <div className="admin-field-grid">
                            <label><span>Certificate URL</span><input name="link" type="url" placeholder="https://certificate.com/..." required /></label>
                            <label><span>Image URL</span><input name="img" type="url" placeholder="https://images.com/cover.jpg" required /></label>
                        </div>
                    </div>
                </div>
                <div className="admin-form-actions">
                    <p className={`admin-feedback ${status}`}>{status === "success" ? "✓ Education added successfully" : status === "error" ? "Could not save. Please try again." : "All fields are required"}</p>
                    <button type="button" className="admin-cancel" onClick={() => navigate("/services")}>Cancel</button>
                    <button type="submit" className="admin-submit" disabled={status === "saving" || status === "success"}>{status === "saving" ? "Saving…" : status === "success" ? "Saved ✓" : "Add education ↗"}</button>
                </div>
            </form>
        </div>
    </section>;
}
