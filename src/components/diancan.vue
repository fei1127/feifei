<template id="tem">
  <ul>
      <li>
        <i class="iconfont icon-shop" ></i>
        <p>商家</p>
      </li>
      <li>
        <i class="iconfont icon-menu"></i>
        <p>菜单</p>

      </li>
     
      <li >
        <i class="iconfont icon-a163 "></i>
        <p>菜名</p>

      </li>
       
      <li>
        <i class="iconfont icon-icon02 "></i>
        <p>添加</p>

      </li>

      

  </ul>
</template>
<script>
export default {
  name:'dinancan',
  conponent:('diancan',{
    template:"#tem"


  })
}
</script>
<style>
ul{
  padding: 0;
  margin: 0;
  width:50px;
  height: 100%;
  list-style: none;
  float: left;
  background-color:#417220;
  
}
ul::after{
 content:"";
 display:block;
 clear:both;
}
li{
text-align: center;
}
p{
  width: 50px;
  color: #fff;
  border-bottom: 1px solid #fff;
}




</style>


