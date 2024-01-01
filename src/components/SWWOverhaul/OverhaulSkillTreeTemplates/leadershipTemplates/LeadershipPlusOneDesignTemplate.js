import { TalentTemplate } from "../../TalentTemplate";

function LeadershipPlusOneDesignTemplate() {
    return (
        <div>
            <TalentTemplate insightSection="True" body={["The goal of this skill effect is to express your leadership and wit. ", 
                "You gain proficiency in Insight and Persuasion which are ",
                "critical tools for leadership, especially when it comes to inspiring your team to greatness. ",
                <br />,"Furthermore, you extend that knowledge to your team in the form of an Initiative increasing ",
                "aura for all that can hear you nearby. This allows your team to act faster and perform their plan more ",
                "seamlessly. "]}/>
            <TalentTemplate header="WHY CAN'T YOU GAIN THE EFFECT FROM MULTIPLE SOURCES?" 
            body={["D&D 5e has bounded values for a lot of its mechanics. Essentially even a max level character can only see ",
                "values for some stats (such as initiative) get so high even compared to low level creatures. This ensures ",
                "that even low level monsters, especially in large groups, can be a threat and keeps the power creep down. ",
                "Reduced Power Creep helps simplify the math for the average player so the game runs smoothly. ",
                <br />,"Therefore, if we allow this powerful aura to stack, your team would completely remove the concept of ",
                "initiative as your allies would always go before the enemy monsters."]}/>

            <TalentTemplate header="THEMING" body={["This skill directly reflects your increased eye for strategy as you can take any ",
                "combat situation and give your team a tactical boost towards acting quicker and more decisively. ",
                <br />, "Roleplaywise, it might manifest as using the terrain to your advantage, ",
                "being aware of the potential for attack, ",
                "or having insight into the enemy's tactics. "]} />
        </div>
    )
}

export { LeadershipPlusOneDesignTemplate };