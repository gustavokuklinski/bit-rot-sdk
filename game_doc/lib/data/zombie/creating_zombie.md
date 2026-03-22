# Directory: `game/lib/data/zombie/`
[Bit Rot SDK](./README.md)

## Creating Zombies
Create a new file with the name: `./game/lib/data/zombie/zombie_[TYPE].xml`
Edit the game settings as the doc below:

```xml
<!-- -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= -->
<!-- 
    # <zombie> attributtes and properties:
    type="worker": The type of the Zombie will spawn as the XML setting
    spawn_weight="40": Spawn lottery

    The visuals must be on folder: ./game/lib/sprites/zombie/[SPRITE.PNG]
    <visuals>
        <sprite id="center" file="rat.png" />
        <sprite id="left" file="rat.png" />
        <sprite id="right" file="rat.png" />
    </visuals>
    The visuals must be on folder: ./game/lib/sfx/zombie/[SPRITE.PNG]
    <sound>
        <hit src="zombie_hit.ogg" />
        <wander src="zombie_wandering.ogg" />
        <dead src="zombie_dead.ogg" />
        <attack src="zombie_attack.ogg" />
        <steps src="zombie_steps.ogg" />
    </sound>
-->
<!-- -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= -->
<zombie type="worker" spawn_weight="40">
    <name value="RANDOM" />
    <sex value="RANDOM" />
    <xp min="1" max="15" />
    
    <stats>
        <health min="20" max="100" />
        <speed min="1" max="2" />
        <attack min="5" max="15" />
        <infection min="2" max="5" />
    </stats>
    
    <clothes>
        <head><cloth name="Worker Helmet" /></head>
        <body><cloth name="Next Petrol Tshirt" /></body>
        <feet><cloth name="Shoes" /></feet>
    </clothes>

    <visuals>
        <sprite id="center" file="zombie.png" />
        <sprite id="left" file="zombie_left.png" />
        <sprite id="right" file="zombie_right.png" />
    </visuals>
    
    <loot>
        <item item="Zombie Meat" chance="1.0" />
        <item item="Screwdriver" chance="1.0" />
    </loot>

    <sound>
        <hit src="zombie_hit.ogg" />
        <wander src="zombie_wandering.ogg" />
        <dead src="zombie_dead.ogg" />
        <attack src="zombie_attack.ogg" />
        <steps src="zombie_steps.ogg" />
    </sound>
</zombie>
```