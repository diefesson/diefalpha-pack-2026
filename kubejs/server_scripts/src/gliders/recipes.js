ServerEvents.recipes(event => {
    event.remove({ id: 'vc_gliders:reinforced_paper_iron' })
    event.remove({ id: 'vc_gliders:reinforced_paper_gold' })
    event.remove({ id: 'vc_gliders:reinforced_paper_netherite' })

    event.shapeless(
        '1x vc_gliders:reinforced_paper_iron',
        [
            'vc_gliders:reinforced_paper',
            '#forge:ingots/iron'
        ]
    ).id('diefalpha:gliders/reinforced_paper_iron')
    event.shapeless(
        '1x vc_gliders:reinforced_paper_gold',
        [
            'vc_gliders:reinforced_paper',
            '#forge:ingots/gold'
        ]
    ).id('diefalpha:gliders/reinforced_paper_gold')
    event.shapeless(
        '1x vc_gliders:reinforced_paper_netherite',
        [
            'vc_gliders:reinforced_paper',
            '#forge:ingots/netherite_scrap'
        ]
    ).id('diefalpha:gliders/reinforced_paper_netherite')
})