
import { SearchResult } from "@/app/gallery/page";
import { ReactNode } from "react";

const MAX_COLUMNS = 4;
export function ImageGrid({
  images,
  getImage,
}: {
  images: SearchResult[];
  getImage: (imageData : SearchResult) => ReactNode;
}) {
  function getColumns(colIndex: number) {
    return images.filter((resource, idx) => {
      return idx % MAX_COLUMNS === colIndex;
    });
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map(
        (Column, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            {Column.map(getImage)}
          </div>
        )
      )}
    </div>
  );
}
