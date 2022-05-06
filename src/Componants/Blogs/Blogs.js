import React from 'react';

const Blogs = () => {
    return (
        <div className='container my-5'>
            <div className='card p-4'>
                <div className='row g-2'>
                    <h1>What Difference between javascript and nodejs?</h1>
                    <div className="col-md-6 my-3">
                        <h4 className='text-center fw-bold'>JavaScript:</h4>
                        <div className='my-2'>
                            <p>1. Javascript is a programming language that is used for writing scripts on the website.</p><br />
                            <p>2. Javascript can only be run in the browsers.</p><br />
                            <p>3. Javascript is capable enough to add HTML and play with the DOM.</p><br />
                            <p>4. Javascript is used in frontend development.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h4 className='text-center fw-bold'>NodeJs:</h4>
                        <div className='m-2'>
                            <p>1. NodeJS is a Javascript runtime environment.</p><br />
                            <p>2. We can run Javascript outside the browser with the help of NodeJS.</p> <br />
                            <p>3. Nodejs does not have capability to add HTML tags.</p> <br />
                            <p>4. Nodejs is used in server-side development.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card p-4'>
                <div className='row g-2'>
                    <h1>What Differences between sql and nosql databases?</h1>
                    <div className="col-md-6 my-3">
                        <h4 className='text-center fw-bold'>SQL:</h4>
                        <div className='my-2'>
                            <p>1. Relational or distributed database system (RDBMS).</p><br />
                            <p>2. These databases have fixed or static or predefined schema.</p><br />
                            <p>3. These databases are best suited for complex queries.</p><br />
                            <p>4. hese databases are not suited for hierarchical data storage.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h4 className='text-center fw-bold'>NoSQL:</h4>
                        <div className='m-2'>
                            <p>1. Non-relational or distributed database system.</p><br />
                            <p>2. They have dynamic schema.</p> <br />
                            <p>3. These databases are not so good for complex queries.</p> <br />
                            <p>4. These databases are best suited for hierarchical data storage.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card p-4">
                <h1>What is the purpose of JWT and how does it work</h1>
                <div className='my-2'>
                    <p>


                        Nodejs is a Javascript engine that you can write any application you want with (by programming in the Javascript language). It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.
                        MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.
                        MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database. MongoDB also has API libraries for other programming environments such as Python, Java, etc..
                    </p>
                </div>
            </div>
            <div className="card p-4">
                <h1>What is the purpose of JWT and how does it work</h1>
                <div className='my-2'>
                    <p>
                        JWTs differ from other web tokens in that they contain a set of claims.
                        Claims are used to transmit information between two parties. 
                        What these claims are depends on the use case at hand. For example, 
                        a claim may assert who issued the token, how long it is valid for, 
                        or what permissions the client has been granted. <br />
                        <p>
                            A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                            Once decoded, you will get two JSON strings: <br />
                            The header and the payload. <br />
                            The signature.
                        </p>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;