import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from '../index.js'

const logger = ({ name, value }) => console.info(`${name}: ${value}`)

createStory('Button: Basic', {
    onClick: logger,
    name: 'Button',
    value: 'default',
})

createStory('Button: Primary', {
    onClick: logger,
    name: 'Button',
    value: 'default',
    primary: true,
})

createStory('Button: Secondary', {
    onClick: logger,
    name: 'Button',
    value: 'default',
    secondary: true,
})

createStory('Button: Destructive', {
    onClick: logger,
    name: 'Button',
    value: 'default',
    destructive: true,
})

window.onClick = (payload, event) => {
    console.log('onClick payload', payload)
    console.log('onClick event', event)
}
const onClick = (...args) => window.onClick(...args)

function createStory(name, props) {
    storiesOf(name, module)
        .add('Default', () => (
            <Button {...props} onClick={onClick}>
                Label me!
            </Button>
        ))

        .add('Disabled', () => (
            <Button {...props} disabled onClick={onClick}>
                Label me!
            </Button>
        ))

        .add('Small', () => (
            <Button {...props} small onClick={onClick}>
                Label me!
            </Button>
        ))

        .add('Large', () => (
            <Button {...props} large onClick={onClick}>
                Label me!
            </Button>
        ))

        .add('Focus', () => (
            <Button {...props} initialFocus onClick={onClick}>
                Label me!
            </Button>
        ))
        .add('Icon only', () => (
            <Button
                {...props}
                onClick={onClick}
                icon={
                    <svg
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g fill="inherit">
                            <path d="m12 9.60799979c-.9675646-.00040429-1.8400814.58213131-2.2106327 1.47592831-.37055125.8937971-.1661488 1.9228029.5178797 2.6071174.6840285.6843146 1.7129487.8891473 2.6069007.5189699.8939519-.3701775 1.4768525-1.2424507 1.4768525-2.2100154.0002651-.6343059-.251526-1.242723-.6999542-1.6913388-.4484283-.44861578-1.0567401-.70066141-1.691046-.70066141z" />
                            <path d="m18.211 17.043c1.530261-1.8932708 2.1220857-4.3770963 1.61-6.757-.1126661-.54068677-.6423132-.88766609-1.183-.775s-.8876661.6423132-.775 1.183c.3898211 1.7898853-.0513388 3.6600356-1.2 5.087-1.4414282 1.768531-3.7611624 2.5665104-5.9855392 2.0590019-2.22437678-.5075086-3.96843636-2.2326735-4.50014359-4.4513903-.53170722-2.2187169.24095736-4.54700536 1.99368279-6.0076116 1.3912546-1.14691232 3.2210302-1.61461938 4.992-1.276.3545773.07323804.7210476-.05090452.958113-.32456278.2370655-.27365826.3076938-.65408362.1846532-.99459778s-.4205297-.58792486-.7777662-.64683944c-3.84356843-.74431466-7.66116508 1.40235088-9.02206289 5.0731791-1.3608978 3.6708282.13474987 7.7872897 3.53463936 9.7283652 3.39988953 1.9410755 7.70509613 1.1364558 10.17442353-1.9015443z" />
                            <path d="m12 0c-3.95379389.00225999-7.65300716 1.95100316-9.89088463 5.21051166-2.23787747 3.25950849-2.72748958 7.41186434-1.30911537 11.10248834.1122293.3537208.41110962.616205.77636092.6818197.36525129.0656147.73680252-.0764314.96512827-.368974.22832575-.2925425.27587445-.6874685.12351081-1.0258457-1.7193753-4.4606539-.03866238-9.51427549 4.00976702-12.05669632 4.04842938-2.54242084 9.33048788-1.86143198 12.60169038 1.62467166 3.2712025 3.48610365 3.6151863 8.80075906.8206607 12.67945876-2.7945256 3.8786996-7.9447296 5.2349025-12.2871181 3.2355659-.32457579-.1500516-.70454775-.1155458-.99678411.0905193s-.45233946.5523834-.42000001.9085c.03233945.3561167.25220832.6679292.57678412.8179807 1.57620727.729626 3.2931184 1.1050937 5.03 1.1000511 6.6274169 0 11.9999998-5.3726342 11.9999998-12.0000511 0-6.62741693-5.3725829-12-11.9999998-12z" />
                            <path d="m18.217 7.217c0-.58049429-.349735-1.10381052-.8860805-1.32586253-.5363455-.22205202-1.153643-.09909611-1.5639713.31151839-.4103284.41061449-.532854 1.02799752-.3104281 1.56418813.2224258.5361906.7459857.88556054 1.3264799.88515636.7921381-.00055236 1.434-.64286209 1.434-1.43500035z" />
                            <circle cx="3.87" cy="19.652" r="1.435" />
                        </g>
                    </svg>
                }
            ></Button>
        ))
}
