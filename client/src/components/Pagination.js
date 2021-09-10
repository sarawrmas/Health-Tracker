import React, { useState } from 'react';
import { Pagination } from 'react-materialize';

const Pag = (props) => {
  const { resultList } = props
  const [pages, setPages] = useState(1);

  let pageNumbers = [];

  // useEffect(() => {
  //   setPages(Math.ceil(resultList.length / 20))
  // })

  for(let i = 1; i <= Math.ceil(resultList.length / 20); i++) {
    pageNumbers.push(i)
  }

  return (
    <div>
      <Pagination
        items={pages}
        leftBtn="&larr;"
        rightBtn="&rarr;"
        // onSelect={testFunction}
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