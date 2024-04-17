import React from 'react';
import { Link } from 'react-router-dom';
import AdBanner from '../components/AdBanner';
import '../css/IssueList.css';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}년 ${month}월 ${day}일`;
};

const IssueList = ({ issues }) => {
  return (
    <div className="issue-list-container">
      {issues.map((issue, index) => (
        <div key={issue.id} className="issue-item">
          <div className="issue-order">
            <div className="issue-content">
              <p id="title">#{issue.number} <Link className="issue-link" to={`/issue/${issue.number}`}>{issue.title}</Link></p> {/* 이슈 번호 클릭 시 해당 이슈 상세 페이지로 이동 */}
              <p>작성자: {issue.user.login}, 작성일: {formatDate(issue.created_at)}</p>
            </div>
            <div className="comment-info">
              <p>코멘트: {issue.comments}</p>
            </div>
          </div>
          <hr />
          {index % 4 === 3 && <AdBanner />} {/* 다섯 번째 이슈마다 광고 이미지 배너 삽입 */}
        </div>
      ))}
    </div>
  );
};

export default IssueList;
