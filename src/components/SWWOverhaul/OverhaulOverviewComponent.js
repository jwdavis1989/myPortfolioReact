import { Grid } from '@mui/material';

function OverhaulOverviewComponent() {
    return (
        <div className="">
            <Grid id="Row 2 What Problems Does It Solve?" container spacing={0}>
                <Grid item xs={1} />
                <Grid item xs={10}>
                    <br />
                    <p className="SmallHeaderTitleNoHover width100">
                        WHAT PROBLEMS DOES THIS SYSTEM SOLVE?
                    </p>
                    <div className="NormalPageLayoutLeft ScrollingBox"><p />
                        <span className="AbilityHeaderSmall">Limited Character Playstyles & Classes:</span>
                        <p />
                        In the base game of 5th Edition Dungeons & Dragons, players pick from a small list of classes
                        when creating their character. While the options are classic, there are very few of them.
                        <br />Eventually they will also choose a Sub-Class that significantly improves the variety of
                        character concepts available.
                        <br />
                        However, there are still many character concepts that simply do not exist as possibilities,
                        or do not have fully fleshed-out gameplay loops.
                        <p>
                            In our Overhaul Skill Tree System, players can instead choose to build a custom class by
                            mixing and matching 29 different Skill Trees.
                            <br />Some Skill Trees even have sub-specializations where you can choose between 2-3 alternate versions of each tree!
                            <p /><b>Examples: </b>
                            <ul>
                                <li>A proud Leader who controls the battlefield like a game of chess through a mix of
                                    issuing powerful commands to his comrades, protecting them with his shield, and denying
                                    the enemy of positional opportunities with his powerful Pyromancy magic's area denial damage effects
                                    = Leadership + Pyromancy + Shielded Combat
                                    <br /><b>All three of these Skill Trees are 100% free and listed in the Example Trees Section on the left side of this page. Give them a click!</b></li>
                                <li>A time-manipulating Samurai swordsman who has long studied history's mistakes = Chronotelemancy + Versatile Weapon Fighting + Historia</li>
                                <li>A Blade-Dancer that inspires her allies while crippling her foes with her beautiful
                                    song & dance. Her deadly blade work accentuated by peak physical condition = Dual Weapon Fighting + Inspiration + Fitness</li>
                            </ul>
                        </p>
                        <p />
                        <span className="AbilityHeaderSmall">Elemental Mages of Only One Element Aren't Fleshed Out,
                            and Mixing Spell Schools is Poorly Supported:</span>
                        <p />
                        This system adds Skill Trees specifically dedicated to many spell schools including elemental
                        schools of magic that truly bring the player's fantasy to life.
                        See the Pyromancy Example Tree on the left for a fun example that will make you feel the heat!
                        <p />Every Magic Skill Tree comes with
                        fully fleshed out unique gameplay separate of any other Skill Tree and many new spells.
                        <br />Additionally, the Arcana tree exists to allow a player to either double-down on their specialization of
                        one school of magic, or combine multiple schools of magic with improved Spell Slots, casting stats, the ability
                        to create unique-element variants of any spell, and Arcana skill. A Geomancy/Pyromancy/Arcana mage would be
                        capable of hurling a Fireball that deals
                        <b><span className="textColorBrown"> Earth</span>-<span className="textColorRed">Fire</span> Damage</b>,
                        allowing it to interact with both Talents from Pyromancy as well as Geomancy.
                        <p />What hurts worse than a Fireball?
                        <br /><b><i>A meteoric Fireball that explodes in a larger area for increased damage,
                            reduces affected creatures' Armor Class, and leaves behind damaging Magma that can't be
                            extinguished for 24 hours</i></b>!
                        <p />
                        <span className="AbilityHeaderSmall">Martial & Caster Disparity of Power and Gameplay:</span>
                        <p />
                        Go on to many online forums for 5th Edition D&D and you'll see that a lot of people find Martial characters to be
                        underwhelming in both gameplay complexity, and actual effectiveness. The tactical choices available to a Fighter for
                        the vast majority of the game roughly boils down to "Should I Attack or Grapple?" while casters and half-casters
                        (Martial/Caster hybrids) have a wealth of options available every round.
                        <p /><b>This Overhaul fixes this issue through several methods:</b>
                        <ul>
                            <li>Martial Trees each have unique fleshed out gameplay, often with engaging decision-making
                                opportunities.</li>
                            <li>Because of the point above, every weapon type plays differently and has a unique identity.</li>
                            <li>Positioning is now extremely important for many Martial Skill Trees, meaning tactical
                                maneuvering is more important than ever.</li>
                            <li>The Utility Skill Trees also offer a wealth of new non-magical gameplay, roleplay, and crafting
                                enhancements that allow characters built without magic to be just as engaging as those with.</li>
                        </ul>
                        <p />
                        <span className="AbilityHeaderSmall">Crafting Rules and Gameplay is Poorly Fleshed-Out:</span>
                        <p />
                        Let's face it, most games do a poor job of catering to players who, like myself,
                        enjoy crafting as a primary gameplay loop and power source. With that in mind, special-attention has been given to
                        rectifying this issue through adding two Skill Trees with 3+ sub-specializations focused entirely on crafting
                        interesting items.
                        <p />
                        <b>Alchemists can choose to focus on crafting:</b>
                        <ul>
                            <li>Powerful healing and buffing potions.</li>
                            <li>Experimental Were-Beast mutagens that allow
                                you to turn into Werewolves and many other Were-Beasts, or augment your current Were-Beast Form.</li>
                            <li>Deadly poisons and venoms with updated poisoning rules and gameplay.</li>
                            <li>Explosive concoctions and bombs to let your inner demolitionist out!</li>
                            <li>Later you will unlock the ability to mix together two of the above sub-specializations
                                to create truly unique concoctions.</li>
                        </ul>
                        <p />
                        <b>Artificers can choose to focus on crafting (with their choice of theming):</b>
                        <ul>
                            <li>Automata inventions such as Autonomous Robots and Golems.</li>
                            <li>Actuation inventions such as Steampunk Exosuits or Armor imbued with powerful enchantments.</li>
                            <li>Ballistics inventions such as Steampunk Turrets or Magical Totems that hurl magic at the enemy.</li>
                            <li>Later you will unlock the ability to mix together two of the above sub-specializations to create even
                                crazier inventions and enchantments.</li>
                        </ul>
                        <p />
                        There is much more to both crafting Skill Trees to discover, so give it a read today!
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export { OverhaulOverviewComponent };