import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../FirebaseAuth';

const MyItem = () => {
    const [product, setProduct] = useState([]);
    const [user] = useAuthState (auth)

    useEffect(() => {
        const email = user.email;
        const url = `https://boiling-fjord-43680.herokuapp.com/productapi?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [user]);

    return (
        <div>
            <h1>User: {user.email}</h1>
            Total: {product.length}
        </div>
    );
};

export default MyItem;