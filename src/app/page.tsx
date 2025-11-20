import { ProductCard } from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, HeartHandshake, Package, Palette } from "lucide-react";
import Link from "next/link";

const featuredProducts = [
  {
    title: "Hand-Thrown Stoneware Vase",
    price: 94,
    category: "Pottery",
    image: "https://images.pexels.com/photos/6618318/pexels-photo-6618318.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Boho Macramé Wall Hanging",
    price: 158,
    category: "Home Decor",
    image: "https://images.pexels.com/photos/6692285/pexels-photo-6692285.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Hand-Carved Wooden Utensil Set",
    price: 68,
    category: "Woodwork",
    image: "https://images.pexels.com/photos/7235911/pexels-photo-7235911.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Artisan Beaded Statement Necklace",
    price: 112,
    category: "Jewelry",
    image: "https://images.pexels.com/photos/7235932/pexels-photo-7235932.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Hand-Woven Cotton Market Tote",
    price: 74,
    category: "Accessories",
    image: "https://images.pexels.com/photos/5717403/pexels-photo-5717403.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Leather-Bound Artisan Journal",
    price: 89,
    category: "Stationery",
    image: "https://images.pexels.com/photos/7235908/pexels-photo-7235908.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO – Dreamy Pottery Studio (Pexels) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/7235932/pexels-photo-7235932.jpeg?auto=compress&cs=tinysrgb&w=3270')`,
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative container px-6 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            Where Artisans<br />Meet Conscious Buyers
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto drop-shadow-lg">
            Discover one-of-a-kind handcrafted treasures made with passion, skill, and soul.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 bg-amber-600 hover:bg-amber-700 text-white shadow-2xl" asChild>
              <Link href="/browse">
                Explore the Marketplace <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-white/20 backdrop-blur-md text-white border-white/50 hover:bg-white/30 shadow-2xl"
              asChild
            >
              <Link href="/seller">Start Selling Today</Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-white">
        <div className="container grid md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <div className="p-6 bg-rose-100 rounded-full mb-6">
              <HeartHandshake className="w-12 h-12 text-rose-600" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Support Real Artisans</h3>
            <p className="text-muted-foreground">Every purchase directly empowers independent creators</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-6 bg-amber-100 rounded-full mb-6">
              <Package className="w-12 h-12 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Unique & Original</h3>
            <p className="text-muted-foreground">No mass production — only authentic handmade pieces</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-6 bg-emerald-100 rounded-full mb-6">
              <Palette className="w-12 h-12 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Made with Love</h3>
            <p className="text-muted-foreground">Every item carries the heart and soul of its maker</p>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Featured Treasures</h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Handpicked creations from our most loved artisans
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, i) => (
              <ProductCard key={i} {...product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/browse">
                View All Products <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}