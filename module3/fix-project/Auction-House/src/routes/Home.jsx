import { useEffect, useState } from "react";
import { Layout } from "../layout/layout";
import { Link } from 'react-router-dom';

export function Home() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        "https://v2.api.noroff.dev/auction/listings?limit=20&sortOrder=asc&active=true&sort=created&page=" + page,
      );
      const data = await res.json();
      console.log(data);
      setData(data.data);
    }
    getData();
  }, [
      page,
  ]);

  function nextPage() {
    setPage(page + 1);
  }

  function prevPage() {
    setPage(page - 1);
  }

  return (
    <>
      <Layout>
        <h1 className="text-3xl font-bold">ALL LISTINGS</h1>
        <div className="max-w-7xl flex gap-4 flex-wrap m-auto">
          {data.map((listing) => {
            return (
                <Link key={listing.id} to={'/' + listing.id}>
                  <div className="w-sm h-full flex flex-col p-4 shadow-2xl">
                    <h2>{listing.title}</h2>
                    {listing.media.length ? (
                        <img
                            src={listing.media[0].url}
                            className="h-[260px] max-h-full max-w-full object-cover overflow-auto" alt=''
                        />
                    ) : (
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg" alt='' className='overflow-auto'/>
                    )}
                    <p className='text-ellipsis'>{listing.description}</p>
                  </div>
                </Link>
            );
          })}
        </div>
        <button onClick={prevPage} className='cursor-pointer border border-amber-300 p-2 mt-2'>
          Previous page
        </button>
        <button onClick={nextPage} className='cursor-pointer border border-amber-300 p-2 mt-2'>
          Next page
        </button>
      </Layout>
    </>
  );
}