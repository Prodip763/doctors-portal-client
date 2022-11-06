import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () =>{
    return(
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
            <InfoCard cardTitle="Opening Hours" bgClass="bg-gradient-to-r from-secondary to-primary" text="Opening time start 10.00 AM" img={clock}></InfoCard>
            <InfoCard cardTitle="Our Location" bgClass="bg-neutral" text="Brooklyn, NY 10036, United State" img={marker}></InfoCard>
            <InfoCard cardTitle="Contact us now" bgClass="bg-gradient-to-r from-secondary to-primary" text="01760104308" img={phone}></InfoCard>
        </div>
    );
};

export default Info;