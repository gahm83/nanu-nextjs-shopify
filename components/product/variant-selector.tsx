'use client';

import clsx from 'clsx';
import { ProductOption, ProductVariant } from 'lib/shopify/types';
import { createUrl } from 'lib/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

type Combination = {
  id: string;
  availableForSale: boolean;
  [key: string]: string | boolean; // ie. { color: 'Red', size: 'Large', ... }
};

export function VariantSelector({
  options,
  variants,
  defaultVariantID
}: {
  options: ProductOption[];
  variants: ProductVariant[];
  defaultVariantID?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hasNoOptionsOrJustOneOption =
    !options.length || (options.length === 1 && options[0]?.values.length === 1);

  useEffect(() => {
    if (!defaultVariantID || searchParams.toString()) return;

    const params = new URLSearchParams();

    const defaultVariant = variants.find((variant) => variant.id === defaultVariantID);
    if (defaultVariant) {
      defaultVariant.selectedOptions.forEach((option) => {
        params.set(option.name.toLowerCase(), option.value);
      });
      router.replace(createUrl(pathname, params), { scroll: false });
    }
  }, [defaultVariantID, pathname, router, searchParams, variants]);

  if (hasNoOptionsOrJustOneOption) {
    return null;
  }

  const combinations: Combination[] = variants.map((variant) => ({
    id: variant.id,
    availableForSale: variant.availableForSale,
    // Adds key / value pairs for each variant (ie. "color": "Black" and "size": 'M").
    ...variant.selectedOptions.reduce(
      (accumulator, option) => ({ ...accumulator, [option.name.toLowerCase()]: option.value }),
      {}
    )
  }));

  return options.map((option) => (
    <dl className="relative w-full pt-8" key={option.id}>
      <dt className="absolute left-0 top-0 font-portland font-bold uppercase text-[#532826] lg:text-lg">
        {option.name}
      </dt>
      <dd className="flex gap-5">
        {option.values.map((value) => {
          const optionNameLowerCase = option.name.toLowerCase();

          // Base option params on current params so we can preserve any other param state in the url.
          const optionSearchParams = new URLSearchParams(searchParams.toString());

          // Update the option params using the current option to reflect how the url *would* change,
          // if the option was clicked.
          optionSearchParams.set(optionNameLowerCase, value);
          const optionUrl = createUrl(pathname, optionSearchParams);

          // In order to determine if an option is available for sale, we need to:
          //
          // 1. Filter out all other param state
          // 2. Filter out invalid options
          // 3. Check if the option combination is available for sale
          //
          // This is the "magic" that will cross check possible variant combinations and preemptively
          // disable combinations that are not available. For example, if the color gray is only available in size medium,
          // then all other sizes should be disabled.
          const filtered = Array.from(optionSearchParams.entries()).filter(([key, value]) =>
            options.find(
              (option) => option.name.toLowerCase() === key && option.values.includes(value)
            )
          );
          const isAvailableForSale = combinations.find((combination) =>
            filtered.every(
              ([key, value]) => combination[key] === value && combination.availableForSale
            )
          );

          const isActive = searchParams.get(optionNameLowerCase) === value;

          return (
            <button
              key={value}
              aria-disabled={!isAvailableForSale}
              disabled={!isAvailableForSale}
              onClick={() => {
                router.replace(optionUrl, { scroll: false });
              }}
              title={`${option.name} ${value}${!isAvailableForSale ? ' (Out of Stock)' : ''}`}
              className={clsx(
                'flex-grow-1 h-[50px] w-full border-2 border-[#532826] bg-[#532826]/0 font-portland text-xl font-bold uppercase text-[#532826]',
                {
                  'cursor-default !bg-[#532826] !text-white': isActive,
                  'transition duration-300 ease-in-out hover:bg-[#532826] hover:text-white':
                    !isActive && isAvailableForSale,
                  'relative z-10 cursor-not-allowed overflow-hidden bg-neutral-100 text-neutral-500 ring-1 ring-neutral-300 before:absolute before:inset-x-0 before:-z-10 before:h-px before:-rotate-45 before:bg-neutral-300 before:transition-transform':
                    !isAvailableForSale
                }
              )}
            >
              {value}
            </button>
          );
        })}
      </dd>
    </dl>
  ));
}
