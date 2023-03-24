import Image from 'next/image';
import ItemText from './ItemText';

interface Props {
  result: Result;
}

const Item = ({ result }: Props) => {
  return (
    <>
      <article className='m-4 max-w-lg'>
        <div className='flex flex-row gap-4'>
          <div className='flex flex-col justify-center'>
            {result?.thumbnail?.source ? (
              <Image
                src={result.thumbnail.source}
                alt={result.title}
                width='100'
                height={result.thumbnail.height}
                loading='lazy'
              />
            ) : (
              <div className='text-center text-3xl' style={{ width: '58px' }}>
                ?
              </div>
            )}
          </div>
          <ItemText result={result} />
        </div>
      </article>
    </>
  );
};

export default Item;
