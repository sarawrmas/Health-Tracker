import React from 'react';
import { Container, Row, Col, Collection, CollectionItem, Pagination } from 'react-materialize';
import { prettifyString } from '../utils/helpers';

const ResultCollection = (props) => {
  const { resultList, resultLength, searchTerm, paginate } = props;

  const pageLength = Math.ceil(resultLength / 20)

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
              leftBtn=""
              rightBtn=""
              onSelect={paginate}
            >
          </Pagination>
        </Row>
      </Container>
    </div>
  )
}

export default ResultCollection;