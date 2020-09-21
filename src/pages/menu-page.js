import React from 'react';
import { useParams } from 'react-router-dom';
import Menu from '../components/menu';

function MenuPage() {
  const { restId } = useParams();

  return <Menu id={restId} />;
}

export default MenuPage;
