export interface NoteItem {
  id: string;
  UUID: string;
  title: string;
  modifiedAt?: Date;
  folder: string;
  snippet: string;
  account: string;
  noteBody: string;
  tags: string[];
  ocr: string;
  noteBodyZipped: Uint8Array;
}
