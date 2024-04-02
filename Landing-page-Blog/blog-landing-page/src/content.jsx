import Button from "./button";
const Content = ({ posts, addPost }) => {
  return (
    <div className="content grid-cols-[repeat(3,1fr)] gap-4">
      {posts.map((item) => (
        <div
          key={item.id}
          className="max-w-md p-6 overflow-hidden rounded-lg shadow dark:bg-gray-50 dark:text-gray-800"
        >
          <article>
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p className="mt-4 dark:text-gray-600">{item.description}</p>
            <div className="flex items-center mt-8 space-x-4">
              <img
                src="https://source.unsplash.com/100x100/?portrait"
                alt=""
                className="w-10 h-10 rounded-full dark:bg-gray-500"
              />
              <div>
                <h3 className="text-sm font-medium">{item.author}</h3>
                <time
                  datetime={item.date}
                  className="text-sm dark:text-gray-600"
                >
                  Feb 18th 2021
                </time>
              </div>
            </div>
          </article>
        </div>
      ))}
      <Button addNewPost={addPost} />
    </div>
  );
};
export default Content;
