export default function AboutItem({ education }) {
    return (
        <div className="left-image-post">
            <div className="row">
                <div className="col-md-6">
                    <div className="left-image">
                        <img src={education.img} alt="" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="right-text">
                        <h4>{education.subject}</h4>
                        <p>
                            {education.description}
                        </p>
                        {
                            education.link !== ""
                                ? <div className="white-button">
                                    <a href={education.link}>My GitHub</a>
                                </div>
                                : ""
                        }

                    </div>
                </div>
            </div>
        </div>
    );
}