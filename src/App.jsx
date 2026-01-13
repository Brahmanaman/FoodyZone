import React, { useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResult";

const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState("");

  useState(() => {
    const fetchFoodData = async () => {
      try {
        setLoading(true);
        const response = await fetch(BASE_URL);
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError("unable to fetch data");
      }
    };
    fetchFoodData();
  }, []);

  if (error) {
    return <div>{erorr}</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="./images/FoodyZone.svg" alt="logo" />
          </div>
          <div className="search">
            <input type="text" placeholder="Search Food" />
          </div>
        </TopContainer>
        <FilterContainer>
          <Button>All</Button>
          <Button>BreakFast</Button>
          <Button>Lunch</Button>
          <Button>Dinner</Button>
        </FilterContainer>
      </Container>
      <SearchResult data={data} baseUrl={BASE_URL} />
    </>
  );
};

export default App;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 16px;

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
    }
  }
`;

const FilterContainer = styled.section`
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
`;
export const Button = styled.button`
  background-color: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #f82c2c;
  }
`;
