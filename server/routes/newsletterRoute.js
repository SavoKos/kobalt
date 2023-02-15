const { Router } = require('express');
const { newsletterSubscribe } = require('../controllers/newsletterController');

const router = Router();

router.post('/', newsletterSubscribe);

module.exports = router;
