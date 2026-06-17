import { readdir } from "node:fs/promises";
import path from "node:path";

const GALLERY_PUBLIC_PATH = "/gallery";
const GALLERY_ROOT = path.join(process.cwd(), "public", "gallery");
const SUPPORTED_IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

export type GalleryImage = {
  id: string;
  src: string;
  filename: string;
  relativePath: string;
  category: string | null;
};

async function readGalleryDirectory(directory: string): Promise<string[]> {
  let entries;

  try {
    entries = await readdir(directory, { withFileTypes: true });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }

    throw error;
  }

  const discovered = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(directory, entry.name);

      if (entry.isDirectory()) {
        return readGalleryDirectory(entryPath);
      }

      if (!entry.isFile()) {
        return [];
      }

      const extension = path.extname(entry.name).toLowerCase();
      return SUPPORTED_IMAGE_EXTENSIONS.has(extension) ? [entryPath] : [];
    }),
  );

  return discovered.flat();
}

function toPublicImagePath(relativePath: string) {
  return `${GALLERY_PUBLIC_PATH}/${relativePath.split("/").map(encodeURIComponent).join("/")}`;
}

export async function getGalleryImages(): Promise<GalleryImage[]> {
  const files = await readGalleryDirectory(GALLERY_ROOT);

  return files
    .map((filePath) => {
      const relativePath = path.relative(GALLERY_ROOT, filePath).split(path.sep).join("/");
      const segments = relativePath.split("/");

      return {
        id: relativePath,
        src: toPublicImagePath(relativePath),
        filename: segments[segments.length - 1],
        relativePath,
        category: segments.length > 1 ? segments[0] : null,
      };
    })
    .sort((a, b) => a.relativePath.localeCompare(b.relativePath, undefined, { sensitivity: "base" }));
}
