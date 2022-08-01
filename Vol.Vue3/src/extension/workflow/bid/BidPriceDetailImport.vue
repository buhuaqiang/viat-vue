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
            @onUpload="onUpload"
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
                url: "api/View_wk_bid_price_apply_main/import", //导入的路径
                template: { //下载模板的配置
                    url: "api/View_wk_bid_price_apply_main/DownLoadTemplate",//下载模板的路径
                    fileName: "priceImportTemplate", //模板的文件名
                },
                model: false,
            };
        },
        methods: {
            openModel() {
                debugger;
                this.model = true;
                this.$nextTick(
                    ()=> {
                        this.$refs.uploadExcel.file = null;
                        this.$refs.uploadExcel.message = "";
                        this.$refs.uploadExcel.resultClass = "";
                    });


            },
            importExcelBefore(formData) { //点击上传时，将其他参数提交到后台
                return true;
            },

            onUpload(x){
                this.model = false;
                    alert(x);
            }

        },
    };
</script>
