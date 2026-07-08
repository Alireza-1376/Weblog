import { getAllArticles } from "@/services/blogs";
import { getAllCategories } from "@/services/categories";
import Banner from "./_components/Banner";
import States from "./_components/States";
import Categories from "./_components/Categories";
import Articles from "./_components/Articles";

export const dynamic = 'force-static';

export default async function Home() {
  const [allArticles, allCategories] = await Promise.all([
    getAllArticles(),
    getAllCategories()
  ])

  const sortArticles = [...allArticles].sort((a, b) => {
    const dateA = new Date(a.createdAt)
    const dateB = new Date(b.createdAt)
    if (dateA > dateB) {
      return -1
    }
    if (dateB > dateA) {
      return 1
    }
    return -1
  })


  return (
    <main>
      <Banner />
      <States />
      <Categories allCategories={allCategories} />
      <Articles allArticles={sortArticles} />
    </main>
  );
}
