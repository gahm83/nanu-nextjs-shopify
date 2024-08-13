export async function POST(request: Request) {
  try {
    const body = await request.json();

    const res = await fetch('https://judge.me/api/v1/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    const contentType = res.headers.get('Content-Type');
    if (contentType && contentType.includes('application/json')) {
      const data = await res.json();

      return new Response(JSON.stringify({ data }), {
        headers: {
          'Content-Type': 'application/json'
        },
        status: 200
      });
    } else {
      const text = await res.text();
      console.error('Response is not JSON:', text);

      return new Response(JSON.stringify({ error: 'Invalid response from server' }), {
        headers: {
          'Content-Type': 'application/json'
        },
        status: 500
      });
    }
  } catch (error) {
    console.error('Error:', error);

    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      headers: {
        'Content-Type': 'application/json'
      },
      status: 500
    });
  }
}
