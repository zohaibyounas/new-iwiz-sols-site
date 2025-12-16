import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    return {
        title: `${id.replace('-', ' ')} - Service Details`,
        description: `Details about our ${id} service.`,
    };
}

export default async function ServiceDetailsPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    return (
        <div className="container mx-auto px-4 py-16">
            <Link href="/services" className="inline-flex items-center text-slate-500 hover:text-blue-600 mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
            </Link>

            <h1 className="text-4xl font-bold mb-6 capitalize">{id.replace('-', ' ')}</h1>

            <div className="prose lg:prose-xl max-w-none">
                <p className="lead text-xl text-slate-600 mb-8">
                    Comprehensive solutions for {id.replace('-', ' ')} tailored to your business goals.
                </p>

                {/* Placeholder Content */}
                <h3>What We Offer</h3>
                <p>
                    We provide a full range of capabilities within this service area. From initial consultation to final delivery, we ensure excellence at every step.
                </p>

                <ul>
                    <li>Strategy & Planning</li>
                    <li>Implementation & Development</li>
                    <li>Optimization & Support</li>
                </ul>
            </div>
        </div>
    );
}
