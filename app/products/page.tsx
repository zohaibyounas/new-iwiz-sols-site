import type { Metadata } from "next";
import { ShoppingBag } from "lucide-react";

export const metadata: Metadata = {
    title: "Products - iWiz",
    description: "Check out our digital products and tools.",
};

const products = [
    { id: 1, name: "Admin Dashboard Template", price: "$49", category: "Template" },
    { id: 2, name: "E-commerce UI Kit", price: "$89", category: "UI Kit" },
    { id: 3, name: "SEO Analyzer Tool", price: "$29/mo", category: "SaaS" },
];

export default function ProductsPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-12 text-center">Our Products</h1>

            <div className="grid md:grid-cols-3 gap-8">
                {products.map((product) => (
                    <div key={product.id} className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow bg-white">
                        <div className="h-48 bg-slate-100 flex items-center justify-center">
                            <ShoppingBag className="h-12 w-12 text-slate-300" />
                        </div>
                        <div className="p-6">
                            <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">{product.category}</div>
                            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                            <div className="flex items-center justify-between mt-4">
                                <span className="text-2xl font-bold">{product.price}</span>
                                <button className="px-4 py-2 bg-slate-900 text-white rounded-md hover:bg-slate-800 transition-colors">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
