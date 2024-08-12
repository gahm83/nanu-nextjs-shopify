export async function POST(request: Request) {
  try {
    const body = await request.json();

    const res = await fetch('https://judge.me/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body) // Ensure the body is a stringified JSON object
    });

    const contentType = res.headers.get('Content-Type');
    if (contentType && contentType.includes('application/json')) {
      const data = await res.json();
      console.log(data);

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
