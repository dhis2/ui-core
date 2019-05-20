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
    .add('Small: Title, Content, Action', () => (
        <Modal open small>
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

                <Button onClick={say('Button primary')} primary>
                    Primary action
                </Button>
            </Modal.Actions>
        </Modal>
    ))
    .add('Medium: Title, Content, Action', () => (
        <Modal open>
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

                <Button onClick={say('Button primary')} primary>
                    Primary action
                </Button>
            </Modal.Actions>
        </Modal>
    ))
    .add('Large: Title, Content, Primary', () => (
        <Modal open large>
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

                <Button onClick={say('Button primary')} primary>
                    Primary action
                </Button>
            </Modal.Actions>
        </Modal>
    ))
    .add('Small: Content & Primary', () => (
        <Modal open small>
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

                <Button onClick={say('Button primary')} primary>
                    Primary action
                </Button>
            </Modal.Actions>
        </Modal>
    ))
    .add('Small: Destructive Primary', () => (
        <Modal open small>
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

                <Button primary destructive onClick={say('Button primary')}>
                    Primary action
                </Button>
            </Modal.Actions>
        </Modal>
    ))
    .add('Small: Clickable screen cover', () => (
        <Modal open small onClose={say('Clickable screen cover')}>
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

                <Button primary destructive onClick={say('Button primary')}>
                    Primary action
                </Button>
            </Modal.Actions>
        </Modal>
    ))
    .add('Small: scrollable', () => (
        <Modal open small onClose={say('Clickable screen cover')}>
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

                <Button primary destructive onClick={say('Button primary')}>
                    Primary action
                </Button>
            </Modal.Actions>
        </Modal>
    ))
    .add('Small: Long title', () => (
        <Modal open small>
            <Modal.Title>
                This headline should break into multiple lines because it's way
                too long for one!
            </Modal.Title>

            <Modal.Content>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
            </Modal.Content>

            <Modal.Actions>
                <Button onClick={say('Button secondary')} secondary>
                    Secondary action
                </Button>

                <Button onClick={say('Button primary')} primary>
                    Primary action
                </Button>
            </Modal.Actions>
        </Modal>
    ))
