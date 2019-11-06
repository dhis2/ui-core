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

const say = something => () => alert(something)

storiesOf('Modal', module)
    .add('Small: Title, Content, Action', () => (
        <Modal open small>
            <ModalTitle>
                This is a small modal with title, content and primary action
            </ModalTitle>

            <ModalContent>
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
            </ModalContent>

            <ModalActions>
                <ButtonStrip end>
                    <Button onClick={say('Button secondary')} secondary>
                        Secondary action
                    </Button>

                    <Button onClick={say('Button primary')} primary>
                        Primary action
                    </Button>
                </ButtonStrip>
            </ModalActions>
        </Modal>
    ))
    .add('Medium: Title, Content, Action', () => (
        <Modal open>
            <ModalTitle>
                This is a medium modal with title, content and primary action
            </ModalTitle>

            <ModalContent>
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
            </ModalContent>

            <ModalActions>
                <ButtonStrip end>
                    <Button onClick={say('Button secondary')} secondary>
                        Secondary action
                    </Button>

                    <Button onClick={say('Button primary')} primary>
                        Primary action
                    </Button>
                </ButtonStrip>
            </ModalActions>
        </Modal>
    ))
    .add('Large: Title, Content, Primary', () => (
        <Modal open large>
            <ModalTitle>
                This is a large modal with title, content and primary action
            </ModalTitle>

            <ModalContent>
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
            </ModalContent>

            <ModalActions>
                <ButtonStrip end>
                    <Button onClick={say('Button secondary')} secondary>
                        Secondary action
                    </Button>

                    <Button onClick={say('Button primary')} primary>
                        Primary action
                    </Button>
                </ButtonStrip>
            </ModalActions>
        </Modal>
    ))
    .add('Small: Content & Primary', () => (
        <Modal open small>
            <ModalContent>
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
            </ModalContent>

            <ModalActions>
                <ButtonStrip end>
                    <Button onClick={say('Button secondary')} secondary>
                        Secondary action
                    </Button>

                    <Button onClick={say('Button primary')} primary>
                        Primary action
                    </Button>
                </ButtonStrip>
            </ModalActions>
        </Modal>
    ))
    .add('Small: Destructive Primary', () => (
        <Modal open small>
            <ModalContent>
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
            </ModalContent>

            <ModalActions>
                <ButtonStrip end>
                    <Button onClick={say('Button secondary')} secondary>
                        Secondary action
                    </Button>

                    <Button destructive onClick={say('Button primary')}>
                        Primary action
                    </Button>
                </ButtonStrip>
            </ModalActions>
        </Modal>
    ))
    .add('Small: Clickable screen cover', () => (
        <Modal open small onClose={say('Clickable screen cover')}>
            <ModalTitle>This is a modal with clickable screen cover</ModalTitle>

            <ModalContent>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
            </ModalContent>

            <ModalActions>
                <ButtonStrip end>
                    <Button onClick={say('Button secondary')} secondary>
                        Secondary action
                    </Button>

                    <Button primary onClick={say('Button primary')}>
                        Primary action
                    </Button>
                </ButtonStrip>
            </ModalActions>
        </Modal>
    ))
    .add('Small: scrollable', () => (
        <Modal open small onClose={say('Clickable screen cover')}>
            <ModalTitle>This is a modal with scrollable content</ModalTitle>

            <ModalContent>
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
            </ModalContent>

            <ModalActions>
                <ButtonStrip end>
                    <Button onClick={say('Button secondary')} secondary>
                        Secondary action
                    </Button>

                    <Button destructive onClick={say('Button primary')}>
                        Primary action
                    </Button>
                </ButtonStrip>
            </ModalActions>
        </Modal>
    ))
    .add('Small: Long title', () => (
        <Modal open small>
            <ModalTitle>
                This headline should break into multiple lines because it&apos;s
                way too long for one!
            </ModalTitle>

            <ModalContent>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
            </ModalContent>

            <ModalActions>
                <ButtonStrip end>
                    <Button onClick={say('Button secondary')} secondary>
                        Secondary action
                    </Button>

                    <Button onClick={say('Button primary')} primary>
                        Primary action
                    </Button>
                </ButtonStrip>
            </ModalActions>
        </Modal>
    ))
