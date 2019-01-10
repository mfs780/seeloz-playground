import express from 'express';

export default app => {
  app.use(express.json());
  
  app.get('/api/foo', (req, res) => {
    res.json({msg: 'foo'});
  });
  
  app.post('/api/bar', (req, res) => {
    res.json(req.body);
  });
}
