import { useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';

function App() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&maxResult=20&chart=mostPopular&key=AIzaSyAX2pEnih1KmY2uC-bmsBGWv_RCi-u_KOU", requestOptions)
      .then(response => response.json())
      // .then(result => console.log(result))
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, [])

  return (
    <div className={styles.app}>
      <SearchHeader />
      <VideoList videos={videos}/>
    </div>
  );
}

export default App;







