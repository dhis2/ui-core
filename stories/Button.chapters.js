import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button, Divider } from '../src'

storiesOf('Button', module)
    .addWithChapters(
        'Button: Basic',
        createChapter({
            name: 'Button',
            value: 'default',
        })
    )
    .addWithChapters(
        'Button: Primary',
        createChapter({
            name: 'Button',
            value: 'default',
            primary: true,
        })
    )
    .addWithChapters(
        'Button: Secondary',
        createChapter({
            name: 'Button',
            value: 'default',
            secondary: true,
        })
    )
    .addWithChapters(
        'Button: Destructive',
        createChapter({
            name: 'Button',
            value: 'default',
            destructive: true,
        })
    )

function createSection({ title, sectionFn, info = '' }) {
    return {
        info: `
            ##### ${title}
            ${info}
        `
            // necessary to prevent the text from being displayed
            // as console text
            .split(/\n/)
            .map(v => v.replace(/^\s*/, ''))
            .join('\n'),

        sections: [
            {
                options: {
                    showSource: false,
                    allowSourceToggling: true,
                    showPropTables: false,
                    allowPropTablesToggling: true,
                },
                sectionFn,
            },
        ],
    }
}

function createChapter(props) {
    return {
        chapters: [
            createSection({
                info: `
                    This is the default without any other props defined.
                `,
                title: 'Default',
                sectionFn: () => <Button {...props}>Label me!</Button>,
            }),
            createSection({
                info: `
                    This is the disabled button info.
                    It will also change the mouse cursor to "disabled".
                `,
                title: 'Disabled',
                sectionFn: () => (
                    <Button {...props} disabled>
                        Label me!
                    </Button>
                ),
            }),
            createSection({
                title: 'Small',
                sectionFn: () => (
                    <Button {...props} small>
                        Label me!
                    </Button>
                ),
            }),
            createSection({
                title: 'Large',
                sectionFn: () => (
                    <Button {...props} large>
                        Label me!
                    </Button>
                ),
            }),
            createSection({
                title: 'Focus',
                sectionFn: () => (
                    <Button {...props} initialFocus>
                        Label me!
                    </Button>
                ),
            }),
        ],
    }
}

function _createChapter(name, props) {
    storiesOf(name, module)
        .addWithChapters(name)
        .add('Default', () => <Button {...props}>Label me!</Button>)

        .add('Disabled', () => (
            <Button {...props} disabled>
                Label me!
            </Button>
        ))

        .add('Small', () => (
            <Button {...props} small>
                Label me!
            </Button>
        ))

        .add('Large', () => (
            <Button {...props} large>
                Label me!
            </Button>
        ))

        .add('Focus', () => (
            <Button {...props} initialFocus>
                Label me!
            </Button>
        ))
}
