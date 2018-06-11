<style>
    .form {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 10px;
        width: 50%;
        margin-left: 25%;
        /*border: 1px solid red;*/
    }

    .title_item {
        width: 100% !important;
    }

    .content_item {
        width: 100% !important;
        margin-top: -10px;
    }

    .menu_item {
        width: 100%;
        margin-top: -5px;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .upload_item {
        margin-top: -15px;
    }
    .item_options{
        margin-bottom: 10px;
    }
</style>

<template>
    <div>
        <Breadcrumb style="margin-bottom: 10px;">
            <BreadcrumbItem to="/">主页</BreadcrumbItem>
            <BreadcrumbItem to="/InformationGathering">信息发布</BreadcrumbItem>
            <BreadcrumbItem>发布信息收集</BreadcrumbItem>
        </Breadcrumb>
        <!--步骤条-->
        <Steps :current="0" style="border-bottom: 1px solid #f5f5f5;padding: 15px;">
            <Step title="创建表单" content="设置需要学生填写的表单"></Step>
            <Step title="设置收集提醒" content="选择优先级与提醒策略"></Step>
            <Step title="选择收集人员" content="哪些同学将进行此次信息收集"></Step>
            <Step title="学生填写中" content="即时查看进度与学生填写的信息"></Step>
            <Step title="收集完毕" content="确认收集完成"></Step>
        </Steps>
        <!--发布内容区域-->
        <Form :model="formItem" label-position="left" :label-width="0" class="form">
            <FormItem class="title_item">
                <Input v-model="formItem.input" placeholder="收集标题"/>
            </FormItem>
            <FormItem label="" class="content_item">
                <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 6,maxRows: 8}"
                       placeholder="在此填写收集信息的说明哦...."/>
            </FormItem>
            <FormItem class="upload_item">
                <Upload action="//jsonplaceholder.typicode.com/posts/">
                    <Button type="primary" icon="android-upload" class="upload">上传 0/10</Button>
                    <span style="margin-left: 10px">为方便移动端浏览，建议文件大小≤50MB </span>
                </Upload>
            </FormItem>
            <!--选项区域-->
            <Form ref="formDynamic" :model="formDynamic" :label-width="80" style="width: 100%;background: #f5fafe;padding: 10px;border-radius: 10px;">
                <!--<span>*填写文本</span>-->
                <FormItem
                        v-for="(item, index) in formDynamic.items"
                        v-if="item.status"
                        :key="index"
                        :label="'Q'+item.index"
                        :prop="'items.' + index + '.value'"
                        :rules="{required: true, message: 'Q' + item.index +' can not be empty', trigger: 'blur'}">
                    <Row>
                        <Col span="18" style="width: 100%;margin-left: -30px;">
                            <Input type="text" v-model="item.value" placeholder="填写标题" class="item_options"/>
                            <Input type="text" v-model="item.value" placeholder="说明文字" class="item_options"/>
                            <Input type="text" v-model="item.value" placeholder="最懂填写多少字" class="item_options"/>
                            <FormItem label="是否必填" prop="gender">
                                <RadioGroup>
                                    <Radio label="male">是</Radio>
                                    <Radio label="female">否</Radio>
                                </RadioGroup>
                            </FormItem>
                        </Col>
                    </Row>
                </FormItem>
                <FormItem>
                    <Row>
                        <Col span="12">
                        <Button type="dashed" long @click="handleAdd" icon="plus-round">Add item</Button>
                        </Col>
                    </Row>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit('formDynamic')">确定</Button>
                    <Button type="ghost" @click="handleReset('formDynamic')" style="margin-left: 8px">取消</Button>
                </FormItem>
            </Form>


            <FormItem class="menu_item">
                <span style="color: #e0e0e0;margin-left: 160px;">添加收集项目</span>
                <div>
                    <Button type="primary" icon="edit">填写文本</Button>
                    <Button type="primary" icon="ios-circle-outline">单选题</Button>
                    <Button type="primary" icon="android-checkbox-outline">多选题</Button>
                    <Button type="primary" icon="android-camera">上传图片</Button>
                </div>
            </FormItem>
            <FormItem>
                <router-link to='/ReleaseInformation_setp2'>
                    <Button type="primary">下一步</Button>
                </router-link>
                <Button type="primary" :disabled="{isdisabled}">预览</Button>
                <router-link to='/InformationGathering'>
                    <Button type="ghost" style="margin-left: 8px">取消</Button>
                </router-link>
            </FormItem>
        </Form>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                isdisabled: 'false',
                formItem: {
                    input: '',
                    textarea: ''
                },
                index: 1,
                formDynamic: {
                    items: [
                        {
                            value: '',
                            index: 1,
                            status: 1
                        }
                    ]
                }
            }
        },
        mounted () {

        },
        beforeDestroy () {

        },
        methods: {
            handleAdd () {
                this.index++;
                this.formDynamic.items.push({
                    value: '',
                    index: this.index,
                    status: 1
                });
            },
        }
    }
</script>
