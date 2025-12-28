import cloudinary from "@/lib/cloudinary";
import { AlbumCard } from "./album-card";

export type Folder = { name: string; path: string };

export default async function AlbumsPage() {
  const { folders } = (await cloudinary.api.root_folders()) as {
    folders: Folder[];
  };
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="container mx-auto max-w-7xl">
        <section>
          <div className="flex flex-col gap-8">
            <div className="flex justify-between items-center border-b border-zinc-900 pb-6">
              <h1 className="text-2xl font-light tracking-wide text-white">Albums</h1>
            </div>

            {folders.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {folders.map((folder) => (
                  <AlbumCard
                    key={folder.path}
                    folder={folder}
                  />
                ))}
              </div>
            ) : (
              <div className="text-zinc-500 text-sm">No albums found.</div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
