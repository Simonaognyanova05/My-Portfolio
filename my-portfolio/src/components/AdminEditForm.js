import { useEffect, useState } from "react";

export default function AdminEditForm({ kind, loadItem, saveItem, onCancel, fields }) {
    const [item, setItem] = useState(null);
    const [status, setStatus] = useState("loading");

    useEffect(() => {
        let active = true;
        setStatus("loading");
        loadItem()
            .then((data) => { if (active) { setItem(data || {}); setStatus("idle"); } })
            .catch(() => { if (active) setStatus("load-error"); });
        return () => { active = false; };
    }, [loadItem]);

    const handleChange = ({ target }) => setItem((current) => ({ ...current, [target.name]: target.value }));

    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus("saving");
        try {
            const result = await saveItem(item);
            setStatus(result.status === 200 ? "success" : "error");
        } catch {
            setStatus("error");
        }
    };

    if (status === "loading") return <section className="section admin-create-page"><div className="admin-state"><i /><p>Loading {kind.toLowerCase()}…</p></div></section>;
    if (status === "load-error") return <section className="section admin-create-page"><div className="admin-state"><b>Couldn’t load this entry.</b><button onClick={onCancel}>Go back</button></div></section>;

    const textFields = fields.filter((field) => field.group === "content");
    const linkFields = fields.filter((field) => field.group === "media");

    return <section className="section admin-create-page">
        <div className="container admin-create-shell">
            <header className="admin-create-header">
                <div><p className="kicker">ADMIN · EDIT ENTRY</p><h1>Edit <em>{kind.toLowerCase()}</em></h1><p>Update the content below. Your changes will be published immediately.</p></div>
                <button type="button" className="admin-close" onClick={onCancel} aria-label="Cancel">×</button>
            </header>
            <form className="admin-create-form" onSubmit={handleSubmit}>
                <div className="admin-form-section">
                    <span className="admin-step">01</span>
                    <div className="admin-fields">
                        <div className="admin-section-title"><h2>Content</h2><p>Edit the primary information visitors will see.</p></div>
                        {textFields.map((field) => <label key={field.name}>
                            <span>{field.label}</span>
                            {field.multiline
                                ? <textarea name={field.name} rows="6" value={item[field.name] || ""} onChange={handleChange} placeholder={field.placeholder} required />
                                : <input name={field.name} type="text" value={item[field.name] || ""} onChange={handleChange} placeholder={field.placeholder} required />}
                        </label>)}
                    </div>
                </div>
                <div className="admin-form-section">
                    <span className="admin-step">02</span>
                    <div className="admin-fields">
                        <div className="admin-section-title"><h2>Links & media</h2><p>Keep external links and imagery up to date.</p></div>
                        <div className="admin-field-grid">{linkFields.map((field) => <label key={field.name}><span>{field.label}</span><input name={field.name} type="url" value={item[field.name] || ""} onChange={handleChange} placeholder={field.placeholder} required={!field.optional} /></label>)}</div>
                    </div>
                </div>
                <div className="admin-form-actions">
                    <p className={`admin-feedback ${status}`}>{status === "success" ? "✓ Changes saved successfully" : status === "error" ? "Could not save changes. Please try again." : "Review your changes before saving"}</p>
                    <button type="button" className="admin-cancel" onClick={onCancel}>Cancel</button>
                    <button type="submit" className="admin-submit" disabled={status === "saving"}>{status === "saving" ? "Saving…" : "Save changes ↗"}</button>
                </div>
            </form>
        </div>
    </section>;
}
