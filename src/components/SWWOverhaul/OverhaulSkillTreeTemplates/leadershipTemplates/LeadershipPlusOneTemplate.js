import { TalentTemplate } from "../../TalentTemplate";
import { LeadershipPlusOneDesignTemplate } from './LeadershipPlusOneDesignTemplate';

function LeadershipPlusOneTemplate() {
    return (
        <div>
            <TalentTemplate title="True" talentName="LEADERSHIP SKILL" treeName="LEADERSHIP"
            talentSlot="+1 EFFECT" header="TREE COMPLEXITY" body="Moderate-to-High"/>

            <TalentTemplate header="EFFECT" body={["You increase the Initiative of all friendly creatures (including yourself) within hearing distance by ", 
            <b>+1 Bonus Initiative</b>, 
            " for every 3 points spent in Leadership. Creatures can not gain this benefit from more than 1 source."]}/>

            <TalentTemplate header="PROFICIENCY" body={["You gain proficiency in Persuasion and Insight."]} />
            
            <LeadershipPlusOneDesignTemplate />
        </div>
    )
}

export { LeadershipPlusOneTemplate };