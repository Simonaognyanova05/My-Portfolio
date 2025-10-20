export default function About() {
    return (
        <section className="section about-me" data-section="section1">
            <div className="container">
                <div className="section-heading">
                    <h2>About Me</h2>
                    <div className="line-dec"></div>
                    <span>Let me tell you about my skills and competencies.</span>
                </div>
                <div className="left-image-post">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left-image">
                                <img src="assets/images/left-image.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right-text">
                                <h4>JS Web Developer</h4>
                                <p>
                                    I am a dynamic, motivated and goal-oriented person with a background in web programming. I have in-depth knowledge of working with modern Front-End and Back-End technologies, such as React.js, Node.js and MongoDB, all of which I acquired through independent research and study. In addition, I am currently studying C and C# OOP at university. I love creating effective, intuitive and functional web applications. I am committed to constantly upgrading my skills and prefer self-learning, because this is how a person shows true desire and discipline.
                                </p>
                                <div className="white-button">
                                    <a href="https://github.com/Simonaognyanova05">My GitHub</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-image-post">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left-text">
                                <h4>Sed sagittis rhoncus velit</h4>
                                <p>
                                    Pellentesque habitant morbi tristique senectus et netus et
                                    malesuada fames ac turpis egestas. Vestibulum fermentum
                                    eleifend nibh, vitae sodales elit finibus pretium.
                                    Suspendisse potenti. Ut sollicitudin risus a sollicitudin
                                    semper.
                                </p>
                                <div className="white-button">
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right-image">
                                <img src="assets/images/right-image.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
