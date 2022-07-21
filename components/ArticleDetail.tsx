import React, { useEffect, useRef, useState } from "react";

const ArticleDetail = ({ content, data }: { content: string; data: string }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isKorea, setIsKorean] = useState(true);
  const innerHtml = useRef<HTMLInputElement>(null);
  const originHtml = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const englishTags = originHtml.current?.getElementsByTagName("pre");
    if (englishTags) {
      const tags = innerHtml.current?.getElementsByTagName("pre");
      if (englishTags.length === tags?.length) {
        for (let i = 0; i < tags.length; i++) {
          tags[i].innerHTML = englishTags[i].innerHTML;
        }
      }
    }
  }, [data]);
  const onClickArticleLang = () => {
    setIsKorean(!isKorea);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <>
      <article className="article-section">
        <div
          ref={innerHtml}
          dangerouslySetInnerHTML={{ __html: content }}
          style={{ display: isKorea ? "block" : "none" }}
        />
        <div
          ref={originHtml}
          dangerouslySetInnerHTML={{ __html: data }}
          style={{ display: isKorea ? "none" : "block" }}
        />
      </article>

      <button
        style={{
          position: "fixed",
          right: "20px",
          padding: "5px 20px",
          backgroundColor: isHovering ? "#008CBA" : "#ffffffab",
          color: isHovering ? "white" : "black",
          border: "2px solid #7f7f7f",
          textAlign: "center",
          fontSize: "16px",
          WebkitTransitionDuration: "0.4s",
          transitionDuration: "0.4s",
          bottom: "20px",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClickArticleLang}
      >
        한영
        <br />
        전환
      </button>
    </>
  );
};
export default ArticleDetail;
