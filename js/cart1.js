function getCart(){
    var list = localStorage.getItem('cart')||"[]"; //字符串
    return JSON.parse(list);
}
function setCart(arr){

    localStorage.setItem('cart',JSON.stringify(arr))
}
// 1 购物车页面一打开就要展示该用户的购物车商品列表
showList()
function showList(){
    var productList = getCart();
    if(productList.length<1){
        $('table').hide();
        $('.show').show();
        return;
    }
    $('tbody').empty();
    $('table').show();
    $('.show').hide();
    
    $.each(productList,function(index,product){
        $('tbody').append(`<tr> 
        <td><img src="${product.product_img}" alt="">
        ${product.product_name}
        </td>
        <td>${product.product_price}</td>
        <td>
            <span class="add">+</span>

            ${product.product_num}
            <span class="cut">-</span>

        </td>

        <td>${product.product_all}</td>
        <td><button class="del" >删除</button></td>
    </tr>
`)

    })
    $('table').on('click','.del',function(){
        $(this).parents('tr').remove()
            localStorage.removeItem('cart')

    })
}
