import React from 'react';
import {ChangeEvent, useState} from "react";
import {sendNumberTC, setStatusAC} from "../store/appReducer";
import {useAppDispatch, useAppSelector} from "../store/store";
import "./Form.css"


export const Form = () => {
    const [input, setInput] = useState("")
    const [error, setError] = useState<string | null>("")
    const status = useAppSelector(state=> state.app.status)
    const dispatch = useAppDispatch()

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setError("")
        setInput(e.currentTarget.value)
    }
    const sendValue = () => {
        if (input.trim() !== "" && input.length> 0) {
            dispatch(sendNumberTC(+input))
            setInput("")
        } else {
            setError("Введите ваш номер")
        }
    }
    const onFocus = () => {
        setError("")
        dispatch(setStatusAC(""))
    }

    return (
        <div className="generalForm">
            <div className="form">
                <div className="inputNumber">
                    <input
                        className="inputNumberPlaceholder"
                        placeholder="Ваш номер..."
                        value={input}
                        onChange={onChangeInput}
                        onFocus={onFocus}
                        type={"number"}
                    />
                </div>
                <button className="inputSend" onClick={sendValue}>
                    <div className="inputSendPlaceholder"><a className="fa-solid fa-check">ЗАКАЗАТЬ</a></div>
                </button>
                <div className="error">{error ? error : ""}</div>
                <div className="status">{status}</div>
            </div>
        </div>
    )
}