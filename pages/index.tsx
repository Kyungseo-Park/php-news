import type { GetServerSideProps, NextPage } from "next";
import MainContainer from "../container/main/MainContainer";
import axios from "axios";
import Layout from "@components/Layouts";
import { API, Article } from "types/article";

// 어떻게 할지 고민 중
const Home = ({ articles }: { articles: Article[] }) => {
  return (
    <Layout
      title={`로컬메인`}
      summary={"설명"}
      image={"/img/1654213810643040.jpg"}
      date={new Date().toISOString()}
      type="article"
    >
      <MainContainer articles={articles} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await axios.get<API.GET.Articles.ALL>("https://php-news-api.kkyungvelyy.com/api/v1/articles");
  return {
    props: { articles: data.data }, // will be passed to the page component as props
  };
};

export default Home;
