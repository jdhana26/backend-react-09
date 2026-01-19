import React from 'react';

const RenderingPlayground = () => {
    // 1. Primitive
    const name = "Sabareesh";
    const age = 28;

    // 2. Object
    const user = { name: "Sabareesh", city: "Chennai" };

    // 3. Array of strings
    const skills = ["HTML", "CSS", "JS", "React"];

    // 4. Array of objects
    const products = [
        { id: 1, name: "Laptop", price: 999 },
        { id: 2, name: "Phone", price: 699 },
        { id: 3, name: "Tablet", price: 399 },
    ];

    return (
        <div style={{ padding: '20px', border: '1px solid #eee', borderRadius: '8px', marginTop: '20px', textAlign: 'left' }}>
            <h2>Rendering Playground</h2>

            <section style={{ marginBottom: '20px' }}>
                <h3>Primitives</h3>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
            </section>

            <section style={{ marginBottom: '20px' }}>
                <h3>Object</h3>
                <p>User Name: {user.name}</p>
                <p>User City: {user.city}</p>
            </section>

            <section style={{ marginBottom: '20px' }}>
                <h3>List (Strings)</h3>
                <ul>
                    {skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>
            </section>

            <section>
                <h3>Table (Products)</h3>
                <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>${product.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default RenderingPlayground;
