<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="/imgs/logo-footer.png" alt="">
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="https://www.mi.com/shop" target="_blank">小米商城</a><span>|</span>
            <a href="https://www.miui.com/" target="_blank">MIUI</a><span>|</span>
            <a href="https://home.mi.com/index.html" target="_blank">米家</a><span>|</span>
            <a href="http://www.miliao.com/" target="_blank">米聊</a><span>|</span>
            <a href="https://www.duokan.com/" target="_blank">多看</a><span>|</span>
            <a href="https://game.xiaomi.com/" target="_blank">游戏</a><span>|</span>
            <a href="https://b.mi.com/?client_id=180100031058&masid=17409.0358" target="_blank">政企服务</a><span>|</span>
            <a href="https://xiaomi.tmall.com/" target="_blank">小米天猫店</a><span>|</span>
            <a href="https://privacy.mi.com/all/zh_CN/" target="_blank">小米集团隐私政策</a>
        </div>
        <div class="copyright">Copyright ©2019 <span class="domain">mi.futurefe.com</span> All Rights Reserved</div>
    </div>
</template>

<script>
export default {
    name: 'nav-footer',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
    .footer{
        height: 234px;
        border-top: 4px solid #ff6600;
        background-color: #333333;
        color: #999999;
        font-size: 16px;
        text-align: center;
        .footer-logo{
            margin-top: 46px;
            margin-bottom: 31px;
            img{
                width: 53px;
                height: 36px;
                margin-bottom: 13px;
            }
        }
        .footer-link{
            a{
                color: #999999;
                display: inline-block;
            }
            span{
                margin: 0 10px;
            }
            margin-bottom: 13px
        }
        .copyright{
            .domain{
                color: #ff6600;
            }
        }
    }
</style>