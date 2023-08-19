import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Success = () => {
    const { store, actions } = useContext(Context);

	return (
            <div className="container text-center bg-info w-50 p-3">
                <h3>Payment successful </h3>
                <br />
                <br />
                <h4>You will receive an email confirmation shortly</h4>
                <br />
                <h5>Thanks for your payment and for using the Hello Woof app!</h5>
                <br />
                <h6>If you have any questions, please email us at &nbsp;
                    <a href="mailto:info@hellowoof.com">info@hellowoof.com</a>
                </h6>
            </div> 
	);
};
