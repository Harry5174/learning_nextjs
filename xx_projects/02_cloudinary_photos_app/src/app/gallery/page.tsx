import UploadButton from "./upload-button";
import cloudinary from "@/lib/cloudinary";
import GalleryGrid from "./album-grid";
import { SearchForm } from "./search-form";
import { Tags } from "lucide-react";

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
    .expression(`resource_type:image${search ? ` AND tags=${search}`: ""}`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        <section>
          <div className="flex flex-col gap-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Gallery
                </h1>
                <p className="text-slate-600 dark:text-slate-400 mt-2">
                  {results.resources.length} {results.resources.length === 1 ? 'photo' : 'photos'} 
                  {search && ` matching "${search}"`}
                </p>
              </div>
              <UploadButton />
            </div>

            {/* Search */}
            <div className="flex justify-center">
              <SearchForm initialSearch={search} />
            </div>

            {/* Gallery Grid */}
            <div className="mt-8">
              <GalleryGrid images={results.resources} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
