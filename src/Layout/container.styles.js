import css from 'styled-jsx/css'

export default css`
    .container {
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: auto;
    }

    .with-topbar-sidebar {
        grid-template-areas:
            'topbar'
            'sidebar'
            'content';
    }

    @media (min-width: 768px) {
        .with-topbar-sidebar {
            grid-template-columns: 350px auto;
            grid-template-areas:
                'topbar topbar'
                'sidebar content';
        }
    }

    .with-sidebar {
        grid-template-areas:
            'sidebar'
            'content';
    }

    @media (min-width: 768px) {
        .with-sidebar {
            grid-template-columns: 350px auto;
            grid-template-areas: 'sidebar content';
        }
    }

    .with-topbar {
        grid-template-areas:
            'topbar'
            'content';
    }

    .content-only {
        grid-template-areas: 'content';
    }
`
