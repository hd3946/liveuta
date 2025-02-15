import { useHolodexSearchComment } from '@/hooks/api/useHolodex';
import { useSearchParams } from 'next/navigation';
import SetlistCard from '@/components/setlist/SetlistCard';
import setlist from '@/components/setlist/Setlist.module.scss';

const SetlistSection = () => {
  const searchParmas = useSearchParams();
  const query = searchParmas.get('query') || '';
  console.log(query);
  const { setListItems, setListIsLoading, handlePagination, isOverPagination, totalSize } =
    useHolodexSearchComment(query);

  return (
    <section className={setlist['section']}>
      <h2>{`토탈 >>>> ${totalSize} 残響散歌`}</h2>
      <section>
        {setListItems.map((item, index) => (
          <SetlistCard key={`setlist-card-${item.id}-${index}`} item={item} />
        ))}
      </section>
      {setListIsLoading ? <div style={{ color: 'red', fontSize: '3rem' }}>로딩중!!!</div> : null}
      {!isOverPagination ? (
        <button onClick={handlePagination} style={{ color: 'red', fontSize: '1.5rem' }}>
          페이지네이션 트리거
        </button>
      ) : null}
    </section>
  );
};

export default SetlistSection;
