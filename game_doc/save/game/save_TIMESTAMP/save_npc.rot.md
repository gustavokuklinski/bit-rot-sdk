# Directory: ```game/save/game/save_[TIMESTAMP]```
[Bit Rot SDK](./../../../../README.md)

# Non-Player Characters (npc.rot)

The `npc.rot` file holds a list of all human survivors (NPCs) in the world. It looks very similar to the zombie file, but with added artificial intelligence rules.

## NPC Properties
* **`id`, `name`, `x`, `y`, `health`**: Basic identity and location data.
* **Behavior Flags**:
  * `is_following`: True if the NPC is currently traveling with the player.
  * `is_friendly`: True if they won't attack the player on sight.
  * `is_static`: True if they stay in one place (like a shopkeeper or quest giver) instead of wandering.
* **`equipped_weapon`**: The weapon they are currently holding (e.g., "Pistol 9mm"), including its durability.
* **`inventory`**: Items in their pockets. NPCs often carry IDs with special `text` (their lore) and `tip` properties.
* **`clothes` & `loot_table`**: What they are wearing and what they drop if they die.

```json
[
    {
        "id": "e3e850a3-e838-402c-850e-571b8e14db99",
        "x": 880,
        "y": 1440,
        "name": "Jesse Oconnor",
        "health": 100,
        "max_health": 100,
        "is_following": false,
        "is_friendly": true,
        "is_static": true,
        "inventory": [
            {
                "name": "ID: Jesse Oconnor",
                "durability": null,
                "load": null,
                "state": null,
                "inventory": [],
                "text": "Name: Jesse Oconnor\nSex: Male\n",
                "tip": "Contains:\\nPlayer: Name, Sex, Traits and Known Recipes\\nZombie and NPC: Name, Sex"
            },
            {
                "name": "Mobile off",
                "durability": 100.0,
                "load": null,
                "state": "off",
                "inventory": [],
                "tip": "Use Powerbank to Reload"
            },
            {
                "name": "9mm Ammo",
                "durability": null,
                "load": 50,
                "state": null,
                "inventory": []
            }
        ],
        "equipped_weapon": {
            "name": "Pistol 9mm",
            "durability": 47.181895928039204,
            "load": 12,
            "state": null,
            "inventory": []
        },
        "clothes": {
            "feet": {
                "name": "Military Boots",
                "durability": 100.0,
                "load": null,
                "state": null,
                "inventory": []
            },
            "legs": {
                "name": "Military Pants",
                "durability": 70.56998680404499,
                "load": null,
                "state": null,
                "inventory": []
            },
            "body": {
                "name": "Military Tshirt",
                "durability": 95.871634970053,
                "load": null,
                "state": null,
                "inventory": []
            },
            "arms": {
                "name": "Military Jacket",
                "durability": 55.475026633922276,
                "load": null,
                "state": null,
                "inventory": []
            },
            "hair": {
                "name": "Bald",
                "durability": null,
                "load": null,
                "state": null,
                "inventory": [],
                "color": [
                    220,
                    50,
                    50
                ]
            },
            "head": {
                "name": "Beret",
                "durability": 42.00422138670951,
                "load": null,
                "state": null,
                "inventory": []
            },
            "hands": {
                "name": "Leather Black Gloves",
                "durability": 41.7487997278293,
                "load": null,
                "state": null,
                "inventory": []
            }
        },
        "loot_table": [
            {
                "item": "Zombie Meat",
                "chance": 1.0
            },
            {
                "item": "Knife",
                "chance": 1.0
            },
            {
                "item": "M4A1",
                "chance": 0.1
            },
            {
                "item": "Pistol 9mm",
                "chance": 0.2
            },
            {
                "item": "Kukaroach (Bit Rot publisher)",
                "chance": 0.1
            }
        ],
        "dialog_flags": []
    }
]
```