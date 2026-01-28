export default function WhatWeDo() {
const items = [
{
title: "Research",
text: "Producing evidence that shapes policy and practice."
},
{
title: "Policy influence",
text: "Engaging decision-makers at local, national and global levels."
},
{
title: "Action & partnerships",
text: "Working with communities and partners for real-world impact."
}
];


return (
<section className="bg-base-200 py-20">
<div className="container mx-auto max-w-6xl px-4">
<h2 className="text-3xl font-bold text-center mb-12">What we do</h2>
<div className="grid md:grid-cols-3 gap-8">
{items.map((item) => (
<div key={item.title} className="card bg-base-100 shadow-md">
<div className="card-body">
<h3 className="card-title">{item.title}</h3>
<p>{item.text}</p>
</div>
</div>
))}
</div>
</div>
</section>
);
}