export default function Values() {
const values = [
"Equity and justice",
"Integrity and evidence",
"Partnership and inclusion",
"Impact-driven action",
];


return (
<section className="py-10 bg-gray-50">
<div className="container mx-auto max-w-5xl px-4">
<h2 className="text-3xl font-bold text-center mb-12">Our values</h2>
<div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
{values.map((value) => (
<div
key={value}
className="border rounded-xl p-6 text-center font-medium"
>
{value}
</div>
))}
</div>
</div>
</section>
);
}