<style>
    .title{
        font-size: 18px;
        margin: 30px 20px;
        display: inline-block;
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
        <Steps :current="1" style="border-bottom: 1px solid #f5f5f5;padding: 15px;">
            <Step title="创建表单" content="设置需要学生填写的表单"></Step>
            <Step title="设置收集提醒" content="选择优先级与提醒策略"></Step>
            <Step title="选择收集人员" content="哪些同学将进行此次信息收集"></Step>
            <Step title="学生填写中" content="即时查看进度与学生填写的信息"></Step>
            <Step title="收集完毕" content="确认收集完成"></Step>
        </Steps>
        <span class="title">通知配置</span>
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
            <FormItem>
                <span>通知优先级：</span>
                <Button type="default">普通收集</Button>
                <Button type="warning">重要收集</Button>
                <Button type="error">紧急收集</Button>
            </FormItem>
            <FormItem label="定时发送：" style="margin-left: 70px">
                <RadioGroup v-model="formItem.radio">
                    <Radio label="male">是</Radio>
                    <Radio label="female">否</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem label="反馈截至时间：" :label-width="120" style="margin-left: 53px;">
                <Row>
                    <Col span="11">
                        <DatePicker type="date" placeholder="反馈截至时间" v-model="formItem.date"></DatePicker>
                    </Col>
                </Row>
            </FormItem>
            <ButtonGroup style="margin-left: 75px;">
                <Button type="primary">上一步</Button>
                <Button>下一步</Button>
                <Button type="ghost">预览</Button>
                <Button type="ghost">取消</Button>
            </ButtonGroup>
        </Form>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                formItem: {
                    input: '',
                    select: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                }
            }
        },
        mounted () {

        },
        beforeDestroy () {

        },
        methods: {
        }
    }
</script>
