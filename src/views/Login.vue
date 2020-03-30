<template>
  <div class="login">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="login-ruleForm"
    >
      <el-form-item label="用户" prop="user">
        <el-input
          type="text"
          v-model="ruleForm.user"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="w100" @click="submitForm('ruleForm')"
          >提交</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    // 验证密码
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        // 通过
        callback();
      }
    };
    // 验证用户
    var validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        user: "",
        pass: ""
      },
      rules: {
        user: [
          // {
          // 	pattern: /^1[34578]\d{9}$/,
          // 	message: '目前只支持中国大陆的手机号码'
          // },
          { validator: validateUser, trigger: "blur" }
        ],
        pass: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    ...mapActions(["setUserAction"]),
    // 提交事件
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const { pass, user } = this.ruleForm;
          // username password
          // 调用vuex里action事件
          this.setUserAction({
            username: user,
            password: pass
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style>
.login {
  height: 100vh;
  background: #2d3a4b;
  display: flex;
  align-items: center; /*垂直布局 */
  justify-content: center; /*水平布局 */
}
.login-ruleForm {
  width: 500px;
}
.el-form-item__label {
  color: #fff;
}
.w100 {
  width: 100%;
}
</style>
