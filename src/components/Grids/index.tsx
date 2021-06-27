import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Row, Col} from 'react-bootstrap';
import {fetchProductsInit} from '../../store/Products/fetchProductsActionCreator';
import Card from '../Cards';
import './styles.scss';


interface CardItem {
  id: number,
  title: string,
  price: number, 
  description: string,
  category: string
}

const Grid: React.FC = () => {
  const dispatch = useDispatch();
  const {products = []} = useSelector((state: any) => state.productState);
  
  useEffect(()=> {
    if(products.length === 0){
      dispatch(fetchProductsInit())
    }
  }, [dispatch, products.length])


  return (
      <Row>
        {
          (products as CardItem[]).map(item => 
            <Col  key={item.id} xs={12} sm={6} md={6} lg={4} className="mb-4">
                        <Card individualItem={item} />
            </Col>
          )
        }

      </Row>
  ); 
}

export default React.memo(Grid);
