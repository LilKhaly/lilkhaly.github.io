function getCart() {
    var list = localStorage.getItem('cart') || "[]"; //字符串
    return JSON.parse(list);
}
function setCart(arr) {

    localStorage.setItem('cart', JSON.stringify(arr))
}
// 点击加入购物车
$('#add').click(function () {
    var newProduct = {
        product_id: $('#add').data('id'),
        product_name: $('#add').data('name'),
        product_img: $('#add').data('img'),
        product_price: $('#add').data('price'),
        product_num: $('#add').data('num'),
        product_all:$('#add').data('all')
    }

        // 先获取原来的商品列表数组
        var productList = getCart(); 
        var a
        $.each(productList,function(index,item){
            // console.log(index);
            if(this.product_id==newProduct.product_id){
                this.product_num=this.product_num-1+2
                this.product_all=this.product_num*this.product_price
                return a=1
            }
        }) 
        if(a!=1){
            productList.push(newProduct)
        }
    
        // 存回本地存储
        setCart(productList)
    
    
    alert('加入购物车成功')

})

