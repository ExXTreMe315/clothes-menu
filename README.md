# Alt:V Native-UI Clothes Menu

This resoucre contains a clothes menu with NativeUI. The clothes are set with DLC clotes so this menu support mod clothes

## Features

- change clothes & porps
- set and change DLC props and clothes

## Open
- The default key is "K" and can be changed in the client.js at the buttom

## Add DLC Clothes
1. First of all you need a AltV resource of your clothes pack
2. Start the clothes pack in a resource
3. Add for each cloth in the Pack an entery in the ``data.js`` like the following. Replace the DLC with your hash of your DLC, the drawble with the drawble of your cloth and maxTextures with the maximum of textures this cloth got.
```js
{
    dlc: 0,
    drawable: 0,
    maxTextures: 0,
},
```

## Get your DLC hash
To get your DLC hash just use [Joaat](https://docs.altv.mp/gta/articles/references/joaat.html) and insert your clothes DLC name.
If you don't know your DLC name you can take a look in your ``.meta`` files of the clothes pack at ``<dlcName>``. 

Like in my Meta it's ``mp_m_eup`` and ``mp_f_eup``

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ShopPedApparel>
	<pedName>mp_m_freemode_01</pedName>
	<dlcName>mp_m_eup</dlcName>
	<fullDlcName>mp_m_freemode_01_mp_m_eup</fullDlcName>
	<eCharacter>SCR_CHAR_MULTIPLAYER</eCharacter>
	<creatureMetaData>MP_CreatureMetadata_eup</creatureMetaData>
	<pedOutfits>
	</pedOutfits>
	<pedComponents>
	</pedComponents>
	<pedProps>
	</pedProps>
</ShopPedApparel>
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ShopPedApparel>
	<pedName>mp_f_freemode_01</pedName>
	<dlcName>mp_f_eup</dlcName>
	<fullDlcName>mp_f_freemode_01_mp_f_eup</fullDlcName>
	<eCharacter>SCR_CHAR_MULTIPLAYER_F</eCharacter>
	<creatureMetaData>MP_CreatureMetadata_eup</creatureMetaData>
	<pedOutfits>
	</pedOutfits>
	<pedComponents>
	</pedComponents>
	<pedProps>
	</pedProps>
</ShopPedApparel>
```
## Kontakt
- [Discord](https://discordapp.com/users/396472444388376577)

- [GitHub](https://github.com/ExXTreMe315)
- [GitHub Issues](https://github.com/ExXTreMe31)

## Credits

- NativeUI: [DurtyFree](https://github.com/DurtyFree/alt-V-NativeUI) / [datWeazel](https://github.com/datWeazel/alt-V-NativeUI)