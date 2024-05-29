import { SortFilterItem } from 'lib/constants';
import { Suspense } from 'react';
import { FilterItem } from './item';

export type ListItem = SortFilterItem | PathFilterItem;
export type PathFilterItem = { title: string; path: string };

function FilterItemList({ list }: { list: ListItem[] }) {
  return (
    <>
      {list.map((item: ListItem, i) => (
        <FilterItem key={i} item={item} />
      ))}
    </>
  );
}

export default function FilterList({ list, title }: { list: ListItem[]; title?: string }) {
  return (
    <nav>
      {/* <div className="hidden lg:flex lg:items-center lg:space-x-7"> */}
      <div className="flex items-center justify-between space-x-4 max-lg:mx-auto max-lg:w-11/12 lg:space-x-5">
        <Suspense fallback={null}>
          <FilterItemList list={list} />
        </Suspense>
      </div>
      {/* <ul className="lg:hidden">
        <Suspense fallback={null}>
          <FilterItemDropdown list={list} />
        </Suspense>
      </ul> */}
    </nav>
  );
}
