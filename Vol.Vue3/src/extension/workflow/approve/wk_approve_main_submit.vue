<template>
    <VolBox
            :width="700"
            :height="400"
            title="Submit"
            v-model="modifyOptions.model"
    >
        <div style="padding-bottom: 10px;padding-left:0px;">
            <el-form :inline="true" label-position="right" label-width="130px" :model="formModel">
                <el-form-item label="Approve Status:" style="width: 100%"    >
                    <el-input
                            :disabled="true"
                            v-model="formModel.status">
                    </el-input>
                </el-form-item>
                <el-form-item label="Comment:" style="width: 100%"    >
                    <el-input
                            type="textarea"
                            :autosize="{ minRows: 4, maxRows: 8}"
                            v-model="formModel.comments">
                    </el-input>
                </el-form-item>
            </el-form>
        </div>

        <template #footer>
            <div style="text-align: center;">
                <el-button
                        type="success"
                        size="mini"
                        icon="el-icon-check"
                        @click="doSubmit()"
                >Save</el-button>
                <el-button
                        type="danger"
                        size="mini"
                        icon="el-icon-close"
                        @click="doCancel()"
                >Cancel</el-button>
            </div>
        </template>
    </VolBox>


</template>
<script>
    import VolForm from "@/components/basic/VolForm.vue";
    import VolBox from "@/components/basic/VolBox.vue";
    export default {
        components: {
            VolForm,
            VolBox,
        },
        methods: {

            openModel(status) {
                this.modifyOptions.model=true;
                this.formModel.status = status;
            },
            doSubmit(){
                alert("OK")
            },
            doCancel(){
                this.modifyOptions.model=false;
            }

        },
        created() {

        },
        data() {
            return {
                modifyOptions: {
                    model: false,
                },
                formModel: {
                    comments: '',
                    status:"",
                },

            };
        },
    };
</script>


