ServerEvents.recipes(event => {

    // Computer normal
    event.replaceInput(
        { id: 'computercraft:computer_normal' },
        'minecraft:stone',
        'minecraft:iron_ingot'
    )
    event.replaceInput(
        { id: 'computercraft:computer_normal' },
        'minecraft:redstone',
        'integrateddynamics:logic_programmer',
    )
    event.replaceInput(
        { id: 'computercraft:computer_normal' },
        'minecraft:glass_pane',
        'integrateddynamics:part_display_panel',
    )

    // Computer advanced
    event.replaceInput(
        { id: 'computercraft:computer_advanced' },
        'minecraft:redstone',
        'integrateddynamics:logic_programmer',
    )
    event.replaceInput(
        { id: 'computercraft:computer_advanced' },
        'minecraft:glass_pane',
        'integrateddynamics:part_display_panel',
    )

    // Pocket computer normal
    event.replaceInput(
        { id: 'computercraft:pocket_computer_normal' },
        'minecraft:stone',
        'minecraft:iron_ingot'
    )
    event.replaceInput(
        { id: 'computercraft:pocket_computer_normal' },
        'minecraft:golden_apple',
        'integrateddynamics:portable_logic_programmer',
    )
    event.replaceInput(
        { id: 'computercraft:pocket_computer_normal' },
        'minecraft:glass_pane',
        'integrateddynamics:part_display_panel',
    )

    // Pocket computer advanced
    event.replaceInput(
        { id: 'computercraft:pocket_computer_advanced' },
        'minecraft:golden_apple',
        'integrateddynamics:portable_logic_programmer',
    )
    event.replaceInput(
        { id: 'computercraft:pocket_computer_advanced' },
        'minecraft:glass_pane',
        'integrateddynamics:part_display_panel',
    )

    // Wireless modem normal
    event.replaceInput(
        { id: 'computercraft:wireless_modem_normal' },
        'minecraft:stone',
        'minecraft:iron_ingot',
    )

    // Cable
    event.remove({ id: 'computercraft:cable' })
    event.shaped(
        '6x computercraft:cable',
        [
            'CWC',
            'RRR',
            'CWC'
        ],
        {
            C: 'minecraft:copper_ingot',
            W: '#forge:wool/black',
            R: 'minecraft:redstone'
        }
    ).id('diefalpha:computercraft/cable')

    // Wired modem
    event.remove({ id: 'computercraft:wired_modem' })
    event.shaped(
        'computercraft:wired_modem',
        [
            'CCC',
            'CRC',
            'CCC'
        ],
        {
            C: 'minecraft:copper_ingot',
            R: 'minecraft:redstone'
        }
    ).id('diefalpha:computercraft/wired_modem')

    // Redstone relay
    event.replaceInput(
        { id: "computercraft:redstone_relay" },
        "minecraft:stone",
        "minecraft:copper_ingot"
    )

    // Monitor normal
    event.replaceInput(
        { id: 'computercraft:monitor_normal' },
        'minecraft:stone',
        'minecraft:copper_ingot'
    )
    event.replaceInput(
        { id: 'computercraft:monitor_normal' },
        'minecraft:glass_pane',
        '#forge:glass/tinted'
    )

    // Monitor advanced
    event.replaceInput(
        { id: 'computercraft:monitor_advanced' },
        'minecraft:glass_pane',
        '#forge:glass/tinted'
    )

    // Speaker
    event.replaceInput(
        { id: 'computercraft:speaker' },
        'minecraft:stone',
        'minecraft:copper_ingot'
    )

    // Printer
    event.replaceInput(
        { id: 'computercraft:printer' },
        'minecraft:stone',
        'minecraft:copper_ingot'
    )

    // Disk drive
    event.replaceInput(
        { id: 'computercraft:disk_drive' },
        'minecraft:stone',
        'minecraft:copper_ingot'
    )
})