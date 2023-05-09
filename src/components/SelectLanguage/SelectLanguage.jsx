const SelectLanguage = ({ onSelect, lang }) => {
  return (
    <select
      className="header__select-language"
      name="language"
      id="language"
      value={lang}
      onChange={onSelect}
    >
      <option className="header__option" value="en">
        En
      </option>

      <option className="header__option" value="ua">
        Ua
      </option>
    </select>
  )
}

export default SelectLanguage;