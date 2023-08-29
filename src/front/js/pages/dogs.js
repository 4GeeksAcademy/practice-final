import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/dog.css";
import Card from  "../component/Card"



export const Dogs = () => {
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

        <div className="mt-4 bg bg-info">
            <div className="cardsTitleHolder">
                <h1 className="descriptionTitle">Take a look at some of our wonderful dogs! </h1>
            </div>
            <div className="text-center">
                <h5> 
                    <p>Scroll through to see all the cute, loving and beautiful dogs that are currently in the dog shelter.</p>
                    <p>For more details click on 'Find Out More' button. You can save your favourites by clicking on the 'Heart' button.</p>
                    <p>Click on the 'We-Time Session' button to book a session with the dog of your choice.</p>
                </h5>
            </div><br></br>
           
            <div className="d-flex justify-content-center">
                <div className="grid-container gap-5 cardDisplay ms-3">
                    {store.dog.map((item, index) => {
                    return (
                        <div>
                            <Card
                                item={item}
                                key={index}
                                id={index}
                                favorite={actions.addFavorites}
                            />
                        </div>
                        );
                    })}
                </div>
            </div>

        </div>
        
    </div>   
    )
}