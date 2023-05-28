import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MoviesItem = styled.li`
    flex-basis: calc((100% - 3 * (30px)) / 4); 
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.08), 0px 3px 3px rgba(0, 0, 0, 0.02), 1px 3px 4px rgba(0, 0, 0, 0.08);

    transition: box-shadow var(--transition), transform var(--transition);
    &:hover,
    &:focus {
        box-shadow: var(--card-shadow);
        transform: scale(1.02);
    }
`;

export const ItemLink = styled(Link)`
    text-decoration: none;
`;

export const Image = styled.img`
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: 5px;

    transition: var(--transition);
    &:hover,
    &:focus {
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
    }
`;

export const Info = styled.p`
    height: 36px;
    font-weight: 500;
    font-size: 14px;
    padding-top: 12px;
    padding-left: 8px;
    padding-right: 8px;
    padding-bottom: 12px;
    color: var(--primary-text-color);
    text-transform: uppercase;
    line-height: 1.16;
    text-align: center;
`;