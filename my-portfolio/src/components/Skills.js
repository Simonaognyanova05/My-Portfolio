export default function Skills() {
    return (
        <section className="skill skill--bg">
            <div className="container skill__container--narrow">
                <div className="page-section">
                    <h2 className="page-section__title page-section__title--white">MY SKILL</h2>
                    <img className="page-section__title-style" src="assets/images/title-style-white.png" alt="" />
                    <p className="page-section__paragraph page-section__paragraph--white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <div className="row gutters-60">
                        <div className="col-md-4">
                            <div className="thumbnail text-center">
                                <img src="assets/images/js-logo.png" alt="" style={{ width: '100px', padding: '10px' }}/>
                                <h4 className="skill__single-part__title">JAVASCRIPT</h4>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '90%', backgroundColor: '#7FB7FA' }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="thumbnail text-center">
                                <img src="assets/images/react.png" alt="" style={{ width: '100px', padding: '10px' }}/>
                                <h4 className="skill__single-part__title">REACT.JS</h4>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '90%', backgroundColor: '#FFAC1B' }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="thumbnail text-center">
                                <img src="assets/images/mongo.jpg" alt="" style={{ width: '100px', padding: '10px' }}/>
                                <h4 className="skill__single-part__title">MongoDB</h4>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: '90%', backgroundColor: '#C99AFF' }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}