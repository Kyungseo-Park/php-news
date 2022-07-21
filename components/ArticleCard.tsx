import React from "react";
import { Article } from "types/article";

const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <a href={`/${article.category}/${article.post_id}`}>
      <article
        className="mx-auto group w-full shadow-2xl max-w-md pb-8 rounded-b-2xl transform duration-500 hover:-translate-y-2 cursor-pointer"
        style={{ height: "100%" }}
      >
        <img src={article.thumbnail} />
        <div className="mt-14 px-4">
          <span>{article.publish_date}</span>
          <h2 className="mt-4 text-2xl text-base font-medium text-black-400">{article.translated_title}</h2>
          <p className="mt-2 text-gray-700">{article.translated_description}</p>
        </div>
      </article>
    </a>
  );
};

export default ArticleCard;
