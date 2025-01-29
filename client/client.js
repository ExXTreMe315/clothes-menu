/// <reference types="@altv/types-client" />
import * as alt from 'alt-client';
import * as NativeUI from './includes/NativeUI/NativeUi.js';
import * as data from '../data.js';

let cloth = {
    component: 0,
    drawable: 0,
    texture: 0,
    dlc: ""
}

const clothMenuItems = {
    0: "head",
    1: "masks",
    2: "hairs",
    3: "torsos",
    4: "legs",
    5: "bags",
    6: "shoes",
    7: "accessories",
    8: "undershirts",
    9: "armors",
    10: "decals",
    11: "tops",
    12:	"hats",
    13:	"glasses",
    14:	"ears",
    15:	"watches",
    16: "bracelets"
}

const clothMenu = new NativeUI.Menu("Clothes", "Clothes Menu", new NativeUI.Point(25, 25), "shopui_title_graphics_franklin", "shopui_title_graphics_franklin");
const componentMenu = new NativeUI.Menu(capitalizeFirstLetter(clothMenuItems[cloth.component]), `${capitalizeFirstLetter(clothMenuItems[cloth.component])} Menu`, new NativeUI.Point(25, 25), "shopui_title_graphics_franklin", "shopui_title_graphics_franklin");

componentMenu.AddItem(new NativeUI.UIMenuListItem("Drawable", "Set drawable", new NativeUI.ItemsCollection(createNumberArrayTill(255)), 1, { id: "drawable" }))
componentMenu.AddItem(new NativeUI.UIMenuListItem("Texture", "Set texture", new NativeUI.ItemsCollection(createNumberArrayTill(255)), 1, { id: "texture" }))
componentMenu.AddItem(new NativeUI.UIMenuItem("Apply", "Apply Cloth", { id: "apply" }))

for (const [key, value] of Object.entries(clothMenuItems)) {
    const uiItem = new NativeUI.UIMenuItem(capitalizeFirstLetter(value), `Change ${capitalizeFirstLetter(value)}`, { id: value, componentID: key })
    clothMenu.AddItem(uiItem)
    clothMenu.AddSubMenu(componentMenu, uiItem)
}

componentMenu.ListChange.on((item, index) => {
    if(!item.Data.id) return
    cloth[item.Data.id] = index - 1
    alt.logDebug(cloth)
})

componentMenu.ItemSelect.on((item) => {
    alt.logDebug(item.Data)
    if(!item.Data || !item.Data.id) return
    if(item.Data.id !== 'apply') return
    alt.logDebug(cloth)
    if(cloth.component >= 13){
        alt.emitServer('setProp', cloth.component-13, cloth.drawable, cloth.texture)
    }
    alt.emitServer('setCloth', cloth.component, cloth.drawable, cloth.texture)
})

clothMenu.ItemSelect.on((item) => {
    alt.logDebug(item.Data)
    if(!item.Data || !item.Data.componentID) return
    cloth.component = parseInt(item.Data.componentID)
})

function createNumberArrayTill(max) {
    max--
    let i = -1
    let array = []
    while (i <= max) {
        array.push(i)
        i++
    }
    return array
}

function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

alt.on('keyup', (key) => {
    if(key !== 75) return
    if(clothMenu.Visible || componentMenu.Visible) return
    clothMenu.Open()
})