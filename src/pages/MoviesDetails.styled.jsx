import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const BackLink = styled(Link)`
    text-decoration: none;
    display: block;
    margin-bottom: 20px;
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
        // color: #ffffff;
        background-color: var(--accent-color);
    }
    `;