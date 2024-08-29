import clsx from 'clsx';
import type { FunctionComponent } from 'react';

interface TextProps {
  html: string;
  className?: string;
}

const Prose: FunctionComponent<TextProps> = ({ html, className }) => {
  return (
    <div
      className={clsx(
        'space-y-4 text-xl font-medium leading-tight text-[#532826] prose-headings:mt-5 prose-headings:font-semibold prose-headings:tracking-wide prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg prose-a:text-[#8dc8e8] prose-a:underline hover:prose-a:text-neutral-300 prose-ol:mt-5 prose-ol:list-decimal prose-ol:pl-6 prose-ul:mt-5 prose-ul:list-disc prose-ul:pl-6 lg:my-auto',
        className
      )}
      dangerouslySetInnerHTML={{ __html: html as string }}
    />
  );
};

export default Prose;
