<template>
  <div class="page-container">
    <div class="page-banner">
      <div class="banner-content"> 
          <h1 class="title animated fadeInUp">
            Contact Us
          </h1>  
      </div>
    </div> 
    <div class="page-content">
      <div class="panel-content">
        <div class="top-rectangle"></div>
        <div class="panel-pd">
          <div class="panel-tips">
            For general inquiries, please fill out the contact form. If you would like BAF to consider your project, please send a summary of your project along with a BP and/or white paper to Business@baf.vc
          </div>
          <div class="panel-tabs mt-40">
            <mytabs  v-model="activeName" @tab-click="handleClick" flex>
              <el-tab-pane label="INVESTORS" name="INVESTORS" style="width: 300px;"></el-tab-pane>
              <el-tab-pane label="ENTREPRENEURS" name="ENTREPRENEURS" flex-box="1"></el-tab-pane>
              <el-tab-pane label="CAREERS" name="CAREERS" flex-box="1"></el-tab-pane>
            </mytabs>
          </div> 
          <div class="panel-icons mt-40">
            <div></div>
            <div class="pl-9 pr-9" flex="main:justify">  
              <a href=""> <icon class="c" name="medium"></icon> </a>
              <a target="_blank" href="https://twitter.com/BAF_Capital"> <icon class="c" name="twitter"></icon> </a>
              <!-- <a href=""> <icon class="c" name="telegram"></icon> </a>
              <a href=""> <icon class="c" name="discord"></icon> </a> -->
              <a href=""> <icon class="c" name="instagram"></icon> </a>
              <!-- <img 
                @mouseover.prevent="handleMouseOver" 
                @mouseout="handleMouseOut" 
                :src="require(`@/assets/contact/contact-icon-1.png`) " alt="">
              <img @mouseover.stop="handleMouseOver" @mouseout="handleMouseOut" src="@/assets/contact/contact-icon-2.png" alt="">
              <img @mouseover.stop="handleMouseOver" @mouseout="handleMouseOut" src="@/assets/contact/contact-icon-3.png" alt="">
              <img @mouseover.stop="handleMouseOver" @mouseout="handleMouseOut" src="@/assets/contact/contact-icon-4.png" alt=""> -->
            </div>
            <div></div>
          </div>
          <div class="form mt-52"> 
            <div>
              <input :class="{hasValue:!!name}" v-model="name" placeholder="Name" type="text">
            </div>
            <div class="cell">
              <el-popover 
                placement="bottom-end" 
                width="200"
                v-model="showLista"
                trigger="hover" > 
                <div class="popover-box">
                  <ul>
                    <li v-for="(item, index) in regionOptions" 
                      @click="handleSelectRegion(item)"
                      :key="index">
                      {{`(+${item.id})${item.fullname}`}}
                    </li>
                  </ul>
                </div>
                <div slot="reference"  class="label">+{{regionId}}</div>
              </el-popover>
              <!-- <div class="label">+{{regionId}}</div> -->
              <input :class="{hasValue:!!phone}" v-model="phone" placeholder="Phone" type="text">
            </div>
            <div>
              <input :class="{hasValue:!!email}" v-model="email" placeholder="Email" type="text">
            </div> 
            <div class="cell"> 
              <el-popover 
                placement="bottom-end" 
                width="200"
                v-model="showListb"
                trigger="hover" > 
                <div class="popover-box">
                  <ul>
                    <li v-for="(item, index) in regionOptions" 
                      @click="handleSelectCountry(item)"
                      :key="index">
                      {{`${item.fullname}`}}
                    </li>
                  </ul>
                </div>
                <div slot="reference"  class="label country-label"></div>
              </el-popover>
              <input :class="{hasValue:!!country}" v-model="country" readonly placeholder="Country" type="text"> 
            </div>
            <div>
              <input :class="{hasValue:!!company}" v-model="company" placeholder="Company" type="text">
            </div>
            <div>
              <input :class="{hasValue:!!inquiry}" v-model="inquiry" placeholder="Inquiry" type="text">
            </div> 
            <div class="row3">
              <div class="row-pd">
                <textarea :class="{hasValue:!!message}" v-model="message" placeholder="Enter your message" name="" id="" cols="30" rows="10"></textarea>
              </div> 
              <button :class="{hasValue:!!message}" class="submit" @click="handleClickSend">SEND</button>
            </div>
          </div>
        </div> 
      </div> 
    </div>
  </div>
</template>

<script>
import mytabs from '@/components/tabs'
import {setMailSend} from '@/api/service' 
export default {
  components: {mytabs},
  data() {
    return {
      regionOptions: [],
      activeName: 'ENTREPRENEURS',
      name: '',
      phone: '',
      email: '',
      country: '',
      company: '',
      inquiry: '',
      message: '',
      regionId: 86,
      showLista: false,
      showListb: false,
      errMsg: '',
    }
  },
  methods: {
    handleMouseOver(event) {
      console.log('in', event.srcElement)
      event.srcElement.className = 'hover'

    },
    handleMouseOut(event) {
      console.log('out', event.srcElement)
      event.srcElement.className = 'out'
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }, 
    handleClickSend() {
      if (this.checkPara()) { 
        let title = `【${this.activeName}】${this.company}-${this.name} （inquiry: ${this.inquiry}）` 
        let msg = ''
        this.message.split('\n').map(item => msg = msg + `<div>${item}</div>`)
        let body = `
          <div class="mail-body">
            <p></p>
            <div><b> Date：</b>June 17, 2021 5:04:52 PM </div>  
            <div><b>Name： </b>${this.name}</div>
            <div><b>Phone：</b>${this.phone}</div>
            <div><b>Email：</b>${this.email}</div>
            <div><b>Country：</b>${this.country}</div>
            <div><b>Company：</b>${this.company}</div>
            <div><b>Inquiry：</b>${this.inquiry}</div>
            <p></p>
            <div>--------------------------------------</div>
            <p></p>
            <p style="width: 550px;">
            ${msg}
            </p> 
          </div>
        `
        setMailSend({title, body}).then(res => {
          if (res.code === 200) {
            this.$message({
              message: '发送成功。',
              type: 'success'
            })
          } else {
            this.$message({
              message: res.msg,
              type: 'error'
            })
          }
        })
      } else {
        this.$message({
          message: this.errMsg,
          type: 'error'
        })
      }
    }, 
    checkPara() {
      this.errMsg = ''
      if (!this.name.trim()) {
        this.errMsg = '请输入姓名！'
        return false
      }
      if (!this.phone.trim()) {
         this.errMsg = '请输入电话号码！'
        return false
      }
      if (!this.email.trim()) {
         this.errMsg = '请输入邮箱地址！'
        return false
      }
      if (!this.country.trim()) {
         this.errMsg = '请选择国籍！'
        return false
      }
      if (!this.company.trim()) {
         this.errMsg = '请输入公司名称！'
        return false
      }
      if (!this.inquiry.trim()) {
         this.errMsg = '请输入咨询问题！'
        return false
      }
      if (!this.message.trim()) {
         this.errMsg = '请输入消息内容！'
        return false
      }  
      return true
    },
    handleSelectRegion(item) {
      this.regionId = item.id
      this.showLista = false
    },
    handleSelectCountry(item) {
      this.country = item.fullname
      this.showListb = false
    },
    getRegionList() {
      return () => Promise.resolve(require('@/modules/region.json'))
    },
  },
  async created() {
    // const res = await this.getRegionList() 
    const res = require('@/modules/region.json') 
    if (!res.code) {
      this.regionOptions = res.data.sort((a, b) => {
        return a.fullname[0].charCodeAt() - b.fullname[0].charCodeAt()
      }) 
    } 
  },
}
</script>

<style lang="scss" scoped>
.page-container {
  .page-banner {
    position: relative;
    height: 700px;
    background-image: url('~@/assets/banner-contact.png'); 
    background-position: center 0;
    background-color: #000F27;
    background-repeat: repeat-x;
    text-align: left;
    .banner-content { 
      height: 600px;
      width: 1140px;
      margin: 0 auto;
      .title {  
        padding-top: 236px;
        text-align: center;
        font-weight: 600;
        font-size: 80px;
        color: #ffffff;
      } 
    }
  }
  .page-content {
    min-height: 100px;
    background-color: #F2F4F7;
    .panel-content {
      position: relative;
      margin: -36px auto -74px;
      // padding: 73px 0 20px;
      width: 1300px;
      background-color: #fff;
      text-align: left;
      .top-rectangle {
        position:absolute;
        top: -44px;
        left: 50%;
        margin-left: -8.5px;
        width: 15px;
        height: 89px;
        background: $primary;
        z-index: 2;
      } 
      .panel-title {
        text-align: center;
        font-size: 60px;
        font-weight: 600;

      } 
      .panel-pd {
        padding: 86px 150px;
        .panel-tips {
          font-size: 18px;
          text-align: center;
          line-height: 1.4em;
        }
        .panel-tabs {
          .el-tabs {
            /deep/ .el-tabs__nav-wrap {
              font-size: 18px;
              font-family: Arial;
              font-weight: 600;
              border: 1px solid #CCD1E8;
                &::after {
                  content: none;
                }
              .el-tabs__nav-scroll {
              }
              .el-tabs__item {
                height: 51px;
                width: 333.3px;
                line-height: 51px;
                text-align: center;
                &:hover {
                  color: $primary;
                } 
                &.is-active {
                  // background-color: $primary;
                  color: #fff;
                  font-weight: 600;
                }
              }
              .el-tabs__active-bar {
                height: 51px; 
                background-color: $primary;
                z-index: 0;
              }
            }
          }
        }
        .panel-icons {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          a {
            color: $text;
            opacity: .1;
            color: black;
            transition: all linear .2s;
            .iconfont {
              height: 48px;
              width: 48px;
            }
            &:hover {
              color: $primary;
              opacity: 1;
            }
          }
        }
        .form {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          column-gap: 44px;
          row-gap: 34px;
          .cell {
            position: relative;
            .label {
              position: absolute;
              top: 0;
              left: 20px;
              height: 51px;
              width: 50px; 
              line-height: 51px;;
              color: #ccc;
              &::after {
                position: absolute;
                right: 0;
                top: 24px;
                display: inline;
                content: '';  
                border-top: 5px solid #ccc;
                border-left: 5px solid #fff;
                border-right: 5px solid #fff;
                transition: all 0.2s ease-in-out;
                // &:hover {
                //   transform: rotate(180deg);
                // }
              }
              &:hover {
                &::after { 
                  transform: rotate(180deg);
                }
              }
              &.country-label {
                left: 200px;
              }
            }
          }
          .row3 {
            position: relative;
            grid-column-start: 1;
            grid-column-end: 4; 
            width: 100%;
            height: 500px; 
            .submit {
              position:absolute;
              bottom: 25px;
              right: 21px;
              width: 168px;
              height: 51px;
              border: 1px solid rgba($color: $primary, $alpha: .2);
              color: rgba($color: $primary, $alpha: .2);
              cursor: not-allowed;
              font-size: 24px;
              background-color: #fff;
              &.hasValue {
                background-color: $primary;
                font-weight: 600;
                color: #fff;
                cursor: pointer;
              }
            }
            .row-pd {
              // padding: 29px 47px;
            }
          }
          input::-webkit-input-placeholder {
            color: #cccccc !important; /* WebKit browsers */
          }
          input:-moz-placeholder {
            color: #cccccc !important; /* Mozilla Firefox 4 to 18 */
          } 
          input:-ms-input-placeholder {
            color: #cccccc !important; /* Internet Explorer 10+ */
          }
          input {
            width: 100%;
            height: 51px;
            font-size: 18px;
            text-align: center; 
            border: 1px solid #CCD1E8;
            box-sizing: border-box;
            color: $primary;
            &::-moz-placeholder,
            &::-webkit-input-placeholder {
              color: red;
            }
            &.hasValue {
              border-color: $primary;
            }
          }
          textarea {
            padding: 29px 47px;
            width: 100%; 
            height: 500px;  
            font-size: 18px;
            box-sizing: border-box;
            color: $primary;
            border: 1px solid #CCD1E8;
            &.hasValue {
              border-color: $primary;
            }
            // &::-webkit-input-placeholder {
            //   padding: 29px 47px;
            // }
          }
          textarea::-webkit-input-placeholder {
              color: #ccc;  
              font-family: ArialMT; 
              // text-align: right;
          }
        }
      }
    }
  }
}
</style>

<style lang="scss">
.popover-box {
  max-height: 300px;
  cursor: pointer;
  overflow-y: auto;
  ul {
    li {
      &:hover {
        background-color: #ccc;
      }
    }
  }
}
</style>
