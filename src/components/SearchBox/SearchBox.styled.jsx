import styled from '@emotion/styled';
import { HiSearch } from "react-icons/hi";

export const Form = styled.form`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
    margin-top: 24px;
    margin-bottom: 24px;
    outline: transparent;
    transition: outline var(--transition);

    &:hover,
    & focus {
        outline: 1px solid black;
    }
`;

export const Input = styled.input`
    outline: transparent;
    height: 35px;
    flex-grow: 1;
    font-size: 16px;
    padding-left: 15px;
    border: 0;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
`;

export const Button = styled.button`
    display: inline-block;
    width: 36px;
    height: 37px;
    border: 0;
    // opacity: 0.5;
    transition: var(--transition);
    cursor: pointer;
    outline: none;
    background-color: var(--accent-color);

    &:hover,
    & focus {
        // opacity: 1;
    }
`;

export const SearchIcon = styled(HiSearch)`
    // width: 20px;
    // height: 20px;
    transition: transform var(--transition);
    &:hover {
        color: #ffffff;
        transform: scale(1.2);
    }
`;
