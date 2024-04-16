// src/routes/apiRoutes.js
const express = require('express');
const router = express.Router();
const telegramController = require('../controllers/messageController');

console.log('Initializing API routes...');

/**
 * @swagger
 * /telegramService/send-message:
 *   post:
 *     summary: Send a message via Telegram Bot
 *     description: Send a message to a specific Telegram channel using the Telegram Bot API.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 description: The message to send.
 *               channelName:
 *                 type: string
 *                 description: The name of the Telegram channel to send the message to.
 *     responses:
 *       '200':
 *         description: Message sent successfully
 *       '400':
 *         description: Invalid request body
 *       '500':
 *         description: Internal server error
 */
router.post('/telegramService/sendMessage', telegramController.sendMessage);

/**
 * @swagger
 * /telegramService/sendMessageWithTemplate:
 *   post:
 *     summary: Send a message with a template via Telegram Bot
 *     description: Send a message to a specific Telegram channel using a predefined template.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PipelineRequest'
 *     responses:
 *       '200':
 *         description: Message sent successfully
 *       '400':
 *         description: Invalid request body
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     PipelineRequest:
 *       type: object
 *       required:
 *         - branchName
 *         - mergedBranchName
 *         - status
 *         - user
 *         - date
 *         - message
 *         - stageName
 *         - channelName
 *       properties:
 *         branchName:
 *           type: string
 *           description: The name of the branch.
 *         mergedBranchName:
 *           type: string
 *           description: The name of the merged branch.
 *         status:
 *           type: string
 *           description: The status of the pipeline request.
 *         user:
 *           type: string
 *           description: The user who initiated the pipeline request.
 *         date:
 *           type: string
 *           description: The date when the pipeline request was initiated.
 *         message:
 *           type: string
 *           description: The message associated with the pipeline request.
 *         stageName:
 *           type: string
 *           description: The name of the pipeline stage.
 *         channelName:
 *           type: string
 *           description: The name of the channel associated with the pipeline request.
 */
router.post('/telegramService/sendMessageWithTemplate', telegramController.sendMessageWithTemplate);

console.log('API routes initialized successfully.');

module.exports = router;