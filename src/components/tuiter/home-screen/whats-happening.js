import React, {useState} from "react";
import {useDispatch} from "react-redux";


const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');

    const dispatch = useDispatch();

    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit', tuit: whatsHappening});
    }

    return (
        <>
            <div className="pt-2 row">
                <div className="col-1">
                    <img className="wd-rounded-corners" height="50" width="50" src="/images/starship.jpeg"/>
                </div>
                <div className="col-11">
                    <textarea className="wd-border-bottom ms-3 wd-100-div bg-black text-white" placeholder="What's happening?" value={whatsHappening}
                              onChange={(event) =>
                                  setWhatsHappening(event.target.value)}>
                    </textarea>

                    <i className="ms-3 me-2 fa-solid fa-image text-primary"></i>
                    <i className="m-2 fa-solid fa-arrow-trend-up text-primary"></i>
                    <i className="m-2 fa-regular fa-face-smile text-primary"></i>
                    <i className="pb-3 m-2 fa-regular fa-calendar text-primary"></i>



                    <button className="float-end btn-primary wd-rounded-corners2" onClick={tuitClickHandler}>
                        Tweet
                    </button>
                </div>

            </div>
        </>
    );
}
export default WhatsHappening;