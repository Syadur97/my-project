export default function Hero() {
return (
<section className=" py-20">
<div className="container mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
<div>
<h1 className="text-4xl md:text-5xl font-bold mb-6">
About CDRM
</h1>
<p className="text-lg text-gray-700"> We are a global research institute working for a fairer, more sustainable world.
</p>
</div>
<img
src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
alt="Research and policy work"
className="rounded-xl shadow-lg"
/>
</div>
</section>
);
}