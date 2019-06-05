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

/**
 * ===========================
 * Story with one level opened
 * ===========================
 */
class TopCenter extends Component {
    ref1 = React.createRef()

    render() {
        return (
            <Fragment>
                <Btn
                    ref={this.ref1}
                    styles={{
                        margin: '200px 0 0 auto',
                    }}
                >
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

storiesOf('Pop', module)
    .addDecorator(fn => <TopCenter>{fn()}</TopCenter>)
    .add('Top Left', () => (
        <Pop
            side="left"
            open={true}
            onClose={() => null}
            anchorRef={{ current: 'Overriden by story implementation' }}
        >
            <p style={{ padding: '0 20px' }}>
                This is content for a Pop component
            </p>
        </Pop>
    ))

/**
 * ===========================
 * Story with two levels opened
 * ===========================
 */
// class TopRight extends Component {
//     ref1 = React.createRef()
//     ref2 = React.createRef()
//
//     render() {
//         return (
//             <Fragment>
//                 <Btn ref={this.ref1} styles={{ marginLeft: 'auto' }}>
//                     Anchor
//                 </Btn>
//                 <Pop
//                     screencover
//                     open={true}
//                     onClose={() => null}
//                     anchorRef={this.ref1}
//                 >
//                     <Menu>
//                         <MenuItem label="First Item" onClick={() => null}>
//                             <span />
//                         </MenuItem>
//                         <MenuItem label="Second Item" onClick={() => null}>
//                             <span />
//                         </MenuItem>
//                         <span ref={this.ref2}>
//                             <MenuItem label="Anchor 2" onClick={() => null}>
//                                 {React.Children.map(
//                                     this.props.children,
//                                     child =>
//                                         React.cloneElement(child, {
//                                             anchorRef: this.ref2,
//                                         })
//                                 )}
//                             </MenuItem>
//                         </span>
//                     </Menu>
//                 </Pop>
//             </Fragment>
//         )
//     }
// }
//
// storiesOf('Pop', module)
//     .addDecorator(fn => <TopRight>{fn()}</TopRight>)
//     .add('Top right', () => (
//         <Pop
//             level={1}
//             open={true}
//             onClose={() => null}
//             anchorRef={{ current: 'Overriden by story implementation' }}
//         >
//             <Menu>
//                 <MenuItem label="Fourth Item" onClick={() => null}>
//                     <span />
//                 </MenuItem>
//                 <MenuItem label="Fifth Item" onClick={() => null}>
//                     <span />
//                 </MenuItem>
//                 <MenuItem label="Sixth Item" onClick={() => null}>
//                     <span />
//                 </MenuItem>
//             </Menu>
//         </Pop>
//     ))
//
// /**
//  * ================================================
//  * Story with two levels opened on the bottom right
//  * ================================================
//  */
// class BottomRight extends Component {
//     ref1 = React.createRef()
//     ref2 = React.createRef()
//
//     render() {
//         return (
//             <div className="flex">
//                 <span />
//                 <div className="container">
//                     <Btn
//                         ref={this.ref1}
//                         styles={{
//                             marginLeft: 'auto',
//                         }}
//                     >
//                         Anchor
//                     </Btn>
//                     <Pop open={true} onClose={() => null} anchorRef={this.ref1}>
//                         <Menu>
//                             <MenuItem label="First Item" onClick={() => null}>
//                                 <span />
//                             </MenuItem>
//                             <MenuItem label="Second Item" onClick={() => null}>
//                                 <span />
//                             </MenuItem>
//                             <span ref={this.ref2}>
//                                 <MenuItem label="Anchor 2" onClick={() => null}>
//                                     {React.Children.map(
//                                         this.props.children,
//                                         child =>
//                                             React.cloneElement(child, {
//                                                 anchorRef: this.ref2,
//                                             })
//                                     )}
//                                 </MenuItem>
//                             </span>
//                         </Menu>
//                     </Pop>
//                 </div>
//
//                 <style jsx>{`
//                     :global(body) {
//                         margin: 0;
//                     }
//
//                     :global(html),
//                     :global(body),
//                     :global(#root),
//                     :global(#root > div),
//                     .flex {
//                         height: 100%;
//                     }
//
//                     :global(#root) {
//                         padding: 16px;
//                         box-sizing: border-box;
//                     }
//
//                     .flex {
//                         display: flex;
//                         flex-direction: column;
//                     }
//
//                     span {
//                         flex-grow: 1;
//                     }
//                 `}</style>
//             </div>
//         )
//     }
// }
//
// storiesOf('Pop', module)
//     .addDecorator(fn => <BottomRight>{fn()}</BottomRight>)
//     .add('Bottom right', () => (
//         <Pop
//             level={1}
//             open={true}
//             onClose={() => null}
//             anchorRef={{ current: 'Overriden by story implementation' }}
//         >
//             <Menu>
//                 <MenuItem label="First Item" onClick={() => null}>
//                     <span />
//                 </MenuItem>
//                 <MenuItem label="Second Item" onClick={() => null}>
//                     <span />
//                 </MenuItem>
//                 <MenuItem label="Third Item" onClick={() => null}>
//                     <span />
//                 </MenuItem>
//             </Menu>
//         </Pop>
//     ))
//
// /**
//  * =========================================
//  * Story with two levels opened on the right
//  * =========================================
//  */
// class BottomLeft extends Component {
//     ref1 = React.createRef()
//     ref2 = React.createRef()
//
//     render() {
//         return (
//             <div className="flex">
//                 <span />
//                 <div className="container">
//                     <Btn ref={this.ref1}>Anchor</Btn>
//                     <Pop
//                         screencover
//                         open={true}
//                         onClose={() => null}
//                         anchorRef={this.ref1}
//                     >
//                         <Menu>
//                             <MenuItem label="First Item" onClick={() => null}>
//                                 <span />
//                             </MenuItem>
//                             <MenuItem label="Second Item" onClick={() => null}>
//                                 <span />
//                             </MenuItem>
//                             <span ref={this.ref2}>
//                                 <MenuItem label="Anchor 2" onClick={() => null}>
//                                     {React.Children.map(
//                                         this.props.children,
//                                         child =>
//                                             React.cloneElement(child, {
//                                                 anchorRef: this.ref2,
//                                             })
//                                     )}
//                                 </MenuItem>
//                             </span>
//                         </Menu>
//                     </Pop>
//                 </div>
//
//                 <style jsx>{`
//                     :global(body) {
//                         margin: 0;
//                     }
//
//                     :global(html),
//                     :global(body),
//                     :global(#root),
//                     :global(#root > div),
//                     .flex {
//                         height: 100%;
//                     }
//
//                     :global(#root) {
//                         padding: 16px;
//                         box-sizing: border-box;
//                     }
//
//                     .flex {
//                         display: flex;
//                         flex-direction: column;
//                     }
//
//                     span {
//                         flex-grow: 1;
//                     }
//                 `}</style>
//             </div>
//         )
//     }
// }
//
// storiesOf('Pop', module)
//     .addDecorator(fn => <BottomLeft>{fn()}</BottomLeft>)
//     .add('On the right', () => (
//         <Pop
//             level={1}
//             open={true}
//             onClose={() => null}
//             anchorRef={{ current: 'Overriden by story implementation' }}
//         >
//             <Menu>
//                 <MenuItem label="Fourth Item" onClick={() => null}>
//                     <span />
//                 </MenuItem>
//                 <MenuItem label="Fifth Item" onClick={() => null}>
//                     <span />
//                 </MenuItem>
//                 <MenuItem label="Sixth Item" onClick={() => null}>
//                     <span />
//                 </MenuItem>
//             </Menu>
//         </Pop>
//     ))
//
// /**
//  * =========================================
//  * Story with fallback positions
//  * =========================================
//  */
//
// storiesOf('Pop', module)
//     .addDecorator(fn => <BottomLeft>{fn()}</BottomLeft>)
//     .add('Fallback positions', () => (
//         <Pop
//             level={1}
//             open={true}
//             onClose={() => null}
//             anchorRef={{ current: 'Overriden by story implementation' }}
//             fallbackPoints={[
//                 [
//                     { vertical: 'center', horizontal: 'center' },
//                     { vertical: 'bottom', horizontal: 'right' },
//                 ],
//             ]}
//         >
//             <Menu>
//                 <MenuItem label="Fourth Item" onClick={() => null}>
//                     <span />
//                 </MenuItem>
//                 <MenuItem label="Fifth Item" onClick={() => null}>
//                     <span />
//                 </MenuItem>
//                 <MenuItem label="Sixth Item" onClick={() => null}>
//                     <span />
//                 </MenuItem>
//             </Menu>
//         </Pop>
//     ))
//
// /**
//  * =========================================
//  * Tooltip
//  * =========================================
//  */
//
// class Tooltip extends React.Component {
//     ref1 = React.createRef()
//
//     render() {
//         return (
//             <Fragment>
//                 <Btn ref={this.ref1}>Anchor</Btn>
//                 {React.Children.map(this.props.children, child =>
//                     React.cloneElement(child, {
//                         anchorRef: this.ref1,
//                     })
//                 )}
//             </Fragment>
//         )
//     }
// }
//
// storiesOf('Pop', module)
//     .addDecorator(fn => <Tooltip>{fn()}</Tooltip>)
//     .add('Tooltip', () => (
//         <Pop
//             open={true}
//             onClose={() => null}
//             anchorRef={{ current: 'Overriden by story implementation' }}
//             anchorPoint={{ vertical: 'top', horizontal: 'center' }}
//             popPoint={{ vertical: 'bottom', horizontal: 'center' }}
//         >
//             <p>
//                 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
//                 diam nonumy eirmod tempor invidunt ut labore et dolore magna
//                 aliquyam erat, sed diam voluptua.
//             </p>
//
//             <style jsx>{`
//                 p {
//                     margin: 0;
//                     padding: 16px;
//                     max-width: 300px;
//                 }
//             `}</style>
//         </Pop>
//     ))
