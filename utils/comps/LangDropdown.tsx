import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { languageOptions } from "../data/selectData";
const defaultOption = languageOptions[1];
import select from "../../styles/reactSelect.module.css";
const LangDropdown = () => {
  return (
    <Dropdown
      options={languageOptions}
      // onChange={console.log(languageOptions)}
      value={defaultOption}
      placeholder="Select an option"
      className={select.dropdown}
    />
  );
};

export default LangDropdown;
