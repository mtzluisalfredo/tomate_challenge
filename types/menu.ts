export interface MenuItem {
  label: string;
  id?: string;
  link?: string;
  subItems?: MenuItem[];
  icon?: any;
}
