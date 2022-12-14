import React from "react";

const MainButton = ({children}) => {
    return (
        <div>
            <button className="btn btn-primary uppercase text-white bg-gradient-to-r from-secondary to-primary">{children}</button>
        </div>
    );
};

export default MainButton;