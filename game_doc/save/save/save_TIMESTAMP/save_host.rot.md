# Directory: ```game/save/game/save_[TIMESTAMP]```
[Bit Rot SDK](./README.md)

# Player Save Data (host.rot)

The `host.rot` file stores everything about the player character. It is a single JSON object that keeps track of where you are, your stats, your skills, and what you are carrying.

## Main Properties
* **`name` & `sex`**: The character's name and gender (e.g., "Nicole Murphy DVM", "Female").
* **`x` & `y`**: The exact coordinates of the player in the world.
* **`map_filename`**: The current map chunk or level the player is in.
* **`zombies_killed`**: Total number of zombies the player has defeated.

## Stats & Attributes
* **`stats`**: Your current survival meters (0 to 100).
  * *health, water, food, stamina, tireness, infection, anxiety*.
* **`attributes`**: Your base skill levels (usually 0 to 10).
  * *strength, fitness, melee, ranged, lucky, intelligence, agility*.
* **`progression`**: Tracks the experience points (XP) for each attribute. 
  * Shows current `level`, `xp`, and `xp_to_next_level`.

## Inventory & Gear
* **`inventory`**: A list of items in the player's main backpack/pockets. Each item tracks its `name`, `durability`, `load` (quantity/ammo), `state` (on/off), and its own `inventory` (if it's a container).
* **`belt`**: Quick-access slots (usually 5 slots). Holds items for fast equipping.
* **`clothes`**: What the player is wearing. Divided into body parts:
  * `hair` (includes hair color)
  * `head` (hats, helmets)
  * `legs` (pants)
  * `feet` (shoes)
  * `body` (shirts, jackets)

```json
{
    "name": "Nicole Murphy DVM",
    "sex": "Female",
    "x": 963.2319999999996,
    "y": 1278.1035930777882,
    "map_filename": "map_L1_0_2_map.csv",
    "zombies_killed": 0,
    "stats": {
        "health": 100.0,
        "water": 94.99999999999993,
        "food": 97.50000000000014,
        "stamina": 100.0,
        "tireness": 92.21917119734624,
        "infection": 0.0,
        "anxiety": 10.649000000000193
    },
    "attributes": {
        "strength": 5,
        "fitness": 5,
        "melee": 0,
        "ranged": 0,
        "lucky": 1,
        "intelligence": 2,
        "agility": 5
    },
    "progression": {
        "strength": {
            "name": "strength",
            "level": 5,
            "xp": 0,
            "xp_to_next_level": 4500.0
        },
        "fitness": {
            "name": "fitness",
            "level": 5,
            "xp": 0,
            "xp_to_next_level": 4500.0
        },
        "melee": {
            "name": "melee",
            "level": 0,
            "xp": 0,
            "xp_to_next_level": 196.0
        },
        "ranged": {
            "name": "ranged",
            "level": 0,
            "xp": 0,
            "xp_to_next_level": 200.0
        },
        "maintenance": {
            "name": "maintenance",
            "level": 1,
            "xp": 0,
            "xp_to_next_level": 300.0
        },
        "agility": {
            "name": "agility",
            "level": 5,
            "xp": 0,
            "xp_to_next_level": 1200.0
        },
        "lucky": {
            "name": "lucky",
            "level": 1,
            "xp": 0,
            "xp_to_next_level": 588.0
        },
        "intelligence": {
            "name": "intelligence",
            "level": 2,
            "xp": 0,
            "xp_to_next_level": 900.0
        }
    },
    "traits": [
        "Profession_Mechanic",
        "brawler",
        "luck"
    ],
    "known_recipes": [
        "Vehicle Engineering Vol.1",
        "Vehicle Engineering Vol.2",
        "Vehicle Engineering Vol.3"
    ],
    "visuals": {
        "center": "player.png",
        "left": "player_left.png",
        "right": "player_right.png"
    },
    "sounds": {
        "steps": "steps.ogg"
    },
    "inventory": [
        {
            "name": "Wallet",
            "durability": null,
            "load": null,
            "state": null,
            "inventory": []
        },
        {
            "name": "Keyring Default",
            "durability": null,
            "load": null,
            "state": null,
            "inventory": [
                {
                    "name": "Car Key Pickup",
                    "durability": null,
                    "load": null,
                    "state": null,
                    "inventory": []
                },
                {
                    "name": "Car Key Truck",
                    "durability": null,
                    "load": null,
                    "state": null,
                    "inventory": []
                }
            ]
        },
        {
            "name": "ID",
            "durability": null,
            "load": null,
            "state": null,
            "inventory": [],
            "text": "Name: [PLAYER NAME]\nSex: [PLAYER SEX]\nTraits:\n- [LIST TO TRAITS]\nRecipes:\n- [LIST TO RECIPES]",
            "tip": "Contains:\\nPlayer: Name, Sex, Traits and Known Recipes\\nZombie and NPC: Name, Sex"
        },
        {
            "name": "Mobile off",
            "durability": 99.47530000000003,
            "load": null,
            "state": "off",
            "inventory": [],
            "tip": "Use Powerbank to Reload"
        },
        {
            "name": "38 Revolver",
            "durability": 17.74977301950682,
            "load": 5,
            "state": null,
            "inventory": []
        },
        {
            "name": "38 Ammo",
            "durability": null,
            "load": 39,
            "state": null,
            "inventory": []
        },
        {
            "name": "Bag",
            "durability": null,
            "load": null,
            "state": null,
            "inventory": []
        }
    ],
    "belt": [
        null,
        null,
        null,
        null,
        null
    ],
    "clothes": {
        "hair": {
            "name": "Long",
            "durability": null,
            "load": null,
            "state": null,
            "inventory": [],
            "color": [
                220,
                220,
                50
            ]
        },
        "head": {
            "name": "Beret",
            "durability": 52.82530018246292,
            "load": null,
            "state": null,
            "inventory": []
        },
        "legs": {
            "name": "Jeans Pants",
            "durability": 3.9489157280990046,
            "load": null,
            "state": null,
            "inventory": []
        },
        "feet": {
            "name": "Shoes",
            "durability": 100.0,
            "load": null,
            "state": null,
            "inventory": []
        },
        "body": {
            "name": "Exxoil Tshirt",
            "durability": 45.93216868230691,
            "load": null,
            "state": null,
            "inventory": []
        },
        "util": null,
        "arms": null,
        "hands": null,
        "facial": null
    }
}
```