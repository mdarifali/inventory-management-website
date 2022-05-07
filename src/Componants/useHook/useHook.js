import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const useHook = () => {
    const [products, setProducts] = useState([]);
    const[loading, setLoading] = useState(false);
    let spinner = (<LoadingSpinner />);
    
    useEffect(() => {
        setLoading(true)
        
        const url = `https://boiling-fjord-43680.herokuapp.com/productapi`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));
            setLoading(false)
    }, [products]);

    return (
        [products, setProducts]);
};

export default useHook;