import styled from "styled-components";
import { Button, Container } from "../App";

const SearchResult = ({ data, baseUrl }) => {
  return (
    <>
      <FoodCardContainer>
        <Container>
          <FoodCards>
            {data?.map((item, idx) => {
              return (
                <FoodCard key={idx}>
                  <div className="food_image">
                    <img src={baseUrl + item.image} alt="food image" />
                  </div>
                  <div className="food_info">
                    <div className="info">
                      <h3>{item.name}</h3>
                      <p>{item.text}</p>
                    </div>
                    <Button>${item.price.toFixed(2)}</Button>
                  </div>
                </FoodCard>
              );
            })}
          </FoodCards>
        </Container>
      </FoodCardContainer>
    </>
  );
};

export default SearchResult;

const FoodCardContainer = styled.section`
  min-height: calc(100vh - 190px);
  background-image: url("./images/bg.png");
  background-size: cover;
`;
const FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
  column-gap: 32px;
  padding: 50px;
`;
const FoodCard = styled.div`
  width: 340px;
  height: 167px;
  border: 0.6px solid;
  backdrop-filter: blur(13.1842px);
  border-radius: 20px;
  display: flex;
  padding: 8px;

  .food_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    h3 {
      margin-top: 8px;
      font-size: 16px;
      font-weight: 500;
    }
    p {
      margin-top: 4px;
      font-size: 12px;
    }
    button {
      font-size: 12px;
    }
  }
`;
