import { observer } from 'mobx-react-lite';
import React from 'react'
import { useContext } from 'react';
import { Modal } from 'semantic-ui-react';
import { RootStoreContent } from '../../stores/rootStore';

const ModalContainer = () => {
    const rootStore = useContext(RootStoreContent);
    const { closeModal, modal: { open, body } } = rootStore.modalStore;
    return (
        <Modal open={open} onClose={closeModal} size='mini'>
            <Modal.Content>{body}</Modal.Content>
        </Modal>
    )
}

export default observer(ModalContainer);
