/// <reference types="@altv/types-server" />
import * as alt from 'alt-server';

console.log(" ============================================================================ ");
console.log("                            Clothes Menu Started                              ");
console.log(`                              Time: ${new Date().toLocaleTimeString()} Uhr    `);
console.log(`                               Date: ${new Date().toLocaleDateString()}       `);
console.log(" ============================================================================ ");

alt.onClient('setCloth', (player, component, drawable, texture) => {
    player.setClothes(component, drawable, texture)
})

alt.onClient('setDlcCloth', (player, dlc, component, drawable, texture) => {
    let gender = 'm'
    if(player.model === alt.hash('mp_f_freemode_01')) {
        gender = 'f'
    }
    player.setDlcClothes(alt.hash(`mp_${gender}_${dlc}`), component, drawable, texture)
})

alt.onClient('setProp', (player, component, drawable, texture) => {
    if(drawable === -1) {
        player.clearProp(component)
        return
    }
    player.setProp(component, drawable, texture)
})

alt.onClient('setDlcProp', (player, dlc, component, drawable, texture) => {
    if(drawable === -1) {
        player.clearProp(component)
        return
    }
    let gender = 'm'
    if(player.model === alt.hash('mp_f_freemode_01')) {
        gender = 'f'
    }
    player.setDlcProp(alt.hash(`mp_${gender}_${dlc}`), component, drawable, texture)
})
