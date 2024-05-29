import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import "../assets/css/Search.css";
import b1 from "../assets/images/body/b1.png";
import b2 from "../assets/images/body/b2.png";
import b3 from "../assets/images/body/b3.png";
import b4 from "../assets/images/body/b4.png";
import b5 from "../assets/images/body/b5.png";
import b6 from "../assets/images/body/b6.png";
import b7 from "../assets/images/body/b7.png";
import b8 from "../assets/images/body/b8.png";

const settings = ["Profile", "Favourite", "Logout"];

const books = [
  {
    title: "Don’t Make Me think",
    author: "Steve Krug, 2000",
    rating: 4.5,
    img: b1,
  },
  {
    title: "The Design of Every...",
    author: "Don Norman, 1988",
    rating: 4.0,
    img: b2,
  },
  {
    title: "Sprint : How to solve...",
    author: "Jake Knapp, 2000",
    rating: 4.9,
    img: b3,
  },
  {
    title: "Learn UX : Design Gr...",
    author: "Jeff Gothelf, 2016",
    rating: 4.7,
    img: b4,
  },
  {
    title: "The Road to React",
    author: "Steve Krug, 2000",
    rating: 4.5,
    img: b5,
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert T.Kiyosaki, 1997",
    rating: 4.6,
    img: b6,
  },
  {
    title: "Harry Potter and The...",
    author: "J.K. Rowling, 2002",
    rating: 5.0,
    img: b7,
  },
  {
    title: "You Don’t Know JS: S..",
    author: "Kyle Simpson, 2014",
    rating: 4.8,
    img: b8,
  },
];

const bookTitles = books.map((book) => book.title);

export default function Search() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [value, setValue] = React.useState(null);
  const [inputValue, setInputValue] = React.useState("");

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className="srch-con">
      <div className="home-nav">
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip onClick={handleOpenUserMenu} title="Open settings">
            <div className="home-nav-tooltip">
              <IconButton sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://hips.hearstapps.com/hmg-prod/images/mh-9-22-wick-650dcf0aeb656.jpg?crop=0.447xw:0.895xh;0,0&resize=640:*"
                />
              </IconButton>
              <p className="home-nav-name">John Wick</p>
              <span className="material-symbols-outlined">
                keyboard_arrow_down
              </span>
            </div>
          </Tooltip>
          <Menu
            sx={{ mt: "55px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem
                key={setting}
                onClick={handleCloseUserMenu}
                style={{ width: "150px" }}
              >
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </div>
      <div className="srch-title">Type or select a book from the dropdown</div>
      <div className="srch-searchbar">
        <Autocomplete
          className="srch-autocomplete"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          options={bookTitles}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Search books" variant="outlined" />
          )}
        />
      </div>
      <button className="srch-btn">Show Recommendations</button>
      <div className="home-rec-list srch-book-list">
        {books.map((book, index) => (
          <div className="book-card" key={index}>
            <img src={book.img} alt={book.title} className="book-img" />
            <div className="book-info">
              <p style={{ fontWeight: "600" }}>{book.title}</p>
              <p>{book.author}</p>
              <p>{book.rating}/5</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
