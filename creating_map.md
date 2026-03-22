# Directory: `game/lib/data/map/`
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

## Creating map tiles
Create a new file with the name: `./game/lib/data/map/[NAME].xml`
Edit the game settings as the doc below:

```xml
<map name="garden_tree_1" type="maptile" char="garden_tree_1" is_obstacle="true" destructible="true">
    <visuals>
        <sprite file="garden_tree_1.png" />
    </visuals>
    <properties>
        <health min="160" max="260" />
    </properties>
    <drop>
        <item item="Log" chance="1" />
    </drop>
    <sound src="chop_tree.ogg" />
</map>
```