let Gethome = async (req, res) => {
    return res.render('admin/home.ejs');
}

module.exports = {
    Gethome :  Gethome
}