db.createUser(
    {
        user: "admin",
        pwd: "1234",
        roles: [
            {
                role: "readWrite",
                db: "order"
            }
        ]
    }
);
const a = require('./setel-order')