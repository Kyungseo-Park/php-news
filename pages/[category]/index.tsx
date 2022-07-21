import axios from "axios";
import { GetServerSideProps } from "next";
import ArticleCard from "@components/2.0/ArticleCard";
import withGetServerSideProps from "lib/utils/withServerSideProps";
import Layout from "@components/Layouts";
import { API, Article, Category } from "types/article";

function Page({ articles, category }: { articles: Article[]; category: string }) {
  return (
    <Layout
      title={category}
      summary={category}
      image="/img/1654213810643040.jpg"
      date={new Date().toISOString()}
      type={category}
    >
      <section className="container mx-auto p-10 md:py-20 px-5 md:p-10">
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {articles.map((article: Article) => (
            <ArticleCard key={article.post_id} article={article} />
          ))}
        </section>
      </section>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = withGetServerSideProps(async ({ query }) => {
  const { category }: { category: string } = query as any;
  const categoryList = ["news", "tutorials", "videos", "php-annotated-monthly", "features", "events", "eap"];
  if (categoryList.includes(category) === false) {
    return {
      props: {},
      notFound: true,
    };
  }

  // const { data } = await axios.get<API.GET.Articles>(
  //   `https://php-news-api.kkyungvelyy.com/api/v1/articles/${category}`,
  // );
  const { data } = await axios.get<API.GET.Articles.ALL>(
    `https://php-news-api.kkyungvelyy.com/api/v1/articles/${category}`,
  );

  return {
    props: {
      articles: data.data,
      category: category,
      count: data.total,
      message: data.message,
    },
  };
});

export default Page;
