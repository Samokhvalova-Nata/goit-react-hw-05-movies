import styled from '@emotion/styled';

export const ReviewsList = styled.ul`
margin-top: 10px;
    display: flex;
    gap: 15px;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 20px;

> li {
    margin-top: 18px;
    
}
> li > h4 {
    margin-bottom: 5px;
    font-size: 16px;
}

> li > p {
    max-width: 1200px;
    font-size: 16px;
    color: var(--primary-text-color);
}
`;

export const ErrorHandler = styled.div`
    margin-top: 18px;
    margin-left: 15px;
    font-size: 16px;
    color: var(--primary-text-color);
`;
