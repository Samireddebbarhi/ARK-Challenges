import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import ProtectedRoute from "./ProtectedRoute";
import { Route, Routes } from "react-router-dom";
function App() {
  const [blogsPost, setBlogsPost] = useState([
    {
      id: 0,
      title: "My First Blog",
      author: "Samir Ed",
      date: new Date(),
      content: `This is my first blog`,
    },
  ]);
  const title = "Blog App";
  const navigatorlinks = [
    { class: "flex", url: "#", label: "home" },
    { class: "flex", url: "#", label: "about" },
    { class: "flex", url: "#", label: "blogs" },
  ];
  function addNewPost() {
    setBlogsPost([
      ...blogsPost,
      {
        id: blogsPost[0] + 1,
        author: "Aziz",
        title: "New Post",
        description: "Write your content here.",
      },
    ]);
  }
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Header title={title} links={navigatorlinks} />}
        >
          <Route element={<ProtectedRoute />}>
            <Route path="/blogs" element={<Content posts={blogsPost} />} />
            <Route
              path="/new"
              element={<Content posts={blogsPost} addPost={addNewPost} />}
            />
          </Route>
          <Route path="/login" element={<login />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
