require('dotenv').config();
const express = require('express');
const apiRoutes = require('./src/routes/apiRoutes');
const { specs, swaggerUi } = require('./src/config/swagger');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', apiRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Your Telegram bot token is : ${process.env.TELEGRAM_BOT_TOKEN}`);
});