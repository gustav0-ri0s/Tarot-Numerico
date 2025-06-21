import { CardData } from './types';

export const CARDS_DATA: CardData[] = [
  {
    id: 1,
    name: 'Tarjeta Blanca',
    value: 1,
    numbers: [
      1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37,
      39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63,
    ],
    bgColor: 'bg-slate-200',
    textColor: 'text-slate-800',
    borderColor: 'border-slate-300',
    selectedRingColor: 'ring-pink-500',
  },
  {
    id: 2,
    name: 'Tarjeta Amarilla',
    value: 2,
    numbers: [
      2, 3, 6, 7, 10, 11, 14, 15, 18, 19, 22, 23, 26, 27, 30, 31, 34, 35, 38,
      39, 42, 43, 46, 47, 50, 51, 54, 55, 58, 59, 62, 63,
    ],
    bgColor: 'bg-yellow-300',
    textColor: 'text-yellow-800',
    borderColor: 'border-yellow-400',
    selectedRingColor: 'ring-indigo-500',
  },
  {
    id: 4,
    name: 'Tarjeta Verde',
    value: 4,
    numbers: [
      4, 5, 6, 7, 12, 13, 14, 15, 20, 21, 22, 23, 28, 29, 30, 31, 36, 37, 38,
      39, 44, 45, 46, 47, 52, 53, 54, 55, 60, 61, 62, 63,
    ],
    bgColor: 'bg-green-400',
    textColor: 'text-green-900',
    borderColor: 'border-green-500',
    selectedRingColor: 'ring-red-500',
  },
  {
    id: 8,
    name: 'Tarjeta Roja',
    value: 8,
    numbers: [
      8, 9, 10, 11, 12, 13, 14, 15, 24, 25, 26, 27, 28, 29, 30, 31, 40, 41,
      42, 43, 44, 45, 46, 47, 56, 57, 58, 59, 60, 61, 62, 63,
    ],
    bgColor: 'bg-red-500',
    textColor: 'text-red-100',
    borderColor: 'border-red-600',
    selectedRingColor: 'ring-yellow-400',
  },
  {
    id: 16,
    name: 'Tarjeta Azul',
    value: 16,
    numbers: [
      16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 48, 49,
      50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63,
    ],
    bgColor: 'bg-blue-500',
    textColor: 'text-blue-100',
    borderColor: 'border-blue-600',
    selectedRingColor: 'ring-green-400',
  },
  {
    id: 32,
    name: 'Tarjeta Marrón',
    value: 32,
    numbers: [
      32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
      50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63,
    ],
    bgColor: 'bg-orange-600', // Using orange for "brown" as per typical color palettes
    textColor: 'text-orange-100',
    borderColor: 'border-orange-700',
    selectedRingColor: 'ring-purple-500',
  },
];
