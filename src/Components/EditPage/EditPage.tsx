import { useCallback, useEffect, useState } from 'react';
import { IPageForm } from '../../types';
import axiosApi from '../../axiosApi.ts';
import AxiosApi from '../../axiosApi.ts';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader.tsx';

const initialForm = {
  title: '',
  content: '',
};


const EditPage = () => {
  const [form, setForm] = useState<IPageForm>({...initialForm});
  const [selectedPage, setSelectedPage] = useState('');
  const [pages, setPages] = useState<{id: string; title: string}[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const onChangeField = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setForm(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await axiosApi.put(`pages/${selectedPage}.json`, {...form});
    navigate(`/pages/${selectedPage}`);
  };

  const onSelectPage = async(e: React.ChangeEvent<HTMLSelectElement>) => {
    const pageId = e.target.value;
    setSelectedPage(pageId);

    if (pageId) {
    try {
      setLoading(true);
      const response = await axiosApi(`pages/${pageId}.json`);
      if (response.data) {
        setForm({
          title: response.data.title,
          content: response.data.content,
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
    } else {
      setForm({...initialForm});
    }
  };

  const fetchPages = useCallback(async () => {
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
    void fetchPages();
  },[fetchPages]);

  if (loading) {
    return <Loader/>;
  }

  return (
    <form onSubmit={onSubmitForm}>
      <h3 className="fs-3 fw-semibold mb-4">Edit the page</h3>

      <select className="form-select mb-3 " aria-label="select page" onChange={onSelectPage}>
        <option selected>Select a page</option>
        {pages.map((page) => (
          <option key={page.id} value={page.id}>{page.title}</option>
        ))}
      </select>

      <div className="form-group mb-2">
        <label htmlFor="name">Title:</label>
        <input
          type="text"
          id="Title"
          name="title"
          required
          className="form-control"
          value={form.title}
          onChange={onChangeField}
        />
      </div>

      <div className="form-group mb-2">
        <label htmlFor="name">Content:</label>
        <input
          type="text"
          id="Content"
          name="content"
          required
          className="form-control"
          value={form.content}
          onChange={onChangeField}
        />
      </div>

      <button className="btn btn-outline-success">Save</button>

    </form>
  );
};

export default EditPage;