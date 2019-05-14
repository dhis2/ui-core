import React from 'react'
import { storiesOf } from '@storybook/react'
import { State, Store } from '@sambego/storybook-state'

import { Chevron } from '../src/icons/Chevron'
import { Checkbox } from '../src/Checkbox'
import { Tree } from '../src/Tree'

const say = something => () => alert(something)

// Helpers {{{
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
// }}} Helpers end

storiesOf('Tree', module)
    /**
     * Stories for development
     * ============
     */
    .add('DX: Single root', () => (
        <State store={store}>
            {state => (
                <Tree hasLeafes open={state.open0} onToggleOpen={toggleOpen(0)}>
                    <Tree.Label open={state.open0}>
                        <Checkbox
                            label="Tree label"
                            name="l1"
                            onChange={toggleChecked(0)}
                            checked={state.checked0}
                        />
                    </Tree.Label>

                    <Tree.Contents open={state.open0}>
                        <Tree open={state.open2} onToggleOpen={toggleOpen(2)}>
                            <Tree.Label open={state.open2}>
                                <Checkbox
                                    label="Tree label"
                                    name="l2.1"
                                    onChange={toggleChecked(2)}
                                    checked={state.checked2}
                                />
                            </Tree.Label>
                        </Tree>
                        <Tree open={state.open3} onToggleOpen={toggleOpen(3)}>
                            <Tree.Label open={state.open3}>
                                <Checkbox
                                    label="Tree label"
                                    name="l2.2"
                                    onChange={toggleChecked(3)}
                                    checked={state.checked3}
                                />
                            </Tree.Label>
                        </Tree>
                        <Tree open={state.open4} onToggleOpen={toggleOpen(4)}>
                            <Tree.Label open={state.open4}>
                                <Checkbox
                                    label="Tree label"
                                    name="l2.3"
                                    onChange={toggleChecked(4)}
                                    checked={state.checked4}
                                />
                            </Tree.Label>
                        </Tree>
                        <Tree open={state.open5} onToggleOpen={toggleOpen(5)}>
                            <Tree.Label open={state.open5}>
                                <Checkbox
                                    label="Tree label"
                                    name="l2.4"
                                    onChange={toggleChecked(5)}
                                    checked={state.checked5}
                                />
                            </Tree.Label>
                        </Tree>
                    </Tree.Contents>
                </Tree>
            )}
        </State>
    ))
    .add('DX: Multiple roots', () => (
        <State store={store}>
            {state => [
                <Tree hasLeafes open={state.open0} onToggleOpen={toggleOpen(0)}>
                    <Tree.Label open={state.open0}>
                        <Checkbox
                            label="Tree label"
                            name="l1.1"
                            onChange={toggleChecked(0)}
                            checked={state.checked0}
                        />
                    </Tree.Label>

                    <Tree.Contents open={state.open0}>
                        <Tree
                            hasLeafes
                            open={state.open2}
                            onToggleOpen={toggleOpen(2)}
                        >
                            <Tree.Label open={state.open2}>
                                <Checkbox
                                    label="Tree label"
                                    name="l2.1"
                                    onChange={toggleChecked(2)}
                                    checked={state.checked2}
                                />
                            </Tree.Label>

                            <Tree.Contents open={state.open2}>
                                <Tree>
                                    <Tree.Label>
                                        <Checkbox
                                            label="Tree label"
                                            name="l3.1"
                                            onChange={toggleChecked(7)}
                                            checked={state.checked7}
                                        />
                                    </Tree.Label>
                                </Tree>
                                <Tree>
                                    <Tree.Label>
                                        <Checkbox
                                            label="Tree label"
                                            name="l3.2"
                                            onChange={toggleChecked(8)}
                                            checked={state.checked8}
                                        />
                                    </Tree.Label>
                                </Tree>
                                <Tree>
                                    <Tree.Label>
                                        <Checkbox
                                            label="Tree label"
                                            name="l3.3"
                                            onChange={toggleChecked(9)}
                                            checked={state.checked9}
                                        />
                                    </Tree.Label>
                                </Tree>
                            </Tree.Contents>
                        </Tree>
                        <Tree open={state.open3} onToggleOpen={toggleOpen(3)}>
                            <Tree.Label open={state.open3}>
                                <Checkbox
                                    label="Tree label"
                                    name="l2.2"
                                    onChange={toggleChecked(3)}
                                    checked={state.checked3}
                                />
                            </Tree.Label>
                        </Tree>
                        <Tree open={state.open4} onToggleOpen={toggleOpen(4)}>
                            <Tree.Label open={state.open4}>
                                <Checkbox
                                    label="Tree label"
                                    name="l2.3"
                                    onChange={toggleChecked(4)}
                                    checked={state.checked4}
                                />
                            </Tree.Label>
                        </Tree>
                        <Tree open={state.open5} onToggleOpen={toggleOpen(5)}>
                            <Tree.Label open={state.open5}>
                                <Checkbox
                                    label="Tree label"
                                    name="l2.4"
                                    onChange={toggleChecked(5)}
                                    checked={state.checked5}
                                />
                            </Tree.Label>
                        </Tree>
                    </Tree.Contents>
                </Tree>,
                <Tree>
                    <Tree.Label open={state.open6}>
                        <Checkbox
                            label="Tree label"
                            name="l1.2"
                            onChange={toggleChecked(6)}
                            checked={state.checked6}
                        />
                    </Tree.Label>
                </Tree>,
            ]}
        </State>
    ))

    /**
     * Real stories
     * ============
     */
    .add('Multiple roots', () => (
        <div>
            <Tree hasLeafes open={false} onToggleOpen={say('toggle tree 1.1')}>
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

            <Tree hasLeafes open={false} onToggleOpen={say('toggle tree 1.2')}>
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
        <Tree hasLeafes open={true} onToggleOpen={say('Toggle tree 1.1')}>
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
                    hasLeafes
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
