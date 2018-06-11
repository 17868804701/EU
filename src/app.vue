<style scoped>
    @import 'styles/common.css';
</style>
<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .header{
        background: white;
        padding: 0;
        position: fixed;
        z-index: 999;
        top:0;
        width: 100%;
        border-bottom: 1px solid #dddee1;
    }
    .logo{
        font-size: 23px;
        color: #2d8cf0;
        margin-left: 20px;
    }
    .avatar_menu{
        position: absolute;
        margin-left: 10px;
        font-size: 14px;
        margin-top: 2px;
        float: right;
    }
    .demo-avatar{
        margin-left: 77%;
    }
    .menu_item_left{
        height: 37px;display: flex;justify-content: flex-start;align-items: center;
        border-bottom: 1px solid #e0e0e0;
    }
    .menu_item_right{
        height: 35px;display: flex;justify-content: flex-start;align-items: center;
        /*border-bottom: 1px solid #e0e0e0;*/
    }
    .side_icon{
        width: 25px;
        border: 1px solid #e0e0e0;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 300px;
        border-radius: 0 15px 15px 0;
        background: white;
        border-left: 0;
        color: #2d8cf0;
        font-size: 18px;
    }


    .container{
        width: 75%;
        border: 0px solid red;
    }
    .list{
        /*margin-left: 20px;*/
        border: 1px solid rgba(16,16,16,0.2);
        border-radius: 5px;
        padding: 10px;
        cursor: pointer;
        margin-bottom: 20px;
    }
    .list .content{
        width: 100%;
        margin-top: 10px;
        padding: 10px;
        line-height: 35px;
        border-radius: 5px;
        font-size: 14px;
        background: #e0e0e0;
    }
    .container img{
        width: 40px;height: 40px;
        border: 1px solid rgba(16,16,16,0.2);
        border-radius: 8px;
    }
    iframe {
        overflow-x : hidden;
        overflow-y : hidden;
    }
    .cards{
        width: 20%;
        /*border: 1px solid red;*/
        display: flex;
        flex-direction: column;
        align-items: center;
        /*justify-content: center;*/
    }
    .head{
        width: 130px;
        height: 130px;
        border-radius: 50%;
    }
</style>
<template>
    <div class="layout">
        <Layout>
            <Header class="header">
                <Row>
                    <Col span="12">
                    <span class="logo"><Icon type="social-twitter"></Icon>&nbsp;智慧校园开放平台</span>
                    </Col>
                    <Col span="12">
                    <div class="demo-avatar">
                        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                        <Dropdown class="avatar_menu">
                            <a href="javascript:void(0)">
                                <span style="color: #333">你好,admin</span>
                                <Icon type="arrow-down-b"></Icon>
                            </a>
                            <DropdownMenu slot="list">
                                <DropdownItem>个人信息</DropdownItem>
                                <DropdownItem>我的收藏</DropdownItem>
                                <DropdownItem>关于</DropdownItem>
                                <DropdownItem>退出登录</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                    </Col>
                </Row>
            </Header>
            <Layout :style="{padding: '0 20px 0 0',marginTop:'64px'}">
                <Content :style="{padding: '0px 0 0 0', minHeight: (fullHeight-94)+'px', background: '#fff',marginTop:'18px'}" >
                    <Layout>
                        <Sider hide-trigger :style="{background: '#fff',paddingTop:'5px',display:isShow}" ref="side1"  collapsible :collapsed-width="0" v-model="isCollapsed" width="165">
                            <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                                <MenuItem class="menu_item_left" name="1-1">
                                    <Icon type="ios-navigate"></Icon>全部
                                    <Badge count="20" class="demo-badge-alone"></Badge>
                                </MenuItem>
                                <MenuItem class="menu_item_left" name="1-2">
                                    <Icon type="social-linkedin">
                                    </Icon>应用分类1
                                    <Badge count="4" class="demo-badge-alone"></Badge>
                                </MenuItem>
                                <MenuItem class="menu_item_left" name="1-3"><Icon type="social-vimeo"></Icon>应用分类2</MenuItem>
                                <MenuItem class="menu_item_left" name="1-4"><Icon type="social-apple"></Icon>应用分类3</MenuItem>
                                <MenuItem class="menu_item_left" name="1-5"><Icon type="social-skype"></Icon>应用分类4</MenuItem>
                                <MenuItem class="menu_item_left" name="1-6"><Icon type="social-wordpress"></Icon>应用分类5</MenuItem>
                                <MenuItem class="menu_item_left" name="1-7"><Icon type="social-javascript"></Icon>应用分类6</MenuItem>
                                <MenuItem class="menu_item_left" name="1-8"><Icon type="social-sass"></Icon>应用分类7</MenuItem>
                            </Menu>
                        </Sider>
                        <Sider hide-trigger :style="{background: '#fff',paddingTop:'5px',display:isShow}" ref="side2"  collapsible :collapsed-width="0" v-model="isCollapsed" width="165">
                            <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                                <MenuItem  class="menu_item_right" name="1-2">
                                    <span @click="collapsedSiderMenu"><Icon type="social-linkedin"></Icon>&nbsp;&nbsp;应用1</span>
                                </MenuItem>
                                <router-link to='/InformationGathering'>
                                    <MenuItem @click="collapsedSider" class="menu_item_right" name="1-3"><Icon type="social-vimeo"></Icon>信息收集</MenuItem>
                                </router-link>
                                <MenuItem @click="collapsedSider" class="menu_item_right" name="1-4"><Icon type="social-apple"></Icon>应用2</MenuItem>
                                <MenuItem @click="collapsedSider" class="menu_item_right" name="1-5"><Icon type="social-skype"></Icon>应用3</MenuItem>
                                <MenuItem @click="collapsedSider" class="menu_item_right" name="1-6"><Icon type="social-wordpress"></Icon>应用4</MenuItem>
                                <MenuItem @click="collapsedSider" class="menu_item_right" name="1-7"><Icon type="social-javascript"></Icon>应用5</MenuItem>
                                <MenuItem @click="collapsedSider" class="menu_item_right" name="1-8"><Icon type="social-sass"></Icon>应用6</MenuItem>
                            </Menu>
                        </Sider>
                        <Icon @click.native="collapsedSider" type="chevron-right" class="side_icon"></Icon>
                        <Content :style="{padding: '10px', minHeight: (fullHeight-124)+'px', background: '#fff',marginLeft:'10px'}">
                            <router-view></router-view>
                            <iframe :style="{width: '100%',display:isShowIframe}"
                                    scrolling="no"
                                    src="http://127.0.0.1:8088/xxyd/test.html"
                                    frameborder="0"
                                    id="iframe_b"
                            >
                            </iframe>
                            <div :style="{display: isShowIndex,justifyContent: 'space-around'}">
                                <div class="container">
                                    <template>
                                        <Tabs value="name1" style="color: #333">
                                            <TabPane label="动态" name="name1">
                                                <div class="list">
                                                    <img src="http://img3.duitang.com/uploads/item/201505/26/20150526002859_c2yKG.thumb.700_0.jpeg" alt="">
                                                    <span style="position: absolute;font-size: 16px;margin-left: 10px;color: #2d8cf0">发布公告</span>
                                                    <span style="position: absolute;font-size: 14px;margin-left: 10px;margin-top: 22px">2018-01-20 23:22</span>
                                                    <p style="margin-top: 10px;margin-left: 10px">课程 人文视野中的生态学发布了新公告</p>
                                                </div>

                                                <div class="list">
                                                    <img src="http://img3.duitang.com/uploads/item/201505/26/20150526002859_c2yKG.thumb.700_0.jpeg" alt="">
                                                    <span style="position: absolute;font-size: 16px;margin-left: 10px;color: #2d8cf0">新课程开课了</span>
                                                    <span style="position: absolute;font-size: 14px;margin-left: 10px;margin-top: 22px">2018-01-20 23:22</span>
                                                    <p style="margin-top: 10px;margin-left: 10px">课程 2018年春-社区生活课-国际社区-冯小利 已于2018-04-16开课</p>
                                                    <div class="content">
                                                        考试啦！关于期末考试时间说明 <br>
                                                        各位同学：       大家好！       现将《人文视野中的生态学》课程考核比例与期末考试事项说明如下：      1、课程考核比例：      平时成绩70%，考试30%。采用百分制计分，60分及以上为合格，90分及以上为优秀。      2、期末考试时间：     ...
                                                    </div>
                                                </div>
                                                <div class="list">
                                                    <img src="http://img3.duitang.com/uploads/item/201505/26/20150526002859_c2yKG.thumb.700_0.jpeg" alt="">
                                                    <span style="position: absolute;font-size: 16px;margin-left: 10px;color: #2d8cf0">第二课堂有一条通知</span>
                                                    <span style="position: absolute;font-size: 14px;margin-left: 10px;margin-top: 22px">2018-01-20 23:22</span>
                                                    <p style="margin-top: 10px;margin-left: 10px">王欢 在昨天申请一条学分</p>
                                                </div>

                                                <div class="list">
                                                    <img src="http://img3.duitang.com/uploads/item/201505/26/20150526002859_c2yKG.thumb.700_0.jpeg" alt="">
                                                    <span style="position: absolute;font-size: 16px;margin-left: 10px;color: #2d8cf0">公告更新</span>
                                                    <span style="position: absolute;font-size: 14px;margin-left: 10px;margin-top: 22px">2018-01-20 23:22</span>
                                                    <p style="margin-top: 10px;margin-left: 10px">课程 人文视野中的生态学更新了公告</p>
                                                    <div class="content">
                                                        有关课程的特别说明！！！！！ <br>
                                                        各位同学：大家好！为了保证大家能够顺利进行网上课程学习，以下事项请务必细读。1、学生手册请大家在创课章节中下载视频版或者PDF版学生学习手册进行查看并学习如何注册MOOC；如果还有进一步的问题，请及时与老师联系。视频版学习手册网址：https://v.qq.com/x/pa...
                                                    </div>
                                                </div>
                                                <div class="list">
                                                    <img src="http://img3.duitang.com/uploads/item/201505/26/20150526002859_c2yKG.thumb.700_0.jpeg" alt="">
                                                    <span style="position: absolute;font-size: 16px;margin-left: 10px;color: #2d8cf0">公告更新</span>
                                                    <span style="position: absolute;font-size: 14px;margin-left: 10px;margin-top: 22px">2018-01-20 23:22</span>
                                                    <p style="margin-top: 10px;margin-left: 10px">课程 人文视野中的生态学更新了公告</p>
                                                    <div class="content">
                                                        有关课程的特别说明！！！！！ <br>
                                                        各位同学：大家好！为了保证大家能够顺利进行网上课程学习，以下事项请务必细读。1、学生手册请大家在创课章节中下载视频版或者PDF版学生学习手册进行查看并学习如何注册MOOC；如果还有进一步的问题，请及时与老师联系。视频版学习手册网址：https://v.qq.com/x/pa...
                                                    </div>
                                                </div>
                                            </TabPane>
                                            <TabPane label="最新内容" name="name2">标签二的内容</TabPane>
                                        </Tabs>
                                    </template>
                                </div>
                                <div class="cards">
                                    <Card style="width:270px;height: 270px;margin-top:5px">
                                        <div style="text-align:center">
                                            <img src="http://img3.duitang.com/uploads/item/201505/26/20150526002859_c2yKG.thumb.700_0.jpeg" class="head">
                                            <h5 style="margin-top: 20px">尊敬的管理员用户，你好</h5>
                                            <span style="color: #2d8cf0;cursor: pointer;display: inline-block;margin-top: 20px">修改头像</span>
                                        </div>
                                    </Card>

                                    <Card style="width: 270px;margin-top: 20px">
                                        <p slot="title"><span style="color:#2d8cf0 ">我的待办</span></p>
                                        <p>1、第二课堂审批</p>
                                        <p>2、学工系统有一条未读信息</p>
                                        <p>3、一条请假信息未审批</p>
                                    </Card>

                                    <Card style="width: 270px;margin-top: 20px">
                                        <p slot="title"><span style="color:#2d8cf0 ">我的收藏</span></p>
                                        <template>
                                            <Tag closable color="blue">学工系统</Tag>
                                            <Tag closable color="red">第二课堂</Tag>
                                            <Tag closable color="green">信息收集</Tag>
                                            <Tag closable color="yellow">迎新系统</Tag>
                                            <Tag closable color="blue">辅导猫猫</Tag>
                                            <Tag closable color="yellow">办公OA</Tag>
                                            <Tag closable color="red">校园活动管理</Tag>
                                            <Tag closable color="green">请假</Tag>
                                        </template>
                                    </Card>
                                </div>
                            </div>
                        </Content>
                    </Layout>
                </Content>
            </Layout>
            <!--<Footer class="layout-footer-center footer" style="background: white">2011-2018 &copy; 智慧校园开放平台</Footer>-->
        </Layout>
    </div>
</template>

<script>

    window.onload = function() {
        window.addEventListener('message', function(event) {
            console.log(event)
            if (event.origin === "http://127.0.0.1:8088") {
                document.getElementById("iframe_b").style.height = event.data + "px";
            }
        }, false);
    };


    //    function setIframeHeight(iframe) {
    ////        console.log(iframe.contentWindow,"iframe结果");
    //        if (iframe) {
    //            const iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
    //            if (iframeWin.document.body) {
    //                iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
    //            }
    //        }
    //    }
    //
    //    window.onload = function () {
    //        setIframeHeight(document.getElementById('external-frame'));
    //    };



    export default {
        data () {
            return {
                isCollapsed: false,
                isShow:'',
                isShowIframe:'none',
                isShowIndex:'none',
                fullHeight:document.documentElement.clientHeight
            }
        },
        computed: {
            rotateIcon () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        methods: {
            collapsedSider () {
                this.isShow = this.isShow===''?'none':'';
            },
            collapsedSiderMenu(){
                this.isShow = this.isShow===''?'none':'';
                this.isShowIframe = '';
                this.isShowIndex = 'none';
            }
        }
    }
</script>

