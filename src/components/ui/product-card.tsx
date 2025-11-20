import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  category: string;
  rating?: number;
}

export function ProductCard({ title, price, image, category, rating = 4.9 }: ProductCardProps) {
  return (
    <Link href="/product/1" className="group">
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0">
        <div className="aspect-square relative overflow-hidden bg-gray-100">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <Badge className="absolute top-3 left-3">{category}</Badge>
        </div>
        <CardContent className="p-5">
          <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-amber-600 transition">
            {title}
          </h3>
        </CardContent>
        <CardFooter className="px-5 pb-5 flex justify-between items-center">
          <span className="text-2xl font-bold">${price}</span>
          <div className="flex items-center gap-1">
            <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
            <span className="font-medium">{rating}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}