import React from 'react'
import UI from 'core/UI'

import { list } from '../Sidebar'
import { Title, Heading } from '../helpers'
import Component from '../View'

function Article({ list }) {
    return list.map(({ id, title, list }) => {
        return (
            <article key={`content-${id}`} id={`content-${id}`}>
                <Heading>{title}</Heading>
                <Component id={id} />
                {list && <Article list={list} />}
            </article>
        )
    })
}

function Section({ id, title, list }) {
    return (
        <section id={`content-${id}`}>
            <Title>{title}</Title>
            <Component id={id} />
            {list && <Article list={list} />}
        </section>
    )
}

export default function Content() {
    return (
        <div className="content">
            <UI theme="blue">
                {list.map(({ id, title, list }) => (
                    <Section
                        key={`section-${id}`}
                        id={id}
                        title={title}
                        list={list}
                    />
                ))}
            </UI>
        </div>
    )
}
