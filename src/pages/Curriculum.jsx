import React from 'react'
import { createGlobalStyle } from 'styled-components';
import { generate as id } from 'shortid'

import { Title } from '../components/shared/Title';
import { useFetch } from '../hook/useFetch'
import { Section } from '../components/shared/Section';
import { Paragraph } from '../components/shared/Paragraph';
import { Article } from '../components/shared/Article';
import { TimeLapse } from '../components/shared/TimeLapse';
import { PersonalData } from '../components/PersonalData';

const CVGlobalStyle = createGlobalStyle`
   .container {
        display: flex;
        margin: 0 auto;
        width: 45%;
        min-width: 340px;
        flex-direction: column;
        padding: 0rem 1.5rem;
    }
`

export const Curriculum = () => {
    const { personalData, academicData, workExperience } = useFetch('http://localhost:4200/');
    
    return (
        <>
            <CVGlobalStyle />
            <div className="container">
                <Title cssClass="title">Curriculum Vitae</Title>

                <PersonalData personalData={personalData} />


                <Section>
                    <Title cssClass="subTitle">Formación Academica</Title>
                    {
                        academicData.map(study => {
                            return (
                                <Article key={id()}>
                                    <TimeLapse start={study.timeLapse.start} end={study.timeLapse.end} />
                                    <div>
                                        <Title cssClass="header">{study.profession}</Title>
                                        <Paragraph>{study.intitution}</Paragraph>

                                    </div>
                                </Article>
                            )
                        })
                    }
                </Section>


                <Section>
                    <Title cssClass="subTitle">Experiencia Laboral</Title>
                    {
                        workExperience.map(work => {
                            return (
                                <Article key={id()}>
                                    <TimeLapse start={work.timeLapse.start} end={work.timeLapse.end} />
                                    <div>
                                        <Title cssClass="header">{work.company}</Title>
                                        <Paragraph>{work.job}</Paragraph>
                                        <Paragraph>{work.description}</Paragraph>
                                    </div>
                                </Article>
                            )
                        })
                    }
                </Section>
            </div>
        </>

    )
}
