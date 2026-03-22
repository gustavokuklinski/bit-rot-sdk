# Directory: `game/lib/data/player/`
[Bit Rot SDK](./../../../../README.md)

## Creating Player Traits and Professions
Edit the file: `./game/lib/data/player/traits.xml`
Edit the game settings as the doc below:

```xml
<player_traits>
    <profession>
        <trait id="Profession_Nurse" name="Nurse" cost="1" tooltip="Knows basic medicine" disable="[Profession_CEO_assistant, Profession_Mechanic, Profession_Spy, Profession_Scientist, Profession_Unemployed, Profession_Police_Officer]">
            <attributes level="[strength:5, fitness:5, agility: 5, maintenance: 2, intelligence: 3, lucky: 1]" />
            <recipe magazine="Medicine Vol.1" />
        </trait>
        
        <trait id="Profession_Mechanic" name="Mechanic" cost="1" tooltip="Knows how vehicles works" disable="[Profession_Scientist, Profession_CEO_assistant, Profession_Unemployed, Profession_Spy, Profession_Nurse, Profession_Police_Officer]">
            <attributes level="[strength:5, fitness:5, agility: 5, maintenance: 1, intelligence: 2]" />
            <recipe magazine="Vehicle Engineering Vol.1" />
            <recipe magazine="Vehicle Engineering Vol.2" />
            <recipe magazine="Vehicle Engineering Vol.3" />
        </trait>
    </profession>

    <traits>
        <trait id="runner" name="Runner" cost="3" tooltip="+5% stamina recovery, +15% Speed">
            <stats stamina="5" />
            <config set="PLAYER_SPEED:1.15" />
        </trait>

        <trait id="smoker" name="Smoker" cost="-1" tooltip="-15% slower recovery stamina and +15% faster increase anxiety">
            <stats stamina="-15" anxiety="15" />
        </trait>

        <trait id="eagle_eyed" name="Eagle Eyed" cost="2" tooltip="+25% Vision Radius" disable="[myopia]">
            <config set="BASE_PLAYER_VIEW_RADIUS:1.25" />
        </trait>
    </traits>
</player_traits>
```