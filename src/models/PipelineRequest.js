class PipelineRequest {
    constructor(branchName, mergedBranchName, status, user, date, message, stageName, channelName) {
      this.branchName = branchName;
      this.mergedBranchName = mergedBranchName;
      this.status = status;
      this.user = user;
      this.date = date;
      this.message = message;
      this.stageName = stageName;
      this.channelName = channelName;
    }
  }
  
  module.exports = PipelineRequest;