import React, { Component, Fragment, forwardRef } from 'react'
import { storiesOf, addDecorator, addParameters } from '@storybook/react'

import { Button } from '../src/Button'
import { Popover } from '../src/Popover'
import { Menu } from '../src/Menu'
import { MenuItem } from '../src/MenuItem'
import markdown from './info/molecules/popover.md'

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

const createPopoverContent = () => (
    <p>
        This is content for a Popover component
        <br />
        It could contain any content,
        <br />
        but for now it's nothing but text.
        <br />
        There might a be few extra lines,
        <br />
        which can be below the text.
        <style jsx>{`
            p {
                margin: 0;
                padding: 16px 20px;
            }
        `}</style>
    </p>
)

const createPopover = (side, spacing) => () => (
    <Popover
        side={side}
        spacing={spacing}
        open={true}
        onClose={() => null}
        anchorRef={{ current: <span>Overriden by story implementation</span> }}
        noArrow={!spacing}
    >
        {createPopoverContent()}
    </Popover>
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
 * Popover in bottom position
 * ===========================
 */
const Bottom = createWrapper({ margin: '0 auto' })

storiesOf('Popover', module)
    .addDecorator(fn => <Bottom>{fn()}</Bottom>)
    .add('Bottom', createPopover('bottom'))

/**
 * Popover in top position
 * ===========================
 */
const Top = createWrapper({ margin: '200px auto 0' })

storiesOf('Popover', module)
    .addDecorator(fn => <Top>{fn()}</Top>)
    .add('Top', createPopover('top'))

/**
 * ===========================
 * Popover on the right
 * ===========================
 */
const Right = createWrapper({ margin: '200px 0 0' })

storiesOf('Popover', module)
    .addDecorator(fn => <Right>{fn()}</Right>)
    .add('Right', createPopover('right'))

/**
 * Popover on the left
 * ===========================
 */
const Left = createWrapper({ margin: '200px 0 0 auto' })

storiesOf('Popover', module)
    .addDecorator(fn => <Left>{fn()}</Left>)
    .add('Left', createPopover('left'))

/**
 * Popover on the left with spacing
 * ============================
 */
const LeftSpacing = createWrapper({ margin: '200px 0 0 auto' })

storiesOf('Popover', module)
    .addDecorator(fn => <LeftSpacing>{fn()}</LeftSpacing>)
    .add('Left with spacing', createPopover('left', 20))

/**
 * Popover on the top with spacing
 * ============================
 */
const BottomSpacing = createWrapper({ margin: '0 auto' })

storiesOf('Popover', module)
    .addDecorator(fn => <BottomSpacing>{fn()}</BottomSpacing>)
    .add('Bottom with spacing', createPopover('bottom', 20))

/**
 * ==========================================
 *
 * Edge cases - Out of body - Positions have to be adjusted
 *
 * ==========================================
 */

/**
 * Out of body - bottom
 * ==========================
 */
const OutOfBodyBottom = createWrapper({ margin: '200px 0 0 auto' })

storiesOf('Popover (out of body)', module)
    .addDecorator(fn => <OutOfBodyBottom>{fn()}</OutOfBodyBottom>)
    .add('Bottom', createPopover('bottom'))

/**
 * Out of body - bottom /w spacing
 * ==========================
 */
const OutOfBodyBottomSpacing = createWrapper({ margin: '200px 0 0 auto' })

storiesOf('Popover (out of body)', module)
    .addDecorator(fn => <OutOfBodyBottomSpacing>{fn()}</OutOfBodyBottomSpacing>)
    .add('Bottom with spacing', createPopover('bottom', 20))

/**
 * Out of body - top
 * ==========================
 */
const OutOfBodyTop = createWrapper({ margin: '200px 0 0 auto' })

storiesOf('Popover (out of body)', module)
    .addDecorator(fn => <OutOfBodyTop>{fn()}</OutOfBodyTop>)
    .add('Top', createPopover('top'))

/**
 * Out of body - top /w spacing
 * ==========================
 */
const OutOfBodyTopSpacing = createWrapper({ margin: '50px auto 0' })

storiesOf('Popover (out of body)', module)
    .addDecorator(fn => <OutOfBodyTopSpacing>{fn()}</OutOfBodyTopSpacing>)
    .add('Top with spacing', createPopover('top', 20))

/**
 * Out of body - left
 * ==========================
 */
const OutOfBodyLeft = createWrapper({ margin: '200px 0 0 200px' })

storiesOf('Popover (out of body)', module)
    .addDecorator(fn => <OutOfBodyLeft>{fn()}</OutOfBodyLeft>)
    .add('Left', createPopover('left'))

/**
 * Out of body - bottom
 * ==========================
 */
const OutOfBodyLeftSpacing = createWrapper({ margin: '0 0 0 200px' })

storiesOf('Popover (out of body)', module)
    .addDecorator(fn => <OutOfBodyLeftSpacing>{fn()}</OutOfBodyLeftSpacing>)
    .add('Left with spacing', createPopover('left', 20))

/**
 * Out of body - right
 * ==========================
 */
const OutOfBodyRight = createWrapper({ margin: '200px 200px 0 auto' })

storiesOf('Popover (out of body)', module)
    .addDecorator(fn => <OutOfBodyRight>{fn()}</OutOfBodyRight>)
    .add('Right', createPopover('right'))

/**
 * Out of body - right
 * ==========================
 */
const OutOfBodyRightSpacing = createWrapper({ margin: '0 200px 0 auto' })

storiesOf('Popover (out of body)', module)
    .addDecorator(fn => <OutOfBodyRightSpacing>{fn()}</OutOfBodyRightSpacing>)
    .add('Right with spacing', createPopover('right', 20))

/**
 * ==========================================
 *
 * Edge cases - Out of viewport - Positions have to be adjusted
 *
 * ==========================================
 */

/**
 * Out of viewport - bottom
 * ==========================
 */
const OutOfViewportBottom = createWrapper({
    margin: 'calc(100vh - 50px) 200px 100px auto',
})

storiesOf('Popover (out of viewport)', module)
    .addDecorator(fn => <OutOfViewportBottom>{fn()}</OutOfViewportBottom>)
    .add('Bottom', createPopover('bottom'))

/**
 * Out of viewport - bottom /w spacing
 * ===================================
 */
const OutOfViewportBottomSpacing = createWrapper({
    margin: 'calc(100vh - 50px) 200px 150px auto',
})

storiesOf('Popover (out of viewport)', module)
    .addDecorator(fn => (
        <OutOfViewportBottomSpacing>{fn()}</OutOfViewportBottomSpacing>
    ))
    .add('Bottom with spacing', createPopover('bottom', 20))
