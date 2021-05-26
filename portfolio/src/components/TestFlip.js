import React from 'react'
import ReactCardFlip from 'react-card-flip';
import '../styles/projects.css'

const projects = [{
    title: 'Travel album/blog',
    description: 'My first project made from scratch.',
    link: 'https://konrad.site'
},
{
    title: 'Whack-a-Mole',
    description: 'asdasdasassasdasd afaf',
    link: 'https://konrad-whack-a-mole.netlify.app'
},
{
    title: 'OrangeBlog',
    description: 'asdasdasdfghjasassasdasd afaf',
    link: 'https://orangeblog.netlify.app'
},
{
    title: 'Paint Album',
    description: 'Online painting album for real person',
    link: 'https://jadwigaszymanska.com'
},
{
    title: 'Estate Agency app',
    description: 'Estate agency aplication'
}, {
    title: 'another example',
    description: 'My first project made from scratch.',
    link: 'asdasasds'
}]
class TestFlip extends React.Component {
    constructor() {
        super();
        this.state = {
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    render() {
        return (
            <section className='projects' >
                <h2>PROJECTS</h2>
                <div className="projectGrid">
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">


                {/* <div onClick={this.handleClick}>
            This is the front of the card.
            <button >Click to flip</button>
          </div> */}

                {projects.map((item, index) =>
                    <div className='items' key={index} onClick={this.handleClick}>
                        {item.title}
                    </div>
                )}

                <div onClick={this.handleClick}>
                    <div id='description'>
                        {projects.description}
                    </div>
                <a href={projects.link} target="_blank" rel="noreferrer" >{projects.link}</a>
                </div>
            </ReactCardFlip>
            </div>
            </section>
        )
    }
}
export default TestFlip