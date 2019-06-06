import React, { Component, Fragment, forwardRef } from 'react'
import { storiesOf, addDecorator, addParameters } from '@storybook/react'

import { Button } from '../src/Button'
import { Pop } from '../src/Pop'
import { Menu } from '../src/Menu'
import { MenuItem } from '../src/MenuItem'
import markdown from './info/molecules/pop.md'

addParameters({ notes: markdown })

const Btn = forwardRef(({ styles = {}, ...props }, ref) => (
    <button
        ref={ref}
        {...props}
        style={{
            display: 'block',
            width: 150,
            height: 50,
            ...styles,
        }}
    />
))

const createPopContent = () => (
    <p>
        This is content for a Pop component
        <br />
        It could contain any content,
        <br />
        but for now it's nothing but text.
        <style jsx>{`
            p {
                margin: 0;
                padding: 16px 20px;
            }
        `}</style>
    </p>
)

const createPop = side => () => (
    <Pop
        side={side}
        open={true}
        onClose={() => null}
        anchorRef={{ current: 'Overriden by story implementation' }}
    >
        {createPopContent()}
    </Pop>
)

const createWrapper = (styles, displayName = '') => {
    const Wrapper = class extends Component {
        ref1 = React.createRef()

        render() {
            return (
                <Fragment>
                    <Btn ref={this.ref1} styles={styles}>
                        Anchor
                    </Btn>

                    {React.Children.map(this.props.children, child =>
                        React.cloneElement(child, {
                            anchorRef: this.ref1,
                        })
                    )}
                </Fragment>
            )
        }
    }

    Wrapper.displayName = displayName
    return Wrapper
}

/**
 * =============================================
 *
 * Standard behavior - No positional adjustments
 *
 * =============================================
 */

/**
 * Pop in bottom position
 * ===========================
 */
const Bottom = createWrapper({ margin: '0 auto' })

storiesOf('Pop', module)
    .addDecorator(fn => <Bottom>{fn()}</Bottom>)
    .add('Bottom', createPop('bottom'))

/**
 * Pop in top position
 * ===========================
 */
const Top = createWrapper({ margin: '200px auto 0' })

storiesOf('Pop', module)
    .addDecorator(fn => <Top>{fn()}</Top>)
    .add('Top', createPop('top'))

/**
 * ===========================
 * Pop on the right
 * ===========================
 */
const Right = createWrapper({ margin: '200px 0 0' })

storiesOf('Pop', module)
    .addDecorator(fn => <Right>{fn()}</Right>)
    .add('Right', createPop('right'))

/**
 * Pop on the left
 * ===========================
 */
const Left = createWrapper({ margin: '200px 0 0 auto' })

storiesOf('Pop', module)
    .addDecorator(fn => <Left>{fn()}</Left>)
    .add('Left', createPop('left'))

/**
 * ==========================================
 *
 * Edge cases - Positions have to be adjusted
 *
 * ==========================================
 */

/**
 * Out of body - bottom
 * ==========================
 */
const OutOfBodyBottom = createWrapper({ margin: '200px 0 0 auto' })

storiesOf('Pop (out of body)', module)
    .addDecorator(fn => <OutOfBodyBottom>{fn()}</OutOfBodyBottom>)
    .add('Bottom', () => (
        <Pop
            side="bottom"
            open={true}
            onClose={() => null}
            anchorRef={{ current: 'Overriden by story implementation' }}
        >
            {createPopContent()}
        </Pop>
    ))

/**
 * Out of body - top
 * ==========================
 */
const OutOfBodyTop = createWrapper({ margin: '200px 0 0 auto' })

storiesOf('Pop (out of body)', module)
    .addDecorator(fn => <OutOfBodyTop>{fn()}</OutOfBodyTop>)
    .add('Top', () => (
        <Pop
            side="top"
            open={true}
            onClose={() => null}
            anchorRef={{ current: 'Overriden by story implementation' }}
        >
            {createPopContent()}
        </Pop>
    ))

/**
 * Out of body - left
 * ==========================
 */
const OutOfBodyLeft = createWrapper({ margin: '200px 0 0 200px' })

storiesOf('Pop (out of body)', module)
    .addDecorator(fn => <OutOfBodyLeft>{fn()}</OutOfBodyLeft>)
    .add('Left', () => (
        <Pop
            side="left"
            open={true}
            onClose={() => null}
            anchorRef={{ current: 'Overriden by story implementation' }}
        >
            {createPopContent()}
        </Pop>
    ))

/**
 * Out of body - right
 * ==========================
 */
const OutOfBodyRight = createWrapper({ margin: '200px 200px 0 auto' })

storiesOf('Pop (out of body)', module)
    .addDecorator(fn => <OutOfBodyRight>{fn()}</OutOfBodyRight>)
    .add('Right', () => (
        <Pop
            side="right"
            open={true}
            onClose={() => null}
            anchorRef={{ current: 'Overriden by story implementation' }}
        >
            {createPopContent()}
        </Pop>
    ))
