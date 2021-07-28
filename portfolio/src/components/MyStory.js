import React, { useRef } from 'react'
import '../styles/myStory.css'
import Circle from './Circle';
import NextSection from './NextSection'

const MyStory = () => {

    const mystory = useRef(null);

    return (
        <section ref={mystory} className='bio' id='biography'>
            <h2>Bio</h2>
            <div className='bioBox' >
                <article className='leftArticle'>
                    
                    <p className='helloWorld'>Hello World!</p>
                    <p>
                        <br />My name is <span>Konrad</span> Szymanski. Based in UK.
                    </p>
                    <p>
                      Self-motivated, determined front-end <span>web developer </span>  with a high level of experience working on multiple projects. Offering several years of expertise in fast-paced departments. I have a strong ability to work closely with people of all levels, different backgrounds and personalities. 
                    </p>
                    <p> 
                      Newly graduated web developer offering enthusiasm and understanding of various programming languages. 
                    </p>
                    <p>
                        Innovative<span className='coma'>,</span> proactive<span className='coma'>,</span> and capable of developing elegant and application designs for demanding clients. Talented in project management<span className='coma'>,</span> team leadership and independent problem-solving abilities. Highly organised<span className='coma'>,</span> proficient at multitasking and enhancing designs and verifying code.
                    </p>
                    <p>
                        Engaged in sports<span className='coma'>,</span> absolutely delighted of David Fincher's movies<span className='coma'>,</span> fascinated by medieval castles
                    </p>
                    <p>
                        I am looking to join a company where the opportunity for growth and personal development is embraced.
                    </p>
                    <p>You can reach me on
                        <span>
                            <a
                                href='https://www.linkedin.com/in/konrad-szymanski-92790311a/'
                                target='_blank'
                                rel="noreferrer"> LinkedIn.
                            </a>
                        </span>
                    </p>
                </article>
                <article className='rightArticle'>
                    <Circle />
                </article>
            </div>
            <NextSection />
        </section>
    )
}

export default MyStory
