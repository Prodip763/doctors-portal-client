import React from "react";
import appointment from "../../assets/images/appointment.png"
import MainButton from "../Shared/MainButton";

const Contact = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className="text-center py-6">
            <h3 className="text-xl text-primary font-bold text-center">Contact Us</h3>
            <h2 className="text-2xl text-white">Stay connected with us</h2>
            <div className="">
                <input type="email" placeholder="Email Address" className="mt-3 input input-bordered input-info w-full max-w-xs" /><br></br>
                <input type="text" placeholder="Subject" className="mt-3 input input-bordered input-info w-full max-w-xs" /><br></br>
                <textarea className="mt-3 w-80 textarea textarea-info" placeholder="Your message"></textarea>
                <MainButton>Submit</MainButton>
            </div>
        </section>
    );
};

export default Contact;