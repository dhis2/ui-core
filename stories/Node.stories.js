import React from 'react'
import { storiesOf } from '@storybook/react'

import { Chevron } from '../src/icons/Chevron'
import { Checkbox } from '../src/Checkbox'
import { Node } from '../src/Node'

const say = something => () => alert(something)

storiesOf('Node', module)
    .add('Multiple roots', () => (
        <div>
            <Node
                open={false}
                onOpen={say('open tree 1.1')}
                onClose={say('close tree 1.1')}
                component={
                    <Checkbox
                        label="Node label 1.1"
                        name="l1.1"
                        onChange={say('checkbox 1.1 clicked')}
                        checked={false}
                    />
                }
            >
                <span>Placeholder content</span>
            </Node>

            <Node
                open={false}
                onOpen={say('open tree 1.2')}
                onClose={say('close tree 1.2')}
                component={
                    <Checkbox
                        label="Node label 1.2"
                        name="l1.2"
                        onChange={say('checkbox 1.2 clicked')}
                        checked={false}
                    />
                }
            >
                <span>Placeholder content</span>
            </Node>
        </div>
    ))

    .add('2 Levels open', () => (
        <Node
            open={true}
            onOpen={say('open tree 1.1')}
            onClose={say('close tree 1.1')}
            component={
                <Checkbox
                    label="Node label"
                    name="l1.1"
                    onChange={say('Check 1.1')}
                    checked={false}
                />
            }
        >
            <Node
                open={true}
                onOpen={say('open tree 2.1')}
                onClose={say('close tree 2.1')}
                component={
                    <Checkbox
                        label="Node label"
                        name="l2.1"
                        onChange={say('Check 2.1')}
                        checked={false}
                    />
                }
            >
                <Node
                    component={
                        <Checkbox
                            label="Node label"
                            name="l3.1"
                            onChange={say('Check 3.1')}
                            checked={false}
                        />
                    }
                />
                <Node
                    component={
                        <Checkbox
                            label="Node label"
                            name="l3.2"
                            onChange={say('Check 3.2')}
                            checked={false}
                        />
                    }
                />
                <Node
                    component={
                        <Checkbox
                            label="Node label"
                            name="l3.3"
                            onChange={say('Check 3.3')}
                            checked={false}
                        />
                    }
                />
            </Node>
            <Node
                open={false}
                onOpen={say('open tree 2.2')}
                onCLose={say('close tree 2.2')}
                component={
                    <Checkbox
                        label="Node label"
                        name="l3.1"
                        onChange={say('Check 2.2')}
                        checked={false}
                    />
                }
            >
                <Node
                    component={
                        <Checkbox
                            label="Node label"
                            name="l3.4"
                            onChange={say('Check 3.4')}
                            checked={false}
                        />
                    }
                />
                <Node
                    component={
                        <Checkbox
                            label="Node label"
                            name="l3.5"
                            onChange={say('Check 3.5')}
                            checked={false}
                        />
                    }
                />
                <Node
                    component={
                        <Checkbox
                            label="Node label"
                            name="l3.6"
                            onChange={say('Check 3.6')}
                            checked={false}
                        />
                    }
                />
            </Node>
            <Node
                open={false}
                onOpen={say('open tree 2.3')}
                onClose={say('close tree 2.3')}
                component={
                    <Checkbox
                        label="Node label"
                        name="l2.3"
                        onChange={say('Check 2.3')}
                        checked={false}
                    />
                }
            />
            <Node
                open={false}
                onOpen={say('open tree 2.4')}
                onClose={say('close tree 2.4')}
                component={
                    <Checkbox
                        label="Node label"
                        name="l2.4"
                        onChange={say('Check 2.4')}
                        checked={false}
                    />
                }
            />
            <Node
                open={false}
                onOpen={say('open tree 2.5')}
                onClose={say('close tree 2.5')}
                component={
                    <Checkbox
                        label="Node label"
                        name="l2.5"
                        onChange={say('Check 2.5')}
                        checked={false}
                    />
                }
            />
            <Node
                open={false}
                onOpen={say('open tree 2.5')}
                onClose={say('close tree 2.5')}
                component={
                    <Checkbox
                        label="Node label"
                        name="l2.5"
                        onChange={say('Check 2.5')}
                        checked={false}
                    />
                }
            >
                {false && 'Foo'}
            </Node>
        </Node>
    ))

    .add('Text leaves', () => (
        <div>
            <Node
                open={true}
                onOpen={say('open tree level 1')}
                onClose={say('close tree level 1')}
                arrowTopOffset="10px"
                component={
                    <h2>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                    </h2>
                }
            >
                Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
                <div className="sub-tree sub-tree--open">
                    <Node
                        open={true}
                        onOpen={say('open tree level 2.1')}
                        onClose={say('close tree level 2.1')}
                        component={
                            <h2>
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr
                            </h2>
                        }
                    >
                        Sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                        consetetur sadipscing elitr, sed diam nonumy eirmod
                        tempor invidunt ut labore et dolore magna aliquyam erat,
                        sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea
                        takimata sanctus est Lorem ipsum dolor sit amet.
                    </Node>
                </div>
                <div className="sub-tree">
                    <Node
                        open={false}
                        onOpen={say('open tree level 2.2')}
                        onClose={say('close tree level 2.2')}
                        component={
                            <h2>
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr
                            </h2>
                        }
                    >
                        <span>Dummy content</span>
                    </Node>
                </div>
                <div className="sub-tree">
                    <Node
                        open={false}
                        onOpen={say('open tree level 2.3')}
                        onClose={say('close tree level 2.3')}
                        component={
                            <h2>
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr
                            </h2>
                        }
                    >
                        <span>Dummy content</span>
                    </Node>
                </div>
                <div className="sub-tree">
                    <Node
                        open={false}
                        onOpen={say('open tree level 2.4')}
                        onClose={say('close tree level 2.4')}
                        component={
                            <h2>
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr
                            </h2>
                        }
                    >
                        <span>Dummy content</span>
                    </Node>
                </div>
                <div className="sub-tree">
                    <Node
                        open={false}
                        onOpen={say('open tree level 2.5')}
                        onClose={say('close tree level 2.5')}
                        component={
                            <h2>
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr
                            </h2>
                        }
                    >
                        <span>Dummy content</span>
                    </Node>
                </div>
            </Node>

            <style jsx>{`
                div {
                    font-size: 16px;
                    line-height: 24px;
                }

                h2 {
                    font-size: 24px;
                    line-height: 32px;
                    margin: 0 0 10px;
                }

                .sub-tree {
                    margin-top: 10px;
                }

                .sub-tree--open {
                    margin-bottom: 20px;
                }

                div :global(.tree__arrow > span) {
                    padding-top: 4px;
                }

                div :global(.tree__arrow.open:after) {
                    top: 17px;
                    height: calc(100% - 28px);
                }
            `}</style>
        </div>
    ))
