import { PersonalProjectsSection } from '../components/PersonalProjectsSection';
import { ProfessionalWorkSection } from '../components/ProfessionalWorkSection';

function Dashboard() {
    return (
        <div className='NormalPageWithLRPadding'>
            <div className='NavBarSectionPadding' />
            <div className='NavBarSectionPadding' />
            <div className='SectionCard'>
                <b className='textColorBlue textFontSizeH2 textAlignCenter'>
                    Game Developer | Game Designer
                </b>
                <p>
                    I'm Jerry Davis, a game developer and game designer with over 2 years of programming experience working on large code bases serving 4.5 million users
                    while winning several awards along the way due to my strong work ethic. I created Silverwind Workshop, an independent Video Game and Dungeons & Dragons delevopment
                    company. We're currently developing our first commercial video game set to be released on Steam. My Dungeons and Dragons design work is published and for sale on the marketplace of the popular online virtual
                    tabletop, Roll20. Click "Free Demo" below to see it's free interactive demo.
                </p>
                In my free time, I lead a game jam team of sizes 3-6 depending on the jam.
                <p>
                    This website was created entirely by me using React, JavaScript, Material UI, CSS, and HTML and is hosted on Microsoft Azure.
                </p>
            </div>
            <div className='NavBarSectionPadding' id="ProfessionalWorkSection" />
            <ProfessionalWorkSection />
            <div className='NavBarSectionPadding' id="PersonalProjectsSection" />
            <PersonalProjectsSection />
            <br />
        </div>
    );
}

export { Dashboard };