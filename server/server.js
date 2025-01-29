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
    player.setDlcClothes(dlc, component, drawable, texture)
})

alt.onClient('setProp', (player, component, drawable, texture) => {
    if(drawable === 0) {
        player.clearProp(drawable)
        return
    }
    player.setProp(component, drawable, texture)
})

alt.onClient('setDlcProp', (player, dlc, component, drawable, texture) => {
    if(drawable === 0) {
        player.clearProp(drawable)
        return
    }
    player.setDlcProp(dlc, component, drawable, texture)
})
