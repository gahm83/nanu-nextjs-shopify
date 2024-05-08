export default function OpenCart({
  className,
  quantity
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="relative flex h-[40px] w-[70px] items-center bg-cart-qty bg-center bg-no-repeat">
      {/* <ShoppingCartIcon
        className={clsx('h-4 transition-all ease-in-out hover:scale-110 ', className)}
      /> */}

      {quantity ? (
        <div className="flex h-[30px] w-[30px] items-center justify-center">{quantity}</div>
      ) : null}
    </div>
  );
}
