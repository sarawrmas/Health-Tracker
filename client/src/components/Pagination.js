import React, { useState } from 'react';
import { Pagination } from 'react-materialize';

const Pag = (props) => {
  const { resultList } = props
  const [pages, setPages] = useState(1);

  let pageNumbers = [];

  for(let i = 1; i <= Math.ceil(resultList.length / 20); i++) {
    pageNumbers.push(i)
  }

  return (
    <div>
      <Pagination
        items={pages}
      >
        {pageNumbers.map(number => (
          <li key={number}>
            {number}
          </li>
        ))}
      </Pagination>
    </div>
  )
}

export default Pag;