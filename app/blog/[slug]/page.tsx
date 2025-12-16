import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    return {
        title: `${slug.replace('-', ' ')} - Blog`,
    };
}

export default async function BlogDetailsPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    return (
        <div className="container mx-auto px-4 py-16">
            <Link href="/blog" className="inline-flex items-center text-slate-500 hover:text-blue-600 mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>

            <article className="max-w-3xl mx-auto">
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 capitalize">{slug.replace('-', ' ')}</h1>
                <div className="text-slate-500 mb-8">Published on December 16, 2025</div>

                <div className="h-64 lg:h-96 bg-slate-200 rounded-xl mb-12"></div>

                <div className="prose lg:prose-xl max-w-none">
                    <p>
                        This is a placeholder for the blog content. In a real application, this content would be fetched from a CMS or markdown file based on the slug: <strong>{slug}</strong>.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <h2>Key Takeaways</h2>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </article>
        </div>
    );
}
