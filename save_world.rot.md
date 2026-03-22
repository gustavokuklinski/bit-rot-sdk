# Directory: ```game/save/game/save_[TIMESTAMP]```
[Bit Rot SDK](./README.md)

# World State Data (world.rot)

The `world.rot` file saves the state of the game environment. This includes the time of day, items dropped on the ground, and your customized UI screen setup.

## Main Properties

* **`time`**: Keeps track of how long the world has existed.
  * `game_time_ms`: Total milliseconds passed in the game.
  * `day_count`: How many days the player has survived.
  
* **`layer_spawn_triggers`**: Keeps track of zones or coordinates where events or enemies have already spawned, preventing them from spawning endlessly.

* **`items`**: A list of all the items currently dropped on the ground. 
  * Each entry has an `x` and `y` coordinate.
  * Inside, there is an `inventory` array containing the actual items (like "Dead Cow", "Stone", etc.) and their specific `load` or `durability`.

* **`modal_positions`**: Remembers where the player dragged their UI windows (modals) on the screen. 
  * Saves X and Y screen coordinates for windows like `status`, `inventory`, `gear`, `nearby`, `messages`, and `mobile`.

