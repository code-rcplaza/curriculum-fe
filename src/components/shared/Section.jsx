import React from 'react'
import { createGlobalStyle } from 'styled-components'

const SectionGlobalStyle = createGlobalStyle`
`

export const Section = ({ children }) => {
    return (
        <>
            <SectionGlobalStyle />
            <section>
                { children }
            </section>
        </>
    )
}
