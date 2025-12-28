import EditClient from "./edit-client";

export default async function EditPage({
  searchParams,
}: {
  searchParams: Promise<{
    publicId: string;
  }>;
}) {
  const { publicId } = await searchParams;

  return <EditClient publicId={publicId} />;
}
