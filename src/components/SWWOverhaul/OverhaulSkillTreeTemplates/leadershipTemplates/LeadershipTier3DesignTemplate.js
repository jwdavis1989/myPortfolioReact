

function LeadershipTier3DesignTemplate() {
    return (
        <div>
            <hr className="HorizontalLineBlue" />
            <b className="AbilityHeader animationcolorWhiteOrangeFlashing">DESIGN INSIGHTS</b>
            <hr className="HorizontalLineBlue" />
            <div className="animationFadeIn">
                This talent lays the foundation of your general gameplay loop as a Leader.
                <br />
                Every turn, you have 4 different commands you may choose to issue your team in order to change the flow of battle.
                Finding the right command for the situation is an expression of mastery for the player.
            </div>
            <p>
                <b className="AbilityHeaderSmall">WHY DO BOTH KNIGHT TAKES PAWN AND PROMOTION EXIST?</b>
                <div className="animationFadeIn">
                    Knight Takes Pawn allows you to perform a combo attack with an ally. This combo attack grants that ally an
                    entire extra attack worth of potential damage.
                    <br />
                    This ability also requires the ally to be within melee range, thereby giving melee a slight advantage in damage
                    potential to balance their closer range.
                    <p />Promotion on the other hand works very well on ranged attackers as they can use the advantage you give
                    them to hit priority targets anywhere on the battlefield.
                    <br />
                    <b>Note: </b>Advantage in D&D 5th Edition means roll the attack (accuracy) dice twice, then use the higher number.
                    <br />
                    This translates to a substantial increase in accuracy.
                </div>
            </p>
            <p>
                <b className="AbilityHeaderSmall">THEMING</b>
                <div className="animationFadeIn">
                    This skill perfectly encapsulates the concept of being a leader who keeps their team enheartened and moving
                    tactically like well-oiled machine.
                    <br />This is especially true if you use the optional rule, so the Leader now has to
                    vocally perform the inspiring phrase for Unpin Pawn.
                    <p />Additionally, the Icon for the tree, names of the commands, and indeed many of the talents for this tree are references to either
                    Chess Techniques or military jargon.
                    <ul>
                        <li>En Passant is french for "In Passing" and is a Chess Term for a special method of capturing that
                            occurs when a pawn captures a horizontally adjacent enemy pawn that has just made an initial
                            two-square advance.</li>
                        <li>Knight Takes Pawn is a reference to the ability of Knights to leap
                            over other pieces to strike a vulnerable enemy.</li>
                        <li>Unpin Pawn is a Chess Term for a move that allows Pawn or other piece to break free from a Pin.
                            <br />A Pin is a tactic in which a defending piece cannot move out of an attacking piece's
                            line of attack without exposing a more valuable defending piece.
                        </li>
                        <li>Promotion is both relevant to military hierarchy,
                            as well as the Chess Term for moving a pawn to the enemy's back row and promoting
                            it to a new more powerful piece.</li>
                    </ul>
                </div>
            </p>
            <br />
        </div>
    )
}

export { LeadershipTier3DesignTemplate };