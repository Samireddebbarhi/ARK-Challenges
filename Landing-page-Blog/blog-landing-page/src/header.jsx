import React from "react";

function Header() {
  return (
    <div className="header">
      <div class="logo">
        <img src="" alt="BlogApp"></img>
      </div>
      <div className="nav">
        <ul>
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about">Blogs</a>
          </li>
          <li className="nav-item">
            <a href="/AddBlogs">Add Blog</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Header;
