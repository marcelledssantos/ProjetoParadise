import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { addToCart } from '../features/cart/cartSlice';
import { useState } from 'react';

export default function ProductListPage() {
  const products = useSelector((state: RootState) => state.products.items);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState<number[]>([]);

  const handleAdd = (id: number, name: string, price: number, image: string) => {
    dispatch(addToCart({ id, name, price, image }));
    setDisabled([...disabled, id]);
  };

  const grouped = products.reduce((acc: any, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div style={{ padding: 20 }}>
      {Object.entries(grouped).map(([category, items]) => (
        <div key={category}>
          <h2>{category}</h2>
          <div style={{ display: 'flex', gap: 20 }}>
            {items.map((p: any) => (
              <div key={p.id} style={{ border: '1px solid #ccc', padding: 10, width: 150 }}>
                <img src={p.image} alt={p.name} width="100%" />
                <h4>{p.name}</h4>
                <p>R$ {p.price}</p>
                <button
                  disabled={disabled.includes(p.id)}
                  onClick={() => handleAdd(p.id, p.name, p.price, p.image)}
                >
                  {disabled.includes(p.id) ? 'Adicionado' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}