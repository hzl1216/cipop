<template lang="html">
  <div>
      <Nav></Nav>
    <div class='main'>
        <div class="content">
      <a>WES</a>
    </div>
        <table class="table table-bordered table-hover table-condensed">
            <thead style="background-color:lightgray;">
                <tr>
                    <th  v-for='(value, key) in items[0]'>{{key}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items">
                    <td v-for='(value, key)  in item'>
                      <div>
                        <div  v-if= ' shows[key]'>{{value}}</div>
                        <button v-else @click='download(item[key])'>link</button>
                      </div>
                    </td>
                </tr>
            </tbody>
        </table>
         <mo-paging 
            :page-index="currentPage" 
            :total="count" 
            :page-size="pageSize" 
            @change="pageChange">
            </mo-paging>
      </div>
    <Footer></Footer>
  </div>
</template>

<script>
import MoPaging from '../components/paging'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
export default {
    components : {
            MoPaging,
            Nav,
            Footer
        },
  data () {
         return {
            pageSize : 10, //每页显示20条数据
            currentPage : 1, //当前页码
            count : 0,
            items: [],
            shows: {'objectId':true,'TissueId':true, 'url':false, 'rawurl':false, 'id': true}
      }
  },
   mounted() {
            //请求第一页数据
            this.getList()
        } ,

//   created () {
//       //this.$reqs就访问到了main.js中绑定的axios
// 				this.instance.getIndividuals().then((res)=>{ 
// 					//成功
//                     this.items = res.data;
// 				})
//   },
  methods: {
        download (path) {
            let params = {
                    params: {
                        path: path
                    }
                };
                console.log(params)
                this.instance.download(params).then((res)=>{ 
                  var btn = document.createElement("a"); 
                  btn.setAttribute('download', '');// download属性
                  btn.setAttribute('href', path);// href链接
                  btn.click();// 自执行点击事件
                });
        },
        getList () {
                let params = {
                    params: {
                        skip: (this.currentPage-1)*this.pageSize,
                        limit: this.pageSize,
                        type: 'wes'
                    }
                };
                console.log(params)
                this.instance.getDatas(params).then((res)=>{ 
					//成功
                     this.items = res.data.result;
                    this.count = res.data.count;
        });
            

            },
        pageChange (page) {
                this.currentPage = page
                this.getList()
            },
   
    // 文件超出个数限制时的钩子
    deleteobject(item) {
        this.$confirm('此操作将删除该个体和相关临床数据以及组学数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
        this.instance.deleteClinical(item.ClinicalId).then((res)=>{ 
					//成功
                    this.reload();
                })
        });
    },
     mounted() {
            //请求第一页数据
            this.getList()
        } 
  }
}
</script>

<style src='../../src/css/bootstrap.min.css'></style>

<style lang="css" scoped>
.main { /* it is for tree that be in center*/
		margin-left: 5%; margin-bottom: 5%; margin-top: 5%;
	}
  .content{
    text-align: center;
	font-size: 25px;
	height: 150px;
  }
</style>