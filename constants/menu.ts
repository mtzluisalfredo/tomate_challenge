import images from "@/assets";
import { MenuItem } from "@/types/menu";

export const menuData: MenuItem[] = [
  { label: "Dashboard", icon: images.dashboard },
  {
    label: "Catálogo",
    icon: images.catalago,
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
    icon: images.ventas,
    subItems: [
      { label: "Por venta" },
      { label: "Por nota" },
      { label: "Por producto" },
      { label: "Pagos" },
      { label: "Cancelaciones" },
      { label: "Motivos de cancelación" },
    ],
  },
  { label: 'Tipo de ventas', icon: images.tipos_de_ventas },
  {
    label: 'Caja',
    icon: images.caja,
    subItems: [
      { label: "General" },
      { label: "Apertura" },
      { label: "Entrada y salida de efectivo" },
      { label: "Cierre" },
    ],
  },
  { label: 'Reservaciones', icon: images.reservaciones },
  {
    label: 'Tableros',
    icon: images.tablero,
    subItems: [
      { label: "General" },
      { label: "Desactivar productos" },
    ],
  },
  {
    label: 'Usuarios',
    icon: images.usuarios,
    subItems: [
      { label: "Perfiles" },
      { label: "Empleados" },
      { label: "Autorizaciones" },
      { label: "Asistencias" },
    ],
  },
  {
    label: 'Mesas',
    icon: images.mesas,
    subItems: [
      { label: "Zonas" },
      { label: "Asignación" },
      { label: "Creación" },
    ],
  },
  { label: 'Reportes', icon: images.reportes, },
];

export const menuConfig: MenuItem[] = [
  { label: "Configuración", icon: images.configuracion },
  { label: "Ayuda", icon: images.ayuda },
];
