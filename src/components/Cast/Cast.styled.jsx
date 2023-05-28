import styled from '@emotion/styled';

export const CastList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    list-style: none;

    > li {
        flex-basis: calc((100% - 6 * (10px)) / 7);
        border-radius: 5px;
        background-color: #ffffff; 
        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.08), 0px 3px 3px rgba(0, 0, 0, 0.02), 1px 3px 4px rgba(0, 0, 0, 0.08);
    }
`;

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-bottom: 30px;
`;

export const Image = styled.img`
    width: 100%;
    // height: 100%;
    height: 304px;
    display: block;
    object-fit: contain;
    border-radius: 5px;

    transition: var(--transition);
    &:hover,
    &:focus {
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
    }
`;

export const Name = styled.p`
font-size: 16px;
font-weight: 500;
padding-top: 12px;
    padding-left: 8px;
    padding-right: 8px;
    padding-bottom: 12px;
    text-align: center;
`;

export const Role = styled.p`
// padding-top: 12px;
    padding-left: 8px;
    padding-right: 8px;
    padding-bottom: 12px;
    text-align: center;
`;

export const Info = styled.p`
    // height: 36px;
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