

function PyromancyTier12DesignTemplate() {
    return (
        <div>
            <hr className="HorizontalLineBlue" />
            <b className="AbilityHeader animationcolorWhiteOrangeFlashing">DESIGN INSIGHTS</b>
            <hr className="HorizontalLineBlue" />
            <div className="animationFadeIn">
                This talent is a powerful increase to the Searing Heat component of the Ignition Talent.
                <br />
                With this:
                <ul>
                    <li>Creatures that normally take 0% damage from Fire, now take 50%.</li>
                    <li>Creatures that normally take 50% damage from Fire, now take 100%.</li>
                </ul>
                <br />
                It and its lower level version exist so that the play can use their preferred element
                in wider scenarios with less penalty.
            </div>
            <p>
                <b className="AbilityHeaderSmall">WHAT IS THE SOAKED STATUS?</b>
                <div className="animationFadeIn">
                    The Soaked Status/Condition is one that is commonly applied by Hydromancers but is also applied anytime you are wet.
                    <br />
                    While soaked, a creature:
                    <ul>
                        <li>Takes -3 damage from all <span className="textColorRed"><b>Fire Damage</b></span></li>
                        <li>Has a -2 penalty to Saving Throws and AC against <span className="textColorYellow"><b>Lightning Damage</b></span> spells.</li>
                        <li>Loses 15ft movement speed until the end of their next turn after
                            taking <span className="textColorCyan"><b>Cold Damage</b></span>.</li>
                    </ul>
                    <br />
                    This Talent allows you to ignore the reduced <span className="textColorRed"><b>Fire Damage</b></span> effect of the condition.
                    <br />
                    This both helps you deal more damage to hostile creatures, but also means working with a Hyodromancer ally is much easier.
                </div>
            </p>
            <p>
                <b className="AbilityHeaderSmall">THEMING</b>
                <div className="animationFadeIn">
                    Greater Searing Heat signifies the growth of the Pyromancer.
                    <br />
                    It shows that they are now able to control flames of much higher
                    temperatures that may burn even resistant enemies.
                </div>
            </p>
            <br />
        </div>
    )
}

export { PyromancyTier12DesignTemplate };