let lcDisabledItems = [
    // Chocolate Coins
    'lightmanscurrency:coin_chocolate_copper',
    'lightmanscurrency:coinpile_chocolate_copper',
    'lightmanscurrency:coinblock_chocolate_copper',
    'lightmanscurrency:coin_chocolate_iron',
    'lightmanscurrency:coinpile_chocolate_iron',
    'lightmanscurrency:coinblock_chocolate_iron',
    'lightmanscurrency:coin_chocolate_gold',
    'lightmanscurrency:coinpile_chocolate_gold',
    'lightmanscurrency:coinblock_chocolate_gold',
    'lightmanscurrency:coin_chocolate_emerald',
    'lightmanscurrency:coinpile_chocolate_emerald',
    'lightmanscurrency:coinblock_chocolate_emerald',
    'lightmanscurrency:coin_chocolate_diamond',
    'lightmanscurrency:coinpile_chocolate_diamond',
    'lightmanscurrency:coinblock_chocolate_diamond',
    'lightmanscurrency:coin_chocolate_netherite',
    'lightmanscurrency:coinpile_chocolate_netherite',
    'lightmanscurrency:coinblock_chocolate_netherite',
    // Ancient Coins
    'lightmanscurrency:coin_ancient',
    // Money Chest and upgrades
    'lightmanscurrency:coin_chest',
    'lightmanscurrency:coin_chest_exchange_upgrade',
    'lightmanscurrency:coin_chest_magnet_upgrade_1',
    'lightmanscurrency:coin_chest_magnet_upgrade_2',
    'lightmanscurrency:coin_chest_magnet_upgrade_3',
    'lightmanscurrency:coin_chest_magnet_upgrade_4',
    'lightmanscurrency:coin_chest_bank_upgrade',
    'lightmanscurrency:coin_chest_security_upgrade',
    // Manually disabled items
    'lightmanscurrency:portable_atm',
    'lightmanscurrency:portable_terminal',
    'lightmanscurrency:portable_gem_terminal',
    'lightmanscurrency:gem_terminal',
]

ServerEvents.tags('item', event => {
    for (let item of lcDisabledItems) {
        event.add('c:hidden_from_recipe_viewers', item)
    }
})
