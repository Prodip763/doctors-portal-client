import React from 'react';

const DoctorRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
    const { name, specialty, img, email } = doctor;

    
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-16 rounded-full">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>Oral Surgery</td>
            <td>
                <label onClick={() => setDeletingDoctor(doctor)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error" > Delete</label>
            </td>
        </tr>
    );
};

export default DoctorRow;