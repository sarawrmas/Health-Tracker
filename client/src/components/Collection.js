import React from 'react';
import { Container, Row, Col, Collection, CollectionItem, Pagination, Modal, Button } from 'react-materialize';
import { prettifyString } from '../utils/helpers';
import ModalDiv from '../components/Modal';

const ResultCollection = (props) => {
  const { resultList, resultLength, paginate, searchType } = props;
  const pageLength = Math.ceil(resultLength / 20)

  return (
    <div>
      <Container>
        <Row>
          <Col className="s12 m12 l12">
            <Collection
            >
              {resultList.map(results => (
                <CollectionItem key={results.id}>
                  <Modal
                    actions={<Button modal="close" className="waves-effect">Close</Button>}
                    trigger={<a href="#modalId" id="modalId" className="hover-el teal-text">{prettifyString(results.name)}</a>}
                  >
                    <ModalDiv currentResult={results} type={searchType}/>
                  </Modal>
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