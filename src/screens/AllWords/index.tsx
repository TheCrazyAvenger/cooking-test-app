import { useEffect, useState } from 'react';
import './styles.css';
import { PageHeader } from '../../components/common/PageHeader';
import { allWords } from '../../contants/words';
import { CircularProgress } from '@mui/material';
import { WordCard } from '../../components/words/WordCard';

export const AllWords = () => {
  const [words, setWords] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let fetchingStarted = false;

    async function fetchData() {
      if (fetchingStarted === false) {
        const sortedWords = await allWords.sort((a, b) =>
          ('' + a.word).localeCompare(b.word)
        );

        setWords(sortedWords);
        setLoading(false);
      }
    }

    fetchData();
    return () => {
      fetchingStarted = true;
    };
  }, []);

  if (loading) {
    return (
      <div className='loading'>
        <CircularProgress />
      </div>
    );
  }

  const ReanderWords = () => {
    return words.map((item: any) => <WordCard item={item} />);
  };

  return (
    <div>
      <PageHeader title='Слова' />
      <div className='words'>
        <ReanderWords />
      </div>
    </div>
  );
};
