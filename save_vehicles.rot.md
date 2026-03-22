# Directory: ```game/save/game/save_[TIMESTAMP]```
[Bit Rot SDK](./README.md)

# Vehicles Data (vehicles.rot)

The `vehicles.rot` file keeps track of all drivable cars and vehicles on the map. 

## Vehicle Properties
* **`x` & `y`**: The exact location of the vehicle.
* **`name`**: The type of vehicle (e.g., "car_pickup").
* **`facing`**: Which direction the vehicle is parked ("right", "left", etc.).
* **`inventory`**: The trunk/storage of the vehicle. Items placed in the car go here.
* **`equipment`**: The mechanical parts of the car. If these are missing or broken, the car won't drive!
  * `motor`: The engine (needs durability > 0).
  * `key`: The key required to start it.
  * `fuel`: The gas tank (tracks the `load` for how much gas is left).
  * `battery`: The powerbank (tracks electrical charge).
  * `tire_fl`, `tire_fr`, `tire_bl`, `tire_br`: The four tires (Front-Left, Front-Right, Back-Left, Back-Right) and their health.

```json
[
    {
        "x": 944,
        "y": 576,
        "name": "car_pickup",
        "facing": "right",
        "inventory": [],
        "equipment": {
            "motor": {
                "name": "Car Engine",
                "durability": 100.0,
                "load": null,
                "state": null,
                "inventory": []
            },
            "key": null,
            "fuel": null,
            "battery": null,
            "tire_fl": {
                "name": "Car Tire",
                "durability": 50.96825431834502,
                "load": null,
                "state": null,
                "inventory": []
            },
            "tire_fr": {
                "name": "Car Tire",
                "durability": 78.08170247098379,
                "load": null,
                "state": null,
                "inventory": []
            },
            "tire_bl": {
                "name": "Car Tire",
                "durability": 60.00915905381021,
                "load": null,
                "state": null,
                "inventory": []
            },
            "tire_br": {
                "name": "Car Tire",
                "durability": 44.97074755599522,
                "load": null,
                "state": null,
                "inventory": []
            }
        },
        "lights": "off"
    }
]
```