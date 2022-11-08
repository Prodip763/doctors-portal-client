import React, { useState } from "react";
import Footer from "../Shared/Footer";
import AppoinmentBanner from "./AppoinmentBanner";
import AvailableAppointment from "./AvailableAppintment";

const Appoinment = () =>{
    const [date, setDate] = useState(new Date());
    return(
        <div>
            <AppoinmentBanner date={date} setDate={setDate}></AppoinmentBanner>
            <AvailableAppointment date={date} setDate={setDate}></AvailableAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;