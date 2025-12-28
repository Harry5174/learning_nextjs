
import { SearchResult } from "@/app/gallery/page";
import { ReactNode, useEffect, useState } from "react";

const MAX_COLUMNS = 4;
export function ImageGrid({
  images,
  getImage,
}: {
  images: SearchResult[];
  getImage: (imageData: SearchResult) => ReactNode;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, [images]);

  function getColumns(colIndex: number) {
    return images.filter((resource, idx) => {
      return idx % MAX_COLUMNS === colIndex;
    });
  }

  if (images.length === 0) {
    return (
      <div className="text-center py-16 border border-zinc-900 rounded-lg bg-zinc-950/50">
        <div className="p-4 bg-zinc-900 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <svg className="h-8 w-8 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-white mb-2">No images found</h3>
        <p className="text-zinc-500">Try uploading some photos or adjusting your search.</p>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
      {[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map(
        (Column, idx) => (
          <div key={idx} className="flex flex-col gap-6">
            {Column.map((image, imageIdx) => (
              <div
                key={image.public_id}
                className="transform transition-all duration-300 hover:z-10"
                style={{
                  animationDelay: `${(idx * 100) + (imageIdx * 50)}ms`
                }}
              >
                {getImage(image)}
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
}
