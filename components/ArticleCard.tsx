const ArticleCard = ({ value }: any) => {
  return (
    <a href={value?.slug}>
      <article className="mx-auto group w-full shadow-2xl max-w-md pb-8 rounded-b-2xl transform duration-500 hover:-translate-y-2 cursor-pointer" style={{height: '100%'}}>
        <img src={value.thumbnail} />
        <div className="mt-14 px-4">
          <span>{value.publish_date}</span>
          <h2 className="mt-4 text-2xl text-base font-medium text-black-400">{value.translated_title}</h2>
          <p className="mt-2 text-gray-700">{value.translated_description}</p>
        </div>
      </article>
    </a>
  );
};

export default ArticleCard;
