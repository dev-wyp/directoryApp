import { Box, Card, CardMedia, Chip, Rating, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { getProduct } from "../../api/productsApi";
import { useParams } from "react-router-dom";

const ShopDetailPage = () => {
  const productId = useParams().id;
  const [ product, setProduct ] = useState({}) as any;

  useEffect(() => {
    getProduct(productId).then(res => setProduct(res.data)).catch(error => console.log(error))
  }, [])
  
  return (
    <>
      <Box pt={15}>
        <Card sx={{width: '75%', mx: 'auto', p: 2}}>
          {/* <Typography variant="h3" fontWeight={600} my={3}>Product Detail Page</Typography> */}
          <CardMedia
            component="img"
            sx={{ width: 400, mx: 'auto'}}
            image={product?.images?.[0]}
            // image="https://pix6.agoda.net/hotelImages/1388197/-1/b395433b8acef8a212fd63a076017b4c.jpg"
            alt={product.title}
          />
          <Typography variant="h5" fontWeight={600} my={3}>{product.title}</Typography>
          <Typography variant="h5" fontWeight={600} my={3}>$ {product.price}</Typography>
          <Rating
            name="simple-controlled"
            value={product.rating}
            readOnly
          />
          <Typography variant="subtitle2" fontWeight={600} my={3}>Brand: <Chip label={product.brand} /></Typography> 
          <Typography variant="subtitle2" fontWeight={600} my={3}>Category: <Chip label={product.category} /></Typography> 
          <Typography variant="subtitle2" fontWeight={600} my={3}>Tags: 
            {
              product.tags.map((tag: string) => 
                <Chip label={tag} />
              )
            }
          </Typography>
          <Typography variant="subtitle1" fontWeight={600} my={3}>SKU: {product.sku}</Typography>
          <Typography variant="subtitle1" fontWeight={600} my={3}>Stock: {product.stock}</Typography>
          <Typography variant="subtitle1" fontWeight={600} my={3}>Availability Status: {product.availabilityStatus}</Typography>
          <Typography variant="subtitle1" fontWeight={600} my={3}>Minimum Order Quantity: {product.minimumOrderQuantity}</Typography>
          <Typography variant="subtitle1" fontWeight={600} my={3}>Descriptions: {product.description}</Typography>
          <Typography variant="subtitle1" fontWeight={600} my={3}>Return Policy: {product.returnPolicy}</Typography>
          <Typography variant="subtitle1" fontWeight={600} my={3}>Warranty Information: {product.warrantyInformation}</Typography>
          <Typography variant="subtitle1" fontWeight={600} my={3}>Shipping Information: {product.shippingInformation}</Typography>

          <Typography variant="subtitle1" fontWeight={600} my={3}>Customer Review: </Typography>
            {
              product.reviews.map(review => 
                <>
                  <Rating
                    name="simple-controlled"
                    value={review.rating}
                    readOnly
                  />
                  <Typography variant="subtitle1" fontWeight={600} my={1}>{review.reviewerName}</Typography>
                  <Typography variant="subtitle1" fontWeight={600} my={1}>{review.reviewerEmail}</Typography>
                  <Typography variant="subtitle1" fontWeight={600} my={1}>{review.date}</Typography>
                  <Typography variant="subtitle1" fontWeight={600} my={1}>{review.comment}</Typography>
                </>
              )
            }
          
        </Card>
      </Box>
      
    </>
  )
}

export default ShopDetailPage