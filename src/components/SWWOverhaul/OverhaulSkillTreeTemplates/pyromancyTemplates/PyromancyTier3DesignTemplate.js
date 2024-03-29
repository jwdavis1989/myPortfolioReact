

function PyromancyTier3DesignTemplate() {
    return (
        <div>
            <hr className="HorizontalLineBlue" />
            <b className="AbilityHeader animationcolorWhiteOrangeFlashing">DESIGN INSIGHTS</b>
            <hr className="HorizontalLineBlue" />
            <div className="animationFadeIn">
                This Talent grants the Pyromancer the ability to significantly improve their damage potential at the cost of a Bonus Action.
                Think of it as overcharging a fire spell.
                <br />
                Notice that this works with spells that target an Area of Effect, and it becomes clear in its significance as a
                tool to boost a player's damage output with fire magic.
            </div>
            <p>
                <b className="AbilityHeaderSmall">HOW DOES ADDING FIRE TO A SPELL'S LIST OF ELEMENTS WORK?</b>
                <div className="animationFadeIn">
                    Spells deal damage of a type determined by their description in 5th Edition Dungeons & Dragons, however this
                    overhaul includes the ability to create or augment a spell's damage type with additional elements.
                    <br />Whenever a player damages a creature with a multiple-element spell, the spell will do damage
                    based on which element the creature is more weak to.
                    <p>
                        <b>Example:</b> You hit a fire elemental with a spell that
                        deals <b><span className="textColorOrange">Radiant</span>/<span className="textColorRed">Fire</span> Damage</b>.
                    </p>
                    The fire elemental takes half damage from Fire, but has no resistance to Radiant damage, therefore you deal
                    normal damage since the spell has <b><span className="textColorOrange">Radiant</span></b> in its list of elements.

                </div>
            </p>
            <p>
                <b className="AbilityHeaderSmall">THEMING</b>
                <div className="animationFadeIn">
                In popular fantasy settings, Pyromancers tend to be characterized as unconcerned with the risks of powerful magic.
                <p >
                This Talent burrows deep into that image of the maniacal arsonist doing anything
                they can, even potentially harming themselves or even allies, if it means making a roaring boom or inferno.
                </p>
                To them, it's simple: The hotter the flame, the better.
                <p>
                    Additionally, I wanted to take a moment here to mention that 5th Edition D&D doesn't include any
                    options to play as a mage of one specific element. This system fixes that and gives every elemental school their own unique
                    personality and gameplay to really sell their specialization and fantasy.
                </p>
                </div>
            </p>
            <br />
        </div>
    )
}

export { PyromancyTier3DesignTemplate };