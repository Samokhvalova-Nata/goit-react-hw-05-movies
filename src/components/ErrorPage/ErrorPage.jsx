import React from 'react';
import { Image } from './ErrorPage.styled';
import imgError from '../../images/page-404.png';

// const url = 'https://www.kcst.edu.kw/assets/frontend/images/coming-img.png';

const ErrorPage = () => {
    return (
        <Image src={imgError} alt={'Page 404'} />
    );
};

export default ErrorPage;