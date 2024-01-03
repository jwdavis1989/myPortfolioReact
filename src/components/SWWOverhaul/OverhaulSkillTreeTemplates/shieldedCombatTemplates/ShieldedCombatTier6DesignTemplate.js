

function ShieldedCombatTier6DesignTemplate() {
    return (
        <div>
            <hr className="HorizontalLineBlue" />
            <b className="AbilityHeader animationcolorWhiteOrangeFlashing">DESIGN INSIGHTS</b>
            <hr className="HorizontalLineBlue" />
            <div className="animationFadeIn">
                Shield Slam grants the player a potent way to counter-attack the enemies after they block.
            </div>
            <p>
                <b className="AbilityHeaderSmall">WHY GIVE SHIELD MASTERS AN AREA DAMAGE OPTION?</b>
                <div className="animationFadeIn">
                    While it may seem counter-intuitive to some, ensuring that the "Tank"
                    is a threat to the creatures around it helps ensure their relevancy in combat.
                    <p />
                    Additionally this special attack deals at least half damage to all
                    creatures in the area when they succeed on the Dexterity Saving Throw which improves
                    the Shield Master's reliability even further.
                    <p />
                    This interacts with later talents to devastating effect against enemy casters.
                </div>
            </p>
            <p>
                <b className="AbilityHeaderSmall">THEMING</b>
                <div className="animationFadeIn">
                    Shield Slamming with such power that the sheer force of the blow extends
                    outward to up to 4 creatures at once is a powerful fantasy for the player,
                    especially when it comes off the back of successfully blocking a powerful boss' attack!
                </div>
            </p>
            <br />
        </div>
    )
}

export { ShieldedCombatTier6DesignTemplate };