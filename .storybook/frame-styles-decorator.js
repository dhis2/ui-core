import React, { Fragment } from 'react'
import css from 'styled-jsx/css'

const FrameStylesWrapper = fn => (
    <Fragment>
        {fn()}

        <style jsx>{`
            :global(html) {
                height: 100%;
            }
            :global(body) {
                height: 100%;
                min-height: 100%;
            }
            :global(#root) {
                height: 100%;
                padding: 16px;
            }
        `}</style>
    </Fragment>
)

export { FrameStylesWrapper }
