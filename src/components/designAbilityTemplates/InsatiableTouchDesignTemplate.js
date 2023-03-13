import { Grid } from '@material-ui/core';

function InsatiableTouchDesignTemplate() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">INSATIABLE TOUCH: DESIGN INSIGHTS</b>
                </Grid>
            </Grid>
            <br />
            With this ability, I wanted to create a truly unique form of support healing.
            No other champion in the game is built around healing allies by buffing their omnivamp. 
            <br />(Omnivamp is a stat in League of Legends that heals the user for a % of their damage dealt.)
            <br /><br /><Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">WHY CAN'T SHE USE IT ON HERSELF?</b>
                </Grid>
            </Grid>
            <br /> As before, Yingyue is a support character first, even if her 
            kit (and thematically, her hunger for Qi) give her a very aggressive lean.
            <p /> 
            This helps avoid the common issue in League of Legends where characters meant to 
            fulfill a certain role are given very fun powers for that role that happen to also be good elsewhere.
            At the same time, their mechanical kit is not balanced around the idea that they may be used in a different 
            lane than intended. 
            <br />Even though I am normally an advocate of letting players discover their own unique 
            strategies and interactions, this character's kit would be very toxic for the gameplay experience of users if 
            she was given powerful aoe clearing, Qi generation on minions for either Jade Reach or Resentful Lunge, or the 
            ability to use Insatiable Touch on herself for powerful lifestealing.
            <p /> This firmly places her in a more supportive role, despite her unique aggressive gameplay.
            <p />
            (Minions are NPCs, Non-Player Characters, that serve as the basic military units for your team's base. 
            They spawn at your base and march along one of three lanes where gameplay primarily takes place. They 
            are plentiful and weak, however killing them is the safest way to earn Gold to buy equipment.)
            <br /><br />
        </div>
    )
}

export { InsatiableTouchDesignTemplate };