<template lang="html">
  <div>
      <Nav></Nav>
    <div class='main'>
        <div class="content">
      <a>磷蛋白</a>
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
                        <div  v-if= ' shows[key]==0'>{{value}}</div>
                        <button v-if = 'shows[key]==1' @click='download1(item[key])'>link1</button>
                        <button v-if = 'shows[key]==2' @click='download2(item[key])'>link2</button>
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
            shows: {'objectId':0,'TissueId':0, 'url':1, 'rawurl':2, 'id': 0}
      }
  },
   mounted() {
            //请求第一页数据
            this.getList()
        } ,

  methods: {
        download1 (path) {
            let params = {
                    params: {
                        path: path
                    }
                };
                console.log(params)
                this.instance.download(params).then((res)=>{ 
                  console.log(res.data)
                  this.downloadfile(res.data,path.split("/").pop());
                });
        },
        download2 (path) {
            let a = document.createElement('a')
            a.href =path
            a.click();
        },
        downloadfile (data,fileName) {
        if (!data) {
            return
        }
        let url = window.URL.createObjectURL(new Blob([data]));
        let link = document.createElement('a');
        link.style.display = 'none';
        link.href = url;
        link.setAttribute('download',fileName);
        document.body.appendChild(link);
        link.click();
    },
        getList () {
                let params = {
                    params: {
                        skip: (this.currentPage-1)*this.pageSize,
                        limit: this.pageSize,
                        type: 'phosphoprotein'
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