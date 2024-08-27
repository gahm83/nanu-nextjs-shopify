import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { productId: string } }) {
  const { productId } = params;

  if (!productId) {
    return NextResponse.json({ message: 'Product ID is required' }, { status: 400 });
  }

  try {
    const productIdUrl = new URL('https://judge.me/api/v1/products/-1');
    productIdUrl.searchParams.append('api_token', process.env.JUDGE_ME_API_TOKEN || '');
    productIdUrl.searchParams.append('shop_domain', process.env.SHOPIFY_STORE_DOMAIN || '');
    productIdUrl.searchParams.append('external_id', productId);

    const internalIdResponse = await fetch(productIdUrl.toString());
    console.log(internalIdResponse);

    if (!internalIdResponse.ok) {
      const errorData = await internalIdResponse.json();
      return NextResponse.json(
        { message: 'Failed to fetch internal ID', error: errorData },
        { status: internalIdResponse.status }
      );
    }

    const internalIdData = await internalIdResponse.json();
    const internalId = internalIdData.product.id;

    if (!internalId) {
      return NextResponse.json({ message: 'Internal ID not found' }, { status: 404 });
    }

    const reviewsUrl = new URL('https://judge.me/api/v1/reviews');
    reviewsUrl.searchParams.append('api_token', process.env.JUDGE_ME_API_TOKEN || '');
    reviewsUrl.searchParams.append('shop_domain', process.env.SHOPIFY_STORE_DOMAIN || '');
    reviewsUrl.searchParams.append('product_id', internalId);

    const reviewsResponse = await fetch(reviewsUrl.toString());

    if (!reviewsResponse.ok) {
      const errorData = await reviewsResponse.json();
      return NextResponse.json(
        { message: 'Failed to fetch reviews', error: errorData },
        { status: reviewsResponse.status }
      );
    }

    const data = await reviewsResponse.json();
    return NextResponse.json({ reviews: data.reviews }, { status: 200 });
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
