import React from 'react'
import { createGlobalStyle } from 'styled-components'

const TitleGlobalStyle = createGlobalStyle`
    .title{
        font-size: 2.5rem;
        text-align: center;
    }

    .subTitle {
        font-size: 1.5rem;
    }

    .header {
        font-size: 1.2rem;
        padding: 0;
        margin: 0;
    }
`

export const Title = ({ cssClass, children}) => {
    return (
        <>
            <TitleGlobalStyle />
            <h2 className={cssClass}>{ children }</h2>
        </>
    )
}