import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
const url = 'https://v2.api.noroff.dev/rainy-days';

export function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProducts() {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setProducts(data.data);
        }
        getProducts();

    }, []);

    return (
        <>
            <h1 className="text-2xl mb-6">Product page</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <Link
                        to={'/product/' + product.id}
                        key={product.id}
                        className="flex flex-col items-center bg-white shadow-md p-4 rounded-lg hover:shadow-xl">
                        <h2 className="font-bold text-lg text-center">{product.title}</h2>
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
                    </Link>
                ))}
            </div>
        </>

    )
}