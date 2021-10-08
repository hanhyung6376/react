import React, { useState } from 'react';
import Button from "../components/Common/Button";
import Modal from "../components/Modal";


const ModalPage = () => {
    const [visible, setVisible] = useState(false);

    const onVisible = () => {
        setVisible(!visible)
    }

    return (
        <>
            <Button text="모달 테스트" onClick={onVisible}/>
            <Modal title="모달 창 테스트" description="정상 작동 하나요??" visible={visible} onClick={onVisible}/>
        </>
    )
}

export default ModalPage;