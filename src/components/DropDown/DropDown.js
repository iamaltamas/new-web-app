import React, { useRef, useState } from "react";
// import Icon from "../Icon";
import styled from "styled-components";
import PropTypes from "prop-types";

const DropdownBody = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
`;
const DropdownBodyItem = styled.div`
  height: 50px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: ${(props) =>
    props.themColor ? props.themColor : "#004C73"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${(props) =>
    props.uiManipulate ? "5px 5px 0px 0px" : "50px"};
`;
const DropDownContain = styled.div`
  margin-top: 1px;
  /* height: 229px; */
  align-self: center;
  position: absolute;
    width: 10%;
  background-color: ${(props) =>
    props.listBackgroundColor ? props.listBackgroundColor : "rgb(2, 99, 149)"};
  border-radius: 0px 0px 5px 5px;
  max-height: ${(props) =>
    props.openListHeight ? props.openListHeight : "183px"};
  overflow-x: auto;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
`;
const Tittle = styled.div`
  font-size: 12px;
  color: #fff;
`;
const DownListBody = styled.div`
  height: 35px;
  padding: 14px;
  &:hover {
    background-color: #004c73;
  }
`;
const SearchInput = styled.input`
  color: #fff;
  height: 37px;
  padding-left: 0px;
  padding-right: 0px;
  background-color: #004c73;
  border: none;
`;
const IconBody = styled.div`
  width: 30px;
  height: 30px;
  align-items: center;
  display: flex;
  justify-content: center;
`;
const DropDownList = styled.div``;
const DropDown = ({
  value,
  onOptionClick,
  width,
  themColor,
  listBackgroundColor,
  openListHeight,
  searchBar,
}) => {
  const searchRef = useRef();

  const [search, setSearch] = useState("");
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(value);
  const [selectedValue, setSelectedValue] = useState("");

  const onSearch = (search) => {
    if (search !== "") {
      let tempData = data?.filter((item) => {
        return item?.value.toLowerCase().indexOf(search.toLowerCase()) > -1;
      });
      setData(tempData);
    } else {
      setData(value);
    }
  };

  return (
    <DropdownBody width={width}>
      <DropdownBodyItem themColor={themColor} uiManipulate={clicked}>
        {clicked && searchBar ? (
          <SearchInput
            placeholder="Search.."
            value={search.value}
            ref={searchRef}
            onChange={(txt) => {
              onSearch(txt.target.value);
              setSearch(txt);
            }}
          />
        ) : (
          <Tittle>
            {selectedValue === "" ? "Select option" : selectedValue}
          </Tittle>
        )}

        <IconBody
          onClick={() => {
            setClicked(!clicked);
          }}
        >
          {/* {clicked ? <Icon iconName="up" /> : <Icon iconName="down" />} */}
        </IconBody>
      </DropdownBodyItem>

      {clicked ? (
        <DropDownContain
          listBackgroundColor={listBackgroundColor}
          openListHeight={openListHeight}
        >
          <DropDownList>
            {data?.map((item, index) => {
              return (
                <DownListBody
                  onClick={() => {
                    setSelectedValue(item?.value);
                    onOptionClick(item?.value);
                    setClicked(!clicked);
                    onSearch("");
                    setSearch("");
                  }}
                >
                  <Tittle>{item?.value}</Tittle>
                </DownListBody>
              );
            })}
          </DropDownList>
        </DropDownContain>
      ) : null}
    </DropdownBody>
  );
};

DropDown.propTypes = {
  listBackgroundColor: PropTypes.string,
  themColor: PropTypes.string,
  width: PropTypes.string,
  onOptionClick: PropTypes.func.isRequired,
  value: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
        .isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  openListHeight: PropTypes.string,
  searchBar: PropTypes.string,
};
DropDown.defaultProps = {
  searchBar: false,
};
export default DropDown;
