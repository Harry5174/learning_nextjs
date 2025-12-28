import UploadButton from "./upload-button";
import cloudinary from "@/lib/cloudinary";
import GalleryGrid from "./album-grid";
import { SearchForm } from "./search-form";
import { Tags, Search } from "lucide-react";

export type SearchResult = {
  public_id: string;
  tags: string[];
};

export default async function GalleryPage({
  searchParams,
}: {
  searchParams: Promise<{ search: string }>;
}) {
  const { search } = await searchParams;
  const results = (await cloudinary.search
    .expression(`resource_type:image${search ? ` AND tags=${search}` : ""}`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="container mx-auto max-w-7xl">
        <section>
          <div className="flex flex-col gap-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-zinc-900 pb-6">
              <div>
                <h1 className="text-2xl font-light tracking-wide text-white">
                  Gallery
                </h1>
                <p className="text-zinc-500 text-sm mt-1">
                  {results.resources.length} {results.resources.length === 1 ? 'photo' : 'photos'}
                  {search && ` matching "${search}"`}
                </p>
              </div>
              <UploadButton />
            </div>

            {/* Search */}
            <div className="flex justify-center w-full">
              <SearchForm initialSearch={search} />
            </div>

            {/* Gallery Grid */}
            <div className="mt-4">
              <GalleryGrid images={results.resources} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
