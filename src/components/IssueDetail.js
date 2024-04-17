import React from 'react';
import { useParams } from 'react-router-dom';

function IssueDetail() {
  const { issueNumber } = useParams();

  return (
    <div className="issue-detail-container">
    </div>
  );
}

export default IssueDetail;