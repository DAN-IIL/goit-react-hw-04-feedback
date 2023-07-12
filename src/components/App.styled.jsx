import styled from '@emotion/styled'

export const Container = styled.div`    

    border-radius: 8px;
    box-shadow: 0 0 8px 2px #e303fcd1;
    @media screen and (min-width: 375px) {
        width: calc(375px - 60px);

    }
    margin-left: auto;
    margin-right: auto;
    padding: 20px 20px;
`;

export const FormTitle = styled.div`
text-transform: uppercase;
font-weight: 600;
    text-align: center;
    font-size: 24px;
    margin-bottom: 12px;
`;

export const ContnactsTitle = styled.div`
font-weight: 600;
    text-align: center;
    font-size: 24px;
    margin-bottom: 12px;
`;
