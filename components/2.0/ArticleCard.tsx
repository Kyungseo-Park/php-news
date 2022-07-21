import React from "react";
import { tags } from "docs/article_data";
import { Article } from "types/article";

const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <a href={`/${article.category}/${article.post_id}`} key={article.post_id}>
      <div
        className="card w-96 glass card-compact bg-base-100 shadow-xl transform duration-500 hover:-translate-y-2 cursor-pointer"
        style={{ maxWidth: "100%" }}
      >
        <figure>
          <img src={article.thumbnail} />
        </figure>
        <div className="card-body">
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={article.author_avatar} alt={article.author} />
              </div>
            </div>
            <div>
              <div className="font-bold dark:text-slate-700 dark:hover:text-white-700">{article.author}</div>
              <div className="text-sm opacity-50 dark:text-slate-700 dark:hover:text-white-900">
                {article.publish_date}
              </div>
            </div>
          </div>
          <h2 className="card-title dark:text-slate-700 dark:hover:text-white-700">{article.translated_title}</h2>
          <p className="dark:text-slate-500 dark:hover:text-white-500">{article.translated_description}</p>
          <div className="card-actions justify-end">
            {tags.map((tag, index) => (
              <div key={index} className="badge badge-outline">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ArticleCard;
