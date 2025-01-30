/// <reference types="@altv/types-client" />
import * as alt from 'alt-client';
import * as native from "natives";
import * as NativeUI from './includes/NativeUI/NativeUi.js';

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

for (const [key, value] of Object.entries(clothMenuItems)) {
    const uiItem = new NativeUI.UIMenuItem(capitalizeFirstLetter(value), `Change ${capitalizeFirstLetter(value)}`, { id: value, componentID: key })
    clothMenu.AddItem(uiItem)
    clothMenu.AddSubMenu(componentMenu, uiItem)
}

clothMenu.ItemSelect.on((item) => {
    if(!item.Data || !item.Data.componentID) return
    cloth.component = parseInt(item.Data.componentID)

    componentMenu.Title = capitalizeFirstLetter(clothMenuItems[cloth.component])
    componentMenu.SubTitle = `Change ${capitalizeFirstLetter(clothMenuItems[cloth.component])}`

    componentMenu.Clear()

    let minDrawableID = 0
    let maxDrawableVariations = getMaxDrawableVariations(cloth.component)
    let maxTextureVariations = 26
    if(cloth.component >= 12) {
        minDrawableID = -1
        maxDrawableVariations = getMaxPropDrawableVariations(cloth.component - 12)
    }
    // @ToDo: Add maxTextureVariations for props (remember prop needs to refresh if drawable changes)

    componentMenu.AddItem(
        new NativeUI.UIMenuListItem(
            "Drawable",
            "Set drawable",
            new NativeUI.ItemsCollection(createNumberArray(minDrawableID, maxDrawableVariations)),
            0,
            { id: "drawable" }
        )
    )

    componentMenu.AddItem(
        new NativeUI.UIMenuListItem(
            "Texture",
            "Set texture",
            new NativeUI.ItemsCollection(createNumberArray(0, maxTextureVariations)),
            0,
            { id: "texture" }
        )
    )

    componentMenu.AddItem(new NativeUI.UIMenuItem("Apply", "Apply Cloth", { id: "apply" }))
})

componentMenu.ListChange.on((item, index) => {
    if(!item.Data.id) return
    cloth[item.Data.id] = index
})

componentMenu.ItemSelect.on((item) => {
    if(!item.Data || !item.Data.id) return
    if(cloth.component >= 12){
        alt.emitServer('setProp', cloth.component-12, cloth.drawable, cloth.texture)
    }
    alt.emitServer('setCloth', cloth.component, cloth.drawable, cloth.texture)
})

function createNumberArray(min, max) {
    let i = min
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

function getMaxDrawableVariations(componentID){
    return native.getNumberOfPedDrawableVariations(alt.Player.local.scriptID, componentID)
}

function getMaxTextureVariations(componentID, drawableID){
    return native.getNumberOfPedTextureVariations(alt.Player.local.scriptID, componentID, drawableID)
}

function getMaxPropDrawableVariations(componentID){
    return native.getNumberOfPedPropDrawableVariations(alt.Player.local.scriptID, componentID)
}

function getMaxPropTextureVariations(componentID, drawableID){
    return native.getNumberOfPedPropTextureVariations(alt.Player.local.scriptID, componentID, drawableID)
}

alt.on('keyup', (key) => {
    if(key !== 75) return
    if(clothMenu.Visible || componentMenu.Visible) return
    clothMenu.Open()
})