import { useState, useEffect } from "react";
import { getHomeData } from "../../services/user/getHomeData";
import About from "./About";
import Project from "./Projects/Project";
import Contact from "./Contact";

export default function Home() {
    const [data, setData] = useState(null);

    useEffect(() => {
        getHomeData()
            .then(res => {
                setData(res);
            })
            .catch(error => {
                console.error("Error loading home data:", error);
            });
    }, []);

    if (!data) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <div class="modal fade" id="videoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid bg-primary d-flex align-items-center mb-5 py-5" id="home" style={{ minHeight: '100vh' }}>
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
                            <img class="img-fluid w-100 rounded-circle shadow-sm" src={data.img} alt="" />
                        </div>
                        <div class="col-lg-7 text-center text-lg-left">
                            <h3 class="text-white font-weight-normal mb-3">I'm</h3>
                            <h1 class="display-3 text-uppercase text-primary mb-2" style={{ WebkitTextStroke: '2px #ffffff' }}>{data.title}</h1>
                            <h1 class="typed-text-output d-inline font-weight-lighter text-white"></h1>
                            <div class="typed-text d-none">{data.subtitle}</div>
                            <div class="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                                <a href="assets/CV.pdf" class="btn btn-outline-light mr-5">Download CV</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <About />
            <Project />
            <Contact />
        </>
    );
}
