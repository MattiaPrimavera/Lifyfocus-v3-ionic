export interface MenuEntry {
  color: string;
  label: string;
  icon: string;
}

export interface Menu {
  right: MenuEntry[];
  left: MenuEntry[];
}
