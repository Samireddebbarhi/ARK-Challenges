const Email = ({ variable, Function }) => {
  const paragr1 = () => {
    return (
      <p className="p1">
        Hi <b>{variable}</b>,
      </p>
    );
  };
  const paragr2 = () => {
    return (
      <p className="p2">
        I wanted to let you know as soon as possible that I will be staying home
        from work today.
      </p>
    );
  };
  const paragr3 = () => {
    return (
      <p className="p3">
        Unfortunately, I developed a stomach bug that has made it very difficult
        to get work done.
      </p>
    );
  };
  const paragr4 = () => {
    return (
      <p className="p4">
        I went to urgent care last night and was told it should subside within
        {Function} hours. I do not expect to be online throughout the day.
      </p>
    );
  };
  const paragr5 = () => {
    return (
      <p className="p5">
        While I do plan to be back in the office tomorrow, I’ve asked Kelly to
        take over for me today in case any emergencies arise. I had an important
        call scheduled with a supplier, but Daniel has agreed to manage the
        meeting.
      </p>
    );
  };
  const paragr6 = () => {
    return (
      <p className="p6">
        Please let me know of any additional steps you’d like me to take to
        ensure the day runs as smoothly as possible in my absence.
      </p>
    );
  };
  const paragr7 = () => {
    return <p className="p7">Thank you,</p>;
  };
  const paragr8 = () => {
    return <p className="p8">{variable}</p>;
  };
  return (
    <div id="email">
      {paragr1()}
      {paragr2()}
      {paragr3()}
      {paragr4()}
      {paragr5()}
      {paragr6()}
      {paragr7()}
      {paragr8()}
    </div>
  );
};

export default Email;
