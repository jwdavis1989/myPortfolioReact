

function ShieldedCombatTier15DesignTemplate() {
    return (
        <div>
            <hr className="HorizontalLineBlue" />
            <b className="AbilityHeader animationcolorWhiteOrangeFlashing">DESIGN INSIGHTS</b>
            <hr className="HorizontalLineBlue" />
            <div className="animationFadeIn">
                This Talent allows the Shield Master to act as mobile cover for their team, substantially
                improving the survivability of their allies.
                <p />
                <b>Note:</b> Three-Quarters Cover is a mechanic where a creature's body is protected by an
                environmental element such that only 25% of their body is visible to the attacker.
                <br />
                While in Three-Quarters Cover a creature gains a +5 bonus to AC and Dexterity saving throws.
            </div>
            <p>
                <b className="AbilityHeaderSmall">THEMING</b>
                <div className="animationFadeIn">
                This Talent further exemplifies the player fantasy of being a powerful guardian for their allies.
                <br />
                It also represents improved skill in terms of reacting to incoming
                attacks and always moving your shield to the right place in time, even when you
                don't use your Reactive Block.
                </div>
            </p>
            <br />
        </div>
    )
}

export { ShieldedCombatTier15DesignTemplate };