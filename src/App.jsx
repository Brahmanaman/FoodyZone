import React, { useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResult";

const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState("");
  const [selectedButton, setSelectedButton] = useState("");

  useState(() => {
    const fetchFoodData = async () => {
      try {
        setLoading(true);
        const response = await fetch(BASE_URL);
        const result = await response.json();
        setData(result);
        setFilteredData(result);
        setLoading(false);
      } catch (error) {
        setError("unable to fetch data");
      }
    };
    fetchFoodData();
  }, []);

  const searchFood = (e) => {
    const seachedFood = e.target.value;
    if (seachedFood === "") {
      filterFood(selectedButton);
      return;
    }
    const filter = data?.filter((item) => {
      return item.name.toLowerCase().includes(seachedFood.toLowerCase());
    });
    setFilteredData(filter);
  };

  const filterFood = (type) => {
    if (type === "all") {
      setFilteredData(data);
      setSelectedButton("all");
      return;
    }
    const filter = data.filter((item) => {
      return item.type.toLowerCase().includes(type);
    });
    setFilteredData(filter);
    setSelectedButton(type);
  };

  const filtersBtn = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];

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
            <input
              type="text"
              placeholder="Search Food"
              onChange={searchFood}
            />
          </div>
        </TopContainer>
        <FilterContainer>
          {filtersBtn.map((filterbtn, idx) => {
            return (
              <Button
                $isSelected={filterbtn.type === selectedButton}
                key={idx}
                onClick={() => {
                  filterFood(filterbtn.type);
                }}
              >
                {filterbtn.name}
              </Button>
            );
          })}
        </FilterContainer>
      </Container>
      <SearchResult data={filteredData} baseUrl={BASE_URL} />
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
      outline: none;
    }
  }

  @media (0 < width < 600px) {
    flex-direction: column;
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
  background-color: ${(props) => (props.$isSelected ? "#f82c2c" : "#ff4343;")};
  border-radius: 5px;
  padding: 6px 12px;
  border: ${(props) => (props.$isSelected ? "1px solid white" : "none")};
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #f82c2c;
  }
`;
