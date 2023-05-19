import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const FullMacarons: React.FC = () => {
  const [macarons, setMacarons] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();

  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchMacarons() {
      try {
        const { data } = await axios.get('https://644fd909b61a9f0c4d2cfe1b.mockapi.io/items/' + id);
        setMacarons(data);
      } catch (error) {
        alert('Ошибка при получении товара!');
        navigate('/');
      }
    }

    fetchMacarons();
  }, []);

  if (!macarons) {
    return <>Загрузка...</>;
  }

  return (
    <div className="container">
      <img src={macarons.imageUrl} />
      <h2>{macarons.title}</h2>
      <h4>{macarons.price} ₽</h4>
      <Link to="/">
        <button className="button button--outline button--add">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};

export default FullMacarons;
