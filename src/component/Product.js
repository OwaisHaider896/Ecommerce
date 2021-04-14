import React from 'react'
import Grid from "@material-ui/core"

const products = [
    {
        id: 1,
        name: "Shoes",
        discription: "Running Shoes"
    },
    {
        id: 2,
        name: "Laptop",
        discription: "MacBook for Developer"
    }

];

const Product = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4} >
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Product