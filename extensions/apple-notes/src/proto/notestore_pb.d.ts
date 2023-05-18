// package: 
// file: src/proto/notestore.proto

import * as jspb from "google-protobuf";

export class Color extends jspb.Message {
  hasRed(): boolean;
  clearRed(): void;
  getRed(): number | undefined;
  setRed(value: number): void;

  hasGreen(): boolean;
  clearGreen(): void;
  getGreen(): number | undefined;
  setGreen(value: number): void;

  hasBlue(): boolean;
  clearBlue(): void;
  getBlue(): number | undefined;
  setBlue(value: number): void;

  hasAlpha(): boolean;
  clearAlpha(): void;
  getAlpha(): number | undefined;
  setAlpha(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Color.AsObject;
  static toObject(includeInstance: boolean, msg: Color): Color.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Color, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Color;
  static deserializeBinaryFromReader(message: Color, reader: jspb.BinaryReader): Color;
}

export namespace Color {
  export type AsObject = {
    red?: number,
    green?: number,
    blue?: number,
    alpha?: number,
  }
}

export class AttachmentInfo extends jspb.Message {
  hasAttachmentIdentifier(): boolean;
  clearAttachmentIdentifier(): void;
  getAttachmentIdentifier(): string | undefined;
  setAttachmentIdentifier(value: string): void;

  hasTypeUti(): boolean;
  clearTypeUti(): void;
  getTypeUti(): string | undefined;
  setTypeUti(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttachmentInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AttachmentInfo): AttachmentInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AttachmentInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttachmentInfo;
  static deserializeBinaryFromReader(message: AttachmentInfo, reader: jspb.BinaryReader): AttachmentInfo;
}

export namespace AttachmentInfo {
  export type AsObject = {
    attachmentIdentifier?: string,
    typeUti?: string,
  }
}

export class Font extends jspb.Message {
  hasFontName(): boolean;
  clearFontName(): void;
  getFontName(): string | undefined;
  setFontName(value: string): void;

  hasPointSize(): boolean;
  clearPointSize(): void;
  getPointSize(): number | undefined;
  setPointSize(value: number): void;

  hasFontHints(): boolean;
  clearFontHints(): void;
  getFontHints(): number | undefined;
  setFontHints(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Font.AsObject;
  static toObject(includeInstance: boolean, msg: Font): Font.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Font, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Font;
  static deserializeBinaryFromReader(message: Font, reader: jspb.BinaryReader): Font;
}

export namespace Font {
  export type AsObject = {
    fontName?: string,
    pointSize?: number,
    fontHints?: number,
  }
}

export class ParagraphStyle extends jspb.Message {
  hasStyleType(): boolean;
  clearStyleType(): void;
  getStyleType(): number | undefined;
  setStyleType(value: number): void;

  hasAlignment(): boolean;
  clearAlignment(): void;
  getAlignment(): number | undefined;
  setAlignment(value: number): void;

  hasIndentAmount(): boolean;
  clearIndentAmount(): void;
  getIndentAmount(): number | undefined;
  setIndentAmount(value: number): void;

  hasChecklist(): boolean;
  clearChecklist(): void;
  getChecklist(): Checklist | undefined;
  setChecklist(value?: Checklist): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParagraphStyle.AsObject;
  static toObject(includeInstance: boolean, msg: ParagraphStyle): ParagraphStyle.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ParagraphStyle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParagraphStyle;
  static deserializeBinaryFromReader(message: ParagraphStyle, reader: jspb.BinaryReader): ParagraphStyle;
}

export namespace ParagraphStyle {
  export type AsObject = {
    styleType?: number,
    alignment?: number,
    indentAmount?: number,
    checklist?: Checklist.AsObject,
  }
}

export class Checklist extends jspb.Message {
  hasUuid(): boolean;
  clearUuid(): void;
  getUuid(): Uint8Array | string;
  getUuid_asU8(): Uint8Array;
  getUuid_asB64(): string;
  setUuid(value: Uint8Array | string): void;

  hasDone(): boolean;
  clearDone(): void;
  getDone(): number | undefined;
  setDone(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Checklist.AsObject;
  static toObject(includeInstance: boolean, msg: Checklist): Checklist.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Checklist, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Checklist;
  static deserializeBinaryFromReader(message: Checklist, reader: jspb.BinaryReader): Checklist;
}

export namespace Checklist {
  export type AsObject = {
    uuid: Uint8Array | string,
    done?: number,
  }
}

export class DictionaryElement extends jspb.Message {
  hasKey(): boolean;
  clearKey(): void;
  getKey(): ObjectID;
  setKey(value?: ObjectID): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): ObjectID;
  setValue(value?: ObjectID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DictionaryElement.AsObject;
  static toObject(includeInstance: boolean, msg: DictionaryElement): DictionaryElement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DictionaryElement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DictionaryElement;
  static deserializeBinaryFromReader(message: DictionaryElement, reader: jspb.BinaryReader): DictionaryElement;
}

export namespace DictionaryElement {
  export type AsObject = {
    key: ObjectID.AsObject,
    value: ObjectID.AsObject,
  }
}

export class Dictionary extends jspb.Message {
  clearElementList(): void;
  getElementList(): Array<DictionaryElement>;
  setElementList(value: Array<DictionaryElement>): void;
  addElement(value?: DictionaryElement, index?: number): DictionaryElement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dictionary.AsObject;
  static toObject(includeInstance: boolean, msg: Dictionary): Dictionary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dictionary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dictionary;
  static deserializeBinaryFromReader(message: Dictionary, reader: jspb.BinaryReader): Dictionary;
}

export namespace Dictionary {
  export type AsObject = {
    elementList: Array<DictionaryElement.AsObject>,
  }
}

export class ObjectID extends jspb.Message {
  hasUnsignedIntegerValue(): boolean;
  clearUnsignedIntegerValue(): void;
  getUnsignedIntegerValue(): number | undefined;
  setUnsignedIntegerValue(value: number): void;

  hasStringValue(): boolean;
  clearStringValue(): void;
  getStringValue(): string | undefined;
  setStringValue(value: string): void;

  hasObjectIndex(): boolean;
  clearObjectIndex(): void;
  getObjectIndex(): number | undefined;
  setObjectIndex(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObjectID.AsObject;
  static toObject(includeInstance: boolean, msg: ObjectID): ObjectID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObjectID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObjectID;
  static deserializeBinaryFromReader(message: ObjectID, reader: jspb.BinaryReader): ObjectID;
}

export namespace ObjectID {
  export type AsObject = {
    unsignedIntegerValue?: number,
    stringValue?: string,
    objectIndex?: number,
  }
}

export class RegisterLatest extends jspb.Message {
  hasContents(): boolean;
  clearContents(): void;
  getContents(): ObjectID;
  setContents(value?: ObjectID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterLatest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterLatest): RegisterLatest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterLatest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterLatest;
  static deserializeBinaryFromReader(message: RegisterLatest, reader: jspb.BinaryReader): RegisterLatest;
}

export namespace RegisterLatest {
  export type AsObject = {
    contents: ObjectID.AsObject,
  }
}

export class MapEntry extends jspb.Message {
  hasKey(): boolean;
  clearKey(): void;
  getKey(): number | undefined;
  setKey(value: number): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): ObjectID;
  setValue(value?: ObjectID): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapEntry.AsObject;
  static toObject(includeInstance: boolean, msg: MapEntry): MapEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MapEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapEntry;
  static deserializeBinaryFromReader(message: MapEntry, reader: jspb.BinaryReader): MapEntry;
}

export namespace MapEntry {
  export type AsObject = {
    key?: number,
    value: ObjectID.AsObject,
  }
}

export class AttributeRun extends jspb.Message {
  hasLength(): boolean;
  clearLength(): void;
  getLength(): number | undefined;
  setLength(value: number): void;

  hasParagraphStyle(): boolean;
  clearParagraphStyle(): void;
  getParagraphStyle(): ParagraphStyle | undefined;
  setParagraphStyle(value?: ParagraphStyle): void;

  hasFont(): boolean;
  clearFont(): void;
  getFont(): Font | undefined;
  setFont(value?: Font): void;

  hasFontWeight(): boolean;
  clearFontWeight(): void;
  getFontWeight(): number | undefined;
  setFontWeight(value: number): void;

  hasUnderlined(): boolean;
  clearUnderlined(): void;
  getUnderlined(): number | undefined;
  setUnderlined(value: number): void;

  hasStrikethrough(): boolean;
  clearStrikethrough(): void;
  getStrikethrough(): number | undefined;
  setStrikethrough(value: number): void;

  hasSuperscript(): boolean;
  clearSuperscript(): void;
  getSuperscript(): number | undefined;
  setSuperscript(value: number): void;

  hasLink(): boolean;
  clearLink(): void;
  getLink(): string | undefined;
  setLink(value: string): void;

  hasColor(): boolean;
  clearColor(): void;
  getColor(): Color | undefined;
  setColor(value?: Color): void;

  hasAttachmentInfo(): boolean;
  clearAttachmentInfo(): void;
  getAttachmentInfo(): AttachmentInfo | undefined;
  setAttachmentInfo(value?: AttachmentInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttributeRun.AsObject;
  static toObject(includeInstance: boolean, msg: AttributeRun): AttributeRun.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AttributeRun, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttributeRun;
  static deserializeBinaryFromReader(message: AttributeRun, reader: jspb.BinaryReader): AttributeRun;
}

export namespace AttributeRun {
  export type AsObject = {
    length?: number,
    paragraphStyle?: ParagraphStyle.AsObject,
    font?: Font.AsObject,
    fontWeight?: number,
    underlined?: number,
    strikethrough?: number,
    superscript?: number,
    link?: string,
    color?: Color.AsObject,
    attachmentInfo?: AttachmentInfo.AsObject,
  }
}

export class NoteStoreProto extends jspb.Message {
  hasDocument(): boolean;
  clearDocument(): void;
  getDocument(): Document;
  setDocument(value?: Document): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NoteStoreProto.AsObject;
  static toObject(includeInstance: boolean, msg: NoteStoreProto): NoteStoreProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NoteStoreProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NoteStoreProto;
  static deserializeBinaryFromReader(message: NoteStoreProto, reader: jspb.BinaryReader): NoteStoreProto;
}

export namespace NoteStoreProto {
  export type AsObject = {
    document: Document.AsObject,
  }
}

export class Document extends jspb.Message {
  hasVersion(): boolean;
  clearVersion(): void;
  getVersion(): number | undefined;
  setVersion(value: number): void;

  hasNote(): boolean;
  clearNote(): void;
  getNote(): Note;
  setNote(value?: Note): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Document.AsObject;
  static toObject(includeInstance: boolean, msg: Document): Document.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Document, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Document;
  static deserializeBinaryFromReader(message: Document, reader: jspb.BinaryReader): Document;
}

export namespace Document {
  export type AsObject = {
    version?: number,
    note: Note.AsObject,
  }
}

export class Note extends jspb.Message {
  hasNoteText(): boolean;
  clearNoteText(): void;
  getNoteText(): string | undefined;
  setNoteText(value: string): void;

  clearAttributeRunList(): void;
  getAttributeRunList(): Array<AttributeRun>;
  setAttributeRunList(value: Array<AttributeRun>): void;
  addAttributeRun(value?: AttributeRun, index?: number): AttributeRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Note.AsObject;
  static toObject(includeInstance: boolean, msg: Note): Note.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Note, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Note;
  static deserializeBinaryFromReader(message: Note, reader: jspb.BinaryReader): Note;
}

export namespace Note {
  export type AsObject = {
    noteText?: string,
    attributeRunList: Array<AttributeRun.AsObject>,
  }
}

export class MergableDataProto extends jspb.Message {
  hasMergableDataObject(): boolean;
  clearMergableDataObject(): void;
  getMergableDataObject(): MergableDataObject;
  setMergableDataObject(value?: MergableDataObject): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MergableDataProto.AsObject;
  static toObject(includeInstance: boolean, msg: MergableDataProto): MergableDataProto.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MergableDataProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MergableDataProto;
  static deserializeBinaryFromReader(message: MergableDataProto, reader: jspb.BinaryReader): MergableDataProto;
}

export namespace MergableDataProto {
  export type AsObject = {
    mergableDataObject: MergableDataObject.AsObject,
  }
}

export class MergableDataObject extends jspb.Message {
  hasVersion(): boolean;
  clearVersion(): void;
  getVersion(): number | undefined;
  setVersion(value: number): void;

  hasMergeableDataObjectData(): boolean;
  clearMergeableDataObjectData(): void;
  getMergeableDataObjectData(): MergeableDataObjectData;
  setMergeableDataObjectData(value?: MergeableDataObjectData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MergableDataObject.AsObject;
  static toObject(includeInstance: boolean, msg: MergableDataObject): MergableDataObject.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MergableDataObject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MergableDataObject;
  static deserializeBinaryFromReader(message: MergableDataObject, reader: jspb.BinaryReader): MergableDataObject;
}

export namespace MergableDataObject {
  export type AsObject = {
    version?: number,
    mergeableDataObjectData: MergeableDataObjectData.AsObject,
  }
}

export class MergeableDataObjectData extends jspb.Message {
  clearMergeableDataObjectEntryList(): void;
  getMergeableDataObjectEntryList(): Array<MergeableDataObjectEntry>;
  setMergeableDataObjectEntryList(value: Array<MergeableDataObjectEntry>): void;
  addMergeableDataObjectEntry(value?: MergeableDataObjectEntry, index?: number): MergeableDataObjectEntry;

  clearMergeableDataObjectKeyItemList(): void;
  getMergeableDataObjectKeyItemList(): Array<string>;
  setMergeableDataObjectKeyItemList(value: Array<string>): void;
  addMergeableDataObjectKeyItem(value: string, index?: number): string;

  clearMergeableDataObjectTypeItemList(): void;
  getMergeableDataObjectTypeItemList(): Array<string>;
  setMergeableDataObjectTypeItemList(value: Array<string>): void;
  addMergeableDataObjectTypeItem(value: string, index?: number): string;

  clearMergeableDataObjectUuidItemList(): void;
  getMergeableDataObjectUuidItemList(): Array<Uint8Array | string>;
  getMergeableDataObjectUuidItemList_asU8(): Array<Uint8Array>;
  getMergeableDataObjectUuidItemList_asB64(): Array<string>;
  setMergeableDataObjectUuidItemList(value: Array<Uint8Array | string>): void;
  addMergeableDataObjectUuidItem(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MergeableDataObjectData.AsObject;
  static toObject(includeInstance: boolean, msg: MergeableDataObjectData): MergeableDataObjectData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MergeableDataObjectData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MergeableDataObjectData;
  static deserializeBinaryFromReader(message: MergeableDataObjectData, reader: jspb.BinaryReader): MergeableDataObjectData;
}

export namespace MergeableDataObjectData {
  export type AsObject = {
    mergeableDataObjectEntryList: Array<MergeableDataObjectEntry.AsObject>,
    mergeableDataObjectKeyItemList: Array<string>,
    mergeableDataObjectTypeItemList: Array<string>,
    mergeableDataObjectUuidItemList: Array<Uint8Array | string>,
  }
}

export class MergeableDataObjectEntry extends jspb.Message {
  hasRegisterLatest(): boolean;
  clearRegisterLatest(): void;
  getRegisterLatest(): RegisterLatest;
  setRegisterLatest(value?: RegisterLatest): void;

  hasDictionary(): boolean;
  clearDictionary(): void;
  getDictionary(): Dictionary | undefined;
  setDictionary(value?: Dictionary): void;

  hasNote(): boolean;
  clearNote(): void;
  getNote(): Note | undefined;
  setNote(value?: Note): void;

  hasCustomMap(): boolean;
  clearCustomMap(): void;
  getCustomMap(): MergeableDataObjectMap | undefined;
  setCustomMap(value?: MergeableDataObjectMap): void;

  hasOrderedSet(): boolean;
  clearOrderedSet(): void;
  getOrderedSet(): OrderedSet | undefined;
  setOrderedSet(value?: OrderedSet): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MergeableDataObjectEntry.AsObject;
  static toObject(includeInstance: boolean, msg: MergeableDataObjectEntry): MergeableDataObjectEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MergeableDataObjectEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MergeableDataObjectEntry;
  static deserializeBinaryFromReader(message: MergeableDataObjectEntry, reader: jspb.BinaryReader): MergeableDataObjectEntry;
}

export namespace MergeableDataObjectEntry {
  export type AsObject = {
    registerLatest: RegisterLatest.AsObject,
    dictionary?: Dictionary.AsObject,
    note?: Note.AsObject,
    customMap?: MergeableDataObjectMap.AsObject,
    orderedSet?: OrderedSet.AsObject,
  }
}

export class MergeableDataObjectMap extends jspb.Message {
  hasType(): boolean;
  clearType(): void;
  getType(): number | undefined;
  setType(value: number): void;

  clearMapEntryList(): void;
  getMapEntryList(): Array<MapEntry>;
  setMapEntryList(value: Array<MapEntry>): void;
  addMapEntry(value?: MapEntry, index?: number): MapEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MergeableDataObjectMap.AsObject;
  static toObject(includeInstance: boolean, msg: MergeableDataObjectMap): MergeableDataObjectMap.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MergeableDataObjectMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MergeableDataObjectMap;
  static deserializeBinaryFromReader(message: MergeableDataObjectMap, reader: jspb.BinaryReader): MergeableDataObjectMap;
}

export namespace MergeableDataObjectMap {
  export type AsObject = {
    type?: number,
    mapEntryList: Array<MapEntry.AsObject>,
  }
}

export class OrderedSet extends jspb.Message {
  hasOrdering(): boolean;
  clearOrdering(): void;
  getOrdering(): OrderedSetOrdering;
  setOrdering(value?: OrderedSetOrdering): void;

  hasElements(): boolean;
  clearElements(): void;
  getElements(): Dictionary;
  setElements(value?: Dictionary): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderedSet.AsObject;
  static toObject(includeInstance: boolean, msg: OrderedSet): OrderedSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderedSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderedSet;
  static deserializeBinaryFromReader(message: OrderedSet, reader: jspb.BinaryReader): OrderedSet;
}

export namespace OrderedSet {
  export type AsObject = {
    ordering: OrderedSetOrdering.AsObject,
    elements: Dictionary.AsObject,
  }
}

export class OrderedSetOrdering extends jspb.Message {
  hasArray(): boolean;
  clearArray(): void;
  getArray(): OrderedSetOrderingArray;
  setArray(value?: OrderedSetOrderingArray): void;

  hasContents(): boolean;
  clearContents(): void;
  getContents(): Dictionary;
  setContents(value?: Dictionary): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderedSetOrdering.AsObject;
  static toObject(includeInstance: boolean, msg: OrderedSetOrdering): OrderedSetOrdering.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderedSetOrdering, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderedSetOrdering;
  static deserializeBinaryFromReader(message: OrderedSetOrdering, reader: jspb.BinaryReader): OrderedSetOrdering;
}

export namespace OrderedSetOrdering {
  export type AsObject = {
    array: OrderedSetOrderingArray.AsObject,
    contents: Dictionary.AsObject,
  }
}

export class OrderedSetOrderingArray extends jspb.Message {
  hasContents(): boolean;
  clearContents(): void;
  getContents(): Note;
  setContents(value?: Note): void;

  clearAttachmentList(): void;
  getAttachmentList(): Array<OrderedSetOrderingArrayAttachment>;
  setAttachmentList(value: Array<OrderedSetOrderingArrayAttachment>): void;
  addAttachment(value?: OrderedSetOrderingArrayAttachment, index?: number): OrderedSetOrderingArrayAttachment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderedSetOrderingArray.AsObject;
  static toObject(includeInstance: boolean, msg: OrderedSetOrderingArray): OrderedSetOrderingArray.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderedSetOrderingArray, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderedSetOrderingArray;
  static deserializeBinaryFromReader(message: OrderedSetOrderingArray, reader: jspb.BinaryReader): OrderedSetOrderingArray;
}

export namespace OrderedSetOrderingArray {
  export type AsObject = {
    contents: Note.AsObject,
    attachmentList: Array<OrderedSetOrderingArrayAttachment.AsObject>,
  }
}

export class OrderedSetOrderingArrayAttachment extends jspb.Message {
  hasIndex(): boolean;
  clearIndex(): void;
  getIndex(): number | undefined;
  setIndex(value: number): void;

  hasUuid(): boolean;
  clearUuid(): void;
  getUuid(): Uint8Array | string;
  getUuid_asU8(): Uint8Array;
  getUuid_asB64(): string;
  setUuid(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderedSetOrderingArrayAttachment.AsObject;
  static toObject(includeInstance: boolean, msg: OrderedSetOrderingArrayAttachment): OrderedSetOrderingArrayAttachment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderedSetOrderingArrayAttachment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderedSetOrderingArrayAttachment;
  static deserializeBinaryFromReader(message: OrderedSetOrderingArrayAttachment, reader: jspb.BinaryReader): OrderedSetOrderingArrayAttachment;
}

export namespace OrderedSetOrderingArrayAttachment {
  export type AsObject = {
    index?: number,
    uuid: Uint8Array | string,
  }
}

