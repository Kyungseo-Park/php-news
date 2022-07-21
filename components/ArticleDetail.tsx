import React from "react";
import { Article } from "types/article";

const ArticleDetail = ({ content }: { content: string }) => {
  return (
    <article className="article-section">
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </article>
  );
};
export default ArticleDetail;
