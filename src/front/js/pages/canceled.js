import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Canceled = () => {
    const { store, actions } = useContext(Context);

	return (
            <div className="container text-center bg-info w-50 p-3">
                <h3>Payment cancelled </h3>
                <br />
                <br />
                <h4>Please try again later</h4>
                <br />
                <h5>
                <br />
                If you have any questions, please email us at &nbsp;
                <a href="mailto:info@hellowoof.com">info@hellowoof.com</a>
                </h5>
            </div> 
	);
};
