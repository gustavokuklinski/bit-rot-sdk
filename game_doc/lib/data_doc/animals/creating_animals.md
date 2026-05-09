# Directory: ```game/lib/data/```
[Bit Rot SDK](./../../../../README.md)

## Creating animals
Create a new file with the name: `./game/lib/data/animal/[NAME].xml`
Edit the game settings as the doc below:

```xml
<!-- -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= -->
<!-- 
    # <animal> attributtes and properties:
    name="Rat": Animal name
    type="animal" 
    spawn_weight="50": Percentage weight lottery
    spawn_layer="[1, 2]": Only spawn at layer 1 or 2

    The visuals must be on folder: ./game/lib/sprites/animal/[SPRITE.PNG]
    <visuals>
        <sprite id="center" file="rat.png" />
        <sprite id="left" file="rat.png" />
        <sprite id="right" file="rat.png" />
    </visuals>
-->
<!-- -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= -->
<animal name="Rat" type="animal" spawn_weight="50" spawn_layer="[1, 2]">
    <stats>
        <health min="10" max="20" />
        <speed min="0.3" max="0.5" />
        <attack min="1" max="5" />
        <infection min="10" max="25" />
    </stats>
    <capacity value="3" />
    <visuals>
        <sprite id="center" file="rat.png" />
        <sprite id="left" file="rat.png" />
        <sprite id="right" file="rat.png" />
    </visuals>
    
    <loot>
        <item item="Rat Meat" chance="1" />
        <item item="Kukaroach (Bit Rot publisher)" chance="1" />
    </loot>

    <sound>
        <hit src="animal_rat_hit.ogg" />
        <attack src="animal_rat_attack.ogg" />
        <dead src="animal_dead.ogg" />
        <steps src="animal_rat_steps.ogg" />
    </sound>
</animal>
```