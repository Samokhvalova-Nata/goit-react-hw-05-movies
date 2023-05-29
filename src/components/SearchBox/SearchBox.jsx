import PropTypes from 'prop-types';
import { useState } from "react";
import { Form, Input, Button, SearchIcon } from "./SearchBox.styled"
import { Notify } from "notiflix";

const SearchBox = ({ value, onSubmit }) => {
    const [query, setQuery] = useState(value);

    const handleInputChange = e => setQuery(e.currentTarget.value);

    const handleSubmit = e => {
        e.preventDefault();
        if (query.trim() === '') {
            Notify.failure('Sorry, enter something in search line.');
            return;
        }
        onSubmit(query);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Input autoComplete="off"
                type="text"
                value={query}
                onChange={handleInputChange}
                autoFocus
                placeholder="Search movie" />
            <Button type="submit" aria-label="Search">
                <SearchIcon size={20} />
            </Button>
        </Form>
    )
};

SearchBox.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    value: PropTypes.string,
};

export default SearchBox;
