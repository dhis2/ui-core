import React from 'react'
import { storiesOf } from '@storybook/react'
import { State, Store } from '@sambego/storybook-state'

import { Chevron } from '../src/icons/Chevron'
import { Checkbox } from '../src/Checkbox'
import { Tree } from '../src/Tree'

const say = something => () => alert(something)

const store = new Store(
    [...Array(50).keys()].reduce(
        (acc, cur, index) => ({
            ...acc,
            [`open${index}`]: false,
            [`checked${index}`]: false,
        }),
        {}
    )
)

const toggleOpen = num => () =>
    store.set({ [`open${num}`]: !store.get(`open${num}`) })

const toggleChecked = num => () =>
    store.set({ [`checked${num}`]: !store.get(`checked${num}`) })

storiesOf('Tree', module)
    .add('Multiple roots', () => (
        <div>
            <Tree hasLeaves open={false} onToggleOpen={say('toggle tree 1.1')}>
                <Tree.Label open={false}>
                    <Checkbox
                        label="Tree label 1.1"
                        name="l1.1"
                        onChange={say('checkbox 1.1 clicked')}
                        checked={false}
                    />
                </Tree.Label>

                <Tree.Contents open={false} />
            </Tree>

            <Tree hasLeaves open={false} onToggleOpen={say('toggle tree 1.2')}>
                <Tree.Label open={false}>
                    <Checkbox
                        label="Tree label 1.2"
                        name="l1.2"
                        onChange={say('checkbox 1.2 clicked')}
                        checked={false}
                    />
                </Tree.Label>

                <Tree.Contents open={false} />
            </Tree>
        </div>
    ))
    .add('2 Levels open', () => (
        <Tree hasLeaves open={true} onToggleOpen={say('Toggle tree 1.1')}>
            <Tree.Label open={true}>
                <Checkbox
                    label="Tree label"
                    name="l1.1"
                    onChange={say('Check 1.1')}
                    checked={false}
                />
            </Tree.Label>

            <Tree.Contents open={true}>
                <Tree
                    hasLeaves
                    open={true}
                    onToggleOpen={say('Toggel tree 2.1')}
                >
                    <Tree.Label open={true}>
                        <Checkbox
                            label="Tree label"
                            name="l2.1"
                            onChange={say('Check 2.1')}
                            checked={false}
                        />
                    </Tree.Label>

                    <Tree.Contents open={true}>
                        <Tree>
                            <Tree.Label>
                                <Checkbox
                                    label="Tree label"
                                    name="l3.1"
                                    onChange={say('Check 3.1')}
                                    checked={false}
                                />
                            </Tree.Label>
                        </Tree>
                        <Tree>
                            <Tree.Label>
                                <Checkbox
                                    label="Tree label"
                                    name="l3.2"
                                    onChange={say('Check 3.2')}
                                    checked={false}
                                />
                            </Tree.Label>
                        </Tree>
                        <Tree>
                            <Tree.Label>
                                <Checkbox
                                    label="Tree label"
                                    name="l3.3"
                                    onChange={say('Check 3.3')}
                                    checked={false}
                                />
                            </Tree.Label>
                        </Tree>
                    </Tree.Contents>
                </Tree>
                <Tree hasLeaves open={false} onToggleOpen={toggleOpen(10)}>
                    <Tree.Label open={false}>
                        <Checkbox
                            label="Tree label"
                            name="l3.1"
                            onChange={toggleChecked(10)}
                            checked={false}
                        />
                    </Tree.Label>

                    <Tree.Contents open={false}>
                        <Tree>
                            <Tree.Label>
                                <Checkbox
                                    label="Tree label"
                                    name="l3.1"
                                    onChange={toggleChecked(11)}
                                    checked={false}
                                />
                            </Tree.Label>
                        </Tree>
                        <Tree>
                            <Tree.Label>
                                <Checkbox
                                    label="Tree label"
                                    name="l3.2"
                                    onChange={toggleChecked(12)}
                                    checked={false}
                                />
                            </Tree.Label>
                        </Tree>
                        <Tree>
                            <Tree.Label>
                                <Checkbox
                                    label="Tree label"
                                    name="l3.3"
                                    onChange={toggleChecked(13)}
                                    checked={false}
                                />
                            </Tree.Label>
                        </Tree>
                    </Tree.Contents>
                </Tree>
                <Tree open={false} onToggleOpen={say('Toggle tree 2.2')}>
                    <Tree.Label open={false}>
                        <Checkbox
                            label="Tree label"
                            name="l2.2"
                            onChange={say('Check 2.2')}
                            checked={false}
                        />
                    </Tree.Label>
                </Tree>
                <Tree open={false} onToggleOpen={say('Toggle tree 2.3')}>
                    <Tree.Label open={false}>
                        <Checkbox
                            label="Tree label"
                            name="l2.3"
                            onChange={say('Check 2.3')}
                            checked={false}
                        />
                    </Tree.Label>
                </Tree>
                <Tree open={false} onToggleOpen={say('Toggle tree 2.4')}>
                    <Tree.Label open={false}>
                        <Checkbox
                            label="Tree label"
                            name="l2.4"
                            onChange={say('Check 2.4')}
                            checked={false}
                        />
                    </Tree.Label>
                </Tree>
            </Tree.Contents>
        </Tree>
    ))
    .add('Text leaves', () => (
        <div>
            <Tree
                hasLeaves
                open={true}
                onToggleOpen={say('toggle tree level 1')}
                arrowTopOffset="10px"
            >
                <Tree.Label open={true}>
                    <h2>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                    </h2>
                </Tree.Label>
                <Tree.Contents open={true}>
                    Sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua. At vero eos et
                    accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                    amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                    elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                    dolore magna aliquyam erat, sed diam voluptua. At vero eos
                    et accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                    amet.
                    <div className="sub-tree sub-tree--open">
                        <Tree
                            hasLeaves
                            open={true}
                            onToggleOpen={say('toggle tree level 1')}
                        >
                            <Tree.Label open={true}>
                                <h2>
                                    Lorem ipsum dolor sit amet, consetetur
                                    sadipscing elitr
                                </h2>
                            </Tree.Label>
                            <Tree.Contents open={true}>
                                Sed diam nonumy eirmod tempor invidunt ut labore
                                et dolore magna aliquyam erat, sed diam
                                voluptua. At vero eos et accusam et justo duo
                                dolores et ea rebum. Stet clita kasd gubergren,
                                no sea takimata sanctus est Lorem ipsum dolor
                                sit amet. Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua. At vero eos et accusam
                                et justo duo dolores et ea rebum. Stet clita
                                kasd gubergren, no sea takimata sanctus est
                                Lorem ipsum dolor sit amet.
                            </Tree.Contents>
                        </Tree>
                    </div>
                    <div className="sub-tree">
                        <Tree
                            hasLeaves
                            open={false}
                            onToggleOpen={say('toggle tree level 1')}
                        >
                            <Tree.Label open={false}>
                                <h2>
                                    Lorem ipsum dolor sit amet, consetetur
                                    sadipscing elitr
                                </h2>
                            </Tree.Label>
                            <Tree.Contents open={false} />
                        </Tree>
                    </div>
                    <div className="sub-tree">
                        <Tree
                            hasLeaves
                            open={false}
                            onToggleOpen={say('toggle tree level 1')}
                        >
                            <Tree.Label open={false}>
                                <h2>
                                    Lorem ipsum dolor sit amet, consetetur
                                    sadipscing elitr
                                </h2>
                            </Tree.Label>
                            <Tree.Contents open={false} />
                        </Tree>
                    </div>
                    <div className="sub-tree">
                        <Tree
                            hasLeaves
                            open={false}
                            onToggleOpen={say('toggle tree level 1')}
                        >
                            <Tree.Label open={false}>
                                <h2>
                                    Lorem ipsum dolor sit amet, consetetur
                                    sadipscing elitr
                                </h2>
                            </Tree.Label>
                            <Tree.Contents open={false} />
                        </Tree>
                    </div>
                    <div className="sub-tree">
                        <Tree
                            hasLeaves
                            open={false}
                            onToggleOpen={say('toggle tree level 1')}
                        >
                            <Tree.Label open={false}>
                                <h2>
                                    Lorem ipsum dolor sit amet, consetetur
                                    sadipscing elitr
                                </h2>
                            </Tree.Label>
                            <Tree.Contents open={false} />
                        </Tree>
                    </div>
                </Tree.Contents>
            </Tree>

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
                    padding-top: 8px;
                }

                div :global(.tree__arrow.open:after) {
                    top: 21px;
                    height: calc(100% - 32px);
                }
            `}</style>
        </div>
    ))
