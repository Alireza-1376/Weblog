import { getAllArticles } from "@/services/blogs";
import { getAllCategories } from "@/services/categories";
import Banner from "./_components/Banner";
import States from "./_components/States";
import Categories from "./_components/Categories";
import Articles from "./_components/Articles";

export default async function Home() {
  const [allArticles, allCategories] = await Promise.all([
    getAllArticles(),
    getAllCategories()
  ])
  

  return (
    <main>
      <Banner />
      <States />
      <Categories allCategories={allCategories} />
      <Articles allArticles={allArticles} />
    </main>
  );
}
