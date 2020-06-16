<template>
  <div>
    <Tabbar>
      <TabbarItem path="/home" activeColor="blue">
        <img
          slot="item-icon"
          src="../../assets/img/tabbar/icon_home@3x.png"
          alt=""
        />
        <img
          slot="item-icon-active"
          src="../../assets/img/tabbar/icon_home_active@3x.png"
          alt=""
        />
        <div slot="item-text">首页</div>
      </TabbarItem>
      <TabbarItem path="/category">
        <img
          slot="item-icon"
          src="../../assets/img/tabbar/icon_category@3x.png"
          alt=""
        />
        <img
          slot="item-icon-active"
          src="../../assets/img/tabbar/icon_category_active@3x.png"
          alt=""
        />
        <div slot="item-text">分类</div>
      </TabbarItem>
      <TabbarItem path="/cart">
        <img
          slot="item-icon"
          src="../../assets/img/tabbar/icon_cart@3x.png"
          alt=""
        />
        <img
          slot="item-icon-active"
          src="../../assets/img/tabbar/icon_cart_active@3x.png"
          alt=""
        />
        <div slot="item-text">购物车</div>
      </TabbarItem>
      <TabbarItem path="/profile">
        <img
          slot="item-icon"
          src="../../assets/img/tabbar/icon_me@3x.png"
          alt=""
        />
        <img
          slot="item-icon-active"
          src="../../assets/img/tabbar/icon_me_active@3x.png"
          alt=""
        />
        <div slot="item-text">我的</div>
      </TabbarItem>
    </Tabbar>
  </div>
</template>
<script>
import Tabbar from '../tabbar/Tabbar'
import TabbarItem from '../tabbar/TabbarItem'
export default {
  components: {
    Tabbar,
    TabbarItem,
  },
}
</script>
<style scoped></style>
