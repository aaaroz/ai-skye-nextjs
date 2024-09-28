/**
 * Remove a path from the given path array
 * @param path The original path array
 * @param pathToRemove The path to remove
 * @returns The new path array
 */
export function removePath(path: string[], pathToRemove: string): string[] {
  return path.filter((pathname) => pathname !== pathToRemove);
}
