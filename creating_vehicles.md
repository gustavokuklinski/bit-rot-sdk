# Directory: ```game/lib/data/vehicle```
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

## Creating Vehicles
Create a new file with the name: `./game/lib/data/vehicle/car_[NAME].xml`
Edit the game settings as the doc below:

```xml
<!-- -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= -->
<!-- 
    # <vehicle> attributtes and properties:
    name="car_jeep": Vehicle name
    type="car": Type car (generic vehicle)
    is_obstacle="true": Set obstacle
    spawn_weight="40": Spawn lottery

    The visuals must be on folder: ./game/lib/sprites/animal/[SPRITE.PNG]
    <visuals>
        <sprite id="center" file="rat.png" />
        <sprite id="left" file="rat.png" />
        <sprite id="right" file="rat.png" />
    </visuals>
-->
<!-- -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= -->
<vehicle name="car_jeep" type="car" is_obstacle="true"  spawn_weight="40">
    <capacity value="10" />
    <car>
        <max_speed value="8" />
        <key value="Car Key Jeep" />
        <fuel value="1.0" />
        <motor value="1.0" />
        <battery value="1.0" />
        <tire_front_left value="Car tire" />
        <tire_front_right value="Car tire" />
        <tire_back_left value="Car tire" />
        <tire_back_right value="Car tire" />
        <lights min="5" max="100" radius="8" />
        <seats value="4" /> 
    </car>
    <loot>
        <item item="Car Key Jeep" chance="0.1" />
        <item item="Fuel Canister" chance="0.1" />
        <item item="Powerbank" chance="0.1" />
        <item item="Motor Repair Kit" chance="0.1" />
        <item item="Toolkit" chance="0.3" />
        <item item="Survivor Kit" chance="0.2" />
        <item item="Medical Kit" chance="0.2" />
        <item item="Car Tire" chance="0.3" />
        <item item="Kukaroach (Bit Rot publisher)" chance="0.1" />
    </loot>
    <visuals>
        <sprite id="top" file="car_jeep_top.png" />
        <sprite id="down" file="car_jeep_down.png" />
        <sprite id="left" file="car_jeep_left.png" />
        <sprite id="right" file="car_jeep_right.png" />
    </visuals>
</vehicle>

```