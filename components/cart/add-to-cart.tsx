'use client';

import { PlusIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { addItem } from 'components/cart/actions';
import LoadingDots from 'components/loading-dots';
import { ProductVariant } from 'lib/shopify/types';
import { useSearchParams } from 'next/navigation';
import { useFormState, useFormStatus } from 'react-dom';

function SubmitButton({
  availableForSale,
  selectedVariantId,
  isProduct
}: {
  availableForSale: boolean;
  selectedVariantId: string | undefined;
  isProduct: boolean;
}) {
  const { pending } = useFormStatus();
  const buttonClasses = isProduct
    ? 'bg-[#532826] border-2 border-[#532826] font-portland font-bold text-xl flex-grow-1 uppercase h-[50px] w-full'
    : 'relative bg-add-to-cart bg-[23px auto] flex w-20 h-12 items-center justify-center bg-[#EDD3C5]';

  isProduct;
  const disabledClasses = 'cursor-not-allowed opacity-60 hover:opacity-60';

  if (!availableForSale) {
    return (
      <button aria-disabled className={clsx(buttonClasses, disabledClasses)}>
        Out Of Stock
      </button>
    );
  }

  if (!selectedVariantId) {
    return (
      <button
        aria-label="Please select an option"
        aria-disabled
        className={clsx(buttonClasses, disabledClasses)}
      >
        <div className="absolute left-0 ml-4">
          <PlusIcon className="h-5" />
        </div>
      </button>
    );
  }

  return (
    <button
      onClick={(e: React.FormEvent<HTMLButtonElement>) => {
        if (pending) e.preventDefault();
      }}
      aria-label="Add to cart"
      aria-disabled={pending}
      className={clsx(buttonClasses, {
        'hover:opacity-90': true,
        disabledClasses: pending
      })}
    >
      <div className="absolute left-0 ml-4">
        {pending ? <LoadingDots className="mb-3 bg-white" /> : null}
      </div>
      {isProduct && 'Add to Bag'}
    </button>
  );
}

export function AddToCart({
  variants,
  availableForSale,
  isProduct = false
}: {
  variants: ProductVariant[];
  availableForSale: boolean;
  isProduct?: boolean;
}) {
  const [message, formAction] = useFormState(addItem, null);
  const searchParams = useSearchParams();
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  const variant = variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every(
      (option) => option.value === searchParams.get(option.name.toLowerCase())
    )
  );
  const selectedVariantId = variant?.id || defaultVariantId;
  const actionWithVariant = formAction.bind(null, selectedVariantId);

  return (
    <form action={actionWithVariant} className="flex-grow">
      <SubmitButton
        availableForSale={availableForSale}
        selectedVariantId={selectedVariantId}
        isProduct={isProduct}
      />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
