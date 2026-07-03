import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

function Special({ specialArticles }: { specialArticles: Blog[] }) {
    return (
        <aside className="lg:col-span-1">
            <div className="sticky top-20 border rounded-2xl p-5">
                <h3 className="text-xl font-bold mb-6">
                    مقالات ویژه
                </h3>
                <div className="space-y-5">
                    {specialArticles.map((item) => (
                        <Link
                            key={item.id}
                            href={`/article/${item.id}`}
                            className="flex gap-3 group"
                        >
                            <div className="relative w-24 h-20 shrink-0 overflow-hidden rounded-lg">
                                {item.image &&
                                    <Image
                                        src={`http://localhost:4004${item.image}`}
                                        alt={item.title}
                                        fill
                                        unoptimized
                                        className="object-cover"
                                    />
                                }
                            </div>

                            <div>
                                <h4 className="font-medium line-clamp-2 group-hover:text-teal-700 transition">
                                    {item.title}
                                </h4>

                                <span className="text-xs text-gray-500">
                                    {new Date(
                                        item.createdAt
                                    ).toLocaleDateString("fa-IR")}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </aside>
    )
}

export default Special;