import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import Service from "./Service";
import treatment from "../../assets/images/treatment.png";
import MainButton from "../Shared/MainButton";

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: '',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: '',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: '',
            img: whitening
        }




    ]
    return (
        <div className="my-28">
            <div className="text-center ">
                <h4 className="text-primary text-xl font-bold uppercase">OUR SERVICES</h4>
                <h2 className="text-4xl text-accent">Services We Provide</h2>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
            <div>
                <div className="hero min-h-screen my-10">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                            <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                           <MainButton>Get started</MainButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;