# Bit Rot SDK

Build your own game narratives and story lines. 
Create your endings on an endless world.

## Start here
Understand the core design of the SDK

**Basic `game/` tree**

```game$ tree -d```

* `icons/` - Game basic icons
* `lib/` - Full reference: **Tweak `game/lib` tree**
* `logs/` - Crashlogs
* `save/` - Game basic config
  * `config/`
    * [config.xml](./game_doc/save/config/config.xml.md)
  * `game/`
    * `save_20260320_175855/`
      * [save_host.rot](./game_doc/save/game/save_TIMESTAMP/save_host.rot.md)
      * [save_npc.rot](./game_doc/save/game/save_TIMESTAMP/save_npc.rot.md)
      * [save_vehicles.rot](./game_doc/save/game/save_TIMESTAMP/save_vehicles.rot.md)
      * [save_zombies.rot](./game_doc/save/game/save_TIMESTAMP/save_zombies.rot.md)
      * [save_world.rot](./game_doc/save/game/save_TIMESTAMP/save_world.rot.md)
      * [save_animal.rot](./game_doc/save/game/save_TIMESTAMP/save_animal.rot.md)
      * `map/`
  * `player/` - Player saved XML presets

----

**Tweak `game/lib` tree**

  * `data/` - The main XML files of each category
      * `animals/`
          * [creating_animals.md](./game_doc/lib/data/animals/creating_animals.md)
      * `clothes/`
          * [creating_clothes.md](./game_doc/lib/data/clothes/creating_clothes.md)
      * `craft/`
          * [creating_crafts.md](./game_doc/lib/data/craft/creating_crafts.md)
      * `help/`
      * `items/`
          * [creating_items.md](./game_doc/lib/data/items/creating_items.md)
      * `map/`
          * [creating_map.md](./game_doc/lib/data/map/creating_map.md)
      * `npc/`
          * [creating_npcs.md](./game_doc/lib/data/npc/creating_npcs.md)
          * [creating_npcs.dialogs.md](./game_doc/lib/data/npc/creating_npcs.dialogs.md)
      * `player/`
          * [creating_player.md](./game_doc/lib/data/player/creating_player.md)
          * [creating_player.progression.md](./game_doc/lib/data/player/creating_player.progression.md)
          * [creating_player.traits.md](./game_doc/lib/data/player/creating_player.traits.md)
      * `vehicle/`
          * [creating_vehicles.md](./game_doc/lib/data/vehicle/creating_vehicles.md)
      * `zombie/`
          * [creating_zombie.md](./game_doc/lib/data/zombie/creating_zombie.md)
  * `font/` - Game default font
  * `lang/` - Translation system - boilerplate pt\_BR\_\*.xml files to your language to translate
  * `map/` - Map \*.csv building tiles to be used with rot-editor
      * `buildings/`
  * `sfx/` - Game sound effects
      * `ambience/`
      * `animals/`
      * `items/`
      * `map/`
      * `npc/`
      * `player/`
      * `ui/`
      * `zombie/`
  * `sprites/` - Sprites directory mandatory: `<sprite file="consumable_food_kukaroach.png" />`
      * `animals/`
      * `clothes/`
      * `editor/`
      * `items/`
          * `zombie/` - **(Bug to fix)**
      * `map/`
      * `player/`
      * `ui/`
      * `vehicle/`
      * `zombie/`

## Setting up sprites
The visuals must be on folder: ```./game/lib/sprites/[TYPE]/[SPRITE.PNG]```

## Game defaults
* Default sprite size is set to 16x16 pixels - Base asset pack: [kenney.nl/assets/1-bit-pack](https://kenney.nl/assets/1-bit-pack)