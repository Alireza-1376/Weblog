import { Blog } from '@/types/blog';
import Image from 'next/image';
import Link from 'next/link';

function Popular({ popularArticles }: { popularArticles: Blog[] }) {
    return (
        <section className="mt-20">
            <h2 className="text-2xl font-bold mb-8">
                مقالات پربازدید
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {popularArticles.map((item) => (
                    <Link
                        key={item.id}
                        href={`/article/${item.id}`}
                        className="border rounded-xl overflow-hidden hover:shadow-lg transition"
                    >
                        <div className="relative h-48">
                            <Image
                                src={`http://localhost:4004${item.image}`}
                                alt={item.title}
                                fill
                                unoptimized
                                className="object-cover"
                            />
                        </div>

                        <div className="p-4">
                            <h3 className="font-bold line-clamp-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 mb-4 line-clamp-2">
                                {item.content}
                            </p>
                            <div className="flex items-center justify-between pb-4">
                                <div>
                                    <p className="text-sm text-gray-500">{item.author}</p>
                                </div>
                                <div>{new Date(item.createdAt).toLocaleDateString('fa-IR')}</div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default Popular;