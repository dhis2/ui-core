import React from 'react'
import { storiesOf } from '@storybook/react'
import { Modal } from '../src/Modal'
import { Button } from '../src/Button'

import markdown from './info/molecules/modal.md'

const say = something => () => alert(something)

storiesOf('Modal', module)
    .addParameters({
        notes: {
            markdown,
        },
    })
    .add('Modal (small) /w Title, Content & Primary', () => (
        <Modal small>
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
        <Modal>
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
        <Modal large>
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
        <Modal small>
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
        <Modal small>
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
        <Modal small onClose={say('Clickable screen cover')}>
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
    .add('Modal (small) /w too much content for the screen', () => (
        <Modal small onClose={say('Clickable screen cover')}>
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
