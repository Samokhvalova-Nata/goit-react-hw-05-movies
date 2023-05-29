import React from 'react';
import { Image } from './ErrorPage.styled';

const url = 'https://www.kcst.edu.kw/assets/frontend/images/coming-img.png';

const ErrorPage = () => {
    return (
        <Image src={url} alt={'Page 404'} />
    )
}

export default ErrorPage;