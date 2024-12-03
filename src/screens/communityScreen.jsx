import { useState } from "react";

const CommunityScreen = () => {
  const [replyFlag, setReplyFlag] = useState(false);

  const [commentData, setCommentData] = useState([]);
  const [commentReply, setCommentReply] = useState("");

  const commentReplyHandler = (e) => {
    setCommentReply(e.target.value);
  };

  const SubmitCommentHandler = (e) => {
    e.preventDefault();
    if (commentReply !== "") {
      setCommentData([...commentData, commentReply]);
    }
    setCommentReply("");
  };

  const replyHandler = () => {
    setReplyFlag((prevFlag) => !prevFlag);
  };

  return (
    <>
      <h1>Community Screen</h1>
      <div className="container">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">How to improve my freelancing skill?</h5>
                <h6 className="card-title">
                  Posted by: User123 | Views: 45 | Responses: 10
                </h6>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <button
                  type="button"
                  onClick={replyHandler}
                  className="btn btn-transparent border"
                >
                  Reply
                </button>
                {replyFlag && (
                  <div>
                    <form onSubmit={SubmitCommentHandler}>
                      <div className="form-group">
                        <textarea
                          className="form-control mt-2"
                          id="replyTextArea"
                          rows={3}
                          value={commentReply}
                          onChange={commentReplyHandler}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-transparent border mt-2"
                      >
                        Post Reply
                      </button>
                    </form>
                  </div>
                )}
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
              <div className="card-body border-top">
                {commentData.length > 0 &&
                  commentData.map((data, index) => (
                    <p key={index} className="card-text">
                      {`User123: ${data}`}
                    </p>
                  ))}
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <img
                style={{ maxWidth: "100%" }}
                src="https://tse2.mm.bing.net/th?id=OIP.NISwT8Np3gBOPrMoy29rRAHaHa&pid=Api&P=0&h=180"
                className="img-fluid rounded"
                alt="Card Image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityScreen;
