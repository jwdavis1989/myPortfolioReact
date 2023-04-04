import { Grid } from '@mui/material';

function LeadershipTier3DesignTemplate() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">BATTLEFIELD TACTICIAN</b>
                </Grid>
                <Grid item xs={6}>
                    <span className="AbilityCooldown textColorRed">DESIGN INSIGHTS</span><br /><br />
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeftSmaller moveLeft20">
                This talent lays the foundation of your general gameplay loop as a Leader.
                <br />Every turn, you have 4 different commands you can issue your team to change the flow of battle to your favor
                and finding the right command for the situation is an expression of mastery for the player.
            </div>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">KNIGHT TAKES PAWN VS PROMOTION?</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeftSmaller moveLeft20">
                <br />
                Knight Takes Pawn allows you to perform a combo attack with an ally. This combo attack grants that ally an
                entire extra attack worth of potential damage.
                <br />This ability also requires the ally to be within melee range, thereby giving melee a slight advantage in damage
                potential to balance their closer range.
                <p />Promotion on the other hand works very well on ranged attackers that can take advantage (heh) of the advantage you give
                them to hit priority targets anywhere on the battlefield.
            </div>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeaderSmall">THEMING</b>
                </Grid>
            </Grid>
            <div className="NormalPageLayoutLeftSmaller moveLeft20">
                <br />
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
            <br />
        </div>
    )
}

export { LeadershipTier3DesignTemplate };