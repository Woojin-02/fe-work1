import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// 컨텍스트 생성
export const AppContext = createContext();

// 컨텍스트 프로바이더
export const AppProvider = ({ children }) => {
  const [issues, setIssues] = useState([]); // 이슈 목록을 저장하기 위한 상태
  const [repoInfo, setRepoInfo] = useState({ organization: '', name: '' }); // Organization Name과 Repository Name을 저장하기 위한 상태

  useEffect(() => {
    // 이슈 목록을 가져오는 API 호출
    axios.get('https://api.github.com/repos/angular/angular-cli/issues?state=open&sort=comments')
      .then(response => {
        setIssues(response.data); // API 응답으로 받은 데이터를 상태에 저장
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

    // Organization Name과 Repository Name을 가져오는 API 호출
    axios.get('https://api.github.com/repos/angular/angular-cli')
      .then(response => {
        const { organization, name } = response.data;
        setRepoInfo({ organization: organization.login, name });
      })
      .catch(error => {
        console.error('Error fetching repo info:', error);
      });
      
  }, []); // 컴포넌트가 마운트될 때 한 번만 실행되도록 빈 배열을 useEffect의 두 번째 인자로 전달

  return (
    <AppContext.Provider value={{ issues, repoInfo }}>
      {children}
    </AppContext.Provider>
  );
};
