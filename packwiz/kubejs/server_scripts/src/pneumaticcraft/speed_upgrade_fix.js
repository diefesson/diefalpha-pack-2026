ServerEvents.recipes(event => {
    event.remove({ id: 'pneumaticcraft:speed_upgrade' })
    event.remove({ id: 'pneumaticcraft:speed_upgrade_from_glycerol' })

    event.shaped(
        'pneumaticcraft:speed_upgrade',
        [
            'USU',
            'SBS',
            'USU',
        ],
        {
            U: '#pneumaticcraft:upgrade_components',
            S: 'minecraft:sugar',
            B: 'pneumaticcraft:lubricant_bucket',
        },
    ).id('diefalpha:pneumaticcraft/speed_upgrade_from_sugar')

    event.shaped(
        '2x pneumaticcraft:speed_upgrade',
        [
            'USU',
            'SBS',
            'USU',
        ],
        {
            U: '#pneumaticcraft:upgrade_components',
            S: 'pneumaticcraft:glycerol',
            B: 'pneumaticcraft:lubricant_bucket',
        },
    ).id('diefalpha:pneumaticcraft/speed_upgrade_from_glycerol')
})
