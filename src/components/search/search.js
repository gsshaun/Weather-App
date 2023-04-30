import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import {LOCATION_API_URL} from "../../const/api_const"

const Search = ({onSearchChange}) => {

    const [search, setSearch] = useState(null);

    const handleChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    const loadOption = (searchData) => {
        return fetch(`${LOCATION_API_URL}?namePrefix=${searchData}`, process.env.OPTIONS)
            .then(response => response.json())
            .then(response => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name} ${city.countryCode}`,
                        };
                    })
                };
            })
            .catch(err => console.error(err));
    }

    return (
        <AsyncPaginate
            placeholder="City"
            debounceTimeout={200}
            value={search}
            onChange={handleChange} 
            loadOptions={loadOption}
        />
    )
}

export default Search;