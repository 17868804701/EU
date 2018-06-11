<style>
    .title {
        font-size: 18px;
    }

    .title1 {
        display: inline-block;
        font-size: 14px;
        margin-top: 2px;
        margin-left: 10px;
        color: blue;
        cursor: pointer;
        position: absolute;
    }

    #step .ivu-steps-head {
        margin-top: 5px;
    }

    #step .ivu-steps-icon {
        color: white !important;
    }

    #step .ivu-steps-title {
        color: rgb(0, 201, 109) !important;
    }

    #step .ivu-steps-head-inner {
        border: 1px solid rgb(0, 201, 109) !important;
        background: rgb(0, 201, 109) !important;

    }

    #step .ivu-steps-content {
        margin-top: -10px;
        color: rgb(0, 201, 109) !important;
    }

    .step {
        margin-top: 20px;
    }

    .row {
        margin-top: 25px;
    }

    .tab {
        margin-top: 20px;
    }

    .title_key {
        color: #a8a8a8;
    }

    .percent {
        color: red;
        font-weight: bold;
        margin-left: 10px;
    }
    .question{
        display: inline-block;
        margin-top: 3px;
        font-size: 14px;
    }
    .question_item{
        margin-bottom: 10px;
    }

</style>
<template>
    <div>
        <Breadcrumb style="margin-bottom: 10px;">
            <BreadcrumbItem to="/">主页</BreadcrumbItem>
            <BreadcrumbItem to="/InformationGathering">信息发布</BreadcrumbItem>
            <BreadcrumbItem>发布信息收集详情</BreadcrumbItem>
        </Breadcrumb>
        <!--<span class="title">信息收集</span>-->
        <Steps :current="1" status="error" class="step" id="step">
            <Step title="收集完毕" content="到达截止时间"></Step>
        </Steps>
        <Row style="margin-top: 30px">
            <Col span="24">
            <Button type="primary" icon="ios-paperplane" size="small">普通收集</Button>
            <span class="title1">预览表单>></span>
            </Col>
        </Row>
        <Row class="row">
            <Col span="8">
            <span class="title_key">发起人：</span>管理员</Col>
            <Col span="8">
            <span class="title_key">已读率：</span>0/4 <span class="percent">0.00%</span></Col>
            <Col span="8">
            <span class="title_key">填写率：</span>1/4  <span class="percent">25%</span></Col>
        </Row>
        <Row style="margin-top: 10px;">
            <Col span="8">
            <span class="title_key">填写截至时间：</span>2018-10-10 23：00：00</Col>
            <Col span="8">
            <span class="title_key">发送时间：</span>2018-09-10 23：00：00</Col>
            <Col span="8">
            <span class="title_key">提醒加强：</span>无</Col>
        </Row>
        <Tabs value="name1" class="tab">
            <TabPane label="收集进度" name="name1">
                <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
                    <FormItem prop="password">
                        <Input type="text" placeholder="请输入学号、姓名"/>
                    </FormItem>
                    <FormItem>
                        <Button type="primary">搜索</Button>
                    </FormItem>
                </Form>
                <Tag checkable color="blue">通知状态</Tag>
                <Tabs value="name1">
                    <TabPane label="未填  4" name="name1">
                        <Table :columns="columns1" :data="data1" border style=""></Table>
                        <Page :total="100" show-total style="margin-top: 20px"></Page>
                    </TabPane>
                    <TabPane label="已读  0" name="name2">
                        <Table :columns="columns1" :data="data1" border style=""></Table>
                        <Page :total="100" show-total style="margin-top: 20px"></Page>
                    </TabPane>
                    <TabPane label="已填  2" name="name3">
                        <Table :columns="columns1" :data="data1" border size="small"></Table>
                        <Page :total="100" show-total style="margin-top: 20px"></Page>
                    </TabPane>
                </Tabs>

            </TabPane>
            <TabPane label="收集数据" name="name2">
                <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
                    <FormItem prop="password">
                        <Input type="text" placeholder="请输入学号、姓名"/>
                    </FormItem>
                    <FormItem>
                        <Button type="primary">搜索</Button>
                        <Button type="primary" disabled="true" icon="refresh">打回重填</Button>
                        <Button type="primary" icon="ios-cloud-upload-outline" style="margin-left: 800px;">导出excel
                        </Button>
                    </FormItem>
                    <Table border ref="selection" :columns="columns4" :data="data2" size="small"></Table>
                    <Page :total="100" show-total style="margin-top: 20px;"></Page>
                </Form>
            </TabPane>
            <TabPane label="统计图表" name="name3">
                <div class="question_item">
                    <Icon type="ios-circle-outline"></Icon>
                    <span class="question">单选题  1.您认为贵校目前信息化建设的使用满意度如何？单选 (必填)</span>
                    <Table :columns="columns5" :data="data5" border style="margin-top: 10px;"></Table>
                </div>
                <div class="question_item">
                    <Icon type="android-checkbox-outline"></Icon>
                    <span class="question">多选题  1.您认为贵校目前信息化建设的使用满意度如何？多选 (必填)</span>
                    <Table :columns="columns5" :data="data5" border style="margin-top: 10px;"></Table>
                </div>
            </TabPane>
            <TabPane label="学生提问  0" name="name4">标签三的内容</TabPane>
        </Tabs>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                columns1: [
                    {
                        title: '学号',
                        key: 'num'
                    },
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '性别',
                        key: 'sex'
                    },
                    {
                        title: '手机号',
                        key: 'phoneNum'
                    },
                    {
                        title: '年级',
                        key: 'nianji'
                    },
                    {
                        title: '院系',
                        key: 'yuanxi'
                    },
                    {
                        title: '专业',
                        key: 'zhuanye'
                    },
                    {
                        title: '班级',
                        key: 'banji'
                    }
                ],
                data1: [
                    {
                        num: '011644851',
                        name: '张浩',
                        sex: '男',
                        phoneNum: '13547895478',
                        nianji: '2018',
                        yuanxi: '金智教育',
                        zhuanye: '研发管理部',
                        banji: '测试部',
                    },
                    {
                        num: '011644851',
                        name: '张浩',
                        sex: '男',
                        phoneNum: '13547895478',
                        nianji: '2018',
                        yuanxi: '金智教育',
                        zhuanye: '研发管理部',
                        banji: '测试部',
                    }, {
                        num: '011644851',
                        name: '张浩',
                        sex: '男',
                        phoneNum: '13547895478',
                        nianji: '2018',
                        yuanxi: '金智教育',
                        zhuanye: '研发管理部',
                        banji: '测试部',
                    }, {
                        num: '011644851',
                        name: '张浩',
                        sex: '男',
                        phoneNum: '13547895478',
                        nianji: '2018',
                        yuanxi: '金智教育',
                        zhuanye: '研发管理部',
                        banji: '测试部',
                    },
                ],
                columns4: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center',
                        fixed: 'left'
                    },
                    {
                        title: '操作',
                        key: 'caozuo',
                        fixed: 'left',
                        width: 150,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, '详情'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, '打回重填')
                            ]);
                        }
                    },
                    {
                        title: '姓名',
                        key: 'name',
                        fixed: 'left',
                        width: 100
                    },
                    {
                        title: '性别',
                        key: 'sex',
                        width: 90,
                        fixed: 'left',
                    },
                    {
                        title: '学号',
                        key: 'num',
                        width: 140,
                        fixed: 'left',
                    },
                    {
                        title: '手机号',
                        key: 'phone',
                        width: 140,
                        fixed: 'left',
                    },
                    {
                        title: '问题一',
                        key: 'q1',
                    },
                    {
                        title: '问题二',
                        key: 'q2',
                    },
                    {
                        title: '问题三',
                        key: 'q3',
                    },
                    {
                        title: '问题四',
                        key: 'q4',
                    }
                ],
                data2: [
                    {
                        name: '黄森',
                        sex: '男',
                        num: '066645158415',
                        phone: '17868804701'
                    },
                    {
                        name: '黄森',
                        sex: '男',
                        num: '066645158415',
                        phone: '17868804701'
                    },
                    {
                        name: '黄森',
                        sex: '男',
                        num: '066645158415',
                        phone: '17868804701'
                    },
                    {
                        name: '黄森',
                        sex: '男',
                        num: '066645158415',
                        phone: '17868804701'
                    },
                    {
                        name: '黄森',
                        sex: '男',
                        num: '066645158415',
                        phone: '17868804701'
                    }
                ],
                columns5: [
                    {
                        title: '选项',
                        key: 'options',
                    },
                    {
                        title: '小计',
                        key: 'total',
                    },
                    {
                        title: '百分比',
                        key: 'per',
                    }
                ],
                data5:[
                    {
                        options: '信息中心满意，业务部门满意',
                        total: '24',
                        per: '38%',
                    },
                    {
                        options: '信息中心满意，业务部门满意',
                        total: '24',
                        per: '38%',
                    },
                    {
                        options: '信息中心满意，业务部门满意',
                        total: '24',
                        per: '38%',
                    },
                    {
                        options: '信息中心满意，业务部门满意',
                        total: '24',
                        per: '38%',
                    },
                ]
            }
        },
        mounted () {

        },
        beforeDestroy () {

        },
        methods: {}
    }
</script>
