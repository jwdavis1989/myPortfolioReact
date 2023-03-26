import { Grid } from '@mui/material';

function JadeReachDesignTemplate() {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">JADE REACH: DESIGN INSIGHTS</b>
                </Grid>
            </Grid>
            <br />
            This ability intentionally evokes similarities to the only other vampiric champion in League, Vladimir. 
            Both champions work through stealing some form of lifeforce from the target, but what they use that lifeforce for is completely different.
            While Vladimir uses it to directly heal himself, Yingyue instead stores it as Qi to be used to empower her spells later. This does include
            the ability for her to spend her stolen Qi to make this ability heal very similarly to Vladimir's first ability, Transfusion.
            However, the player has great agency in choosing other uses for her empowered Qi that might better fit the situation.
            <br /><br /><Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">WHY GAIN QI ONLY ON CHAMPIONS?</b>
                </Grid>
            </Grid>
            <br /> 
            Jade Reach, and much of her kit, is not meant to be good at pushing minions as the main design concern for this champion
            is to make sure she is a powerful support without making her an unbalanced solo lane champion. 
            This is also why her ability power scaling is lower than your average mage.
            <br /> 
            She also must interact with enemy champions to use this ability to heal herself. 
            This ensures that her healing is gated behind aggressive play using a relatively
            short ranged ability and balances the fact that it is not a skillshot. 
            <br />
            (Skillshots are abilities that must be aimed and fire a projectile in your mouse's direction and do not guarantee a successful hit.)
            <br /><br /><Grid container spacing={0}>
                <Grid item xs={6}>
                    <b className="AbilityHeader">THEMING</b>
                </Grid>
            </Grid>
            <br /> 
            Jade Reach references the lifeforce stealing abilities and the hunger of Jiangshi, also known as Chinese Vampires.
            <br /> 
            This ability also further reinforces her being a magical/supernatural being by allowing her to steal Qi 
            at a distance with glowing Jade magic.
            <br /><br />
        </div>
    )
}

export { JadeReachDesignTemplate };