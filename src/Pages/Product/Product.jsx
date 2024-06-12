import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

import styles from './product.module.scss';

const Product = () => {
  const [product, setProduct] = useState();

  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get(
          'https://630244f2c6dda4f287b6a17b.mockapi.io/products/' + productId,
        );
        setProduct(data);
      } catch (error) {
        alert('Ошибка при загрузке продукта');
        navigate('/myreactlearning');
      }
    }

    fetchProduct();
  });

  if (!product) {
    return 'Идёт загрузка...';
  }

  return (
    <div className="main">
      <div className="main__inner">
        <div className="container">
          <div className={styles.product}>
            <img className={styles.product__img} src={product.imgURL} alt="product img" />
            <h3 className={styles.product__title}>{product.title}</h3>
            <p className={styles.product__price}>{product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
