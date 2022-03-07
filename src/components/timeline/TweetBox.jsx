import React, { useState } from "react";
import { Avatar } from "@mui/material";
import Button from "@mui/material/Button";
import "./TweetBox.css";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from "../../firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    addDoc(collection(db, "posts"), {
      displayName: "プログラミングチュートリアル",
      username: "Shin_Engineer",
      verified: true,
      text: tweetMessage,
      avatar: "http://shincode.info/wp-content/uploads/2021/12/icon.png",
      image: tweetImage,
      timestamp: serverTimestamp()
    });

    setTweetImage("");
    setTweetMessage("");

  };

  return (
    <div className="tweetBox">
      <form action="">
        <div className="tweetBox__Input">
          <Avatar />
          <input
            placeholder="いまどうしてる？"
            type="text"
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
          />
        </div>

        <input
          type="text"
          className="tweetBox__imageInput"
          placeholder="画像のURLを入力してください"
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
        />
      </form>
      <Button
        className="tweetBox__tweetButton"
        type="submit"
        onClick={sendTweet}
      >
        ツイートする
      </Button>
    </div>
  );
}

export default TweetBox;
