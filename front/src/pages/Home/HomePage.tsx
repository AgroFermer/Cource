import React, {useContext, useState} from 'react';
import BaseLayout from "../../components/Sidebar/BaseLayout";
import {Context} from "../index";
import {IUser} from "../../models/IUser";
import UserService from "../../service/UserService";
import styles from "../../styles/video.module.scss"

const HomePage = () => {
  const {store} = useContext(Context);
  const [users, setUsers] = useState<IUser[]>([]);
  

  async function getUsers() {
    try {
        const response = await UserService.fetchUsers();
        setUsers(response.data);
    } catch (e) {
        console.log(e);
    }
}

const videoData = [
  {
    title: 'Lessons 1',
    videoUrl: '/video/video.mp4'
  },
  {
    title: 'Lessons 2',
    videoUrl: '/video/video2.mp4'
  },
  // Добавьте другие видео в список
];

const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };


  return (
      <BaseLayout>
              <div>
            {selectedVideo && (
              <div>
                <video className={styles.player} src={selectedVideo} controls />
              </div>
            )}
            <div className={styles.videoList}>
              <ul>
                {videoData.map((video, index) => (
                  <li className={styles.amb} key={index} onClick={() => handleVideoClick(video.videoUrl)}>
                    {video.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        <h1>{store.user.isActivated ? '' : 'ПОДТВЕРДИТЕ АККАУНТ!!!!'}</h1>
        {users.map(user =>
                <div key={user.email}>{user.email}</div>
            )}
      </BaseLayout>
  )
};

export default HomePage;
