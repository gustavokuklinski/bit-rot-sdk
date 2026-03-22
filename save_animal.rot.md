# Directory: ```game/save/game/save_[TIMESTAMP]```

# Animals Data (animal.rot)

The `animal.rot` file tracks passive and huntable wildlife in the game, such as rats and cows. 

## Animal Properties
* **`id`, `name`, `x`, `y`**: Basic identity and location data.
* **`health` & `max_health`**: How much damage they can take. (Rats have low health, Cows have high health).
* **`type`**: Always set to "animal".
* **`speed`**: How fast they run away or wander.
* **`loot_table`**: What you get when you hunt them (e.g., "Meat", "Rat Meat").
* **`inventory` & `clothes`**: Usually empty for animals, but kept in the file structure so the game engine treats them like other moving entities.
* **`sprites`**: The image file used to display the animal on the screen (e.g., "cow.png", "rat.png").

```json
[
    {
        "id": "4bdf7b33-b159-4572-8b29-c6b1634f8566",
        "x": 691.0226368370593,
        "y": 224.96111614944965,
        "health": 15,
        "max_health": 15,
        "name": "Rat",
        "type": "animal",
        "speed": 0.395860421097215,
        "loot_table": [
            {
                "item": "Rat Meat",
                "chance": 100.0
            },
            {
                "item": "Kukaroach (Bit Rot publisher)",
                "chance": 100.0
            }
        ],
        "inventory": [],
        "clothes": {},
        "sprites": {
            "center": "rat.png"
        }
    }
]
```