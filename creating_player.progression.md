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

## Creating Player Progression
Edit the file: `./game/lib/data/player/progression.xml`
Edit the game settings as the doc below:

```xml
<progression>
    <attributes>
        <attribute id="strength" name="Strength" image="ui/strength.png" base_xp="750">
            <effect target="unarmed_damage" value="0.05" type="multiplier_add" />
            <effect target="carry_weight" value="1.5" type="flat" />
        </attribute>

        <attribute id="intelligence" name="Intelligence" image="ui/intelligence.png" base_xp="300">
            <effect target="reading_speed" value="0.4" type="flat" />
            <effect target="crafting_speed" value="0.2" type="flat" />
            <effect target="xp_gain" value="0.01" type="multiplier_add" />
            <effect target="durability_save_chance" value="0.5" type="flat" />
        </attribute>
    </attributes>

    <stats>
        <stat id="stamina">
            <param name="regen_base" value="0.02" />
            <param name="run_cost_base" value="0.03" />
            <param name="bed_recovery_mult" value="2.0" />
            <param name="melee_cost" value="0.02" /> 
        </stat>

        <stat id="food">
            <param name="decay_amount" value="0.1" />
        </stat>

        <stat id="water">
            <param name="decay_amount" value="0.2" />
        </stat>
    </stats>
</progression>
```