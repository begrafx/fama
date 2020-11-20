import { ContentTitle } from 'components/atoms';
import { LanguageContext } from 'contexts';
import React, { useContext } from 'react';
import BlogsProps from 'components/molecules/BlogPost/types';

export default function BlogPost({ data, className }: BlogsProps) {
  const { title, date, url } = data;
  const language = useContext(LanguageContext);
  const formattedDate = new Intl.DateTimeFormat(language.value === 'en' ? 'en-US' : 'id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);

  return (
    <article className={className}>
      <a href={url} className="relative inline-block group">
        <ContentTitle>{title}</ContentTitle>
        <svg className="-left-1 bottom-0.5 -z-10 absolute w-0 h-2 text-indigo-200 transition-all group-hover:w-full-2" fill="currentColor">
          <rect width="100%" height="100%" rx={4} ry={4}></rect>
        </svg>
      </a>
      <span className="block mt-3 text-gray-700">{formattedDate}</span>
    </article>
  );
}
