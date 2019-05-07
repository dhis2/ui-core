import React from 'react'
import { storiesOf } from '@storybook/react'
import { Modal } from '../src/Modal'
import { Button } from '../src/Button'

const say = something => () => alert(something)

storiesOf('Modal', module)
    .add('Modal (small) /w Title, Content & Primary', () => (
        <Modal size="small">
            <Modal.Title>
                This is a small modal with title, content and primary action
            </Modal.Title>

            <Modal.Content>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
            </Modal.Content>

            <Modal.Actions>
                <Button onClick={say('Button secondary')} secondary>
                    Secondary action
                </Button>

                <span style={{ marginLeft: 16 }}>
                    <Button
                        onClick={say('Button primary')}
                        primary
                        className="prim"
                    >
                        Primary action
                    </Button>
                </span>
            </Modal.Actions>
        </Modal>
    ))
    .add('Modal (medium) /w Title, Content & Primary', () => (
        <Modal size="medium">
            <Modal.Title>
                This is a medium modal with title, content and primary action
            </Modal.Title>

            <Modal.Content>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
            </Modal.Content>

            <Modal.Actions>
                <Button onClick={say('Button secondary')} secondary>
                    Secondary action
                </Button>

                <span style={{ marginLeft: 16 }}>
                    <Button
                        onClick={say('Button primary')}
                        primary
                        className="prim"
                    >
                        Primary action
                    </Button>
                </span>
            </Modal.Actions>
        </Modal>
    ))
    .add('Modal (large) /w Title, Content & Primary', () => (
        <Modal size="large">
            <Modal.Title>
                This is a large modal with title, content and primary action
            </Modal.Title>

            <Modal.Content>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
            </Modal.Content>

            <Modal.Actions>
                <Button onClick={say('Button secondary')} secondary>
                    Secondary action
                </Button>

                <span style={{ marginLeft: 16 }}>
                    <Button
                        onClick={say('Button primary')}
                        primary
                        className="prim"
                    >
                        Primary action
                    </Button>
                </span>
            </Modal.Actions>
        </Modal>
    ))
    .add('Modal (small) /w Content & Primary', () => (
        <Modal size="small">
            <Modal.Content>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
            </Modal.Content>

            <Modal.Actions>
                <Button onClick={say('Button secondary')} secondary>
                    Secondary action
                </Button>

                <span style={{ marginLeft: 16 }}>
                    <Button
                        onClick={say('Button primary')}
                        primary
                        className="prim"
                    >
                        Primary action
                    </Button>
                </span>
            </Modal.Actions>
        </Modal>
    ))
    .add('Modal (small) /w destructive Primary', () => (
        <Modal size="small">
            <Modal.Content>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
            </Modal.Content>

            <Modal.Actions>
                <Button onClick={say('Button secondary')} secondary>
                    Secondary action
                </Button>

                <span style={{ marginLeft: 16 }}>
                    <Button
                        primary
                        destructive
                        onClick={say('Button primary')}
                        className="prim"
                    >
                        Primary action
                    </Button>
                </span>
            </Modal.Actions>
        </Modal>
    ))
    .add('Modal (small) /w clickable screen cover', () => (
        <Modal size="small" onClose={say('Clickable screen cover')}>
            <Modal.Title>
                This is a modal with clickable screen cover
            </Modal.Title>

            <Modal.Content>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
            </Modal.Content>

            <Modal.Actions>
                <Button onClick={say('Button secondary')} secondary>
                    Secondary action
                </Button>

                <span style={{ marginLeft: 16 }}>
                    <Button
                        primary
                        destructive
                        onClick={say('Button primary')}
                        className="prim"
                    >
                        Primary action
                    </Button>
                </span>
            </Modal.Actions>
        </Modal>
    ))
    .add('Modal (small) /w scrollable content', () => (
        <Modal scrollable size="small" onClose={say('Clickable screen cover')}>
            <Modal.Title>This is a modal with scrollable content</Modal.Title>

            <Modal.Content>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing
                elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                accusam et justo duo dolores et ea rebum. Stet clita kasd
                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
            </Modal.Content>

            <Modal.Actions>
                <Button onClick={say('Button secondary')} secondary>
                    Secondary action
                </Button>

                <span style={{ marginLeft: 16 }}>
                    <Button
                        primary
                        destructive
                        onClick={say('Button primary')}
                        className="prim"
                    >
                        Primary action
                    </Button>
                </span>
            </Modal.Actions>
        </Modal>
    ))
