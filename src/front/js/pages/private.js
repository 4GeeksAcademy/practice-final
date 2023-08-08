import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/private.css";
import Card from  "../component/Card"



export const Private = () => {
    const { store, actions } = useContext(Context);
    const [user, setUser] = useState(store.user)


    useEffect(() => {
        let storageUSer = JSON.parse(localStorage.getItem("user"))
        if (storageUSer && user === null) {
            setUser(() => storageUSer)
        }
        if (!storageUSer && user === null) {
            actions.getUser();
        }

    }, [user, store.user])
        console.log(store.dog[0])

    return (
    <div>
        <>
            {user !== null ? `hello ${user.email}` : <></> }

        </>
        <div className="mt-5 bg bg-dark">
            <div className="cardsTitleHolder">
                <h1 className="descriptionTitle">See The Lovely Dogs Available</h1>
            </div>
            <div className="d-flex justify-content-center">
                <div className="d-flex cardDisplay bg-black">
                    {store.dog.map((item, index) => {
                    return (
                        <span style={{ width: "2000px" }} key={index}>
                            <Card
                                item={item}
                                key={index}
                                id={index}
                                favorite={actions.addFavorites}
                            />
                        </span>
                        );
                    })}
                </div>
            </div>

        </div>
        
    </div>   
    )
}