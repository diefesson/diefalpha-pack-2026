ServerEvents.tags('item', event => {
    let fixes = {
        'forge:armors/helmets': [
            'redstone_arsenal:flux_helmet',
            'redstone_arsenal:flux_helmet',
        ],
        'forge:armors/chestplates': [
            'redstone_arsenal:flux_chestplate',
        ],
        'forge:armors/leggings': [
            'redstone_arsenal:flux_leggings',
        ],
        'forge:armors/boots': [
            'redstone_arsenal:flux_boots',
        ],
        'forge:armors': [
            '#forge:armors/helmets',
            '#forge:armors/chestplates',
            '#forge:armors/leggings',
            '#forge:armors/boots',
        ]
    }

    for (let [key, values] of Object.entries(fixes)) {
        for (let value of values) {
            event.add(key, value)
        }
    }
})