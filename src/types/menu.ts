export type MenuItem = {
  name: string;
  price: number | string | null;
  image?: string;
};

export type MenuGroup = Record<string, MenuItem[]>;

export type MenuSection = MenuItem[] | MenuGroup;

export type MenuData = Record<string, MenuSection>;
