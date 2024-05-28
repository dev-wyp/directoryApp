import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Chip,
    Grid,
    Pagination,
    Rating,
    Stack,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
} from "@mui/material";
import { ViewList, ViewModule } from '@mui/icons-material';
import { Key, useEffect, useState } from "react";
import { getAllProducts } from "../../api/hotelsApi";
import { Link } from "react-router-dom";

const ShopListingPage = () => {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        getAllProducts().then(res => setHotels(res.data.products))
    }, [])

    return (
        <>
            <Box
                style={{
                    backgroundImage:
                        "url(https://static.vecteezy.com/system/resources/previews/004/858/012/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center left",
                    height: 500,
                    width: "100%",
                }}
            ></Box>

            <Box sx={{ px: 2 }}>
                <Grid container spacing={2}>
                    <Grid xs={3} item>
                        <h5>Filter</h5>
                    </Grid>

                    <Grid xs={9} item>
                        <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                            <Typography variant="h5" fontWeight={600} my={3}>Product Listing</Typography>
                            <ToggleButtonGroup
                                // value={view}
                                exclusive
                                // onChange={handleChange}
                                >
                                <ToggleButton value="module" aria-label="module">
                                    <ViewModule />
                                </ToggleButton>
                                <ToggleButton value="list" aria-label="list">
                                    <ViewList />
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Stack>
                        <Grid container spacing={2}>
                            {
                                hotels.map((product:  any) => (
                                    <Grid xs={12} sm={6} md={4} lg={3} item key={product.id}>
                                        <Link to={`/shops/${product.id}`} >
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
                                                                product?.tags.map((tag: string, index: Key) =>
                                                                    <Chip
                                                                        key={index}
                                                                        label={tag}
                                                                        size="small"
                                                                        variant="outlined"
                                                                        sx={{ fontSize: 12, mr: 1 }}
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
                                                            sx={{ fontSize: 12 }}
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
                                        </Link>
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

export default ShopListingPage;
