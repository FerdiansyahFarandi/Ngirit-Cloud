export.register = (req, res, masuk) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const result = {
        message: 'Register Berhasil',
        data: {
            uid: 1,
            name: name,
            email: email;
        }
    }
    res.status(201).json()
}