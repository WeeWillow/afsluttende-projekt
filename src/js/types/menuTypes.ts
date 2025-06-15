
// interface instead of type, used like a blueprint, tells typescript what "shape" and object should have 

export interface Item {
  heading: string;
  subheading?: string;
  icon?: any;
  iconSize?: number;
  href?: string;
}

export interface Block {
  heading: string;
  microcopy?: string;
  items: Item[];
}

export interface DropdownContent {
  blocks: Block[];
}