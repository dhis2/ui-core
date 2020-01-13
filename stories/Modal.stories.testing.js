import React from 'react'
import { storiesOf } from '@storybook/react'
import {
    Button,
    ButtonStrip,
    Modal,
    ModalTitle,
    ModalActions,
    ModalContent,
} from '../src'

const onClose = (...args) => window.onClose(...args)

storiesOf('Modal', module).add('Onclose', () => (
    <Modal small onClose={onClose}>
        <ModalTitle>Title</ModalTitle>
        <ModalContent>Content</ModalContent>
        <ModalActions>
            <ButtonStrip end>
                <Button secondary>Secondary action</Button>
                <Button primary>Primary action</Button>
            </ButtonStrip>
        </ModalActions>
    </Modal>
))
