import { Suspense } from 'react';

import { getCollections } from 'lib/shopify';
import FilterList from './filter';

async function CollectionList() {
  const collections = await getCollections();
  return <FilterList list={collections} title="Collections" />;
}

const skeleton = 'mb-3 h-4 w-5/6 animate-pulse rounded';
const activeAndTitles = 'bg-neutral-800';
const items = 'bg-neutral-400';

export default function Collections() {
  return (
    <Suspense fallback={null}>
      <CollectionList />
    </Suspense>
  );
}
