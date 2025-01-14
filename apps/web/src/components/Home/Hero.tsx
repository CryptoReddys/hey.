import type { FC } from 'react';

import { APP_NAME } from '@hey/data/constants';

const Hero: FC = () => {
  return (
    <div className="divider py-12">
      <div className="mx-auto flex w-full max-w-screen-xl items-center px-5 py-8 sm:py-12">
        <img
          alt="Hey Logo"
          className="mr-5 h-24 w-24 sm:mr-8 sm:h-36 sm:w-36"
          src="/logo.png"
        />
        <div className="flex-1 space-y-1 tracking-tight sm:max-w-lg">
          <div className="text-2xl font-extrabold sm:text-5xl">
            Welcome to {APP_NAME},
          </div>
          <div className="ld-text-gray-500 text-2xl font-extrabold sm:text-5xl">
            a social network built on Lens Protocol
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
