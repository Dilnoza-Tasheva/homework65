import { useCallback, useEffect, useState, } from 'react';
import AxiosApi from '../../axiosApi.ts';
import { IPage } from '../../types';
import Loader from '../../Components/Loader/Loader.tsx';
import DisplayPage from '../../Components/DisplayPage/DisplayPage.tsx';
import { useParams } from 'react-router-dom';


const Pages = () => {
  const [pages, setPages] = useState<IPage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const {pageName} = useParams<{pageName: string}>();

  const fetchData = useCallback(async () => {
    try{
      setLoading(true);
      const response = await AxiosApi('pages.json');

      if (response.data) {
        const pagesFromApi = Object.keys(response.data).map(pageKey => {
          return {
            ...response.data[pageKey],
            id: pageKey,
          };
        });
        setPages(pagesFromApi);
      }
    } catch (error) {
      console.error (error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchData();
  },[fetchData]);

  const currentPage = pages.find((page) => page.id === pageName);
  if (!currentPage) return <p>Page not found</p>;


  return (
    <>
      {loading ? <Loader/> :
        <>
          <DisplayPage title={currentPage.title} content={currentPage.content}/>
        </>
      }
    </>
  );
};

export default Pages;