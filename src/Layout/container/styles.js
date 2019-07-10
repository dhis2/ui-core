import css from 'styled-jsx/css'

const containerStyles = css`
    .container {
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: auto;
    }
`

const containerV4Styles = css`
    .container {
        grid-template-areas:
            'topbar'
            'sidebar'
            'content';
    }

    @media (min-width: 768px) {
        .container {
            grid-template-columns: 350px auto;
            grid-template-areas:
                'topbar topbar'
                'sidebar    content   ';
        }
    }
`

const containerV3Styles = css`
    .container {
        grid-template-areas:
            'sidebar'
            'content';
    }

    @media (min-width: 768px) {
        .container {
            grid-template-columns: 350px auto;
            grid-template-areas: 'sidebar content';
        }
    }
`

const containerV2Styles = css`
    .container {
        grid-template-areas:
            'topbar'
            'content';
    }
`

const containerV1Styles = css`
    .container {
        grid-template-areas: 'content';
    }
`

export {
    containerStyles,
    containerV1Styles,
    containerV2Styles,
    containerV3Styles,
    containerV4Styles,
}
