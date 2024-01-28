const summarizeArticle = (link) => {
  const { result } = fetch(link).then((res) => res.json);

  return result;
};
