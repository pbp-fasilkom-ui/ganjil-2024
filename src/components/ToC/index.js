import React, { useState } from 'react';

const index = () => {
  const initialItems = [
    {
      title: 'Title Here',
      path: '/template',
      subCategories: [
        { title: 'idk 1', path: '/template/subcategory-1' },
        { title: 'Subcategory 2', path: '/template/subcategory-2' },
      ],
    },
    {
      title: 'Chapter 1',
      path: '/chapter-1',
      subCategories: [
        { title: 'Subcategory 1', path: '/chapter-1/subcategory-1' },
        { title: 'what 2', path: '/chapter-1/subcategory-2' },
      ],
    },
    {
      title: 'Chapter 2',
      path: '/chapter-2',
      subCategories: [],
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState(initialItems);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filteredItems = initialItems.filter((item) => {
      const titleMatch = item.title.toLowerCase().includes(value.toLowerCase());
      const subCategoryMatch = item.subCategories.some(
        (subItem) => subItem.title.toLowerCase().includes(value.toLowerCase())
      );
      return titleMatch || subCategoryMatch;
    });

    setItems(filteredItems);
  };

  const handleGoogleSearch = () => {
    if (searchTerm) {
      const searchQuery = encodeURIComponent(searchTerm);
      const searchURL = `https://www.google.com/search?q=${searchQuery}`;
      window.open(searchURL, '_blank');
    }
  };

  return (
    <div className='bg-[#081235] p-12'>
      <h2 className='text-4xl font-bold mb-4 text-white'>Table of Contents</h2>
      <div className='mb-4 my-8'>
        <input
          type='text'
          placeholder='Search...'
          value={searchTerm}
          onChange={handleSearch}
          className='px-4 py-2 text-lg rounded-md border border-blue-500 focus:outline-none focus:ring focus:border-blue-500 w-full'
        />
      </div>
      {items.length > 0 ? (
        <ul className='list-disc list-inside'>
          {items.map((item, index) => (
            <li key={index} className='mb-4'>
              <a
                href={`/doit-revamp/docs/${item.path}`}
                className='text-blue-500 hover:underline text-xl font-semibold'
              >
                {item.title}
              </a>
              {item.subCategories.length > 0 && (
                <ul className='ml-4'>
                  {item.subCategories.map((subItem, subIndex) => (
                    <li key={subIndex} className='mb-2'>
                      <a
                        href={`/doit-revamp/docs/${subItem.path}`}
                        className='text-blue-300 hover:underline text-lg'
                      >
                        {subItem.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <div className='flex flex-col justify-center items-center'>
          <img
            src='https://pbs.twimg.com/media/DHK3g7dVYAAKmGP.jpg'
            alt='No results found'
            className='w-64 h-64 rounded'
          />
          <button
            onClick={handleGoogleSearch}
            className='mt-4 px-4 py-2 text-lg bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none font-semibold'
          >
            Try Searching on Google
          </button>
        </div>
      )}
    </div>
  );
};

export default index;
