# Directory: `game/lib/data/npc/`
[Bit Rot SDK](./../../../../README.md)

## Creating NPCs
Create a new file with the name: `./game/lib/data/npc/npc_[TYPE].xml`
Edit the game settings as the doc below:

```xml
<!-- -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= -->
<!-- 
    # <npc> attributtes and properties:
    type="worker": The type of the NPC will spawn as the XML setting
    spawn_weight="40": Spawn lottery

    The visuals must be on folder: ./game/lib/sprites/npc/[SPRITE.PNG]
    <visuals>
        <sprite id="center" file="rat.png" />
        <sprite id="left" file="rat.png" />
        <sprite id="right" file="rat.png" />
    </visuals>
    The visuals must be on folder: ./game/lib/sfx/npc/[SPRITE.PNG]
    <sound>
        <hit src="npc_hit.ogg" />
        <attack src="npc_attack.ogg" />
        <dead src="npc_dead.ogg" />
        <steps src="npc_steps.ogg" />
    </sound>
-->
<!-- -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= -->
<npc type="military" spawn_weight="20">
    <name value="RANDOM" />
    <sex value="RANDOM" />
    <xp min="1" max="15" />
    
    <stats>
        <health min="100" max="100" />
        <speed min="1" max="1" />
        <attack min="1" max="15" />
        <infection min="1" max="5" />
    </stats>
    
    <clothes>
        <head><cloth name="Beret" /></head>
        <util></util>
        <hair></hair>
        <facial></facial>
        <feet><cloth name="Military Boots" /></feet>
        <hand><cloth name="Leather Black Gloves" /></hand>
        <body><cloth name="Military Tshirt" /></body>
        <arms><cloth name="Military Jacket" /></arms>
        <legs><cloth name="Military Pants" /></legs>
    </clothes>

    <visuals>
        <sprite id="center" file="player.png" />
        <sprite id="left" file="player_left.png" />
        <sprite id="right" file="player_right.png" />
    </visuals>
    
    <loot>
        <item item="Zombie Meat" chance="1.0" />
        <item item="M4A1" chance="0.1" />
    </loot>

    <sound>
        <hit src="npc_hit.ogg" />
        <attack src="npc_attack.ogg" />
        <dead src="npc_dead.ogg" />
        <steps src="npc_steps.ogg" />
    </sound>
</npc>
```