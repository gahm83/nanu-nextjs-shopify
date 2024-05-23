import { getCollectionProducts } from '@/lib/shopify';
export async function POST(request: Request) {
  const body = await request.json();
  const { collection } = body;
  const products = await getCollectionProducts({ collection: collection });
  return new Response(JSON.stringify({ products }), {
    headers: {
      'Content-Type': 'application/json'
    },
    status: 200
  });
}
