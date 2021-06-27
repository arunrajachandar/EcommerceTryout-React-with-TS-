import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Row, Dropdown, Button, Col} from 'react-bootstrap';
import {fetchCategoriesInit, fetchCategorySelect} from '../../store/Products/fetchProductsActionCreator';



const CategoryDropdown: React.FC = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const dispatch = useDispatch();
  const {categories = [], selectedCategories= ''} = useSelector((state: any) => state.productState);
  
  useEffect(()=> {
    if(categories.length === 0){
      dispatch(fetchCategoriesInit())
    }
  }, [dispatch, categories.length])


  return (
      <Row className="mb-4">
        <Col>
        <Dropdown>
          <Button onClick={e =>{
            e.preventDefault();
            setToggleDropdown(!toggleDropdown)
          }} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </Button>
          {
            toggleDropdown && (
              <ul className="dropdown-menu dropdown-menu-dark d-block" aria-labelledby="dropdownMenuButton">
              {
                (categories as string[]).map((item, indx) => 
                  <li className={`dropdown-item pe-auto ${selectedCategories === item ? 'active' : ''}`} key={`${item}-${indx}`}
                  onClick={e => {
                    e.preventDefault();
                    setToggleDropdown(!toggleDropdown)
                    dispatch(fetchCategorySelect(item!.toLowerCase()))
                  }}
                  >{item}</li>
                )
              }
    </ul>
  
            )
          }
        </Dropdown>     
        </Col>
      </Row>
  ); 
}

export default React.memo(CategoryDropdown);
