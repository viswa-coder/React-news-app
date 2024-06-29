import React, { useState, useEffect, useCallback } from "react";
import Newsitem from "./Newsitem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const { category, setProgress, apiKey } = props;
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchNews = useCallback(async (page) => {
    setProgress(10); // Start the loading bar
    try {
      const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=in&max=10&apikey=${apiKey}&page=${page}`;
      const response = await fetch(url);
      setProgress(30); // Update the progress bar
      const data = await response.json();
      setProgress(70); // Update the progress bar
      if (data.articles.length === 0) {
        setHasMore(false);
      } else {
        setArticles((prevArticles) => (page === 1 ? data.articles : [...prevArticles, ...data.articles]));
      }
      setProgress(100); // Complete the loading bar
    } catch (error) {
      console.error("Error fetching news:", error);
      setProgress(100); // Complete the loading bar on error
    }
  }, [category, apiKey, setProgress]);

  useEffect(() => {
    setArticles([]);
    setPage(1);
    setHasMore(true);
    fetchNews(1);
  }, [category, props.country, props.pageSize, setProgress, apiKey, fetchNews]);

  useEffect(() => {
    document.title = `${category.charAt(0).toUpperCase() + category.slice(1)} - React News`;
  }, [category]);

  const fetchMoreData = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchNews(nextPage);
  };

  return (
    <Container className="mt-3" style={{ overflow: "hidden" }}>
      <h1 className="text-center" style={{ marginTop: '50px' }}>
        React News - Top {category.charAt(0).toUpperCase() + category.slice(1)} Headlines
      </h1>

      {page === 1 && !articles.length ? (
        <div className="d-flex justify-content-center my-3">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={
            <div className="text-center">
              <Spinner animation="border" role="status" />
              <span className="visually-hidden">Loading...</span>
            </div>
          }
          style={{ overflow: "visible" }} // Ensure no overflow issues
        >
          <Row className="g-4 my-3">
            {articles.map((article, index) => (
              <Col md={4} key={index}>
                <Newsitem
                  title={article.title ? article.title : " "}
                  description={article.description ? article.description : ""}
                  imageUrl={article.image}
                  newsUrl={article.url}
                  author={article.source.name}
                  date={article.publishedAt}
                />
              </Col>
            ))}
          </Row>
        </InfiniteScroll>
      )}
    </Container>
  );
};

export default News;
