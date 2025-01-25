import { useState, useEffect } from "react";
import { getHomeData } from "../../services/user/getHomeData";

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
            <section id="home">
                <div className="intro">
                    <h1>{data.title}</h1>
                    <p>{data.subtitle}</p>
                </div>
            </section>

            <section id="gallery" style={{ marginBottom: '100px' }}>
                <div className="content px-4">
                    <h2 className="text-center text-2xl font-bold mb-6">Gallery</h2>
                    <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="gallery-item">
                            <img
                                src={data.img1}
                                alt="Gallery Image 1"
                                className="w-full h-auto aspect-video object-cover rounded-lg shadow-md"
                            />
                        </div>
                        <div className="gallery-item">
                            <img
                                src={data.img2}
                                alt="Gallery Image 2"
                                className="w-full h-auto aspect-video object-cover rounded-lg shadow-md"
                            />
                        </div>
                        <div className="gallery-item">
                            <img
                                src={data.img3}
                                alt="Gallery Image 3"
                                className="w-full h-auto aspect-video object-cover rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
