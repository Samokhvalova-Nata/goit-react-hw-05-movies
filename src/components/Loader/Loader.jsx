import { ThreeDots } from 'react-loader-spinner';
import { Wrap } from './Loader.styled';

const Loader = () => {
    return (
        <Wrap>
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#B92F2C"
                ariaLabel="three-dots-loading"
                visible={true}
            />
        </Wrap>
    )
};

export default Loader;