<template>
    <div class="pos">
        <div>
            <el-row>
                <el-col :span='7' id="list">
                    <el-tabs>
                        <el-tab-pane label='点餐'>
                            <el-table :data='props' border show-summary style="width:100%">
                                <el-table-column label='商品' prop='name'>
                            
                                </el-table-column>
                                <el-table-column label='数量' prop='count'>
                                  
                                </el-table-column>
                                <el-table-column label='金额' prop='pri'>
                                    
                                </el-table-column>
                                <el-table-column label='操作'>
                                    <template scope="scope">
                                        <el-button type='text' size='small'>删除</el-button>
                                        <el-button type='text' size='small'>增加</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </el-tab-pane>
                        <el-tab-pane label='外卖'>
                             <el-table :data='waimai' border show-summary style="width:100%">
                                <el-table-column label='商品' prop='name'>
                            
                                </el-table-column>
                                <el-table-column label='数量' prop='count'>
                                  
                                </el-table-column>
                                <el-table-column label='金额' prop='pri'>
                                    
                                </el-table-column>
                                <el-table-column label='操作'>
                                    <template scope="scope">
                                        <el-button type='text' size='small'>删除</el-button>
                                        <el-button type='text' size='small'>增加</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </el-tab-pane>
                    </el-tabs>
                </el-col>
                <el-col :span='15'>
                    <div class="pro">
                        <div class="title">常用商品</div>
                        <div class="pro-list">
                            <ul>
                               <li v-for='lwf in food1'>
                                   <span>{{lwf.name}}</span>
                                   <span class="pro-pri">￥{{lwf.pri}}</span>
                               </li>
                            </ul>
                        </div>
                    </div>
                    <div class="pro-type">
                        <el-tabs>
                            <el-tab-pane label='肥宅区'>
                                <ul class="ckList">
                                    <li v-for='val in food2'>
                                        <span class="foodImg"><img :src="val.img" alt=""></span>
                                        <span class="foodName">{{val.name}}</span>
                                        <span class="foodPri">￥{{val.pri}}</span>
                                    </li>
                                </ul>
                            </el-tab-pane>
                            <el-tab-pane label='儿童区'>
                                <ul class="ckList">
                                    <li v-for='val in food3'>
                                        <span class="foodImg"><img :src="val.img" alt=""></span>
                                        <span class="foodName">{{val.name}}</span>
                                        <span class="foodPri">￥{{val.pri}}</span>
                                    </li>
                                </ul>
                            </el-tab-pane>
                            <el-tab-pane label='VIP区'>
                                <ul class="ckList">
                                    <li v-for='val in food4'>
                                        <span class="foodImg"><img :src="val.img" alt=""></span>
                                        <span class="foodName">{{val.name}}</span>
                                        <span class="foodPri">￥{{val.pri}}</span>
                                    </li>
                                </ul>
                            </el-tab-pane>
                        </el-tabs>
                    </div>
                </el-col>

            </el-row>
        </div>
    </div>
</template>

<script>
  export default {
    name:"conts",
    data() {
      return {
        props: [
            {
            name: '可乐',
            count:'1',
            pri: '8',
        }, 
         {
            name: '橙汁',
            count:'1',
            pri: '7',
        }, 
         {
            name: '鸡腿堡',
            count:'1',
            pri: '18',
        }, 
         {
            name: '薯条',
            count:'1',
            pri: '10',
        }, 
          
        ],
           waimai: [
            {
            name: '可乐',
            count:'1',
            pri: '6',
        }, 
         {
            name: '橙汁',
            count:'1',
            pri: '7.5',
        }, 
         {
            name: '火腿堡',
            count:'1',
            pri: '18',
        }, 
         {
            name: '薯条',
            count:'1',
            pri: '10',
        }, 
        {
            name: '北京鸡肉卷',
            count:'1',
            pri: '20',
        }, 
          
        ],
        food1:[
				{name:'鸡肉卷',pri:8,img:"../../build/jitui.jpg"},
				{name:'香辣鸡块',pri:5,img:"../../build/jitui.jpg"},
				{name:'辣鸡',pri:50,img:"../../build/jitui.jpg"}
                ],
         food2:[
				{name:'香辣鸡腿堡',pri:14},
				{name:'鸡肉卷',pri:8},
				{name:'香辣鸡块',pri:5},
				{name:'辣鸡',pri:50}
                ],
         food3:[
				{name:'香辣鸡腿堡',pri:14},
				{name:'鸡肉卷',pri:8},
				{name:'香辣鸡块',pri:5},
				{name:'辣鸡',pri:50}
                ],
         food4:[
				{name:'香辣鸡腿堡',pri:14},
				{name:'鸡肉卷',pri:8},
				{name:'香辣鸡块',pri:5},
				{name:'辣鸡',pri:50}
				],                    

      }
      }
    
  }
</script>