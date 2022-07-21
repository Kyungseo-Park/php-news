import axios from "axios";
import { GetStaticProps, GetStaticPropsContext } from "next";
import Layout from "@components/Layouts";
import { isCategory } from "@lib/utils/isCategory";
import { API, Article } from "types/article";
import ArticleDetail from "@components/ArticleDetail";
import React from "react";

const Page = ({ article, content }: { article: Article; content: any }) => {
  return (
    <Layout
      title={article?.translated_title}
      summary={article?.translated_description}
      image={article?.thumbnail}
      date={article?.publish_date}
      type="article"
    >
      <ArticleDetail content={content} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
  const postId = params?.postId;
  const category = params?.category?.toString();

  if (!isCategory(category) || !postId) {
    return {
      notFound: true,
    };
  }
  const paths = `https://php-news-api.kkyungvelyy.com/api/v1/articles/${category}/${postId}`;

  try {
    const { data } = await axios.get<API.GET.Articles.ID>(paths);
    const content = data.data.translated_content; // await markdownToHtml(doc.content || "");

    if (content) {
      return {
        props: {
          article: data.data,
          content,
        },
      };
    }
  } catch (e) {
    console.log(e);
  }

  // Page NotFound
  return {
    props: {},
    notFound: true,
  };
};

export async function getStaticPaths() {
  const { data } = await axios.get<API.GET.Articles.ALL>("https://php-news-api.kkyungvelyy.com/api/v1/articles");
  const paths = data.data.map((post) => ({
    params: {
      category: post?.category.toString(),
      postId: post?.post_id.toString(),
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

export default Page;
