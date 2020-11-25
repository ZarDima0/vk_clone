import React from 'react';
import Dialog from "../Dialogs/Diaogs.module.css"
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div classname={Dialog.dialog}>
            <NavLink to={"/Dialog/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Messange = (props) => {
    return (
        <div className={Dialog.messages}>{props.sms}</div>
    )
}

const Dialogs = (props) => {


    let Dialogs = [
        { id: 1, name: "Галя" },
        { id: 2, name: "Гулянар" },
        { id: 3, name: "Стас" },
        { id: 4, name: "Мурка" },
    ]
    let Messanges = [
        { id: 1, message: "Dima ghdbtn " },
        { id: 2, message: "Dima ghdbtn " },
        { id: 3, message: "Dima ghdbtn " },
        { id: 4, message: "Dima ghdbtn " },
    ]

    let DialogsElement = Dialogs.map(d => <DialogItem name={d.name} id={Dialog.id} />);
    let MessangeElement = Messanges.map(m => <Messange message={m.message} />);
    
    return (
        <div classname={Dialog.dialogs}>
            <div className={Dialog.dialogi}>
                <div className={Dialog.dialogi_item}>
                    <div classname={Dialog.dialog}>
                        {DialogsElement}
                    </div>
                </div>
                <div className={Dialog.messaes}>
                    <div className={Dialog.list}>
                        {MessangeElement}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;