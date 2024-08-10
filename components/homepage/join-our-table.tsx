'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

type InstagramPost = {
  id: string;
  caption: string;
  media_url: string;
  media_type: string;
  timestamp: string;
  permalink: string;
};

type InstagramPaging = {
  cursors: {
    before: string;
    after: string;
  };
};

type InstagramFeed = {
  data: InstagramPost[];
  paging?: InstagramPaging;
};

function JoinOurTable() {
  const [instagramFeed, setInstagramFeed] = useState<InstagramFeed | null>(null);
  const [after, setAfter] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchFeed = async (after: string | null = null) => {
    try {
      let url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,timestamp,permalink&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN}`;
      if (after) {
        url += `&after=${after}`;
      }
      const data = await fetch(url);

      if (!data.ok) {
        throw new Error('Failed to fetch Instagram feed');
      }

      const feed = await data.json();
      console.log(feed);

      setInstagramFeed((prevFeed) => {
        if (prevFeed && prevFeed.data.length > 0) {
          return {
            ...feed,
            data: [...prevFeed.data, ...feed.data]
          };
        }
        return feed;
      });
      setAfter(feed.paging?.cursors.after);
    } catch (err: any) {
      console.error('Error fetching Instagram feed:', err.message);
      setError(err.message);
    }
  };

  const loadMore = () => {
    fetchFeed(after);
  };

  // Fetch the initial feed
  useEffect(() => {
    fetchFeed();
  }, []);

  return (
    <section>
      <div className="relative overflow-x-hidden py-16">
        <div className="ml-[calc(100%-91.666667%)] space-y-10">
          <h2 className="font-portland text-3xl font-black uppercase text-[#532826] lg:text-4xl">
            Join our table
          </h2>
          <Swiper spaceBetween={24} slidesPerView={6.5}>
            {instagramFeed &&
              instagramFeed.data.map((post: InstagramPost) => (
                <SwiperSlide key={post.id} className="group relative h-[300px] w-full">
                  <Link
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative"
                  >
                    {post.media_type === 'VIDEO' ? (
                      <video
                        src={post.media_url}
                        controls={false}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <Image
                        src={post.media_url}
                        alt={post.caption ?? ''}
                        className="h-full w-full object-cover"
                        width={300}
                        height={300}
                      />
                    )}
                    {post.caption && (
                      <div className="absolute inset-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 p-4 opacity-0 transition duration-300 group-hover:opacity-100">
                        <p className="truncate text-center text-xs text-white">{post.caption}</p>
                      </div>
                    )}
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default JoinOurTable;
