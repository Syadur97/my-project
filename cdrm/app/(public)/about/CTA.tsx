import Link from "next/link";


export default function CTA() {
return (
<section className="bg-primary text-primary-content py-16">
<div className="container mx-auto max-w-4xl px-4 text-center">
<h2 className="text-3xl font-bold mb-4">Work with us</h2>
<p className="mb-6">
Partner with us to create sustainable and inclusive solutions.
</p>
<Link href="/contact" className="btn btn-secondary">
Contact us
</Link>
</div>
</section>
);
}