class CatalogoTela{
    get productsHeader() {
        return $('android=new UiSelector().text("Products").className("android.widget.Textview")');
    }
}

module.exports = new CatalogoTela();