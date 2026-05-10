document.addEventListener('DOMContentLoaded', () => {
    
    // Character Clothing Dictionary
    const clothes = {
        legs: [
            'legs_military_pants.png', 'legs_jeans_pants.png', 'legs_special_force_pants.png', 
            'legs_jeans_short.png', 'legs_pants.png', 'legs_leather_black_pants.png'
        ],
        foot: [
            'foot_sneakers.png', 'foot_military_boots.png', 'foot_shoes.png'
        ],
        body: [
            'body_next_petrol_tshirt.png', 'body_tshirt.png', 'body_military_tshirt.png', 
            'body_medical_tshirt.png', 'body_exxoil_tshirt.png', 'body_gethulius_tshirt.png'
        ],
        arms: [
            'arms_military_jacket.png', 'arms_medical_vest.png', 'arms_leather_black_jacket.png', 
            'arms_special_force_jacket.png', 'arms_jacket.png'
        ],
        hair: [
            'hair_bald.png', 'hair_crew.png', 'hair_cut.png', 'hair_mowalk.png', 'hair_long.png'
        ],
        facial: [
            'facial_full_beard.png', 'facial_chop.png'
        ],
        head: [
            'head_medical_mask.png', 'head_cowboy_leather_hat.png', 'head_special_force_helmet.png', 
            'head_beret.png', 'head_balaclava.png', 'head_black_hat.png', 'head_military_helmet.png', 
            'head_worker_helmet.png', 'head_cowboy_hat.png'
        ],
        util: [
            'util_body_holster.png', 'util_military_vest.png', 'util_body_sling_bullets.png',
            'util_belt_holster.png', 'util_legs_holster.png', 'util_belt.png', 'util_body_sling_shells.png'
        ]
    };

    // Curated list of weapons and survival items to drop around the characters
    const itemFiles = [
        'weapon_melee_axe.png',
        'weapon_ranged_shotgun.png',
        'weapon_ranged_ak_47.png',
        'weapon_melee_baseball_bat_with_nails.png',
        'consumable_food_canned_food.png',
        'container_liquid_plastic_bottle.png',
        'consumable_medication_medkit.png',
        'container_small_backpack.png',
        'utility_lantern_on.png',
        'weapon_throw_grenade.png',
        'consumable_drink_energy_drink.png',
        'consumable_food_mre.png'
    ];

    // Keep track of characters to animate them later
    const animatedCharacters = [];
    const animSequence = ['.png', '_right.png', '.png', '_left.png'];

    // Helper to get a random item from an array
    function getRandom(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    // Builder for a random loot item
    function buildItem() {
        const container = document.createElement('div');
        container.className = 'item-sprite';
        
        const img = document.createElement('img');
        img.src = 'game_doc/lib/sprites/items/' + getRandom(itemFiles);
        container.appendChild(img);
        
        return container;
    }

    // Builder for a character HTML element
    function buildCharacter() {
        const container = document.createElement('div');
        container.className = 'character-sprite';
        
        // Choose entity type (Player vs Zombie)
        const isZombie = Math.random() > 0.4; // 60% chance for zombie
        const typePath = isZombie ? 'game_doc/lib/sprites/zombie/' : 'game_doc/lib/sprites/player/';
        const baseName = isZombie ? 'zombie' : 'player';
        
        // Draw Base (Start with default `.png`)
        const baseImg = document.createElement('img');
        baseImg.src = `${typePath}${baseName}.png`;
        container.appendChild(baseImg);

        // Save reference for our animation loop
        animatedCharacters.push({
            imgElement: baseImg,
            path: typePath,
            name: baseName,
            currentFrame: Math.floor(Math.random() * animSequence.length) 
        });

        // Layer Clothing
        const layerOrder = ['legs', 'foot', 'body', 'arms', 'util', 'hair', 'facial', 'head'];
        layerOrder.forEach(layer => {
            let chance = 0.5; 
            
            if (isZombie) {
                chance = 0.3; 
            } else {
                if (layer === 'body' || layer === 'legs' || layer === 'foot') chance = 0.9;
                if (layer === 'hair') chance = 0.8;
            }

            if (Math.random() < chance) {
                const clothingFile = getRandom(clothes[layer]);
                const img = document.createElement('img');
                img.src = 'game_doc/lib/sprites/clothes/' + clothingFile;
                container.appendChild(img);
            }
        });

        return container;
    }

    const showcase = document.getElementById('sprite-showcase');
    const showcase2 = document.getElementById('sprite-showcase-2');
    // BUILD SPECIFIC LAYOUT: ITEM ITEM [4 CHARACTERS] ITEM ITEM
    
   
    // 4 Random Characters (Zombies / Players)
    for (let i = 0; i < 4; i++) {
        showcase.appendChild(buildCharacter());
        showcase.appendChild(buildItem());
    }
    for (let i = 0; i < 4; i++) {
        showcase2.appendChild(buildCharacter());
        showcase2.appendChild(buildItem());
    }


    // Animation Loop: Swap the base image src every 400ms to wiggle characters
    setInterval(() => {
        animatedCharacters.forEach(char => {
            char.currentFrame = (char.currentFrame + 1) % animSequence.length;
            char.imgElement.src = `${char.path}${char.name}${animSequence[char.currentFrame]}`;
        });
    }, 400); 
});