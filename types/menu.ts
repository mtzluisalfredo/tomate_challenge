export interface MenuItem {
  label: string;
  id?: string; // Nuevo campo para el ID único
  subItems?: MenuItem[];
}
