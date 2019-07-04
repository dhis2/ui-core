import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import {
    LayoutContainer,
    LayoutAreaNavigation,
    LayoutAreaSidebar,
    LayoutAreaContent,
} from '../src'

import markdown from './info/molecules/alertBar.md'

const Wrapper = fn => (
    <Fragment>
        {fn()}
        <style jsx>{`
            :global(div#root) {
                padding: 0;
            }
        `}</style>
    </Fragment>
)

const Navigation = () => (
    <div>
        <a href="#">Link 1</a>
        {' | '}
        <a href="#">Link 2</a>
        {' | '}
        <a href="#">Link 3</a>
        {' | '}
        <a href="#">Link 4</a>
        {' | '}
        <a href="#">Link 5</a>

        <style jsx>{`
            div {
                padding: 16px;
                background: #f2f2f2;
            }
        `}</style>
    </div>
)

const Sidebar = () => (
    <div>
        <a href="#">Link 1</a>
        <br />
        <a href="#">Link 2</a>
        <br />
        <a href="#">Link 3</a>
        <br />
        <a href="#">Link 4</a>
        <br />
        <a href="#">Link 5</a>

        <style jsx>{`
            div {
                height: 100%;
                padding: 16px;
                background: #d2d2d2;
            }
        `}</style>
    </div>
)

const Content = () => (
    <div>
        This is the content of the page
        <style jsx>{`
            div {
                height: 100%;
                padding: 16px;
                background: #b2b2b2;
            }
        `}</style>
    </div>
)

storiesOf('Layout', module)
    .addDecorator(Wrapper)
    .add('Nav and sidebar', () => (
        <LayoutContainer withSidebar withNavigation>
            <LayoutAreaNavigation>
                <Navigation />
            </LayoutAreaNavigation>

            <LayoutAreaSidebar>
                <Sidebar />
            </LayoutAreaSidebar>

            <LayoutAreaContent>
                <Content />
            </LayoutAreaContent>
        </LayoutContainer>
    ))
    .add('With sidebar', () => (
        <LayoutContainer withSidebar>
            <LayoutAreaSidebar>
                <Sidebar />
            </LayoutAreaSidebar>

            <LayoutAreaContent>
                <Content />
            </LayoutAreaContent>
        </LayoutContainer>
    ))
    .add('With nav', () => (
        <LayoutContainer withNavigation>
            <LayoutAreaNavigation>
                <Navigation />
            </LayoutAreaNavigation>

            <LayoutAreaContent>
                <Content />
            </LayoutAreaContent>
        </LayoutContainer>
    ))
    .add('Content only', () => (
        <LayoutContainer>
            <LayoutAreaContent>
                <Content />
            </LayoutAreaContent>
        </LayoutContainer>
    ))
