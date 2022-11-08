import React from "react";
import { format } from 'date-fns';


const BookingModal = ({ treatment, date, setTreatment }) => {
    const { _id, name, slots } = treatment;

    const handleBooking = (e) =>{
        e.preventDefault();
        const slot = e.target.slot.value;
        console.log(name,slot);
        setTreatment(null);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-secondary">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 justify-items-center mt-2">
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered input-info w-full max-w-xs" />
                        <select name="slot" className="select select-info w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }                      
                        </select>                        
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered input-info w-full max-w-xs" />
                        <input type="email" name="email" placeholder="Email Address" className="input input-bordered input-info w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered input-info w-full max-w-xs" />
                        <input type="submit" value="submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;