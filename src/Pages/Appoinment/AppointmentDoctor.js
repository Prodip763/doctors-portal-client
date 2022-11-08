import React from "react";
import MainButton from "../Shared/MainButton";

const AppoinmentDoctor = ({ service, setTreatment}) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl mt-6">
            <div className="card-body items-center">
                <h2 className="card-title">{name}</h2>
                <p>{
                    slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span className="text-red-500">Try another day.</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-end">                  
                    <label htmlFor="booking-modal" disabled={slots.length === 0} onClick={()=> setTreatment(service)} className="btn btn-secondary text-white uppercase">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentDoctor;