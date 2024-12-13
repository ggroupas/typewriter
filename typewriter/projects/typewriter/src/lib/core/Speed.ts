export const Speed: { [key: string]: Array<number> } = {
  SLOW: [50, 200, 200, 300, 300, 400, 500],
  MEDIUM: [50, 100, 150, 200, 250, 300, 350],
  FAST: [50, 50, 50, 50, 50, 100, 100, 150, 150],
  SUPER_FAST: [20, 20, 20, 20, 30, 20, 30, 30, 50, 60, 60]
} as const;
export type Speed = typeof Speed[keyof typeof Speed]
