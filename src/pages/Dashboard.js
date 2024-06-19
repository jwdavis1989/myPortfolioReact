import { PersonalProjectsSection } from '../components/PersonalProjectsSection';
import { ProfessionalWorkSection } from '../components/ProfessionalWorkSection';

function Dashboard() {
    return (
        <div className='textAlignCenter'>
            <p>
                <b className='textColorBlue textAlignCenter textFontSizeH6'>
                    Game Design:
                </b>
                <br />
                I created Silverwind Workshop, an independent Dungeons & Dragons 5th Edition content
                creator which uses game design principles, player feedback, & testing to enrich
                the gameplay of D&D 5th edition.
                My work is published and for sale on the marketplace of the popular online virtual
                tabletop, Roll20.
                Click Professional D&D Content to learn more and view three free to play
                demo trees, each with in-depth design insights!
            </p>
            <p>
                <b className='textColorBlue textAlignCenter textFontSizeH6'>
                    Software Engineering:
                </b>
                <br />
                I have over 2 years of experience working on large code bases serving 4.5 million users
                and 65,000 physicians while winning several awards along the way due to my strong work ethic.
            </p>
            <p>
                This website was created entirely by me using React, JavaScript, Material UI, CSS, and HTML and is hosted on Microsoft Azure.
            </p>
            <br />
            <ProfessionalWorkSection />
            <PersonalProjectsSection />
            <br /><br /><br /><br />
        </div>
    );
}

export { Dashboard };