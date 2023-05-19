import React from 'react';
import { Link } from 'react-router-dom';

export const CartEmpty: React.FC = () => (
  <div className="cart cart--empty">
    <h2>
      В корзине пока пусто <span></span>
    </h2>
    <p>
      Вероятней всего, вы не добавили товар.
      <br />
      Для того, чтобы заказать макаронс, перейди в каталог.
    </p>
    <Link to="/sets" className="button button--pink">
      <span>К товарам</span>
    </Link>
  </div>
);
