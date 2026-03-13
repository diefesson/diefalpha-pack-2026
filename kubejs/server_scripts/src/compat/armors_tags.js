ServerEvents.tags('item', event => {
    let fixes = {
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