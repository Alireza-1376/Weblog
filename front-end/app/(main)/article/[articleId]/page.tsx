import { getAllArticles, getOneArticle } from "@/services/blogs";
import { getComments } from "@/services/comment";
import Content from "../_components/Content";
import Popular from "../_components/Popular";
import Comment from "../_components/Comment";
import Special from "../_components/Special";


export default async function ArticlePage(props: PageProps<'/article/[articleId]'>) {
    const { articleId } = await props.params;
    const [selectArticle, allArticles, comments] = await Promise.all([
        getOneArticle(articleId),
        getAllArticles(),
        getComments(articleId)
    ])

    const sortComments = comments.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        if (dateA > dateB) return -1;
        if (dateA < dateB) return 1;
        return -1
    })

    const specialArticles = allArticles.filter((article) => {
        return article.id != selectArticle.id
    }).slice(0, 5)
    const popularArticles = allArticles.filter((article) => {
        return article.id != selectArticle.id
    }).slice(0, 3)



    return (
        <div className="mt-20">
            <div className="max-w-7xl mx-auto px-4 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    <div className="lg:col-span-3">
                        {/* Content */}
                        <Content selectArticle={selectArticle} />
                        {/* Popular Articles */}
                        <Popular popularArticles={popularArticles} />
                        {/* Comments */}
                        <Comment comments={comments} articleId={articleId} />
                    </div>

                    {/* Sidebar */}
                    <Special specialArticles={specialArticles} />

                </div>
            </div>
        </div>
    );
}