import React, { useEffect, useState } from "react";
import { format } from 'date-fns';
import AppoinmentDoctor from "./AppointmentDoctor";
import BookingModal from "./BookingModal";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const AvailableAppointment = ({ date, setDate }) => {
    // const [services, setServices] = useState([]);

    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, 'PP');

    const {data: services, isLoading, refetch} = useQuery(['available', formattedDate], ()=>
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json())
    )
    if(isLoading){
        return <Loading></Loading>
    }

    // useEffect(() =>{
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //     .then(res => res.json())
    //     .then(data => setServices(data))
    // },[formattedDate])
    return (
        <section>
            <h2 className="text-xl font-bold text-secondary text-center ">Available Services on {format(date, 'PP')}</h2>
            <p className="text-center text-accent ">Please select a service.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services?.map( service => <AppoinmentDoctor key={service._id} service={service} setTreatment={setTreatment}></AppoinmentDoctor>)
                }
            </div>
            {treatment && <BookingModal treatment={treatment} setTreatment={setTreatment} date={date} refetch={refetch}></BookingModal>}
        </section>
    );
};

export default AvailableAppointment;