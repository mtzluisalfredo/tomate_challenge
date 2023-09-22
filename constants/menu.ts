import { MenuItem } from "@/types/menu";

export const menuData: MenuItem[] = [
  { label: "Dashboard" },
  {
    label: "Catálogo",
    subItems: [
      { label: "Categorías" },
      { label: "Productos y precios" },
      { label: "Complementos" },
      { label: "Modificadores" },
      { label: "Menús y recetas" },
    ],
  },
  {
    label: "Ventas",
    subItems: [
      { label: "Por venta" },
      { label: "Por nota" },
      { label: "Por producto" },
      { label: "Pagos" },
      { label: "Cancelaciones" },
      { label: "Motivos de cancelación" },
    ],
  },
  { label: 'Tipo de ventas' },
  {
    label: 'Caja',
    subItems: [
      { label: "General" },
      { label: "Apertura" },
      { label: "Entrada y salida de efectivo" },
      { label: "Cierre" },
    ],
  },
  { label: 'Reservaciones' },
  {
    label: 'Tableros',
    subItems: [
      { label: "General" },
      { label: "Desactivar productos" },
    ],
  },
  {
    label: 'Usuarios',
    subItems: [
      { label: "Perfiles" },
      { label: "Empleados" },
      { label: "Autorizaciones" },
      { label: "Asistencias" },
    ],
  },
  {
    label: 'Mesas',
    subItems: [
      { label: "Zonas" },
      { label: "Asignación" },
      { label: "Creación" },
    ],
  },
  { label: 'Reportes' },
];
