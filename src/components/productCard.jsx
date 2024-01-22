import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import AddToCart from "@/components/addToCart";
import IsInCart from "@/components/isInCart";
import { useState, useEffect } from "react";

export default function ProductCard({ product, user }) {
  return (
    <div>
      <Card className="w-64 mb-4">
        <CardHeader shadow={false} floated={false}>
          <img src={product.image} height={300} width={220}></img>
        </CardHeader>
        <CardBody>
          <div className="mb-2">
            <Typography color="blue-gray" className=" font-medium">
              {product.product}
            </Typography>
            <Typography color="blue-gray" className=" font-medium">
              {product.category}
            </Typography>
            <Typography color="blue-gray" className=" font-medium">
              {product.price}
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <AddToCartButton product={product} user={user}></AddToCartButton>
        </CardFooter>
      </Card>
    </div>
  );
}

function AddToCartButton({ product, user }) {
  const [isInCart, setIsInCart] = useState(false);
  useEffect(() => {
    if (user && product) {
      IsInCart(product.id, user.userId).then((isInCart) => {
        setIsInCart(isInCart);
      });
    }
  }, []);
  const onClick = () => {
    if (!user.isLogin) {
      alert("Please login");
      window.location.href = "/login";
    }
    AddToCart(product.id, user.userId);
    IsInCart(product.id, user.userId).then((isInCart) => {
      setIsInCart(isInCart);
    });
  };
  if (isInCart) {
    return (
      <Button ripple={false} fullWidth={true} onClick={onClick} disabled={true}>
        Already In Cart
      </Button>
    );
  }
  return (
    <Button ripple={false} fullWidth={true} onClick={onClick}>
      Add To Cart
    </Button>
  );
}
