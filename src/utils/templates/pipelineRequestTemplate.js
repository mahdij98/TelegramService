function generateMergeRequestTemplate(mergeRequest) {
    return `
    Branch Name: ${mergeRequest.branchName}
    Merged Branch Name: ${mergeRequest.mergedBranchName}
    Status: ${mergeRequest.status}
    User: ${mergeRequest.user}
    Date: ${mergeRequest.date}
    Message: ${mergeRequest.message}
    Stage Names: ${mergeRequest.stageName}
    `;
  }
  
  module.exports = generateMergeRequestTemplate;