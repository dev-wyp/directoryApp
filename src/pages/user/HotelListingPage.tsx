import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Pagination,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../api/hotelsApi";

const HotelListingPage = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    getAllProducts().then(res => setHotels(res.data.products))
  }, [])

  return (
    <>
      <Box
        style={{
          backgroundImage:
            "url(https://patternsinthedata.com/wp-content/uploads/2009/06/mpa-main.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: 500,
          width: "100%",
        }}
      ></Box>

      <Box sx={{ px: 2 }}>
        Hotel Listing
        <Grid container spacing={2}>
          <Grid xs={3} item>
            <h5>Filter</h5>
          </Grid>

          <Grid xs={9} item>
            <Grid container spacing={2}>
              {
                hotels.map((product: any) => (
                  <Grid xs={12} sm={6} md={4} lg={3} item key={product.id}>
                    <Card>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="160"
                          sx={{ minHeight: 160, maxHeight: 160 }}
                          image={product.thumbnail}
                          // image="https://pix6.agoda.net/hotelImages/1388197/-1/b395433b8acef8a212fd63a076017b4c.jpg"
                          alt="green iguana"
                        />
                        <CardContent sx={{ height: 160, p: 1.5 }}>
                          <Typography gutterBottom variant="subtitle1" component="div" fontWeight={600} className="line-clamp-2">
                            {product.title}
                          </Typography>
                          <Stack flexDirection={'row'} justifyContent={'space-between'} mb={1}>
                            <Typography variant="subtitle2">
                              $ {product.price}
                            </Typography>
                            <Rating
                              name="simple-controlled"
                              value={product.rating}
                              size="small"
                              readOnly
                            />
                          </Stack>
                          <Typography variant="caption" color="text.secondary" fontWeight={600}>
                               Tags: {
                                product?.tags.map((tag: string) => 
                                  <Chip
                                    label={tag}
                                    size="small"
                                    variant="outlined"
                                    sx={{fontSize: 12, mr: 1}}
                                  />
                                )
                               }
                            </Typography>
                        </CardContent>
                        <Stack flexDirection={'row'} justifyContent={'space-between'} px={1.5} pb={1.5}>
                        <Typography variant="subtitle2" color="text.secondary">stock: {product.stock}</Typography>
                        <Chip
                          label={product.availabilityStatus}
                          color={
                            product.availabilityStatus === 'In Stock'
                              ? 'success'
                              : product.availabilityStatus === 'Low Stock'
                                ? 'warning'
                                : product.availabilityStatus === 'Out Stock'
                                  ? 'error'
                                  : 'default'
                          }
                          size="small"
                          sx={{fontSize: 12}}
                        />
                      </Stack>
                      </CardActionArea>

                      {/* <CardActions sx={{ justifyContent: 'space-between' }}>
                        <Button size="small" color="primary">
                          View More
                        </Button>
                        <Button size="small" color="primary">
                          Shop Now
                        </Button>
                      </CardActions> */}
                    </Card>
                  </Grid>
                ))
              }
            </Grid>
            <Box display={"block"} my={3}>
              <Pagination count={10} sx={{ mx: 'auto', 'ul': { justifyContent: 'center' } }} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HotelListingPage;
