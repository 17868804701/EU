<style>
    .time, .more {
        font-size: 11px;
        margin-top: 5px;
    }

    .item {
        background: #ffffff;
        width: 20%;
        border: 1px solid #f5f5f5;
        border-radius: 5px;
        float: left;
        margin-right: 10px;
        margin-bottom: 10px;
    }
</style>

<template>
    <div>
        <Breadcrumb style="margin-bottom: 10px;">
            <BreadcrumbItem to="/">主页</BreadcrumbItem>
            <BreadcrumbItem>信息发布</BreadcrumbItem>
        </Breadcrumb>
        <router-link to='/ReleaseInformation'>
            <Button type="primary" icon="ios-paperplane">发布信息收集</Button>
        </router-link>
        <Tabs value="name1">
            <TabPane label="进行中  5" name="name1">
                <div class="item">
                    <Card :bordered="false">
                        <p slot="title">紧急联系人</p>
                        <p>
                            <Button size="small" type="primary" icon="navigate">普通收集</Button>
                        </p>
                        <p class="time">距离截至：5小时25分</p>
                        <p class="more">已收集/全部  1/1</p>
                        <p>
                            <Progress :percent="0"></Progress>
                        </p>
                    </Card>
                </div>
                <div class="item">
                    <Card :bordered="false">
                        <p slot="title">紧急联系人</p>
                        <p>
                            <Button size="small" type="primary" icon="navigate">普通收集</Button>
                        </p>
                        <p class="time">距离截至：5小时25分</p>
                        <p class="more">已收集/全部  1/1</p>
                        <p>
                            <Progress :percent="50"></Progress>
                        </p>
                    </Card>
                </div>
                <div class="item">
                    <Card :bordered="false">
                        <p slot="title">紧急联系人</p>
                        <p>
                            <Button size="small" type="error" icon="navigate">紧急收集</Button>
                        </p>
                        <p class="time">距离截至：5小时25分</p>
                        <p class="more">已收集/全部  1/1</p>
                        <p>
                            <Progress :percent="50"></Progress>
                        </p>
                    </Card>
                </div>
                <div class="item">
                    <Card :bordered="false">
                        <p slot="title">紧急联系人</p>
                        <p>
                            <Button size="small" type="primary" icon="navigate">普通收集</Button>
                        </p>
                        <p class="time">距离截至：5小时25分</p>
                        <p class="more">已收集/全部  1/1</p>
                        <p>
                            <Progress :percent="50"></Progress>
                        </p>
                    </Card>
                </div>
                <div class="item">
                    <Card :bordered="false">
                        <p slot="title">紧急联系人</p>
                        <p>
                            <Button size="small" type="error" icon="navigate">紧急收集</Button>
                        </p>
                        <p class="time">距离截至：5小时25分</p>
                        <p class="more">已收集/全部  1/1</p>
                        <p>
                            <Progress :percent="50"></Progress>
                        </p>
                    </Card>
                </div>
            </TabPane>
            <TabPane label="历史收集" name="name2">
                <Table border :columns="columns1" :data="data1" size="small"></Table>
                <Page :total="100" show-total style="margin-top: 20px;"></Page>
            </TabPane>
        </Tabs>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                columns1: [
                    {
                        title: '收集标题',
                        key: 'title',
                        minWidth: 170
                    },
                    {
                        title: '收集类型',
                        key: 'type'
                    },
                    {
                        title: '发起人',
                        key: 'who'
                    },
                    {
                        title: '发起时间',
                        key: 'time'
                    },
                    {
                        title: '提醒加强',
                        key: 'tip'
                    },
                    {
                        title: '已读/全部',
                        key: 'ok_read'
                    },
                    {
                        title: '已填写/全部',
                        key: 'ok_write'
                    }, {
                        title: '操作',
                        key: 'make',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                          this.$router.push({path:'/ReleaseInformation_info'})
                                        }
                                    }
                                }, "查看详情")
                            ]);
                        }
                    }
                ],
                data1: [
                    {
                        title: '2018We+智绘互联校园新生态峰会-大会调研C',
                        type: "重要收集",
                        who: '陈思',
                        time: '2018-04-19 14:06',
                        tip: '短信 (发送2小时后)',
                        ok_read: '72/591',
                        ok_write: '64/591'
                    }, {
                        title: '2018We+智绘互联校园新生态峰会-大会调研C',
                        type: "重要收集",
                        who: '陈思',
                        time: '2018-04-19 14:06',
                        tip: '短信 (发送2小时后)',
                        ok_read: '72/591',
                        ok_write: '64/591'
                    }, {
                        title: '2018We+智绘互联校园新生态峰会-大会调研C',
                        type: "重要收集",
                        who: '陈思',
                        time: '2018-04-19 14:06',
                        tip: '短信 (发送2小时后)',
                        ok_read: '72/591',
                        ok_write: '64/591'
                    }, {
                        title: '2018We+智绘互联校园新生态峰会-大会调研C',
                        type: "重要收集",
                        who: '陈思',
                        time: '2018-04-19 14:06',
                        tip: '短信 (发送2小时后)',
                        ok_read: '72/591',
                        ok_write: '64/591'
                    }, {
                        title: '2018We+智绘互联校园新生态峰会-大会调研C',
                        type: "重要收集",
                        who: '陈思',
                        time: '2018-04-19 14:06',
                        tip: '短信 (发送2小时后)',
                        ok_read: '72/591',
                        ok_write: '64/591'
                    }
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
