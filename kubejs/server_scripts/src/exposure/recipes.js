ServerEvents.recipes(event => {
    event.remove({ id: 'exposure:broken_interplanar_projector_fixing' })

    event.shapeless(
        'exposure:interplanar_projector',
        [
            'exposure:broken_interplanar_projector',
            '#forge:dusts/redstone'
        ]
    ).id('diefalpha:broken_interplanar_projector_fixing')
})
