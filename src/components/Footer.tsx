import { Heart, Mail, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12 px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Heart className="h-5 w-5 text-rose-500" />
              Handcrafted Haven
            </h3>
            <p className="text-sm text-muted-foreground">
              Supporting artisans and conscious consumers since 2025.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">All Products</a></li>
              <li><a href="#" className="hover:text-foreground">New Arrivals</a></li>
              <li><a href="#" className="hover:text-foreground">Best Sellers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">About Us</a></li>
              <li><a href="#" className="hover:text-foreground">Contact</a></li>
              <li><a href="#" className="hover:text-foreground">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Stay Connected</h4>
            <div className="flex gap-4 mb-4">
              <Instagram className="h-6 w-6 cursor-pointer hover:text-amber-600" />
              <Facebook className="h-6 w-6 cursor-pointer hover:text-amber-600" />
              <Mail className="h-6 w-6 cursor-pointer hover:text-amber-600" />
            </div>
            <p className="text-sm text-muted-foreground">
              Made with <Heart className="inline h-4 w-4 text-rose-500" /> in Idaho
            </p>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground mt-10 pt-8 border-t">
          © 2025 Handcrafted Haven. All rights reserved.
        </div>
      </div>
    </footer>
  );
}