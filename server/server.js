/// <reference types="@altv/types-server" />

import * as alt from 'alt-server';

console.log(" ============================================================================ ");
console.log("                               Freeroam Started                               ");
console.log(`                              Time: ${new Date().toLocaleTimeString()} Uhr    `);
console.log(`                               Date: ${new Date().toLocaleDateString()}       `);
console.log(" ============================================================================ ");


alt.onClient('setDlcCloth', (player, dlc, component, drawble, texture) => {
    player.setDlcClothes(dlc, component, drawble, texture)
})

alt.onClient('setDlcProp', (player, dlc, component, drawble, texture) => {
    switch (drawble) {
        case 0:
            player.clearProp(drawble)
            break;
    
        case drawble > 0:
            player.setDlcProp(dlc, component, drawble, texture)
            break;
    }
})

alt.log(alt.hash("mp_m_eup_basic"))