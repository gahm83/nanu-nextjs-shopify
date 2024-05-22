// import { NextApiRequest, NextApiResponse } from 'next';
// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { collection } = req.query;

//   console.log(req.method);

//   if (req.method === 'GET') {
//     // Here, you can fetch the products based on the collection parameter
//     // For demonstration purposes, let's just return a sample response
//     return res.status(200).json(products);
//   } else {
//     // Method Not Allowed
//     return res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }

import { getCollectionProducts } from '@/lib/shopify';
export async function POST(request: Request) {
  // const products = getProductsByCollection(collection as string);
  // const products = await getCollectionProducts({ collection: 'tortillas' });
  // const body = await request.json();
  // console.log('----------------------------------->', body)
  const products = await getCollectionProducts({ collection: 'tortillas' });

  return new Response(JSON.stringify({ products }), {
    headers: {
      'Content-Type': 'application/json'
    },
    status: 200
  });
}
