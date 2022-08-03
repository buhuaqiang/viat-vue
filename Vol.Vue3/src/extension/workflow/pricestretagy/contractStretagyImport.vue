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
    <UploadExcel ref="dowloadTemplate"
                 :template="template"
                 @dowloadTemplate="stretagyDowloadTemplate"
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
                url: "api/Viat_wk_contract_stretagy/StretagyImport", //导入的路径
                template: { //下载模板的配置
                    url: this.http.ipAddress+"api/Viat_wk_contract_stretagy/DownLoadTemp",//下载模板的路径
                    fileName: "stretagyImportTemplate", //模板的文件名
                },
                model: false,
            };
        },
        methods: {
            openModel() {
                this.model = true
                /*this.$nextTick(
                    ()=> {
                        this.$refs.uploadExcel.reset();
                    });*/


            },
            importExcelBefore(formData) { //点击上传时，将其他参数提交到后台
                return true;
            },
            uploadExtend() {
                let formData = new FormData();
                formData.append("files", this.$refs.uploadExcel.file);
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
            stretagyDowloadTemplate(){
                alert(2)
                let url = this.template.url;
            },
            onUploadCallBack(x){
                this.model = false;
                this.$emit("onUploadCallBack",x)
            }

        },
    };
</script>
