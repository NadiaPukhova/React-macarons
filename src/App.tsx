import Loadable from 'react-loadable';
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Sets from './pages/Sets';

import './scss/app.scss';
import MainLayout from './layouts/MainLayout';
import { Banner } from './components/banner/Banner';

const Cart = Loadable({
  loader: () => import(/* webpackChunkName: "Cart" */ './pages/Cart'),
  loading: () => <div>Идёт загрузка корзины...</div>,
});

const FullMacarons = React.lazy(() => import(/* webpackChunkName: "FullMacarons" */ './pages/FullMacarons'));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */ './pages/NotFound'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/sets" element={<Sets />} />
        <Route path="" element={<Banner />} />
        <Route
          path="cart"
          element={
            <Suspense fallback={<div>Идёт загрузка корзины...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="macarons/:id"
          element={
            <Suspense fallback={<div>Идёт загрузка...</div>}>
              <FullMacarons />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Идёт загрузка...</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
