import React, { useEffect, useState } from "react";
import { format } from 'date-fns';
import AppoinmentDoctor from "./AppointmentDoctor";
import BookingModal from "./BookingModal";

const AvailableAppointment = ({ date, setDate }) => {
    const [services, setServices] = useState([]);

    const [treatment, setTreatment] = useState(null);

    useEffect(() =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <section>
            <h2 className="text-xl font-bold text-secondary text-center">Available Services on {format(date, 'PP')}</h2>
            <p className="text-center text-accent">Please select a service.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services.map( service => <AppoinmentDoctor key={service._id} service={service} setTreatment={setTreatment}></AppoinmentDoctor>)
                }
            </div>
            {treatment && <BookingModal treatment={treatment} setTreatment={setTreatment} date={date}></BookingModal>}
        </section>
    );
};

export default AvailableAppointment;