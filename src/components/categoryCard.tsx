"use client";
import { Card, CardBody } from "@material-tailwind/react";
import Link from "next/link";

interface CardData {
  image: string;
  name: string;
}

export default function CategoryCard({ image, name }: CardData) {
  return (
    <Card className="mt-6 w-96 relative" placeholder={undefined}>
      <CardBody
        color="blue-gray"
        className=" relative h-70"
        placeholder={undefined}
      >
        <img src={image} className=" object-cover"></img>
        <Link href={`/category/${name.toLowerCase()}`}>
          <div className=" absolute top-1/2 left-1/3 bg-white text-center opacity-80 p-5">
            <h3>{name}</h3>
            <p>SHOP NOW</p>
          </div>
        </Link>
      </CardBody>
    </Card>
  );
}
