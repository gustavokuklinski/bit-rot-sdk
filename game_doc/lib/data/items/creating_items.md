# Directory: ```game/lib/data/item```
[Bit Rot SDK](./README.md)

## Creating items
Create a new file with the name: `./game/lib/data/item/[TYPE]_[NAME].xml`
Edit the game settings as the doc below:

```xml
<!-- -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= -->
<!-- 
    # <item> attributtes and properties:

    name="Kukaroach (Bit Rot publisher)": Item name
    allow_belt="false": Can be placed on belt
    tip="Are you\nsure?": Useful info about the item
    state="[on/off]": Must be a type="utility". It is used as a light source mainly.
    allow_liquid="true": Must be a type="container"
    disposable="true": Must be a type="container"

    type="consumable_food": Accept multiple types: 
        Types are classified by importance as Primary types are the minimim item requirements.

        The nodes /properties/sprites must be on folder: ./game/lib/sprites/item/[SPRITE.PNG]
        [
            # Primary types:
                - type="consumable": 
                    _General types of consumable_
                    <require type="[Matches, Lighter on]" />: Need some required item to be used with
                    <restore status="[tireness]" min="5" max="10" />
                    <reduce status="[anxiety]" min="5" max="20" />
                    <reduce status="[stamina]" min="2" max="5" />
                    <reduce status="[water]" min="2" max="5" />
                    <weight weight="0.001"/>
                    <load min="2" max="20" />
                    <capacity value="20" />
                    <sprite file="sprite.png" />

                - type="consumable_ammo": 
                    **Required <properties /> to use with type="weapon_ranged"**
                    <status value="ammo" />
                    <sprite file="sprite.png" />

                - type="weapon_melee"
                     **Required <properties />**
                    <durability min="1" max="100" />: Item durabilitie (General use)
                    <damage min="2" max="5" />: Item damage if equiped
                    <skill type="melee" />: Skill to gain
                    <knockback value="1" />: Tiles do knockback enymies
                    <sprite file="sprite.png" />

                - type="weapon_ranged"
                    **Required <properties />**
                    <durability min="1" max="100" />
                    <load min="5" max="6" />
                    <weight weight="1.0"/>
                    <capacity value="6" />
                    <ammo type="38 Ammo" />: to use with type="consumable_ammo"
                    <damage min="25" max="55" />
                    <firing pellets="1" spread_angle="0" distance="15" />
                    <skill type="range" />
                    <sprite file="sprite.png" />
                    <knockback value="1" />

                - type="camp"
                    **Required <properties />**
                    <capacity value="20" />
                    <allow_sleep value="true" />
                    <weight weight="1.5" />
                    <sprite file="sprite.png" />

                - type="backpack"
                    **Required <properties />**
                    <capacity value="10" />
                    <weight weight="1.0" reduction="50%" />
                    <sprite file="sprite.png" />

                - type="utility"
                    **Required <properties />**
                    _It is used as a light source mainly._
                    <durability min="1" max="100" />
                    <weight weight="0.1"/>
                    <light min="1" max="2" />
                    <fuel type="Lighter Fluid" />
                    <sprite file="sprite.png" />

                - type="liquid"
                    **Required <properties />**
                    <restore status="[water]" min="5" max="25" />
                    <load min="1" max="100" />
                    <capacity value="100" />
                    <weight weight="0.001" />
                    <sprite file="sprite.png" />

                - type="resource"
                    **Required <properties />**
                    <load min="1" max="1" />
                    <weight weight="0.9"/>
                    <capacity value="5" />
                    <sprite file="sprite.png" />

                - type="recipe"
                    **Required <properties />**
                    <load min="1" max="1" />
                    <weight weight="0.001"/>
                    <capacity value="10" />
                    <sprite file="sprite.png" />

                - type="mobile"
                    **Required <properties />**
                    _Have their own modal_
                    <durability min="1" max="100" />
                    <weight weight="0.01"/>
                    <light min="1" max="5" />
                    <fuel type="Powerbank" />
                    <sprite file="sprite.png" />

                - type="currency"
                - type="map"
                    **Required <properties />**
                    <sprite file="map_island_map.png" />
                    <weight weight="0.001"/>

                - type="charm"
                    **Required <properties />**
                    <sprite file="bible_1.png" />
                    <weight weight="0.05" />

            # Classification types:
                - type="consumable_food"
                - type="consumable_drugs"
                - type="consumable_drink"
                - type="consumable_drugs"
                - type="consumable_medication"
                **Required <properties /> for all Classification types - Can be only one <restore> or <reduce>**
                <restore status="[food]" min="1" max="5" />
                <reduce status="[tireness]" min="1" max="2" />
            
            # Special vehicle types:
                **Required: one vehicle must have all this items**
                - type="car_key"
                - type="car_fuel"
                - type="car_fuel"
                - type="car_motor"
                - type="car_tire"
            
        ]
    
    # Item tags:
    <spawn chance="1" />: Required
    This tags should be used by some types
        [
            type="weapon_ranged"
                <sound>
                    <shoot src="mpk5.ogg" />
                    <reload src="reload.ogg" />
                    <noammo src="outofammo.ogg" />
                </sound>
                <spawn chance="1" />
            type="weapon_melee"
                <sound>
                    <swing src="knife.ogg" />
                </sound>
            type="container"
                <loot>
                    <item name="Infection Pills" chance="1.0" />
                </loot>
            
        ]
-->
<!-- -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= -->
<item name="Kukaroach (Bit Rot publisher)" type="consumable_food" allow_belt="false">
    <properties>
        <!-- -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= -->
        <!-- 
            Player Status:

            <restore status="[infection]" min="60" max="90" />: Use to increase the percentage of this status
            <reduce status="[infection]" min="60" max="90" />: Use to reduce the percentage of this status
        -->
        <restore status="[food]" min="1" max="5" />
        <restore status="[infection]" min="60" max="90" />
        
        <!-- 
            Player Attributes (Skills):

            <attribute_name value="0.1">: Increase 10% of attribute_name
        -->
        <attributes>
            <lucky value="0.1" />
        </attributes>
        <!-- -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= -->
        <weight weight="0.001" /><!-- Weight -->
        <load value="1" /><!-- How much you can find at once -->
        <capacity value="100" /><!-- How much the player can stack -->
        <sprite file="consumable_food_kukaroach.png" /> <!-- Set the sprite -->
    </properties>
    <spawn chance="1" />
</item>
```