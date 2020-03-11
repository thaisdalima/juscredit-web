import Autosuggest from "react-autosuggest"
import { useState } from "react";
import './Autosuggest.scss'
const PartnerAutoSuggest = ({ partners, onSelect }) => {
    const [suggestions, setSuggestions] = useState([])
    const [value, setValue] = useState('')
    const getSuggestionValue = suggestion => suggestion.fantasyName;

    const getSuggestions = (value: string) => {
        const inputValue = value.toLowerCase()
        const inputLength = inputValue.length;
        return inputLength === 0 ? [] : partners.filter(partner => partner.fantasyName.toLowerCase().slice(0, inputLength) === inputValue)
    }

    const renderSuggestion = suggestion => (
        <div className="suggestion">
            {suggestion.fantasyName}
        </div>
    );
    const onSuggestionsFetchRequested = ({ value }) => {
        setSuggestions(getSuggestions(value))
    }

    const onChange = (event, { newValue }) => setValue(newValue)
    const inputProps = {
        placeholder: 'Buscar no mapa',
        value,
        onChange
    }

    const onSuggestionSelected = (e, { suggestion }) => {
        onSelect(suggestion)
    }
    return (
        <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
            onSuggestionSelected={onSuggestionSelected}
            onSuggestionsClearRequested={() => setSuggestions([])}
            theme={{ input: 'organis-input', suggestionsContainerOpen: 'container-open' }}
        />)
}
export default PartnerAutoSuggest