import Item from '@/components/SearchTerm/Item';

import getWikiResults from '@/lib/getWikiResults';

interface Props {
  params: {
    searchTerm: string;
  };
}

export const generateMetadata = async ({ params: { searchTerm } }: Props) => {
  const data: SearchResult = await getWikiResults(searchTerm);
  const displayTerm = searchTerm.replaceAll('%20', ' ');

  if (!data?.query?.pages) {
    return {
      title: `${displayTerm} Not Found`,
    };
  }

  return {
    title: `Search Results for ${displayTerm}`,
    description: `Search Results for ${displayTerm}`,
  };
};

const SearchResults = async ({ params: { searchTerm } }: Props) => {
  const data: SearchResult = await getWikiResults(searchTerm);
  const results = data?.query?.pages;

  return (
    <main className='bg-slate-200 mx-auto max-w-lg py-1 min-h-screen'>
      {results ? (
        // Results come as an object, so we need to convert it to an array
        Object.values(results).map((result) => {
          return <Item key={result.pageid} result={result} />;
        })
      ) : (
        <h2 className='p-2 text-xl text-center'>{`${searchTerm} Not Found`}</h2>
      )}
    </main>
  );
};

export default SearchResults;
