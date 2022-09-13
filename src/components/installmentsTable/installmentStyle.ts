import styled from "styled-components";

export const Container = styled.div`
  width: 929px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .organize_element-table {
    display: flex;
    flex-direction: row;
  }
`;
export const TableStyle = styled.table`
  width: 967px;
  background-color: #ffffff;
  thead {
    font-weight: 700;
    font-size: 16px;
    color: #333333;

    th {
      border-bottom: 1px solid #c4c4c4;
      padding: 10px 0px;
    }
    tr {
      border-bottom: 1px solid #c4c4c4;
    }
  }
  tbody {
    font-weight: 400;
    font-size: 16px;
    color: #333333;

    td {
      border-bottom: 1px solid #c4c4c4;
      padding: 10px 0px;
    }
    tr {
      border-bottom: 1px solid #c4c4c4;
    }
  }
`;

export const WrapperDiv = styled.div`
  background-color: #ffffff;
  width: 90vw;
  max-width: 967px;
  height: fit-content;
  border-radius: 5px;
  margin-bottom: 200px;
  padding: 50px 33px 0px 33px;
  button {
    width: 94vw;
    max-width: 929px;
    height: 44px;
    margin: 50px 0 ;
    background-color: #21ae1e;
    color: #ffffff;
    border: 0;
    font-size: 16px;
    font-weight: 700;
    border-radius: 5px;
    margin-bottom: 38px;
    letter-spacing: 2.2px;
  }
`;
