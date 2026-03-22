# Directory: `game/lib/data/craft/`
[Bit Rot SDK](./README.md)

## Creating crafts
Create a new file with the name: `./game/lib/data/crafts/[CRAFT]_[NAME].xml`
Edit the game settings as the doc below:

```xml
<!-- -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= -->
<!-- 
    # <recipe> attributtes and properties:
    type="weapon_melee": Craft output type
    craft="create": Type of craft: create, dismantle, repair
    output="Baseball Bat with Nails": Craft return
    gain_xp="[intelligence:0.2, maintenance:0.2]": Earn XP by execting the craft
    amount="1": Result ammount
    time="2.0": How long to be made in seconds

-->
<!-- -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= -->

<!-- file: game/lib/data/craft/create_backpack_bag.xml -->
<recipe type="backpack" craft="create" output="Bag" magazine="Survivor Guide Basic" req_level="[intelligence:1, maintenance:2]" gain_xp="[intelligence:0.5, maintenance:0.2]" amount="1" time="4.5">
    <ingredient name="Ragged Cloth" destroy="true" amount="8" />
    <ingredient name="Line Twine" destroy="true" amount="4" />
    <ingredient name="Needle" destroy="false" amount="1" />
</recipe>

<!-- file: game/lib/data/craft/dismantle_weapon_melee_primitive_hammer.xml -->
<recipe type="weapon_melee" craft="dismantle" magazine="Carpentary Vol.1"  time="2.0" gain_xp="[intelligence:0.5, maintenance:0.2]">
    <ingredient name="Primitive Hammer" destroy="true" amount="1" />
    <result name="Stone" amount="1" />
    <result name="[Stick, Tree Branch]" amount="1" />
    <result name="[Ragged Cloth, Denim Stripes, Leather Piece]" amount="1" chance="0.5" /> 
    <ingredient name="Blueprint" destroy="true" amount="1" />
</recipe>

<!-- file: game/lib/data/craft/repair_weapon_melee_scissor.xml -->
<recipe type="weapon_melee" craft="repair" output="Scissor" gain_xp="[intelligence:0.5, maintenance:0.2]" amount="1" time="2.0">
    <ingredient name="Duck Tape" destroy="true" amount="1" />
    <ingredient name="Scissor" destroy="false" amount="1" />
    <ingredient name="Blueprint" destroy="true" amount="1" />
</recipe>
```