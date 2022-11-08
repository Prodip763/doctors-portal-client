import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import MainButton from "../Shared/MainButton";

const MakeAppoinment = () => {

    return(
        <section style={{
            background: `url(${appointment})`
        }} className="flex justify-center items-center">
            <div className="flex-1 hidden lg:block">
                <img className="mt-[-100px]" src={doctor}></img>
            </div>
            <div className="flex-1 px-5">
                <h3 className="text-xl text-primary font-bold">Appoinment</h3>
                <h2 className="text-3xl text-white py-3">Make an Appoinment Today</h2>
                <p className="text-white py-4">Both doctor's appointment and doctor appointment are acceptable for describing a medical visit. In the first case the 's, instead of showing possession, is actually showing association; appointments of this nature are associated with doctors. In the latter case, the noun doctor is being used adjectivally to describe the type of appointment.</p>
                <MainButton>Get started</MainButton>
            </div>
        </section>
    );
};

export default MakeAppoinment;