import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import "../assets/css/Overview.css";
import { Carousel } from "rsuite";
import t1 from "../assets/images/top/t1.png";
import t2 from "../assets/images/top/t2.png";
import t3 from "../assets/images/top/t3.png";
import t4 from "../assets/images/top/t4.png";
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

function shuffleArray(array) {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export default function Overview() {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const recommendedBooks = shuffleArray(books);
  const recentReadings = shuffleArray(books);
  const academicBooks = shuffleArray(books);
  const journals = shuffleArray(books);

  return (
    <div className="home-con">
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
      <div className="home-top">
        <Carousel
          className="custom-slider home-left-slider"
          autoplay
          autoplayInterval={3000}
        >
          <div className="home-top-left-slider">
            <p className="home-top-left-head">Today's Quote</p>
            <p className="home-top-left-body">
              “There is more treasure in books than in all the pirate’s loot on
              Treasure Island.”
            </p>
            <p className="home-top-left-name">-Walt Disney</p>
          </div>
          <div className="home-top-left-slider">
            <p className="home-top-left-head">Inspiration of the Day</p>
            <p className="home-top-left-body">
              “The only limit to our realization of tomorrow is our doubts of
              today.”
            </p>
            <p className="home-top-left-name">-Franklin D. Roosevelt</p>
          </div>
          <div className="home-top-left-slider">
            <p className="home-top-left-head">Motivation Quote</p>
            <p className="home-top-left-body">
              “The future belongs to those who believe in the beauty of their
              dreams.”
            </p>
            <p className="home-top-left-name">-Eleanor Roosevelt</p>
          </div>
        </Carousel>
        <div className="home-top-right">
          <p className="new-arrivals-title">New Arrivals</p>
          <div className="arr-con">
            <div className="arr-img-con">
              <img className="arr-img" src={t1} />
            </div>
            <div className="arr-img-con">
              <img className="arr-img" src={t2} />
            </div>
            <div className="arr-img-con">
              <img className="arr-img" src={t3} />
            </div>
            <div className="arr-img-con">
              <img className="arr-img" src={t4} />
            </div>
          </div>
        </div>
      </div>
      <p className="home-morning">Good Morning John!</p>
      <div className="home-book-cats">
        <div className="home-rec">
          <p className="home-rec-name">Recommended for You</p>
          <p className="home-rec-show">Show All</p>
        </div>
        <div className="home-rec-list">
          {recommendedBooks.map((book, index) => (
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
      <div className="home-book-cats">
        <div className="home-rec">
          <p className="home-rec-name">Recent Readings</p>
          <p className="home-rec-show">Show All</p>
        </div>
        <div className="home-rec-list">
          {recentReadings.map((book, index) => (
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
      <div className="home-book-cats">
        <div className="home-rec">
          <p className="home-rec-name">Academic Books</p>
          <p className="home-rec-show">Show All</p>
        </div>
        <div className="home-rec-list">
          {academicBooks.map((book, index) => (
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
      <div className="home-book-cats">
        <div className="home-rec">
          <p className="home-rec-name">
            Journals, Articles & Paper Publications
          </p>
          <p className="home-rec-show">Show All</p>
        </div>
        <div className="home-rec-list">
          {journals.map((book, index) => (
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
    </div>
  );
}
