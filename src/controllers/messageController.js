// src/controllers/telegramController.js
const generatePipelineRequestTemplate = require('../utils/templates/pipelineRequestTemplate');
const telegramService = require('../services/telegramService');
const ChannelEnum = require('../utils/enums/channelEnum');

exports.sendMessage = (req, res) => {
  const { message, channelName } = req.body;
  
  // Check if message and channelName are provided
  if (!message || !channelName) {
    return res.status(400).json({ success: false, error: 'Message and channelName are required' });
  }

  try {
    // Get channel ID from ChannelEnum
    const channelId = ChannelEnum[channelName.toUpperCase()];
    
    // Check if channel exists
    if (!channelId) {
      return res.status(400).json({ success: false, error: 'Invalid channelName' });
    }

    // Call service function to send message
    telegramService.sendMessage(message, channelId);
    res.json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

exports.sendMessageWithTemplate = (req, res) => {
  const { branchName, mergedBranchName, status, user, date, message, stageName, channelName } = req.body;

  // Check if all required fields are provided
  if (!branchName || !mergedBranchName || !status || !user || !date || !message || !stageName || !channelName) {
    return res.status(400).json({ success: false, error: 'All fields are required' });
  }

  try {
    const channelId = ChannelEnum[channelName.toUpperCase()];
    

    if (!channelId) {
      return res.status(400).json({ success: false, error: 'Invalid channelName' });
    }


    const pipelineRequestTemplate = generatePipelineRequestTemplate(req.body);
    console.log(pipelineRequestTemplate);
    console.log(req.body);
    
    telegramService.sendMessage(pipelineRequestTemplate, channelId);
    res.json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending message with template:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};