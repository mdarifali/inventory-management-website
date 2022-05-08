import React, { useEffect, useState } from 'react';

const useHook = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

 
    useEffect(() => {
        const url = `https://boiling-fjord-43680.herokuapp.com/productapi`;
        setLoading(true)
        fetch(url)
        
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
    }, []);
    
    return (
        [products, loading, setProducts]);
};

export default useHook;