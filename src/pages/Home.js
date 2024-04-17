import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import IssueList from '../components/IssueList';
import '../css/Home.css'; 

const Home = () => {
  const { issues, repoInfo } = useContext(AppContext);

  return (
    <div className="home-container"> {/* 네모 프레임 스타일 적용 */}
      <div className="header-container"> {/* Header 스타일 적용 */}
        <h1>{repoInfo.organization} / {repoInfo.name}</h1>
      </div>
      <div className="issue-list-container"> {/* 네모 프레임 안에 이슈 리스트 컨테이너 */}
        <IssueList issues={issues} />
      </div>
    </div>
  );
};

export default Home;