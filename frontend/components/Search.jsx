import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { fetchDataFromApi } from '@/utils/api';

const Search = ({ products }) => {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState('');
    const handleFilter = (e) => {
        const search = e.target.value;
        setWordEntered(search);
        const newFilter = products.filter((value) => {
            return value.title.toLowerCase().includes(search.toLowerCase());
        });
        search === '' ? setFilteredData('') : setFilteredData(newFilter);
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered('');
    };
    return (
        <div>
            {/* <input
                type='text'
                className='py-1 rounded-lg border bg-white  text-lg p-[15px] h-7 w-72'
                placeholder='Search Products... '
                onChange={handleFilter}
                value={wordEntered}
            />
            <div className='inline -ml-7  '>
                {filteredData.length === 0 ? (
                    <BsSearch />
                ) : (
                    <CloseIcon
                        className='cursor-pointer'
                        onClick={clearInput}
                    />
                )}
            </div> */}
            {/* <BsSearch className='inline -ml-7' /> */}
            {products?.data?.map((product) => (
                // <ProductCard key={product?.id} data={product} />

                <p>{product.name}</p>
            ))}
        </div>
    );
};

export default Search;

export async function getStaticProps() {
    const products = await fetchDataFromApi('/api/products?populate=*');

    return {
        props: { products },
    };
}
