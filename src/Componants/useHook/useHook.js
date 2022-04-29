import React, { useEffect, useState } from 'react';

const useHook = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = `https://boiling-fjord-43680.herokuapp.com/productapi`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));

    }, []);

    return [products, setProducts];
};

export default useHook;