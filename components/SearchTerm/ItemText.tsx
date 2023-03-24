import Link from 'next/link';

interface Props {
  result: Result;
}

const ItemText = ({ result }: Props) => {
  return (
    <div className='flex flex-col justify-center'>
      <h2>
        <Link
          href={`https://en.wikipedia.org/?curid=${result.pageid}`}
          target='_blank'
          className='text-xl font-bold underline'
        >
          {result.title}
        </Link>
      </h2>
      <p>{result.extract}</p>
    </div>
  );
};

export default ItemText;
