# Directory: ```game/save/game/save_[TIMESTAMP]```
[Bit Rot SDK](./README.md)

# Zombies Data (zombies.rot)

The `zombies.rot` file holds a list (array) of every zombie currently active in the world. 

## Zombie Properties
* **`id`**: A unique code for each zombie so the game doesn't confuse them.
* **`x` & `y`**: Where the zombie is standing on the map.
* **`health` & `max_health`**: How much damage the zombie can take before dying.
* **`name` & `sex`**: The identity of the zombie before they turned (e.g., "Misty Gibson", "Female").
* **`speed`**: How fast this specific zombie moves.
* **`vaccine`**: A true/false value indicating if this zombie carries a cure/vaccine.
* **`loot_table`**: A list of items this zombie *might* drop when killed, and the percentage `chance` of dropping them (e.g., Zombie Meat, Weapons, Backpacks).
* **`inventory`**: Items the zombie actually has on them right now.
* **`clothes`**: The outfit the zombie is wearing (feet, legs, body, hair), including the `color` tints of those clothes.
* **`sprites`**: The image files used to draw the zombie walking in different directions.

```json
[
    {
        "id": "894bdcd3-a7db-4e2e-9122-80fc371ba657",
        "x": 432,
        "y": 64,
        "health": 20.852,
        "max_health": 20.852,
        "name": "Misty Gibson",
        "sex": "Female",
        "vaccine": false,
        "speed": 0.4648395764321144,
        "loot_table": [
            {
                "item": "Zombie Meat",
                "chance": 1.0
            },
            {
                "item": "MPK5",
                "chance": 0.1
            },
            {
                "item": "MAC10",
                "chance": 0.1
            },
            {
                "item": "Large Backpack",
                "chance": 0.1
            },
            {
                "item": "Knife",
                "chance": 0.6
            },
            {
                "item": "Pistol 9mm",
                "chance": 0.5
            },
            {
                "item": "Kukaroach (Bit Rot publisher)",
                "chance": 0.5
            },
            {
                "item": "Camp Tent",
                "chance": 60.122150779930905
            }
        ],
        "inventory": [
            {
                "name": "ID: Misty Gibson",
                "durability": null,
                "load": null,
                "state": null,
                "inventory": [],
                "text": "Name: Misty Gibson\nSex: Female\n",
                "tip": "Contains:\\nPlayer: Name, Sex, Traits and Known Recipes\\nZombie and NPC: Name, Sex"
            }
        ],
        "clothes": {
            "feet": {
                "name": "Military Boots",
                "durability": 100.0,
                "load": null,
                "state": null,
                "inventory": []
            },
            "legs": {
                "name": "Special Force Pants",
                "durability": 71.08837603342974,
                "load": null,
                "state": null,
                "inventory": [
                    {
                        "name": "Flask",
                        "durability": null,
                        "load": null,
                        "state": null,
                        "inventory": [],
                        "tip": "Only liquids allowed"
                    }
                ]
            },
            "body": {
                "name": "Military Tshirt",
                "durability": 66.19543559931323,
                "load": null,
                "state": null,
                "inventory": []
            },
            "arms": {
                "name": "Special Force Jacket",
                "durability": 81.69810795399002,
                "load": null,
                "state": null,
                "inventory": [
                    {
                        "name": "9mm Ammo",
                        "durability": null,
                        "load": 30,
                        "state": null,
                        "inventory": []
                    }
                ]
            },
            "hair": {
                "name": "Crew",
                "durability": null,
                "load": null,
                "state": null,
                "inventory": [],
                "color": [
                    50,
                    50,
                    50
                ]
            },
            "head": {
                "name": "Special Force Helmet",
                "durability": 71.01096140876119,
                "load": null,
                "state": null,
                "inventory": []
            },
            "util": {
                "name": "Military Vest",
                "durability": 100.0,
                "load": null,
                "state": null,
                "inventory": []
            },
            "hands": {
                "name": "Leather Black Gloves",
                "durability": 90.10332426903017,
                "load": null,
                "state": null,
                "inventory": []
            }
        },
        "sprites": {
            "center": "zombie.png",
            "left": "zombie_left.png",
            "right": "zombie_right.png"
        }
    }
]
```