import React, {useState} from 'react';
import {Button} from "./Button";

export const Counter = () => {

    const [number, setNumber] = useState(0);

    const maxValue = 5;

    const ifMaxValue = number === maxValue;

    const onClickButtonIncHandler = () => {
        setNumber(number + 1)
    }

    const onClickButtonResetHandler = () => {
        setNumber(0)
    }

    return (
        <div className="counter">

            <div className={`counter-display ${ifMaxValue ? "red" : ""}`}>{number}</div>
            <div className="buttons">
                <Button title={"inc"}
                        callBack={onClickButtonIncHandler}
                        disabled={ifMaxValue}
                        className="button"
                />
                <Button title={"reset"}
                        callBack={onClickButtonResetHandler}
                        disabled={number === 0}
                        className="button"
                />
            </div>
        </div>
    );
};