import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Paragraph } from './Paragraph'

const TimeLapseGlobalStyle = createGlobalStyle`
     .timeLapse {
            display: flex;
            flex-direction: column;
            margin-right: 1rem;
        }
`

export const TimeLapse = ({ start, end }) => {
    return (
        <>
            <TimeLapseGlobalStyle />
            <div className="timeLapse">
                <Paragraph>{start}</Paragraph>
                <Paragraph>{end}</Paragraph>
            </div>
        </>

    )
}
