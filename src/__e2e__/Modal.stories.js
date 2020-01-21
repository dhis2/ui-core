import React from 'react'
import { storiesOf } from '@storybook/react'
import {
    Button,
    ButtonStrip,
    Modal,
    ModalTitle,
    ModalActions,
    ModalContent,
} from '../index.js'

storiesOf('Modal', module).add('With onClose', () => (
    <Modal small onClose={(...args) => window.onClose(...args)}>
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
