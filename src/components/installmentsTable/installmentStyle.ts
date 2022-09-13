import styled from "styled-components";

export const Container = styled.div`
width: 929px;
background-color: #FFFFFF;
display: flex;
flex-direction: column;
justify-content: flex-start;
padding-left: 39px;

.organize_element-table{
    display: flex;
    flex-direction: row;
}
`
export const TableStyle = styled.table`
width: 967px;
background-color: #FFFFFF;
thead{
    font-weight: 700;
    font-size: 16px;
    color: #333333;   
   
    th{
        border-bottom: 1px solid #C4C4C4;
        padding: 10px 0px
      
    }
    tr{
        border-bottom: 1px solid #C4C4C4;
    }
}
tbody{
  
    font-weight: 400;
    font-size: 16px;
    color: #333333;

    td{
        border-bottom: 1px solid #C4C4C4;
        padding: 10px 0px
    }
    tr{
        border-bottom: 1px solid #C4C4C4;
    }
}


`

export const WrapperDiv = styled.div`
 background-color: #FFFFFF;
 width: 1000px;
 height: fit-content;
 border-radius: 5px;
`