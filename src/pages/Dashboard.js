import { PersonalProjectsSection } from '../components/PersonalProjectsSection';
import { ProfessionalWorkSection } from '../components/ProfessionalWorkSection';

function Dashboard() {
    return (
        <div>
            <h4 className='textColorBlue'>
                Hello there, welcome to my portfolio!
            </h4>
            <p>
                <b className='textColorBlue'>
                    Game Design:
                </b>
                <br />
                I created Silverwind Workshop, an independent Dungeons & Dragons 5th Edition content
                creator which uses game design principles, player feedback, & testing to enrich
                the gameplay of D&D 5th edition.
                <br />
                My work is published and for sale on the marketplace of the popular online virtual
                tabletop, Roll20.
                <br />
                Click Professional D&D Content to learn more and view three free to play
                demo trees, each with in-depth design insights!
            </p>
            <p>
                <b className='textColorBlue'>
                    Software Engineering:
                </b>
                <br />
                I have over 2 years of experience working on large code bases serving 4.5 million users
                and 65,000 physicians while winning several awards along the way due to my strong work ethic.
            </p>
            <p>
                This website was created entirely by me using React, JavaScript, Material UI, CSS, and HTML and is hosted on Microsoft Azure.
            </p>
            <b className='textColorBlue'>
                Click the images below to learn more about my work.
            </b>
            <br />
            <ProfessionalWorkSection />
            <PersonalProjectsSection />
            <br /><br /><br /><br />
        </div>
    );
}

export { Dashboard };