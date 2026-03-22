# Directory: `game/lib/data/map/`
[Bit Rot SDK](./README.md)

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