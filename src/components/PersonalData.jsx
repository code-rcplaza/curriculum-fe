import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Paragraph } from './shared/Paragraph'
import { Section } from './shared/Section'
import { Title } from './shared/Title'

const PersonalDataGlobalStyle = createGlobalStyle`
    .info {
        display: flex;
    }

    .form-item-name {
        width: 120px;
    }
`

export const PersonalData = ({ personalData }) => {

    const { name, age, nationality, telephone } = personalData

    return (
        <>
            <PersonalDataGlobalStyle />

            <Section>

                <Title cssClass="subTitle">Datos Personales</Title>

                <div className="info">
                    <span className="form-item-name">Nombre</span>
                    <Paragraph>{name}</Paragraph>
                </div>

                <div className="info">
                    <span className="form-item-name">Edad</span>
                    <Paragraph>{age}</Paragraph>
                </div>

                <div className="info">
                    <span className="form-item-name">Nacionalidad</span>
                    <Paragraph>{nationality}</Paragraph>
                </div>

                <div className="info">
                    <span className="form-item-name">Teléfono</span>
                    <Paragraph>{telephone}</Paragraph>
                </div>
            </Section>
        </>

    )
}
