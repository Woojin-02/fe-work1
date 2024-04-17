import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../contexts/AppContext';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import '../css/IssueDetailPage.css';

const IssueDetail = () => {
  const { issueNumber } = useParams();
  const { repoInfo } = useContext(AppContext);
  const [issue, setIssue] = useState(null);

  useEffect(() => {
    // API를 통해 이슈 상세 정보 가져오기
    axios.get(`https://api.github.com/repos/${repoInfo.organization}/${repoInfo.name}/issues/${issueNumber}`)
      .then(response => {
        setIssue(response.data); // API 응답으로 받은 데이터를 상태에 저장
      })
      .catch(error => {
        console.error('Error fetching issue detail:', error);
      });
  }, [issueNumber, repoInfo.organization, repoInfo.name]);

  // 이슈 정보가 로딩 중이거나 없는 경우를 처리
  if (!issue) {
    return <div>Loading...</div>;
  }

  return (
    <div className="issue-detail-container">
      <h1>{repoInfo.organization} / {repoInfo.name}</h1>

      {/* 이슈 정보 표시 */}
      <div className="issue-info-container">
        <img src={issue.user.avatar_url} alt="Author Avatar" className="author-avatar" />
        <div className="issue-details">
          <p>#{issue.number} {issue.title}</p>
          <p>작성자: {issue.user.login}, 작성일: {issue.created_at}, 코멘트: {issue.comments}</p>
        </div>
      </div>
      <hr />

      <ReactMarkdown>{issue.body}</ReactMarkdown>
    </div>
  );
};

export default IssueDetail;
