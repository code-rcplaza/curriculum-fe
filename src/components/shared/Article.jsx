import React from 'react'
import { createGlobalStyle } from 'styled-components'

const ArticleGlobalStyle = createGlobalStyle`
    .article {
        display: flex;
        margin-bottom: 1rem;
    }
`

export const Article = ({ children }) => {

    return (
        <>
            <ArticleGlobalStyle />
            <article className="article">
                {children}
            </article>
        </>

    )
}
