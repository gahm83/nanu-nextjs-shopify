import { Menu } from '@/lib/shopify/types';
import React from 'react';
import Facebook from '../svg/facebook';
import Instagram from '../svg/instagram';
import Spotify from '../svg/spotify';
import Tiktok from '../svg/tiktok';

type SocialIconComponent = React.FC;

type SocialIconsMap = {
  Instagram: SocialIconComponent;
  Tiktok: SocialIconComponent;
  Facebook: SocialIconComponent;
  Spotify: SocialIconComponent;
};

export default async function SocialMenu({ menu, classname }: { menu: Menu[]; classname: string }) {
  const SocialIcon: SocialIconsMap = {
    Instagram,
    Tiktok,
    Facebook,
    Spotify
  };

  return (
    <>
      {menu.length ? (
        <nav className={`flex items-center space-x-4 ${classname}`}>
          {menu.map((item: Menu) => {
            if (item.title !== 'Email') {
              const IconComponent = SocialIcon[item.title as keyof SocialIconsMap];
              return (
                <a href={item.path} rel="noreferrer" target="_blank" key={item.title}>
                  {IconComponent ? <IconComponent /> : null}
                </a>
              );
            }
          })}
        </nav>
      ) : null}
    </>
  );
}
