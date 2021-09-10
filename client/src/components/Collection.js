import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Collection, CollectionItem, Pagination } from 'react-materialize';
import { prettifyString } from '../utils/helpers';

const ResultCollection = (props) => {
  const { resultList, resultLength, searchTerm, paginate } = props;
  // const [currentPage, setCurrentPage] = useState(1);

  const pageLength = Math.ceil(resultLength / 20)

  // const paginate = (e) => {
  //   setCurrentPage(e)
  // }

  // const [currentPage, setCurrentPage] = useState(1);
  // const [pageLength, setPageLength] = useState(1);

  // const indexOfLastResult = currentPage * 20; // 20 posts per page
  // const indexOfFirstResult = indexOfLastResult - 20; // 20 posts per page
  // const currentResults = resultList.slice(indexOfFirstResult, indexOfLastResult)

  // let pageNumberArray = [];

  // for(let i = 1; i <= pageLength; i++) {
  //   pageNumberArray.push(i)
  // }

  // useEffect(() => {
  //   setPageLength(Math.ceil(resultList.length / 20))
  // })

  // const paginate = (pageNumber) => {
  //   setCurrentPage(pageNumber)
  // }

  return (
    <div>
      <Container>
        <Row>
          <Col className="s12 m12 l12">
            <Collection header={`Showing Results for ${prettifyString(searchTerm)}`}>
              {resultList.map(results => (
                <CollectionItem href={`/${results.id}`} key={results.id}>
                  {prettifyString(results.name)}
                </CollectionItem>
              ))}
              
            </Collection>
          </Col>
          <Pagination
              items={pageLength}
              leftBtn="&larr;"
              rightBtn="&rarr;"
              onSelect={paginate}
            >
          </Pagination>
        </Row>
      </Container>
    </div>
  )
}

export default ResultCollection;