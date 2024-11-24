const express = require('express');
const router = express.Router();
const userController = require('../controller/UserController');

// Menampilkan semua user
router.get('/', userController.getAllUsers);

// Menampilkan form untuk menambah user
router.get('/add', userController.getAddPage);

// Menambah user baru
router.post('/add', userController.addUser);

// Menampilkan form untuk mengedit user
router.get('/edit/:id', userController.getEditPage);

// Menyimpan perubahan user
router.post('/edit/:id', userController.updateUser);

// Menghapus user
router.get('/delete/:id', userController.deleteUser);

module.exports = router;
