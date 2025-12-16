import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    return {
        title: `Project ${id} - Portfolio`,
    };
}

export default async function ProjectDetailsPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    return (
        <div className="container mx-auto px-4 py-16">
            <Link href="/" className="inline-flex items-center text-slate-500 hover:text-blue-600 mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Link>

            <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold capitalize">Project {id}</h1>
                    <p className="text-xl text-slate-600">
                        A revolutionary platform for digital transformation efficiently built for scale.
                    </p>

                    <div className="border-t border-b py-6 my-6 grid grid-cols-2 gap-4">
                        <div>
                            <div className="text-sm text-slate-500">Client</div>
                            <div className="font-semibold">Tech Corp Inc.</div>
                        </div>
                        <div>
                            <div className="text-sm text-slate-500">Year</div>
                            <div className="font-semibold">2025</div>
                        </div>
                        <div>
                            <div className="text-sm text-slate-500">Service</div>
                            <div className="font-semibold">Web Development</div>
                        </div>
                        <div>
                            <div className="text-sm text-slate-500">Tech Stack</div>
                            <div className="font-semibold">Next.js, Tailwind</div>
                        </div>
                    </div>

                    <div className="prose text-slate-600">
                        <p>
                            Detailed description of the project goes here. We solved X problem by implementing Y solution using Z technologies.
                        </p>
                    </div>

                    <a href="#" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                        Visit Live Site <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                </div>

                <div className="bg-slate-200 rounded-xl h-96 lg:h-auto min-h-[400px]">
                    {/* Project Image Placeholder */}
                </div>
            </div>
        </div>
    );
}
