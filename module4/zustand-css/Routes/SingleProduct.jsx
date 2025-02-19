import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useCart } from '../src/store.js';

export function SingleProduct() {
    const { id } = useParams();
    console.log(id);

    const { cart, addToCart } = useCart();

    const [product, setProduct] = useState(false);
    const url = 'https://v2.api.noroff.dev/rainy-days/';

    useEffect(() => {
        async function fetchProducts() {
            const res = await fetch(url + id);
            const data = await res.json();
            console.log(data);
            setProduct(data.data)
        }
        fetchProducts();
    }, []);

    return (
        <>
            <h1>Single product</h1>
            {product ? (<div>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <img
                    src={product.image.url}
                    alt={product.alt}
                    className="w-32 h-32 object-contain my-2"
                />
                {product.onSale ? (
                    <>
                        <p className="line-through text-red-500">{product.price} $</p>
                        <p className="font-semibold">{product.discountedPrice} $</p>
                    </>
                ) : (
                    <p className="font-semibold">{product.price} $</p>
                )}
                <button className='border border-green-500 p-2' onClick={() => {
                    addToCart(product.id);
                }}>Buy product
                </button>
            </div>) : <p>Loading...</p>}
        </>
    )
}