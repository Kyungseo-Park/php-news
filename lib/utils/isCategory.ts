export const isCategory = (category?: string) => {
  if (category) {
    const categoryList = ["news", "tutorials", "videos", "php-annotated-monthly", "features", "events", "eap"];
    return !!categoryList.includes(category);
  }
  return false;
};
