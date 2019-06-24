import React, { Component, Fragment, forwardRef } from 'react'
import { storiesOf, addDecorator, addParameters } from '@storybook/react'

import { Button } from '../src/Button'
import { Tooltip } from '../src/Tooltip'
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

const createTooltipContent = () => (
    <p>
        This is content for a Tooltip component
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

const createTooltip = (side, spacing) => () => (
    <Tooltip
        side={side}
        spacing={spacing}
        open={true}
        onClose={() => null}
        anchorRef={{ current: <span>Overriden by story implementation</span> }}
        withArrow={!!spacing}
    >
        {createTooltipContent()}
    </Tooltip>
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
 * Tooltip in bottom position
 * ===========================
 */
const Bottom = createWrapper({ margin: '0 auto' })

storiesOf('Tooltip', module)
    .addDecorator(fn => <Bottom>{fn()}</Bottom>)
    .add('Bottom', createTooltip('bottom'))

/**
 * Tooltip in top position
 * ===========================
 */
const Top = createWrapper({ margin: '200px auto 0' })

storiesOf('Tooltip', module)
    .addDecorator(fn => <Top>{fn()}</Top>)
    .add('Top', createTooltip('top'))

/**
 * ===========================
 * Tooltip on the right
 * ===========================
 */
const Right = createWrapper({ margin: '200px 0 0' })

storiesOf('Tooltip', module)
    .addDecorator(fn => <Right>{fn()}</Right>)
    .add('Right', createTooltip('right'))

/**
 * Tooltip on the left
 * ===========================
 */
const Left = createWrapper({ margin: '200px 0 0 auto' })

storiesOf('Tooltip', module)
    .addDecorator(fn => <Left>{fn()}</Left>)
    .add('Left', createTooltip('left'))

/**
 * Tooltip on the left with spacing
 * ============================
 */
const LeftSpacing = createWrapper({ margin: '200px 0 0 auto' })

storiesOf('Tooltip', module)
    .addDecorator(fn => <LeftSpacing>{fn()}</LeftSpacing>)
    .add('Left with spacing', createTooltip('left', 20))

/**
 * Tooltip on the top with spacing
 * ============================
 */
const BottomSpacing = createWrapper({ margin: '0 auto' })

storiesOf('Tooltip', module)
    .addDecorator(fn => <BottomSpacing>{fn()}</BottomSpacing>)
    .add('Bottom with spacing', createTooltip('bottom', 20))

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

storiesOf('Tooltip (out of body)', module)
    .addDecorator(fn => <OutOfBodyBottom>{fn()}</OutOfBodyBottom>)
    .add('Bottom', createTooltip('bottom'))

/**
 * Out of body - bottom /w spacing
 * ==========================
 */
const OutOfBodyBottomSpacing = createWrapper({ margin: '200px 0 0 auto' })

storiesOf('Tooltip (out of body)', module)
    .addDecorator(fn => <OutOfBodyBottomSpacing>{fn()}</OutOfBodyBottomSpacing>)
    .add('Bottom with spacing', createTooltip('bottom', 20))

/**
 * Out of body - top
 * ==========================
 */
const OutOfBodyTop = createWrapper({ margin: '200px 0 0 auto' })

storiesOf('Tooltip (out of body)', module)
    .addDecorator(fn => <OutOfBodyTop>{fn()}</OutOfBodyTop>)
    .add('Top', createTooltip('top'))

/**
 * Out of body - top /w spacing
 * ==========================
 */
const OutOfBodyTopSpacing = createWrapper({ margin: '50px auto 0' })

storiesOf('Tooltip (out of body)', module)
    .addDecorator(fn => <OutOfBodyTopSpacing>{fn()}</OutOfBodyTopSpacing>)
    .add('Top with spacing', createTooltip('top', 20))

/**
 * Out of body - left
 * ==========================
 */
const OutOfBodyLeft = createWrapper({ margin: '200px 0 0 200px' })

storiesOf('Tooltip (out of body)', module)
    .addDecorator(fn => <OutOfBodyLeft>{fn()}</OutOfBodyLeft>)
    .add('Left', createTooltip('left'))

/**
 * Out of body - bottom
 * ==========================
 */
const OutOfBodyLeftSpacing = createWrapper({ margin: '0 0 0 200px' })

storiesOf('Tooltip (out of body)', module)
    .addDecorator(fn => <OutOfBodyLeftSpacing>{fn()}</OutOfBodyLeftSpacing>)
    .add('Left with spacing', createTooltip('left', 20))

/**
 * Out of body - right
 * ==========================
 */
const OutOfBodyRight = createWrapper({ margin: '200px 200px 0 auto' })

storiesOf('Tooltip (out of body)', module)
    .addDecorator(fn => <OutOfBodyRight>{fn()}</OutOfBodyRight>)
    .add('Right', createTooltip('right'))

/**
 * Out of body - right
 * ==========================
 */
const OutOfBodyRightSpacing = createWrapper({ margin: '0 200px 0 auto' })

storiesOf('Tooltip (out of body)', module)
    .addDecorator(fn => <OutOfBodyRightSpacing>{fn()}</OutOfBodyRightSpacing>)
    .add('Right with spacing', createTooltip('right', 20))

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

storiesOf('Tooltip (out of viewport)', module)
    .addDecorator(fn => <OutOfViewportBottom>{fn()}</OutOfViewportBottom>)
    .add('Bottom', createTooltip('bottom'))

/**
 * Out of viewport - bottom /w spacing
 * ===================================
 */
const OutOfViewportBottomSpacing = createWrapper({
    margin: 'calc(100vh - 50px) 200px 150px auto',
})

storiesOf('Tooltip (out of viewport)', module)
    .addDecorator(fn => (
        <OutOfViewportBottomSpacing>{fn()}</OutOfViewportBottomSpacing>
    ))
    .add('Bottom with spacing', createTooltip('bottom', 20))
