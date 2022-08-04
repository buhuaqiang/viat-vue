<template>
<VolBox
        v-model="model"
        title="弹出框标题"
        :height="325"
        :width="600"
        lazy="false"
        :padding="15"
>
    <UploadExcel ref="uploadExcel"
            :url="url"
            :template="template"
            :importExcelBefore="importExcelBefore"
            @onUpload="uploadExtend"
    ></UploadExcel>
</VolBox>
</template>
<script>

    import {defineAsyncComponent} from "vue";
    import {ElMessageBox} from "element-plus";
    export default {
        components: {
            VolBox: defineAsyncComponent(() => import("@/components/basic/VolBox.vue")),
            UploadExcel: defineAsyncComponent(() =>
                import("@/components/basic/UploadExcelToVue.vue")
            ),
        },
        data() {
            return {
                url: "api/View_wk_bid_price_apply_main/PriceTansferImport", //导入的路径 http.post有 拼 this.http.ipAddress 此處不加用 this.http.ipAddress
                template: { //下载模板的配置
                    url: this.http.ipAddress+"api/View_wk_bid_price_apply_main/DownLoadTemplate",//下载模板的路径  需要加上 this.http.ipAddress
                    fileName: "priceImportTemplate", //模板的文件名
                },
                model: false,
                cust_id:"",
                pricegroup_dbid:"",
            };
        },
        methods: {
            openModel(cust_id,pricegroup_dbid) {
                this.model = true;
                this.cust_id=cust_id
                this.pricegroup_dbid=pricegroup_dbid;
                this.$nextTick(
                    ()=> {
                        this.$refs.uploadExcel.reset();
                    });


            },
            importExcelBefore(formData) { //点击上传时，将其他参数提交到后台
                return true;
            },
            uploadExtend() {
                let formData = new FormData();
                formData.append("files", this.$refs.uploadExcel.file);
                formData.append("cust_id",this.cust_id);
                formData.append("group_dbid",this.pricegroup_dbid);
                this.$refs.uploadExcel.loadingStatus = true;
                this.http.post(this.url, formData).then(
                    (x) => {
                        if(x.code=='-2') {
                            this.$refs.uploadExcel.loadingStatus = false;
                            this.$refs.uploadExcel.resultClass = x.message ? "v-r-error":"v-r-success";
                            this.$refs.uploadExcel.message= x.message
                        }
                        else {
                            this.$refs.uploadExcel.loadingStatus = false;
                            this.onUploadCallBack(x);
                        }
                    },
                    (error) => {
                        this.$refs.uploadExcel.loadingStatus = false;
                    }
                );
            },
            onUploadCallBack(x){
                this.model = false;
                this.$emit("onUploadCallBack",x)
            }

        },
    };
</script>
