# Alt:V Native-UI Cloth Menu

This resource contains a cloth menu made with NativeUI.
Currently, this menu supports only BaseGame cloth.

## Features

- change clothes & porps

## Planed features
- reimplement DLC support

## Nice to know
- Textures currently always go up to 26, as 26 is the highest possible texture. A recalculation and reassignment of the maximum ID is possible but destroys the UI when setting and is therefore not done.

## Usage
- The default key is "K" and can be changed in the client.js at the bottom.

## Add DLC Clothes
1. First of all you need a AltV resource of your cloth pack
2. Start the clothes pack in a resource
3. Add your DLC name to the `config.js` in the `dlcList` Array like this. 
```js
export const config = {
   dlcList: [
      'baseGame',
      'eup'
   ]
}
```
**IMPORTANT**
- keep `baseGame` in the Array, otherwise you cant switch back to them.
- add the dlc name without the `mp_m_`/`mp_f_` prefix

## Get your DLC name
If you don't know your DLC name you can take a look in your `.meta` files of the clothes pack at `<dlcName>`.

As an example I am using the EUP pack from my [eup-altv](https://github.com/ExXTreMe315/eup-altv) repository.

In my Meta it's `mp_m_eup` and `mp_f_eup` so the `eup` is the name you need to add to the `config.js`

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

## Contact
- [Discord](https://discordapp.com/users/396472444388376577)
- [E-Mail](mailto:exxtreme@richman-gaming.de?subject=AltV%20Cloth%20a%20Menu)

- [GitHub](https://github.com/ExXTreMe315)
- [GitHub Issues](https://github.com/ExXTreMe315/clothes-menu/issues)

## Installation
1. download the files from this repository or clone the repository:
   ```bash
   git clone https://github.com/ExXTreMe315/clothes-menu.git
   ```

2. copy the folder to your AltV server directory under `resources/`.
   Make sure that the resource is added to your `server.toml`:

    ```text
      resources: [
         ...
         clothes-menu,
         ...
      ]
    ```

4. start your server and check that the resource is loaded correctly.

## License
This project is licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).

This means:

- You may use, modify, and distribute the code, even for commercial purposes, under the terms of the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).
- Changes to the code must be documented.
- You must provide a copy of the license when distributing the code.
- **Note:** This project is based on the [altv](https://altv.mp/de/) [nativeUI](https://github.com/DurtyFree/alt-V-NativeUI) by [DurtyFree](https://github.com/DurtyFree). Please refer to their terms and conditions for further details.

## Credits

- NativeUI: [DurtyFree](https://github.com/DurtyFree/alt-V-NativeUI) / [datWeazel](https://github.com/datWeazel/alt-V-NativeUI)


## Disclaimer

This project is in no way endorsed, sponsored, or authorized by Rockstar Games, Take-Two Interactive, or any other affiliated company. All content is the intellectual property of their respective owners.

---
If you want customizations or enhancements, let me know! 😊