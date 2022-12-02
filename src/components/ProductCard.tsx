import { IProduct } from '../types';
import { useState } from 'preact/hooks';

interface ProductCardProps {
  product: IProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [details, setDetails] = useState(false);
  const toggleDetails = () => setDetails((prev) => !prev);

  return (
    <div className={'border rounded mb-2 p-3'}>
      <h2 className="text-lg">{product.title}</h2>
      <p className="font-bold">{product.price}</p>

      <a href={`/product/${product.id}`}>Open product</a>

      <br />

      <button
        className="border py-2 px-4 bg-yellw-400 text-white"
        onClick={toggleDetails}
      >
        Toggle description
      </button>

      {details && <p>{product.description}</p>}
    </div>
  );
}
