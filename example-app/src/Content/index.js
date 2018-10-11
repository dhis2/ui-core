import React from 'react'
import UI from 'ui/core/UI'

import { list } from '../Sidebar'

export const Title = ({ children }) => <h1 className="title">{children}</h1>
export const Heading = ({ children }) => <h2 className="heading">{children}</h2>
export const Text = ({ children }) => <div className="text">{children}</div>

function Article({ list }) {
    return list.map(({ id, title, list }) => {
        return (
            <article key={`content-${id}`} id={`content-${id}`}>
                <Heading>{title}</Heading>
                {list && <Article list={list} />}
            </article>
        )
    })
}

function Section({ id, title, list }) {
    return (
        <section id={`content-${id}`}>
            <Title>{title}</Title>
            {/* TODO add section content */}
            {list && <Article list={list} />}
        </section>
    )
}

export default function Content() {
    return (
        <div className="content">
            <UI theme="blue">
                {list.map(({ id, title, list }) => (
                    <Section key={`section-${id}`} title={title} list={list} />
                ))}
            </UI>
        </div>
    )
}
