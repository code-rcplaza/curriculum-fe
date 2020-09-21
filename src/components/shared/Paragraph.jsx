import React from 'react'
import { createGlobalStyle } from 'styled-components'

const SectionGlobalStyle = createGlobalStyle`
    .text {
        font-size: 1rem;
        margin: 0px;
        text-align: justify;
    }
`

export const Paragraph = ({ children }) => {
    return (
        <>
            <SectionGlobalStyle />
            <p className="text">{ children }</p>
        </>
    )
}
