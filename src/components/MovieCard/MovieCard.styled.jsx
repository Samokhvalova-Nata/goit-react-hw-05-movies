import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrap = styled.div`
    display: flex;
    gap: 20px;
    // justify-content: space-between;
    // align-items: center;
    padding-bottom: 26px;
    border-bottom: 1px solid black;
`;

export const Image = styled.img`
    display: block;
    border-radius: 5px;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;

    > h1 {
        font-size: 30px;
    }

    > p {
        max-width: 800px;
        font-size: 16px;
        color: var(--primary-text-color);
    }

    > h3 {
        font-size: 20px;
    }
`;

export const AddInfo = styled.div`
margin-top: 15px;
text-align: center;

> h3 {
    margin-bottom: 15px;
}
> ul {
    margin-top: 10px;
    display: flex;
    gap: 15px;
    
    justify-content: center;
    align-items: center;
}
`;

export const AddLink = styled(Link)`
text-decoration: none;
    display: block;
    margin-bottom: 15px;
    outline: 1px solid var(--accent-color);
    // background-color: var(--accent-color);
    border-radius: 5px;
    width: 60px;
    padding: 4px;
    text-align: center;
    font-weight: 500;
    font-size: 14px;
    color: black;

    transition: transform var(--transition), background-color var(--transition);
    
    &:hover,
    &:focus {
        transform: scale(1.05);
        background-color: var(--accent-color);
        // color: #ffffff;
    }
`;