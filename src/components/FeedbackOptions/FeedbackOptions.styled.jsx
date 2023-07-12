import styled from "@emotion/styled";

export const ButtonFeedbackOptions = styled.button`
    width: 150px;
    height: 32px;
    
    border-radius: 8px;
    border: none;

    
    background-image: linear-gradient(to top right,#5702a2, #a21f4d);
    color: rgba(203, 174, 68, 0.9);
    font-weight: 600;
    cursor: pointer;
    transition: background-color 250ms, box-shadow 250ms;
    
    &:hover,
    &:focus{
        box-shadow: 0 0 16px 4px  rgb(252, 201, 16);
        color: rgb(252, 201, 16);
    }

    &:active {
        box-shadow: 0 0 16px 4px  rgb(252, 201, 16);
        color: rgb(252, 201, 16);
        transition: background-color 50ms, box-shadow 50ms;
    }
`

export const DivFeedbackOptions = styled.div`
    display: flex;
    margin-top: 10px;
    gap: 10px;
    justify-content: center;
`