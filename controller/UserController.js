let users = [
    { id: 1, name: "User 1", email: "user1@example.com" },
    { id: 2, name: "User 2", email: "user2@example.com" },
    { id: 3, name: "User 3", email: "user3@example.com" }
];

exports.getAllUsers = (req, res) => {
    res.render('index', { users: users });
};

exports.getAddPage = (req, res) => {
    res.render('add');
};

exports.addUser = (req, res) => {
    const newUser = { id: users.length + 1, name: req.body.name, email: req.body.email };
    users.push(newUser);
    res.redirect('/users');
};

exports.getEditPage = (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    res.render('edit', { user: user });
};

exports.updateUser = (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    user.name = req.body.name;
    user.email = req.body.email;
    res.redirect('/users');
};

exports.deleteUser = (req, res) => {
    users = users.filter(u => u.id != req.params.id);
    res.redirect('/users');
};
