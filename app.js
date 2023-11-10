const express = require('express');
const app = express();

app.get('/api/fetchData', (req, res) => {
  res.json({ data: 100000 });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
