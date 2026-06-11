let lightmanDisabledItems = [
    'lightmanscurrency:portable_atm',
    'lightmanscurrency:portable_terminal',
    'lightmanscurrency:portable_gem_terminal',
    'lightmanscurrency:gem_terminal'
]

ServerEvents.recipes(event => {
    for (let id of lightmanDisabledItems) {
        event.remove({ output: id })
    }
})
