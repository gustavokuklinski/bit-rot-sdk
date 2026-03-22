# Directory: `game/lib/data/player/`
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

## Creating the base player profile
Edit the file: `./game/lib/data/player/player.xml`
Edit the game settings as the doc below:

```xml
<player name="player">
    <name value="Player" />
    <sex value="Male" />

    <traits>
    </traits>

    <stats>
        <health value="100.0" />
        <stamina value="100.0" />
        <tireness value="100.0" />
        <water value="100.0" />
        <food value="100.0" />
        <anxiety value="0.0" />
        <infection value="0.0" />
    </stats>

    <attributes>
        <strength value="0.0"/>
        <fitness value="0.0" />
        <melee value="0.0"  />
        <ranged value="0.0" />
        <maintenance value="0.0" />
        <lucky value="0.0" />
        <agility value="0.0" />
        <intelligence value="0.0" />
    </attributes>

    <initial_loot>
        <item name="Wallet" chance="1" />
        <item name="Keyring Default" chance="1" />
        <item name="ID" chance="1" />
        <item name="Mobile off" chance="1" />
        <item name="Bag" chance="1" />
    </initial_loot>

    <visuals>
        <sprite id="center" file="player.png" />
        <sprite id="left" file="player_left.png" />
        <sprite id="right" file="player_right.png" />
    </visuals>

    <clothes>
        <head></head>
        <util></util>
        <hair></hair>
        <facial></facial>
        <feet></feet>
        <hand></hand>
        <body></body>
        <arms></arms>
        <legs></legs>
    </clothes>
 
    <recipes>
    </recipes>

</player>
```