import React, { useRef } from 'react'
import '../styles/myStory.css'
import Circle from './Circle';
// import NextSection from './NextSection'

const MyStory = () => {

    const mystory = useRef(null);

    return (
        <section ref={mystory} className='bio' id='biography'>
            <h2>Bio</h2>
            <div className='bioBox' >
                <article className='leftArticle'>
                    
                    <p className='helloWorld'>Hello World!</p>
                    <p>
                        <br />My name is <span>Konrad</span> Szymanski. 
                    </p>
                    <p>
                    I am a Self-motivated<span className='coma'>,</span> determined front-end <span>web developer </span>  with a high level of experience working on multiple projects. Offering several years of expertise in fast-paced departments<span className='coma'>,</span> with strong ability to work closely with people of all levels<span className='coma'>,</span> different backgrounds and personalities. 
                    </p>
                    <p> 
                      Newly graduated web developer offering <span>enthusiasm</span> and <span>understanding</span> of various programming languages. 
                    </p>
                    <p>
                        <span>Innovative<span className='coma'>,</span> proactive<span className='coma'></span>,</span> and capable of developing elegant application designs for demanding clients. 
                    </p>
                    <p>
                        Talented in project management<span className='coma'>,</span> team leadership and independent <span>problem-solving</span> abilities. Highly <span>organised</span><span className='coma'>,</span> proficient at multitasking and enhancing designs and verifying code.
                    </p>
                    <p>
                        Engaged in sports<span className='coma'>,</span> absolutely delighted of David Fincher's movies<span className='coma'>,</span> fascinated by medieval castles.
                    </p>
                    <p>
                        I am looking to join a company where the opportunity for <span>growth and personal development</span> is embraced.
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
            {/* <NextSection /> */}
        </section>
    )
}

export default MyStory
