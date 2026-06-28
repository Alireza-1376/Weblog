import { Blog } from '@/types/blog'
import Image from 'next/image'

function Content({ selectArticle }: { selectArticle: Blog }) {
    return (

        <>
            <div className="relative h-62.5 md:h-125 overflow-hidden rounded-2xl">
                <Image
                    src={`http://localhost:4004${selectArticle.image}`}
                    alt={selectArticle.title}
                    fill
                    unoptimized
                    className="object-cover"
                />
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mt-8 mb-6">
                {selectArticle.title}
            </h1>

            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-8">
                <span>{selectArticle.author}</span>

                <span>
                    {new Date(selectArticle.createdAt).toLocaleDateString("fa-IR")}
                </span>
            </div>
            <div className="leading-9 text-gray-700 whitespace-pre-wrap">
                {selectArticle.content}
            </div>
        </>

    )
}

export default Content