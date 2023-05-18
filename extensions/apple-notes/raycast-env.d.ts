/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Account name - Show the account name next to a note */
  "accounts"?: boolean,
  /** Folder name - Show the folder name next to a note */
  "folders"?: boolean,
  /** Date modified - Show the modification date next to each note */
  "modificationDate"?: boolean,
  /** Open notes separately - Use ⌘+return to open separately if turned off */
  "openSeparately"?: boolean
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `index` command */
  export type Index = ExtensionPreferences & {}
  /** Preferences accessible in the `new` command */
  export type New = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `index` command */
  export type Index = {}
  /** Arguments passed to the `new` command */
  export type New = {}
}
