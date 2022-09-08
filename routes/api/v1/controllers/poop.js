import express from 'express'

var router = express.Router();

router.get('/', async (req, res) => {
    try {
        res.json({
            poop: "GREG"
        })
    } catch(e) {
        res.status(500).send(e);
    }
})

router.post('/', async (req, res) => {
    try {
        const nameObj = new req.models.Poop({
            name : req.query.name
        })
        await nameObj.save()
        res.json({
            status: 200
        })
    } catch(e) {
        res.status(500).send(e);
    }
})


export default router;