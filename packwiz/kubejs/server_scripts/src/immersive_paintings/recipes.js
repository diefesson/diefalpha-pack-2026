ServerEvents.recipes(event => {
    event.remove({ id: 'immersive_paintings:painting' })
    event.remove({ id: 'immersive_paintings:graffiti' })

    event.shaped(
        'immersive_paintings:painting',
        [
            'PCP',
            'MIY',
            'PKP'
        ],
        {
            'P': 'minecraft:paper',
            'I': 'exposure:interplanar_projector',
            'C': '#forge:dyes/cyan',
            'M': '#forge:dyes/magenta',
            'Y': '#forge:dyes/yellow',
            'K': '#forge:dyes/black',
        }
    ).id('diefalpha:painting')

    event.shaped(
        'immersive_paintings:graffiti',
        [
            'RCR',
            'MIY',
            'RKR'
        ],
        {
            'R': '#forge:dusts/redstone',
            'I': 'exposure:interplanar_projector',
            'C': '#forge:dyes/cyan',
            'M': '#forge:dyes/magenta',
            'Y': '#forge:dyes/yellow',
            'K': '#forge:dyes/black',
        }
    ).id('diefalpha:graffiti')

})