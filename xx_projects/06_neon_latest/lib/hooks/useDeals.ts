'use client';
import useSWRInfinite from 'swr/infinite';

const fetcher = (url: string) => fetch(url).then(r => r.json());
const PAGE = 18;

export interface DealTile {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  height: string;
  type: string;
  badge?: string;
  client?: string;
  dealDate?: string;
  leftColumn?: string;
  rightColumn?: string;
  team?: Array<{
    id: string;
    title: string;
    slug: string;
    position?: string;
    headshot?: {
      sourceUrl: string;
      altText?: string;
    };
  }>;
}

export function useDeals() {
  const { data, setSize, isLoading, error } = useSWRInfinite(
    (index, prev) => {
      if (prev && !prev.newsItems?.pageInfo?.hasNextPage) return null;

      const cursor =
        index && prev?.newsItems?.pageInfo?.endCursor
          ? `&cursor=${encodeURIComponent(prev.newsItems.pageInfo.endCursor)}`
          : '';

      return `/api/deals?limit=${PAGE}${cursor}`;
    },
    fetcher,
    { revalidateFirstPage: false }
  );

  const pages = data ?? [];
  const deals = pages.flatMap((p: any) => p.newsItems?.nodes ?? []);
  const tiles: DealTile[] = deals.map((deal: any) => ({
    id: deal.slug,
    slug: deal.slug,
    title: deal.dealFields?.heroTitle || 'Deal',
    subtitle: deal.dealFields?.client || '',
    description: deal.dealFields?.leftColumn ? 
      deal.dealFields.leftColumn.replace(/<[^>]*>/g, '').substring(0, 100) + '...' : '',
    image: deal.featuredImage?.node?.sourceUrl || '/placeholder.svg',
    height: '220px',
    type: 'DEAL',
    badge: 'DEAL',
    client: deal.dealFields?.client,
    dealDate: deal.dealFields?.dealDate,
    leftColumn: deal.dealFields?.leftColumn,
    rightColumn: deal.dealFields?.rightColumn,
    team: deal.dealFields?.team?.edges?.map((edge: any) => ({
      id: edge.node.id,
      title: edge.node.title,
      slug: edge.node.slug,
      position: edge.node.peopleFields?.position,
      headshot: edge.node.peopleFields?.headshot?.node
    })) || []
  }));
  
  const hasMore = pages.at(-1)?.newsItems?.pageInfo?.hasNextPage ?? false;

  return { tiles, hasMore, setSize, isLoading, error };
}

