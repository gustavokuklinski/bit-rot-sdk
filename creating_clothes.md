# Directory: `game/lib/data/clothes/`
[Bit Rot SDK](./README.md)
├── animals [creating_animals.md](./creating_animals.md)
├── clothes [creating_clothes.md](./creating_clothes.md)
├── craft [creating_crafts.md](./creating_crafts.md)
├── help
├── items [creating_items.md](./creating_items.md)
├── map [creating_map.md](./creating_map.md)
├── npc [creating_npcs.md](./creating_npcs.md), [creating_npcs.dialogs.md](./creating_npcs.dialogs.md)
├── player [creating_player.md](./creating_player.md), [creating_player.progression.md](./creating_player.progression.md), [creating_player.traits.md](./creating_player.traits.md)
├── vehicle [creating_vehicles.md](./creating_vehicles.md)
└── zombie [creating_zombie.md](./creating_zombie.md)

## Creating clothes
Create a new file with the name: `./game/lib/data/cloth/[BODY_PART]_[NAME].xml`
Edit the game settings as the doc below:

```xml
<!-- -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= -->
<!-- 
    # <cloth> attributtes and properties:
    name="Special Force Pants": Cloth name 
    type="cloth": Type cloth
    id="legs": Body part sprite
    builder="false": Show this cloth on player builder

    The visuals must be on folder: ./game/lib/sprites/cloth/[SPRITE.PNG]
    <visuals>
        <sprite id="center" file="rat.png" />
        <sprite id="left" file="rat.png" />
        <sprite id="right" file="rat.png" />
    </visuals>
-->
<!-- -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= -->
<cloth name="Special Force Pants" type="cloth" id="legs" builder="false">
    <properties>
        <defence value="1.0" />
        <capacity value="6" />
        <durability min="50" max="100" />
        <sprite file="legs_special_force_pants.png" />
        <weight weight="0.2" reduction="10%" />
    </properties>
    <loot>
        <item name="9mm Ammo" chance="1.0" />
        <item name="Flask" chance="1.0" />
    </loot>
    <spawn chance="1" />
</cloth>
```