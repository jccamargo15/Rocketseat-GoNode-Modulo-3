const Purchase = require('../models/Purchase')

class PurchaseController {
  async store (req, res) {
    const purchase = await Purchase.create(req.body)

    return res.json(purchase)
  }
}

module.exports = new PurchaseController()
