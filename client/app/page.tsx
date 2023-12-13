'use client';
import { fetchCars } from '@/api/cars';
import { CarCard } from '@/components/CarCard';
import CustomFilter from '@/components/CustomFilter';
import { Hero } from '@/components/Hero';
import { SearchBar } from '@/components/SearchBar';
import { ShowMore } from '@/components/ShowMore';
import { fuels, yearsOfProduction } from '@/constants';
import { FilterProps } from '@/types';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface HomeProps {
  searchParams: FilterProps;
}

export default function Home({ searchParams }: HomeProps) {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [manufacturer, setManuFacturer] = useState('');
  const [model, setModel] = useState('');
  const [fuel, setFuel] = useState('');
  const [year, setYear] = useState(2022);
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    setLoading(true);
    try {
      const result = await fetchCars({
        manufacturer: manufacturer || '',
        year: year || 2022,
        fuel: fuel || '',
        limit: limit || 10,
        model: model || '',
      });

      setAllCars(result);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, [manufacturer, year, model, limit, fuel]);

  return (
    <main className='overflow-hidden'>
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className='home__filters'>
          <SearchBar setManuFacturer={setManuFacturer} setModel={setModel} />

          <div className='home__filter-container'>
            <CustomFilter setFilter={setFuel} title='fuel' options={fuels} />
            <CustomFilter
              setFilter={setYear}
              title='year'
              options={yearsOfProduction}
            />
          </div>
        </div>
        {allCars.length > 0 ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            {loading && (
              <div className='mt-16 w-full flex-center'>
                <Image
                  src='/loader.svg'
                  alt='Loader'
                  width={50}
                  height={50}
                  className='object-contain'
                />
              </div>
            )}
            <ShowMore
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
          </div>
        )}
      </div>
    </main>
  );
}
