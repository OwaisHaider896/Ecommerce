import React from 'react'
import { Card, CardContent, CardActions, Typography, IconButton, CardMedia } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import classes from '*.module.css';



const Item = ({product}) => {
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} img="" title={product.name} />

        </Card>
    )
}

export default Item
